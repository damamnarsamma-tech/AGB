'use client';

import React, { useState, useEffect, useTransition } from 'react';
import {
  db,
  auth,
  handleFirestoreError,
  OperationType
} from '@/lib/firebase';
import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import {
  CheckCircle2,
  Clock,
  Phone,
  Trash2,
  AlertTriangle,
  LogOut,
  Mail,
  ShieldCheck,
  UserCheck,
  Activity,
  MapPin,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Search,
  Filter,
  X,
  Layers,
  FileText,
  Link2,
  Radio
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppSendModal from '@/components/WhatsAppSendModal';
import WhatsAppTemplateManager from '@/components/WhatsAppTemplateManager';
import BrokenLinksAuditPanel from '@/components/BrokenLinksAuditPanel';
import SitemapPingDiagnostic from '@/components/SitemapPingDiagnostic';
import { WhatsAppTemplate } from '@/lib/whatsapp-templates';
import { BRAND } from '@/lib/brand';

interface Enquiry {
  id: string;
  name: string;
  phone: string;
  message?: string;
  location?: string;
  service?: string;
  status: 'pending' | 'contacted' | 'closed';
  createdAt: any;
}

interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'admin' | 'user';
  createdAt: any;
}

export default function AdminPage() {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [authChecking, setAuthChecking] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'enquiries' | 'whatsapp-templates' | 'broken-links' | 'sitemap-pinger'>('enquiries');
  const [isPending, startTransition] = useTransition();

  // WhatsApp Templates States
  const [whatsappTemplates, setWhatsappTemplates] = useState<WhatsAppTemplate[]>([]);
  const [activeWhatsAppEnquiry, setActiveWhatsAppEnquiry] = useState<Enquiry | null>(null);

  // Gmail OAuth Integration States
  const [gmailToken, setGmailToken] = useState<string | null>(null);
  const [activeEmailEnquiry, setActiveEmailEnquiry] = useState<Enquiry | null>(null);
  const [emailForm, setEmailForm] = useState({ to: '', subject: '', body: '' });
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<{ success?: boolean; error?: string } | null>(null);

  // 1. Listen to Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setAuthChecking(true);
      if (user) {
        setCurrentUser(user);
        // Attempt to load or create profile in Firestore
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            setUserProfile(userDocSnap.data() as UserProfile);
          } else {
            // Self-register profile securely
            const newProfile: UserProfile = {
              uid: user.uid,
              email: user.email || '',
              displayName: user.displayName || 'User',
              role: user.email === 'gujarathivenkatesh5@gmail.com' ? 'admin' : 'user',
              createdAt: new Date() // Fallback timestamp
            };
            
            // Try to set document with serverTimestamp
            await setDoc(userDocRef, {
              ...newProfile,
              createdAt: serverTimestamp()
            });

            setUserProfile(newProfile);
          }
        } catch (err) {
          console.error("Error loading user profile:", err);
        }
      } else {
        setCurrentUser(null);
        setUserProfile(null);
        setGmailToken(null);
      }
      setAuthChecking(false);
    });

    return () => unsubscribe();
  }, []);

  // 2. Listen to real-time Enquiries if admin
  useEffect(() => {
    if (!currentUser || !userProfile || userProfile.role !== 'admin') {
      const timer = setTimeout(() => {
        setEnquiries([]);
        setLoading(false);
      }, 0);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setLoading(true);
    }, 0);

    const q = query(collection(db, 'enquiries'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items: Enquiry[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        items.push({
          id: doc.id,
          name: data.name || '',
          phone: data.phone || '',
          message: data.message || '',
          location: data.location || '',
          service: data.service || '',
          status: data.status || 'pending',
          createdAt: data.createdAt
        });
      });
      setEnquiries(items);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'enquiries');
      setLoading(false);
    });

    return () => {
      clearTimeout(timer);
      unsubscribe();
    };
  }, [currentUser, userProfile]);

  // 3. Listen to real-time WhatsApp Templates if admin
  useEffect(() => {
    if (!currentUser || !userProfile || userProfile.role !== 'admin') {
      const timer = setTimeout(() => {
        setWhatsappTemplates([]);
      }, 0);
      return () => clearTimeout(timer);
    }

    const q = query(collection(db, 'whatsapp_templates'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items: WhatsAppTemplate[] = [];
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          items.push({
            id: docSnap.id,
            title: data.title || '',
            stage: data.stage || 'General',
            content: data.content || '',
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
          });
        });
        setWhatsappTemplates(items);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, 'whatsapp_templates');
      }
    );

    return () => unsubscribe();
  }, [currentUser, userProfile]);

  // Handle Google Login with Gmail scopes
  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope('https://mail.google.com/');
      provider.addScope('https://www.googleapis.com/auth/gmail.compose');
      provider.addScope('https://www.googleapis.com/auth/gmail.send');
      provider.addScope('https://www.googleapis.com/auth/gmail.readonly');
      
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      if (credential?.accessToken) {
        setGmailToken(credential.accessToken);
      }
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  // Predefined Response Templates for Enquiries
  const applyTemplate = (templateType: string, enquiry: Enquiry) => {
    let subject = '';
    let body = '';

    if (templateType === 'purity') {
      subject = `Gold Valuation Summary - ${BRAND.name}`;
      body = `Dear ${enquiry.name},\n\nThank you for choosing ${BRAND.name}. We have logged your request for "${enquiry.service || 'Gold Valuation'}" in ${enquiry.location || 'Somajiguda'}.\n\nAt our central Somajiguda branch, we offer:\n- Purity Assaying: Laboratory-grade XRF Spectrometric Laser analysis (0% melting loss, acid-free, preserving your jewellery).\n- Weighing Standards: Class II certified digital scales accurate to 0.001g.\n- Spot Rate Linkage: Current live market bullion benchmarks.\n- Payment: Direct IMPS bank transfer or cash settlement.\n\nPlease call us on ${BRAND.phone1Display} to schedule your slot.\n\nWarm regards,\nAdmin Desk\n${BRAND.name}`;
    } else if (templateType === 'pledge') {
      subject = `Pledged Gold Loan Closure Guide - ${BRAND.name}`;
      body = `Dear ${enquiry.name},\n\nWe received your request for help regarding Pledged Gold Release & Loan Closure.\n\nHere is how we assist you to safely release your gold from the lender:\n1. Loan Clearance: We visit the bank/NBFC (Muthoot, Manappuram, IIFL, etc.) together and pay off your entire outstanding balance using our funds.\n2. Retrieving & Testing: Once the gold is released, we verify its purity on-site using German laser XRF analysis in our facility.\n3. Immediate Settlement: We pay you the remaining market value of the gold instantly via IMPS or cash.\n\nPlease share your pledge receipt details or reply to arrange a branch visit.\n\nWarm regards,\nAdmin Desk\n${BRAND.name}`;
    } else if (templateType === 'appointment') {
      subject = `Valuation Desk Appointment Confirmed - ${BRAND.name}`;
      body = `Dear ${enquiry.name},\n\nWe would like to invite you for a personal valuation appointment at our corporate office:\n\nLocation: ${BRAND.headOffice.street}, ${BRAND.headOffice.city}, ${BRAND.headOffice.state} - ${BRAND.headOffice.postalCode}\nHelpline: ${BRAND.phone1Display}\nOperating Hours: ${BRAND.operatingHours} (All 7 Days)\n\nPlease reply with your preferred time slot or call us directly.\n\nWarm regards,\nAdmin Desk\n${BRAND.name}`;
    } else {
      subject = `Regarding your gold buying inquiry - ${BRAND.name}`;
      body = `Dear ${enquiry.name},\n\nThank you for reaching out to ${BRAND.name}.\n\nWe are checking your request. Please share a convenient time or call our main helpline at ${BRAND.phone1Display} for quick assistance.\n\nWarm regards,\nAdmin Desk\n${BRAND.name}`;
    }

    setEmailForm(prev => ({
      ...prev,
      subject,
      body
    }));
  };

  // Send email using Google Gmail REST API with Bearer token
  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gmailToken) {
      setEmailStatus({ error: "Gmail is not authorized. Please authorize Gmail access first." });
      return;
    }
    if (!emailForm.to || !emailForm.subject || !emailForm.body) {
      setEmailStatus({ error: "Please fill out all email fields." });
      return;
    }

    if (!window.confirm(`Are you sure you want to send this email to ${emailForm.to}?`)) {
      return;
    }

    setSendingEmail(true);
    setEmailStatus(null);

    try {
      const emailLines = [
        `To: ${emailForm.to}`,
        `Subject: ${emailForm.subject}`,
        `Content-Type: text/html; charset=utf-8`,
        `MIME-Version: 1.0`,
        '',
        emailForm.body.replace(/\n/g, '<br/>')
      ];
      const emailStr = emailLines.join('\r\n');
      
      const base64 = btoa(unescape(encodeURIComponent(emailStr)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${gmailToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ raw: base64 })
      });

      if (!response.ok) {
        const errJson = await response.json();
        throw new Error(errJson?.error?.message || 'Failed to send email via Google API.');
      }

      setEmailStatus({ success: true });
      setTimeout(() => {
        setActiveEmailEnquiry(null);
        setEmailStatus(null);
        setEmailForm({ to: '', subject: '', body: '' });
      }, 2000);
    } catch (err: any) {
      console.error("Gmail send error:", err);
      setEmailStatus({ error: err?.message || 'An unexpected error occurred while sending email.' });
    } finally {
      setSendingEmail(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error("Logout Error:", err);
    }
  };

  // Update Enquiry Status
  const handleUpdateStatus = async (id: string, newStatus: 'contacted' | 'closed') => {
    try {
      const docRef = doc(db, 'enquiries', id);
      await updateDoc(docRef, { status: newStatus });
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `enquiries/${id}`);
    }
  };

  // Delete Enquiry
  const handleDeleteEnquiry = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this enquiry permanently?")) return;
    try {
      const docRef = doc(db, 'enquiries', id);
      await deleteDoc(docRef);
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `enquiries/${id}`);
    }
  };

  // Format Firestore Timestamps nicely
  const formatTimestamp = (ts: any) => {
    if (!ts) return 'Just now';
    if (ts.toDate) return ts.toDate().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    if (ts instanceof Date) return ts.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    return String(ts);
  };

  // Filtering Logic
  const filteredEnquiries = enquiries.filter((item) => {
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phone.includes(searchTerm) ||
      (item.message && item.message.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.location && item.location.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  // Metrics
  const totalCount = enquiries.length;
  const pendingCount = enquiries.filter(e => e.status === 'pending').length;
  const contactedCount = enquiries.filter(e => e.status === 'contacted').length;
  const closedCount = enquiries.filter(e => e.status === 'closed').length;

  if (authChecking) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Verifying Administrative Session...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {!currentUser ? (
          /* Login Section */
          <div id="admin-login-view" className="max-w-md mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-md text-center space-y-6 my-12">
            <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto shadow-xs">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Valuation Desk Admin Access</h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Sign in with your verified administrative Google Account to manage live enquiries and callbacks.
              </p>
            </div>

            <button
              id="admin-login-google-btn"
              onClick={handleLogin}
              className="w-full py-3 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.7 0 3.3.6 4.5 1.7l2.4-2.4C17.3 1.5 14.9 0 12.24 0 6.03 0 1 5.03 1 11.24s5.03 11.24 11.24 11.24c6.15 0 10.23-4.32 10.23-10.42 0-.7-.07-1.35-.2-1.78H12.24z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
        ) : userProfile && userProfile.role !== 'admin' ? (
          /* Access Denied View */
          <div id="admin-denied-view" className="max-w-md mx-auto bg-white border border-rose-100 rounded-2xl p-8 shadow-md text-center space-y-6 my-12">
            <div className="w-14 h-14 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h1 className="text-xl font-black text-slate-900">Access Restricted</h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Your account (<span className="font-bold text-slate-800">{currentUser.email}</span>) does not have administrative privileges. Only verified coordinators can view user entries.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleLogout}
                className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold uppercase tracking-wider text-xs rounded-xl border border-slate-200 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        ) : (
          /* Admin Dashboard Content */
          <div id="admin-dashboard-view" className="space-y-8 animate-in fade-in duration-300">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>Real-Time Valuation Control Panel</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Akshaya Gold Buyers Desk
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Logged in as <span className="font-bold text-slate-800">{currentUser.email}</span>
                </p>
              </div>

              <div className="flex items-center gap-2 self-start md:self-center">
                <button
                  id="admin-ping-search-engines-btn"
                  onClick={() => setActiveTab('sitemap-pinger')}
                  className="py-2 px-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-2xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  title="Manually trigger Google and Bing search engine sitemap ping"
                >
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>Ping Search Engines</span>
                </button>

                <button
                  onClick={handleLogout}
                  className="py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold uppercase tracking-wider text-xs rounded-xl border border-slate-200 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* Gmail Connection Status Banner */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-700 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className={`w-2.5 h-2.5 rounded-full ${gmailToken ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
                <div>
                  <span className="font-bold block text-slate-900">Gmail API OAuth Integration</span>
                  <span className="text-slate-500 text-[11px] block mt-0.5">
                    {gmailToken
                      ? 'Authenticated and ready. You can compose and send custom emails directly through your real Gmail account.'
                      : 'Not connected. Authorize your Gmail account to enable direct quote and report emailing.'}
                  </span>
                </div>
              </div>
              <div>
                {!gmailToken ? (
                  <button
                    onClick={handleLogin}
                    className="w-full sm:w-auto px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black uppercase tracking-wider text-[10px] rounded-lg shadow-2xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Authorize Gmail</span>
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-lg font-bold text-[10px] uppercase border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Gmail Active</span>
                  </span>
                )}
              </div>
            </div>

            {/* Dashboard Sub-Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'enquiries'
                    ? 'bg-amber-500 text-slate-950 font-black shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>Customer Enquiries ({enquiries.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('whatsapp-templates')}
                className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'whatsapp-templates'
                    ? 'bg-emerald-600 text-white font-black shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Template Library ({whatsappTemplates.length})</span>
              </button>

              <button
                id="admin-tab-broken-links"
                onClick={() => setActiveTab('broken-links')}
                className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'broken-links'
                    ? 'bg-indigo-600 text-white font-black shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Link2 className="w-4 h-4" />
                <span>Broken Links Audit</span>
              </button>

              <button
                id="admin-tab-sitemap-pinger"
                onClick={() => setActiveTab('sitemap-pinger')}
                className={`px-4 py-2 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'sitemap-pinger'
                    ? 'bg-indigo-600 text-white font-black shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Radio className="w-4 h-4" />
                <span>Sitemap Ping Diagnostic</span>
              </button>
            </div>

            {activeTab === 'whatsapp-templates' ? (
              <WhatsAppTemplateManager />
            ) : activeTab === 'broken-links' ? (
              <BrokenLinksAuditPanel />
            ) : activeTab === 'sitemap-pinger' ? (
              <SitemapPingDiagnostic />
            ) : (
              <>
                {/* Metrics Board */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Total Card */}
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block mb-1">Total Enquiries</span>
                    <div className="text-3xl font-black text-slate-900">{totalCount}</div>
                    <span className="text-[10px] text-slate-400 block mt-1">Lifetime callback entries</span>
                  </div>

                  {/* Pending Card */}
                  <div className="bg-amber-50/50 border border-amber-200 rounded-xl p-5 shadow-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-amber-800 font-bold uppercase tracking-wider">Pending Response</span>
                      <Clock className="w-4 h-4 text-amber-600 animate-spin-slow" />
                    </div>
                    <div className="text-3xl font-black text-amber-700">{pendingCount}</div>
                    <span className="text-[10px] text-amber-600 block mt-1">Awaiting coordinator callback</span>
                  </div>

                  {/* Contacted Card */}
                  <div className="bg-sky-50/50 border border-sky-200 rounded-xl p-5 shadow-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-sky-800 font-bold uppercase tracking-wider">Contacted</span>
                      <Phone className="w-4 h-4 text-sky-600" />
                    </div>
                    <div className="text-3xl font-black text-sky-700">{contactedCount}</div>
                    <span className="text-[10px] text-sky-600 block mt-1">In communication with client</span>
                  </div>

                  {/* Closed Card */}
                  <div className="bg-emerald-50/50 border border-emerald-200 rounded-xl p-5 shadow-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-emerald-800 font-bold uppercase tracking-wider">Closed Cases</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="text-3xl font-black text-emerald-700">{closedCount}</div>
                    <span className="text-[10px] text-emerald-600 block mt-1">Valuations finalized</span>
                  </div>
                </div>

                {/* Filtering and Search Controls */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
                  <div className="flex items-center gap-2 border border-slate-200 rounded-xl bg-slate-50 px-3 py-2 flex-1 max-w-md">
                    <Search className="w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search by name, phone, message, location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-transparent border-none text-xs w-full focus:outline-none placeholder-slate-400 text-slate-800 font-medium"
                    />
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 whitespace-nowrap">
                      <Filter className="w-3.5 h-3.5" /> Filter:
                    </span>
                    <div className="flex gap-1">
                      {['all', 'pending', 'contacted', 'closed'].map((status) => (
                        <button
                          key={status}
                          onClick={() => setStatusFilter(status)}
                          className={`px-3 py-1.5 text-xs font-bold rounded-lg border uppercase tracking-wider cursor-pointer transition-all ${
                            statusFilter === status
                              ? 'bg-amber-500 text-slate-950 border-amber-500 font-extrabold shadow-xs'
                              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enquiries List */}
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Customer Enquiries ({filteredEnquiries.length} listed)
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">Live Real-time Feed</span>
                  </div>

                  {loading ? (
                    <div className="py-20 text-center space-y-4">
                      <div className="w-8 h-8 border-3 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Syncing database feed...</p>
                    </div>
                  ) : filteredEnquiries.length === 0 ? (
                    <div className="py-20 text-center space-y-2">
                      <div className="text-slate-300 font-bold">No enquiries found</div>
                      <p className="text-xs text-slate-400">No records match your selected status filter or search parameters.</p>
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-200">
                      {filteredEnquiries.map((enquiry) => (
                        <div
                          key={enquiry.id}
                          className={`p-6 transition-colors hover:bg-slate-50/50 flex flex-col lg:flex-row lg:items-start justify-between gap-6 ${
                            enquiry.status === 'pending' ? 'bg-amber-50/10' : ''
                          }`}
                        >
                          {/* Left: Info Block */}
                          <div className="space-y-3 flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-base font-black text-slate-900 truncate">{enquiry.name}</h3>
                              
                              {/* Badge Status */}
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                                  enquiry.status === 'pending'
                                    ? 'bg-amber-100 text-amber-800'
                                    : enquiry.status === 'contacted'
                                    ? 'bg-sky-100 text-sky-800'
                                    : 'bg-emerald-100 text-emerald-800'
                                }`}
                              >
                                {enquiry.status}
                              </span>

                              <span className="text-[11px] text-slate-400 font-medium">
                                {formatTimestamp(enquiry.createdAt)}
                              </span>
                            </div>

                            {/* Customer Metadata Row */}
                            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs font-semibold text-slate-600">
                              <a
                                href={`tel:${enquiry.phone}`}
                                className="flex items-center gap-1.5 text-slate-900 hover:text-amber-600 transition-colors"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                <span>{enquiry.phone}</span>
                              </a>

                              {enquiry.location && (
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                                  <span>{enquiry.location}</span>
                                </span>
                              )}

                              {enquiry.service && (
                                <span className="flex items-center gap-1.5 bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px]">
                                  {enquiry.service}
                                </span>
                              )}
                            </div>

                            {/* Enquiry Message */}
                            {enquiry.message ? (
                              <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-xs text-slate-700 italic max-w-3xl leading-relaxed whitespace-pre-wrap">
                                &ldquo;{enquiry.message}&rdquo;
                              </div>
                            ) : (
                              <div className="text-xs text-slate-400 italic">No message provided. Standard callback request.</div>
                            )}
                          </div>

                          {/* Right: Administrative Actions */}
                          <div className="flex flex-wrap items-center gap-2 shrink-0 self-end lg:self-start">
                            {/* Stage-Based WhatsApp Template Button */}
                            <button
                              onClick={() => setActiveWhatsAppEnquiry(enquiry)}
                              className="px-3 py-2 bg-emerald-100 hover:bg-emerald-200 border border-emerald-300 text-emerald-900 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-black shadow-2xs"
                              title="Select and customize stage-based WhatsApp template"
                            >
                              <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                              <span>WhatsApp Template</span>
                            </button>

                            {/* Quick Direct WhatsApp Communication */}
                            <a
                              href={`https://api.whatsapp.com/send?phone=91${enquiry.phone.replace(/\D/g, '')}&text=${encodeURIComponent(`Hello ${enquiry.name}, this is Akshaya Gold Buyers valuation desk. We received your request for ${enquiry.service || 'gold evaluation'} in ${enquiry.location || 'our branch'}.`)}`}
                              target="_blank"
                              className="p-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-xl transition-colors cursor-pointer"
                              title="Open direct quick WhatsApp chat" aria-label="Send direct WhatsApp message"
                            >
                              <MessageSquare className="w-4 h-4" />
                            </a>

                            {/* Gmail Communication Button */}
                            <button
                              onClick={() => {
                                setActiveEmailEnquiry(enquiry);
                                setEmailForm({
                                  to: '',
                                  subject: `Regarding your gold inquiry - ${BRAND.name}`,
                                  body: `Dear ${enquiry.name},\n\nThank you for reaching out to ${BRAND.name}.`
                                });
                                setEmailStatus(null);
                              }}
                              className="p-2 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-700 rounded-xl transition-colors cursor-pointer"
                              title="Compose and Send Email via Gmail" aria-label="Compose and send email"
                            >
                              <Mail className="w-4 h-4" />
                            </button>

                            {/* Mark as Contacted */}
                            {enquiry.status === 'pending' && (
                              <button
                                onClick={() => handleUpdateStatus(enquiry.id, 'contacted')}
                                className="px-3 py-2 bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                              >
                                <Phone className="w-3.5 h-3.5" />
                                <span>Contacted</span>
                              </button>
                            )}

                            {/* Mark as Closed */}
                            {enquiry.status !== 'closed' && (
                              <button
                                onClick={() => handleUpdateStatus(enquiry.id, 'closed')}
                                className="px-3 py-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Close Entry</span>
                              </button>
                            )}

                            {/* Delete */}
                            <button
                              onClick={() => handleDeleteEnquiry(enquiry.id)}
                              className="p-2 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-600 rounded-xl transition-colors cursor-pointer"
                              title="Delete enquiry permanently" aria-label="Delete enquiry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </main>

      {/* Gmail Compose Modal */}
      {activeEmailEnquiry && (
        <div
          id="gmail-compose-backdrop"
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto font-sans text-slate-900"
        >
          <div
            id="gmail-compose-modal"
            className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative my-8 animate-in zoom-in-95 duration-200 flex flex-col gap-4"
            role="dialog"
            aria-labelledby="gmail-compose-title"
          >
            <button
              onClick={() => setActiveEmailEnquiry(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close Email Composer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 id="gmail-compose-title" className="text-lg font-black text-slate-900">
                  Compose Email (Gmail OAuth)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Sending on behalf of your authorized administrative Gmail.
                </p>
              </div>
            </div>

            {/* Template quick selects */}
            <div className="space-y-1.5 bg-slate-50 border border-slate-100 p-3 rounded-xl">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                Quick Response Templates:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => applyTemplate('purity', activeEmailEnquiry)}
                  className="px-2.5 py-1 bg-white hover:bg-amber-50 hover:border-amber-300 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-600 transition-all cursor-pointer"
                >
                  Purity &amp; Valuation Summary
                </button>
                <button
                  type="button"
                  onClick={() => applyTemplate('pledge', activeEmailEnquiry)}
                  className="px-2.5 py-1 bg-white hover:bg-amber-50 hover:border-amber-300 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-600 transition-all cursor-pointer"
                >
                  Pledged Gold Release
                </button>
                <button
                  type="button"
                  onClick={() => applyTemplate('appointment', activeEmailEnquiry)}
                  className="px-2.5 py-1 bg-white hover:bg-amber-50 hover:border-amber-300 border border-slate-200 rounded-lg text-[11px] font-bold text-slate-600 transition-all cursor-pointer"
                >
                  Schedule Branch Visit
                </button>
              </div>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-4">
              {/* Recipient */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Recipient Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={emailForm.to}
                  onChange={(e) => setEmailForm({ ...emailForm, to: e.target.value })}
                  placeholder="customer@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-sm font-medium focus:outline-none focus:border-amber-500 focus:bg-white"
                />
                <span className="text-[10px] text-slate-400 mt-1 block font-medium">
                  Enter the client&apos;s email address (for customer {activeEmailEnquiry.name}).
                </span>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Subject Line *
                </label>
                <input
                  type="text"
                  required
                  value={emailForm.subject}
                  onChange={(e) => setEmailForm({ ...emailForm, subject: e.target.value })}
                  placeholder="Subject"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>

              {/* Body */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Message Body *
                </label>
                <textarea
                  rows={7}
                  required
                  value={emailForm.body}
                  onChange={(e) => setEmailForm({ ...emailForm, body: e.target.value })}
                  placeholder="Type your message here..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium focus:outline-none focus:border-amber-500 focus:bg-white font-mono text-xs whitespace-pre-wrap leading-relaxed"
                />
              </div>

              {/* Status feedback */}
              {emailStatus && (
                <div
                  className={`p-3 rounded-xl border text-xs font-semibold ${
                    emailStatus.success
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border-rose-200'
                  }`}
                >
                  {emailStatus.success ? 'Email successfully sent!' : emailStatus.error}
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 justify-end pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setActiveEmailEnquiry(null)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold uppercase tracking-wider text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={sendingEmail || !gmailToken}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 disabled:bg-slate-200 disabled:text-slate-400 text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  {sendingEmail ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send via Gmail</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* WhatsApp Template Quick Send Modal */}
      {activeWhatsAppEnquiry && (
        <WhatsAppSendModal
          enquiry={activeWhatsAppEnquiry}
          templates={whatsappTemplates}
          onClose={() => setActiveWhatsAppEnquiry(null)}
          onMarkContacted={(id) => handleUpdateStatus(id, 'contacted')}
        />
      )}

      <Footer />
    </div>
  );
}
