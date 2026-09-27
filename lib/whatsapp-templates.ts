import { BRAND } from '@/lib/brand';

export type ValuationStage =
  | 'Appointment'
  | 'Pledged Gold'
  | 'XRF Testing'
  | 'Final Offer'
  | 'Payout'
  | 'General';

export interface WhatsAppTemplate {
  id?: string;
  title: string;
  stage: ValuationStage;
  content: string;
  createdAt?: any;
  updatedAt?: any;
}

export interface TemplateVariables {
  customer_name?: string;
  phone?: string;
  location?: string;
  service?: string;
  gold_weight?: string;
  purity?: string;
  offered_amount?: string;
  reference_id?: string;
  branch_address?: string;
  helpline?: string;
}

const headOfficeAddress = `${BRAND.headOffice.street}, ${BRAND.headOffice.city}, ${BRAND.headOffice.state} - ${BRAND.headOffice.postalCode}`;

export const SUPPORTED_PLACEHOLDERS: { token: string; label: string; sample: string }[] = [
  { token: '{customer_name}', label: 'Customer Name', sample: 'Rajesh Sharma' },
  { token: '{phone}', label: 'Phone Number', sample: '9876543210' },
  { token: '{location}', label: 'Location/Branch', sample: 'Vijayawada Central' },
  { token: '{service}', label: 'Service Category', sample: 'Pledged Gold Release' },
  { token: '{gold_weight}', label: 'Gold Weight (Grams)', sample: '24.5g' },
  { token: '{purity}', label: 'Gold Purity', sample: '22K (91.6% Hallmark)' },
  { token: '{offered_amount}', label: 'Offered Amount (₹)', sample: '1,88,500' },
  { token: '{reference_id}', label: 'Reference Code', sample: 'SCG-9421' },
  { token: '{branch_address}', label: 'Branch Address', sample: headOfficeAddress },
  { token: '{helpline}', label: 'Helpline Number', sample: BRAND.phone1Display },
];

export const DEFAULT_WHATSAPP_TEMPLATES: Omit<WhatsAppTemplate, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Stage 1: Branch Appointment Confirmation',
    stage: 'Appointment',
    content:
      'Hello {customer_name},\n\nThank you for reaching out to Akshaya Gold Buyers. Your valuation appointment has been confirmed at our {location} branch.\n\n📍 Address: {branch_address}\n📞 Helpline: {helpline}\n🆔 Ref Code: {reference_id}\n\nPlease bring your gold ornaments along with a valid ID proof (Aadhaar/PAN). We look forward to offering you 100% transparent XRF laser purity testing with zero melting loss!',
  },
  {
    title: 'Stage 2: Pledged Gold Loan Release Guide',
    stage: 'Pledged Gold',
    content:
      'Dear {customer_name},\n\nRegarding your request for Pledged Gold Release (Ref #{reference_id}):\n\nOur field team is ready to clear your outstanding loan dues directly at your bank/financier counter in {location}. Once released, we conduct 0% loss German XRF laser testing and pay you the remaining cash/IMPS balance immediately!\n\nPlease share your pledge receipt summary or call our desk at {helpline} to coordinate the branch visit.',
  },
  {
    title: 'Stage 3: XRF Laser Assaying & Purity Report',
    stage: 'XRF Testing',
    content:
      'Hello {customer_name},\n\nYour gold valuation report for Ref #{reference_id} is complete:\n\n⚖️ Tested Net Weight: {gold_weight}\n🔍 Assayed Purity: {purity}\n🔬 Assaying Method: Non-destructive German XRF Laser Spectrometry\n\nOur testing guarantees 0% touch loss and zero damage to your jewellery. Reply to confirm and receive your instant payout estimate!',
  },
  {
    title: 'Stage 4: Highest Market Valuation & Spot Cash Offer',
    stage: 'Final Offer',
    content:
      'Dear {customer_name},\n\nBased on live spot bullion benchmarks, our highest net payout offer for your {gold_weight} of {purity} gold is:\n\n💰 Net Payout Offer: ₹{offered_amount}\n\nNo hidden deductions, no melting loss. This offer is valid for immediate settlement via cash or instant IMPS bank transfer. Let us know if you approve!',
  },
  {
    title: 'Stage 5: Instant IMPS Payout Receipt',
    stage: 'Payout',
    content:
      'Dear {customer_name},\n\nYour gold sale transaction #{reference_id} at Akshaya Gold Buyers ({location}) is successfully completed!\n\n💸 Amount Transferred: ₹{offered_amount}\n💳 Mode: Instant IMPS Bank Transfer\n\nThank you for trusting Akshaya Gold Buyers - Andhra Pradesh & Telangana\'s Most Trusted Gold Buyer. Have a great day!',
  },
  {
    title: 'Stage 6: General Valuation Inquiry Follow-Up',
    stage: 'General',
    content:
      'Hello {customer_name},\n\nThis is Akshaya Gold Buyers valuation desk following up on your inquiry for {service} in {location}.\n\nWe offer live benchmark gold rates for 24K, 22K (916), and 18K gold items. If you have any questions or want to check today\'s spot rate, please reply here or call {helpline}.',
  },
];

/**
 * Replaces placeholder tokens in template content with real customer and valuation variables.
 */
export function renderWhatsAppTemplate(templateContent: string, vars: TemplateVariables): string {
  let result = templateContent;

  const defaults: Record<string, string> = {
    customer_name: vars.customer_name || 'Valued Customer',
    phone: vars.phone || '',
    location: vars.location || 'AP & Telangana',
    service: vars.service || 'Gold Buying & Valuation',
    gold_weight: vars.gold_weight || '10.0g',
    purity: vars.purity || '22K (91.6% Hallmark)',
    offered_amount: vars.offered_amount || '75,000',
    reference_id: vars.reference_id || 'SCG-' + Math.floor(1000 + Math.random() * 9000),
    branch_address: vars.branch_address || headOfficeAddress,
    helpline: vars.helpline || BRAND.phone1Display,
  };

  Object.entries(defaults).forEach(([key, value]) => {
    const regex = new RegExp(`\\{${key}\\}`, 'g');
    result = result.replace(regex, value);
  });

  return result;
}

/**
 * Constructs a wa.me URL for sending WhatsApp message.
 */
export function buildWhatsAppSendUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const formattedPhone = cleanPhone.startsWith('91') && cleanPhone.length === 12 ? cleanPhone : `91${cleanPhone.slice(-10)}`;
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
}
