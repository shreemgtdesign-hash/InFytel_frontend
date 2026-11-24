import React, { useState } from 'react';
import { X, CheckCircle2, Send, Phone, Mail, MapPin } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, initialSubject = 'Get a quote' }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    practice: 'AI & Automation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div className="relative w-full max-w-xl bg-[#0B132B] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden">
        
        {/* Glow ambient spots */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-red-500/15 blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-6 shadow-glow-cyan-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Request Received!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-8 leading-relaxed">
              Thank you, <strong>{formData.name || 'valued partner'}</strong>. Our engineering leads in Lagos will review your specifications and contact you within 15 minutes.
            </p>
            <button
              onClick={onClose}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#EF4444] to-[#F43F5E] text-white font-bold text-sm shadow-glow-red-sm"
            >
              Back to Infytel
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
              {initialSubject}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Start your project with Infytel
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Connect directly with our Victoria Island enterprise engineering teams.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Adebayo Ogunlesi"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0814 403 3103"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Practice of Interest</label>
                  <select
                    value={formData.practice}
                    onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  >
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Financial Technology">Financial Technology</option>
                    <option value="Cloud & Data">Cloud & Data</option>
                    <option value="Cybersecurity">Cybersecurity & Zero Trust</option>
                    <option value="Enterprise Collaboration">Enterprise Collaboration</option>
                    <option value="Infrastructure & Hardware">Infrastructure & Hardware</option>
                    <option value="Digital Engineering">Digital Engineering</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Project Scope & Requirements</label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your organization's goals, timelines and systems..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#EF4444] via-[#F43F5E] to-[#E11D48] text-white font-bold text-sm shadow-[0_6px_25px_rgba(239,68,68,0.5)] hover:shadow-[0_8px_30px_rgba(239,68,68,0.7)] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <span>Dispatching to Engineering Desk...</span>
                ) : (
                  <>
                    <span>Submit Project Requirements</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
