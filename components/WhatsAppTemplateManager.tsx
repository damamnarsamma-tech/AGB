'use client';

import React, { useState, useEffect } from 'react';
import {
  db,
  handleFirestoreError,
  OperationType
} from '@/lib/firebase';
import {
  collection,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';
import {
  MessageSquare,
  Plus,
  Edit2,
  Trash2,
  RotateCcw,
  Sparkles,
  Check,
  Copy,
  Layers,
  Search,
  Filter,
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  WhatsAppTemplate,
  ValuationStage,
  DEFAULT_WHATSAPP_TEMPLATES,
  SUPPORTED_PLACEHOLDERS,
  renderWhatsAppTemplate
} from '@/lib/whatsapp-templates';

export default function WhatsAppTemplateManager() {
  const [templates, setTemplates] = useState<WhatsAppTemplate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Form & Editing state
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [editingTemplateId, setEditingTemplateId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState<string>('');
  const [formStage, setFormStage] = useState<ValuationStage>('Appointment');
  const [formContent, setFormContent] = useState<string>('');
  const [saving, setSaving] = useState<boolean>(false);
  const [seeding, setSeeding] = useState<boolean>(false);

  // Status notification
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Live Test Simulation state
  const [testTemplate, setTestTemplate] = useState<WhatsAppTemplate | null>(null);

  // 1. Listen to real-time WhatsApp Templates from Firestore
  useEffect(() => {
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
        setTemplates(items);
        setLoading(false);
      },
      (error) => {
        handleFirestoreError(error, OperationType.LIST, 'whatsapp_templates');
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Seed Default Valuation Library
  const handleSeedDefaults = async () => {
    if (
      templates.length > 0 &&
      !window.confirm(
        'You already have existing templates. Do you want to append the 6 standard Valuation Stage templates to your library?'
      )
    ) {
      return;
    }

    setSeeding(true);
    setFeedback(null);

    try {
      for (const tmpl of DEFAULT_WHATSAPP_TEMPLATES) {
        await addDoc(collection(db, 'whatsapp_templates'), {
          ...tmpl,
          createdAt: serverTimestamp()
        });
      }
      setFeedback({
        type: 'success',
        message: 'Successfully seeded 6 standard valuation stage WhatsApp templates into Firestore!'
      });
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'whatsapp_templates');
      setFeedback({
        type: 'error',
        message: 'Failed to seed default templates. Please check database security permissions.'
      });
    } finally {
      setSeeding(false);
    }
  };

  // Open Form for Create
  const handleOpenCreate = () => {
    setEditingTemplateId(null);
    setFormTitle('');
    setFormStage('Appointment');
    setFormContent('');
    setIsFormOpen(true);
  };

  // Open Form for Edit
  const handleOpenEdit = (tmpl: WhatsAppTemplate) => {
    if (!tmpl.id) return;
    setEditingTemplateId(tmpl.id);
    setFormTitle(tmpl.title);
    setFormStage(tmpl.stage);
    setFormContent(tmpl.content);
    setIsFormOpen(true);
  };

  // Save Template (Create or Update)
  const handleSaveTemplate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formContent.trim()) {
      setFeedback({ type: 'error', message: 'Please provide both a title and message content.' });
      return;
    }

    setSaving(true);
    setFeedback(null);

    try {
      if (editingTemplateId) {
        // Update
        const docRef = doc(db, 'whatsapp_templates', editingTemplateId);
        await updateDoc(docRef, {
          title: formTitle.trim(),
          stage: formStage,
          content: formContent.trim(),
          updatedAt: serverTimestamp()
        });
        setFeedback({ type: 'success', message: 'Template successfully updated!' });
      } else {
        // Create
        await addDoc(collection(db, 'whatsapp_templates'), {
          title: formTitle.trim(),
          stage: formStage,
          content: formContent.trim(),
          createdAt: serverTimestamp()
        });
        setFeedback({ type: 'success', message: 'New template created successfully!' });
      }

      setIsFormOpen(false);
      setEditingTemplateId(null);
      setFormTitle('');
      setFormContent('');
    } catch (err) {
      handleFirestoreError(
        err,
        editingTemplateId ? OperationType.UPDATE : OperationType.CREATE,
        'whatsapp_templates'
      );
      setFeedback({ type: 'error', message: 'Failed to save template to database.' });
    } finally {
      setSaving(false);
    }
  };

  // Delete Template
  const handleDeleteTemplate = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this WhatsApp template?')) return;

    try {
      await deleteDoc(doc(db, 'whatsapp_templates', id));
      setFeedback({ type: 'success', message: 'Template deleted.' });
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `whatsapp_templates/${id}`);
    }
  };

  // Insert token into textarea at current cursor or end
  const insertPlaceholder = (token: string) => {
    setFormContent((prev) => `${prev} ${token}`);
  };

  // Filtering
  const filteredTemplates = templates.filter((tmpl) => {
    const matchesStage = selectedStage === 'all' || tmpl.stage === selectedStage;
    const matchesQuery =
      tmpl.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tmpl.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStage && matchesQuery;
  });

  const stagesList: ValuationStage[] = [
    'Appointment',
    'Pledged Gold',
    'XRF Testing',
    'Final Offer',
    'Payout',
    'General'
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Persistent WhatsApp Template Library</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Valuation Process Communication Templates
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Pre-formatted, customizable WhatsApp messages stored securely in Firestore for instant coordinator outreach.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSeedDefaults}
            disabled={seeding}
            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
            title="Populate 6 default stage templates into database"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${seeding ? 'animate-spin' : ''}`} />
            <span>{seeding ? 'Seeding...' : 'Seed Defaults'}</span>
          </button>

          <button
            onClick={handleOpenCreate}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-wider text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Template</span>
          </button>
        </div>
      </div>

      {/* Feedback Banner */}
      {feedback && (
        <div
          className={`p-4 rounded-xl border text-xs font-semibold flex items-center justify-between gap-3 ${
            feedback.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : 'bg-rose-50 text-rose-800 border-rose-200'
          }`}
        >
          <div className="flex items-center gap-2">
            {feedback.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
          <button
            onClick={() => setFeedback(null)}
            className="text-xs font-bold uppercase opacity-60 hover:opacity-100"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-2 border border-slate-200 rounded-xl bg-slate-50 px-3 py-2 flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search templates by title or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none text-xs w-full focus:outline-none placeholder-slate-400 text-slate-800 font-medium"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1 whitespace-nowrap">
            <Filter className="w-3.5 h-3.5" /> Stage:
          </span>
          <button
            onClick={() => setSelectedStage('all')}
            className={`px-2.5 py-1 text-xs font-bold rounded-lg border uppercase tracking-wider cursor-pointer whitespace-nowrap ${
              selectedStage === 'all'
                ? 'bg-emerald-600 text-white border-emerald-600 font-extrabold shadow-xs'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            All ({templates.length})
          </button>
          {stagesList.map((stg) => {
            const count = templates.filter((t) => t.stage === stg).length;
            return (
              <button
                key={stg}
                onClick={() => setSelectedStage(stg)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg border uppercase tracking-wider cursor-pointer whitespace-nowrap ${
                  selectedStage === stg
                    ? 'bg-emerald-600 text-white border-emerald-600 font-extrabold shadow-xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {stg} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Templates Grid / Empty State */}
      {loading ? (
        <div className="py-20 text-center space-y-4 bg-white border border-slate-200 rounded-2xl">
          <div className="w-8 h-8 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            Loading template library from Firestore...
          </p>
        </div>
      ) : filteredTemplates.length === 0 ? (
        <div className="py-16 px-6 text-center space-y-4 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto">
            <Layers className="w-6 h-6" />
          </div>
          <div className="max-w-md mx-auto space-y-1">
            <h3 className="text-base font-bold text-slate-900">No WhatsApp Templates Found</h3>
            <p className="text-xs text-slate-500">
              {templates.length === 0
                ? 'Your Firestore library has no custom templates yet. Click below to seed the 6 standard valuation stage templates.'
                : 'No templates match your selected stage or search query.'}
            </p>
          </div>
          {templates.length === 0 && (
            <button
              onClick={handleSeedDefaults}
              disabled={seeding}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black uppercase tracking-wider text-xs rounded-xl transition-all shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <RotateCcw className={`w-4 h-4 ${seeding ? 'animate-spin' : ''}`} />
              <span>Seed 6 Standard Valuation Stage Templates</span>
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTemplates.map((tmpl) => (
            <div
              key={tmpl.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider rounded">
                      Stage: {tmpl.stage}
                    </span>
                    <h3 className="text-base font-black text-slate-900 leading-snug">{tmpl.title}</h3>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      onClick={() => setTestTemplate(tmpl)}
                      className="p-1.5 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors cursor-pointer"
                      title="Test preview with sample data"
                    >
                      <Sparkles className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleOpenEdit(tmpl)}
                      className="p-1.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors cursor-pointer"
                      title="Edit template"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => tmpl.id && handleDeleteTemplate(tmpl.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      title="Delete template"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="bg-emerald-50/40 border border-emerald-100 rounded-xl p-3.5 text-xs text-slate-800 font-sans whitespace-pre-wrap leading-relaxed">
                  {tmpl.content}
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-3 border-t border-slate-100">
                <span>Placeholders detected in content</span>
                <span className="font-mono text-emerald-700 font-bold">
                  {(tmpl.content.match(/\{[a-z_]+\}/g) || []).length} tokens
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Form Modal (Create or Edit) */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto font-sans text-slate-900">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative my-8 animate-in zoom-in-95 duration-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    {editingTemplateId ? 'Edit WhatsApp Template' : 'Create New WhatsApp Template'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Saved directly into Firestore database for immediate administrative use.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSaveTemplate} className="space-y-4">
              {/* Title & Stage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Template Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="e.g. Stage 3: XRF Purity Certificate"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Valuation Stage Category *
                  </label>
                  <select
                    value={formStage}
                    onChange={(e) => setFormStage(e.target.value as ValuationStage)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold focus:outline-none focus:border-amber-500 focus:bg-white cursor-pointer"
                  >
                    {stagesList.map((stg) => (
                      <option key={stg} value={stg}>
                        {stg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Supported Placeholders helper */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
                <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider flex items-center gap-1">
                  <Info className="w-3 h-3 text-amber-600" /> Click to Insert Placeholder Variable Token:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {SUPPORTED_PLACEHOLDERS.map((item) => (
                    <button
                      key={item.token}
                      type="button"
                      onClick={() => insertPlaceholder(item.token)}
                      className="px-2 py-1 bg-white hover:bg-amber-100 hover:border-amber-300 border border-slate-200 rounded-md text-[10px] font-mono font-bold text-slate-700 transition-all cursor-pointer"
                      title={`Insert ${item.label}`}
                    >
                      {item.token}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Message Content Body *
                </label>
                <textarea
                  rows={8}
                  required
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  placeholder="Type your formatted WhatsApp template here using placeholders..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-900 font-sans focus:outline-none focus:border-amber-500 focus:bg-white leading-relaxed whitespace-pre-wrap"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-2 justify-end pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold uppercase tracking-wider text-xs rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-wider text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  {saving ? 'Saving...' : 'Save Template to Database'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Live Test Simulator Modal */}
      {testTemplate && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto font-sans text-slate-900">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-xl w-full p-6 sm:p-8 relative my-8 animate-in zoom-in-95 duration-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-emerald-700 font-black">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Live WhatsApp Template Preview</span>
              </div>
              <button
                onClick={() => setTestTemplate(null)}
                className="text-slate-400 hover:text-slate-900 text-xs font-bold uppercase"
              >
                Close
              </button>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                Template: {testTemplate.title} [{testTemplate.stage}]
              </span>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-4 text-xs text-slate-900 leading-relaxed font-sans shadow-xs whitespace-pre-wrap">
              {renderWhatsAppTemplate(testTemplate.content, {
                customer_name: 'Venkatesh Gujarathi',
                phone: '9876543210',
                location: 'Vijayawada Central',
                service: 'Pledged Gold Release Assistance',
                gold_weight: '32.4g',
                purity: '22K (91.6% Hallmark)',
                offered_amount: '2,45,000',
                reference_id: 'SVG-9941'
              })}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setTestTemplate(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold uppercase tracking-wider text-xs rounded-xl cursor-pointer"
              >
                Close Simulator
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
