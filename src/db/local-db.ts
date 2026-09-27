import path from 'path';
import fs from 'fs';

// Define Enquiry and Template interfaces
export interface LocalEnquiry {
  id: string;
  name: string;
  phone: string;
  message?: string;
  location?: string;
  service?: string;
  status: 'pending' | 'contacted' | 'closed';
  createdAt: string;
  updatedAt: string;
}

export interface LocalWhatsAppTemplate {
  id: string;
  title: string;
  category: 'first-contact' | 'appointment' | 'valuation-ready' | 'pledged-gold' | 'custom';
  message: string;
  isDefault?: boolean;
  createdAt: string;
}

interface LocalDatabaseState {
  enquiries: LocalEnquiry[];
  whatsappTemplates: LocalWhatsAppTemplate[];
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'local_store.json');

const DEFAULT_TEMPLATES: LocalWhatsAppTemplate[] = [
  {
    id: 'welcome-valuation',
    title: 'Welcome & Instant Valuation',
    category: 'first-contact',
    message: 'Hello {customer_name}, thank you for contacting Akshaya Gold Buyers regarding {service_name} in {location_name}. We offer live spot benchmark valuation with non-destructive German XRF spectrometry. When would you like our valuation team to assist you?',
    isDefault: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'pledged-release-consult',
    title: 'Pledged Gold Loan Takeover',
    category: 'pledged-gold',
    message: 'Hello {customer_name}, regarding your pledged gold in {location_name}: We clear your outstanding bank/NBFC loan dues upfront, release your ornaments safely, and pay you the remaining cash surplus immediately. Please share your pledge receipt or loan amount to calculate your payout.',
    isDefault: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'doorstep-appointment',
    title: 'Doorstep Evaluation Schedule',
    category: 'appointment',
    message: 'Hello {customer_name}, your doorstep precious metals evaluation request in {location_name} has been received. Our certified assayer with portable XRF laser tester is available today. Please confirm your preferred time slot.',
    isDefault: true,
    createdAt: new Date().toISOString()
  }
];

function ensureStorage(): LocalDatabaseState {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      const initial: LocalDatabaseState = {
        enquiries: [],
        whatsappTemplates: DEFAULT_TEMPLATES
      };
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), 'utf8');
      return initial;
    }
    const content = fs.readFileSync(DB_FILE, 'utf8');
    const parsed = JSON.parse(content);
    if (!Array.isArray(parsed.enquiries)) parsed.enquiries = [];
    if (!Array.isArray(parsed.whatsappTemplates) || parsed.whatsappTemplates.length === 0) {
      parsed.whatsappTemplates = DEFAULT_TEMPLATES;
    }
    return parsed;
  } catch (err) {
    console.error('Error loading local db store:', err);
    return {
      enquiries: [],
      whatsappTemplates: DEFAULT_TEMPLATES
    };
  }
}

function saveStorage(state: LocalDatabaseState): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const tempFile = DB_FILE + '.tmp';
    fs.writeFileSync(tempFile, JSON.stringify(state, null, 2), 'utf8');
    fs.renameSync(tempFile, DB_FILE);
  } catch (err) {
    console.error('Error saving local db store:', err);
  }
}

// Data Access Layer: Enquiries
export const enquiryRepository = {
  create(data: {
    name: string;
    phone: string;
    message?: string;
    location?: string;
    service?: string;
  }): LocalEnquiry {
    const state = ensureStorage();
    const id = 'enq_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
    const now = new Date().toISOString();
    const status: 'pending' = 'pending';

    const newEnquiry: LocalEnquiry = {
      id,
      name: data.name.trim(),
      phone: data.phone.trim(),
      message: data.message?.trim() || '',
      location: data.location?.trim() || '',
      service: data.service?.trim() || '',
      status,
      createdAt: now,
      updatedAt: now
    };

    state.enquiries.unshift(newEnquiry);
    saveStorage(state);
    return newEnquiry;
  },

  getAll(options: { status?: string; search?: string } = {}): LocalEnquiry[] {
    const state = ensureStorage();
    let result = [...state.enquiries];

    if (options.status && options.status !== 'all') {
      result = result.filter(e => e.status === options.status);
    }

    if (options.search && options.search.trim()) {
      const s = options.search.trim().toLowerCase();
      result = result.filter(e =>
        e.name.toLowerCase().includes(s) ||
        e.phone.toLowerCase().includes(s) ||
        (e.location && e.location.toLowerCase().includes(s)) ||
        (e.service && e.service.toLowerCase().includes(s))
      );
    }

    result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return result.slice(0, 100);
  },

  getById(id: string): LocalEnquiry | null {
    const state = ensureStorage();
    return state.enquiries.find(e => e.id === id) || null;
  },

  updateStatus(id: string, status: 'pending' | 'contacted' | 'closed'): boolean {
    const state = ensureStorage();
    const index = state.enquiries.findIndex(e => e.id === id);
    if (index === -1) return false;

    state.enquiries[index].status = status;
    state.enquiries[index].updatedAt = new Date().toISOString();
    saveStorage(state);
    return true;
  },

  delete(id: string): boolean {
    const state = ensureStorage();
    const initialLen = state.enquiries.length;
    state.enquiries = state.enquiries.filter(e => e.id !== id);
    if (state.enquiries.length !== initialLen) {
      saveStorage(state);
      return true;
    }
    return false;
  }
};

// Data Access Layer: WhatsApp Templates
export const templateRepository = {
  getAll(): LocalWhatsAppTemplate[] {
    const state = ensureStorage();
    return state.whatsappTemplates;
  },

  save(template: { id?: string; title: string; category: string; message: string }): LocalWhatsAppTemplate {
    const state = ensureStorage();
    const id = template.id || 'tpl_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6);
    const now = new Date().toISOString();

    const existingIndex = state.whatsappTemplates.findIndex(t => t.id === id);
    const updated: LocalWhatsAppTemplate = {
      id,
      title: template.title,
      category: template.category as any,
      message: template.message,
      isDefault: false,
      createdAt: existingIndex >= 0 ? state.whatsappTemplates[existingIndex].createdAt : now
    };

    if (existingIndex >= 0) {
      state.whatsappTemplates[existingIndex] = updated;
    } else {
      state.whatsappTemplates.push(updated);
    }

    saveStorage(state);
    return updated;
  },

  delete(id: string): boolean {
    const state = ensureStorage();
    const initialLen = state.whatsappTemplates.length;
    state.whatsappTemplates = state.whatsappTemplates.filter(t => t.id !== id);
    if (state.whatsappTemplates.length !== initialLen) {
      saveStorage(state);
      return true;
    }
    return false;
  }
};
