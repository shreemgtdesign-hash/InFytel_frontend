import React, { useEffect, useState } from 'react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Send,
  ExternalLink,
  Navigation,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
} from 'lucide-react';
import { CONTACT_DEFAULT_DATA, submitContactInquiry } from '../services/api.js';

export default function ContactPage({ data }) {
  const contact = data || CONTACT_DEFAULT_DATA;
  const hero = contact.hero || CONTACT_DEFAULT_DATA.hero;
  const info = contact.contactInfo || CONTACT_DEFAULT_DATA.contactInfo;
  const formConfig = contact.form || CONTACT_DEFAULT_DATA.form;
  const mapLoc = contact.mapLocation || CONTACT_DEFAULT_DATA.mapLocation;

  const fields = formConfig.fields || CONTACT_DEFAULT_DATA.form.fields;
  const solutions = formConfig.solutionsOfInterest || CONTACT_DEFAULT_DATA.form.solutionsOfInterest;

  const createInitialFormValues = () => {
    const initial = {};
    fields.forEach((f) => {
      initial[f.name] = '';
    });
    return {
      fullName: '',
      workEmail: '',
      phone: '',
      companyName: '',
      solutionOfInterest: '',
      message: '',
      ...initial,
    };
  };

  const [formValues, setFormValues] = useState(createInitialFormValues);
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null); // { type: 'success' | 'error', text: string }

  useEffect(() => {
    setFormValues((prev) => ({
      ...createInitialFormValues(),
      ...prev,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleFieldChange = (name, value) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (submitResult?.type === 'error') {
      setSubmitResult(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitResult(null);

    const payload = {
      fullName: (formValues.fullName || '').trim(),
      workEmail: (formValues.workEmail || '').trim(),
      phone: (formValues.phone || '').trim(),
      companyName: (formValues.companyName || '').trim(),
      solutionOfInterest: (formValues.solutionOfInterest || '').trim(),
      message: (formValues.message || '').trim(),
    };

    try {
      const res = await submitContactInquiry(payload);
      setSubmitResult({
        type: 'success',
        text: res.message || 'Message sent successfully. A solutions consultant will reply soon.',
      });
      setFormValues(createInitialFormValues());
    } catch (err) {
      setSubmitResult({
        type: 'error',
        text: err.message || 'Unable to send your message right now. Please try again.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappNum = info?.whatsapp?.number || '2348144033103';
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(
    'Hello Infytel team, I would like to inquire about your technology solutions.'
  )}`;
  const directionsUrl =
    mapLoc?.latitude && mapLoc?.longitude
      ? `https://www.google.com/maps/dir/?api=1&destination=${mapLoc.latitude},${mapLoc.longitude}`
      : mapLoc?.googleMapsUrl;

  return (
    <div className="w-full select-none">
      {/* =========================================================
          1. DARK CYBER HERO HEADER
         ========================================================= */}
      <section className="relative bg-[#04142A] overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-24">
        {/* Right-side Midnight Blue Atmospheric Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 55% 85% at 86% 45%, rgba(16, 48, 122, 0.55) 0%, rgba(11, 29, 78, 0.25) 48%, transparent 80%)',
          }}
        />
        {/* Subtle Bottom-Left Warm Glow matching reference */}
        <div
          className="absolute left-0 bottom-0 w-72 h-36 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 12% 100%, rgba(185, 28, 28, 0.16) 0%, transparent 72%)',
          }}
        />
        {/* Concentric Subtle Decorative Rings on Right */}
        <div className="absolute -right-24 sm:-right-12 top-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full border border-white/[0.06] pointer-events-none" />
        <div className="absolute -right-8 sm:right-6 top-1/2 -translate-y-1/2 w-[210px] h-[210px] sm:w-[270px] sm:h-[270px] rounded-full border border-amber-400/[0.08] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Eyebrow Badge */}
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E12C2C] shadow-[0_0_8px_#E12C2C]" />
            <span className="text-[11px] font-semibold text-[#0079BD] uppercase tracking-[0.22em] font-mono">
              {hero.badge || 'CONTACT US'}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-[-0.02em] leading-[1.18] max-w-2xl mb-4">
            {hero.headline || 'Tell us what you need. We will take it from there.'}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300/80 text-sm sm:text-[15px] leading-relaxed max-w-xl">
            {hero.subtitle || 'A solutions consultant will review your message and reply with next steps.'}
          </p>
        </div>
      </section>

      {/* =========================================================
          2. LIGHT MAIN SECTION: INFO CARDS + FORM + GOOGLE MAP
         ========================================================= */}
      <section className="bg-[#F8FAFC] text-slate-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: Contact Info Cards + WhatsApp Bar */}
            <div className="lg:col-span-5 space-y-4">
              {/* Visit us */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-[0_2px_12px_rgba(15,23,42,0.03)] flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E6F4FE] text-[#1B9CE5] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1">
                    {info?.visitUs?.title || 'Visit us'}
                  </h2>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                    {info?.visitUs?.address ||
                      'Plot 1661, Oyin Jolayemi Street, Victoria Island, Lagos, Nigeria'}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-[0_2px_12px_rgba(15,23,42,0.03)] flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E6F4FE] text-[#1B9CE5] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1">
                    {info?.email?.title || 'Email'}
                  </h2>
                  <div className="flex flex-col space-y-0.5 text-xs sm:text-[13px] text-slate-500">
                    {(info?.email?.emails || []).map((em, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${em}`}
                        className="hover:text-[#1B9CE5] transition-colors w-fit"
                      >
                        {em}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-[0_2px_12px_rgba(15,23,42,0.03)] flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E6F4FE] text-[#1B9CE5] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1">
                    {info?.call?.title || 'Call'}
                  </h2>
                  <div className="flex flex-col space-y-0.5 text-xs sm:text-[13px] text-slate-500">
                    {(info?.call?.phones || []).map((ph, idx) => (
                      <a
                        key={idx}
                        href={`tel:${ph}`}
                        className="hover:text-[#1B9CE5] transition-colors w-fit"
                      >
                        {ph}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office hours */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-[0_2px_12px_rgba(15,23,42,0.03)] flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E6F4FE] text-[#1B9CE5] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-1">
                    {info?.officeHours?.title || 'Office hours'}
                  </h2>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                    {info?.officeHours?.schedule || 'Mon–Fri · 8:00 – 17:00 WAT'}
                  </p>
                  {info?.officeHours?.supportNote && (
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mt-0.5">
                      {info.officeHours.supportNote}
                    </p>
                  )}
                </div>
              </div>

              {/* WhatsApp Green CTA Banner */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-2xl bg-[#0FA958] hover:bg-[#0C914B] px-5 py-3.5 text-white flex items-center justify-between shadow-[0_8px_22px_rgba(15,169,88,0.24)] hover:shadow-[0_10px_28px_rgba(15,169,88,0.34)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="flex items-center gap-3 text-sm font-semibold">
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{info?.whatsapp?.label || 'Chat with us on WhatsApp'}</span>
                </span>
                <span className="text-xs text-white/90 font-medium">
                  {info?.whatsapp?.subtext || 'Need help?'}
                </span>
              </a>
            </div>

            {/* RIGHT COLUMN: Send us a message Form Card */}
            <div className="lg:col-span-7">
              <div className="rounded-[28px] bg-white border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {formConfig.headline || 'Send us a message'}
                </h2>
                <p className="text-xs sm:text-[13px] text-slate-400 mt-1 mb-6">
                  {formConfig.subtitle || 'Fields marked optional can be left blank.'}
                </p>

                {submitResult?.type === 'success' && (
                  <div
                    role="status"
                    className="mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3 text-emerald-900"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm leading-relaxed">
                      <p className="font-semibold">Inquiry Sent</p>
                      <p className="text-emerald-700 mt-0.5">{submitResult.text}</p>
                    </div>
                  </div>
                )}

                {submitResult?.type === 'error' && (
                  <div
                    role="alert"
                    className="mb-6 rounded-2xl bg-rose-50 border border-rose-200 p-4 flex items-start gap-3 text-rose-900"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm">{submitResult.text}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {fields.map((field) => {
                    const val = formValues[field.name] ?? '';
                    const fieldId = `contact-field-${field.name}`;

                    if (field.type === 'select') {
                      return (
                        <div key={field.name}>
                          <label
                            htmlFor={fieldId}
                            className="block text-xs font-semibold text-slate-700 mb-1.5"
                          >
                            {field.label}
                          </label>
                          <div className="relative">
                            <select
                              id={fieldId}
                              required={Boolean(field.required)}
                              value={val}
                              onChange={(e) => handleFieldChange(field.name, e.target.value)}
                              className={`w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 pr-10 text-xs sm:text-sm focus:border-[#1B9CE5] focus:ring-2 focus:ring-[#1B9CE5]/15 focus:outline-none transition-all ${
                                val ? 'text-slate-900' : 'text-slate-500'
                              }`}
                            >
                              <option value="">
                                {field.placeholder || 'Select a solution...'}
                              </option>
                              {solutions.map((sol) => (
                                <option key={sol.id || sol.slug || sol.name} value={sol.name}>
                                  {sol.name}
                                </option>
                              ))}
                            </select>
                            <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
                          </div>
                        </div>
                      );
                    }

                    if (field.type === 'textarea') {
                      return (
                        <div key={field.name}>
                          <label
                            htmlFor={fieldId}
                            className="block text-xs font-semibold text-slate-700 mb-1.5"
                          >
                            {field.label}
                          </label>
                          <textarea
                            id={fieldId}
                            rows={4}
                            required={Boolean(field.required)}
                            value={val}
                            onChange={(e) => handleFieldChange(field.name, e.target.value)}
                            placeholder={field.placeholder || ''}
                            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1B9CE5] focus:ring-2 focus:ring-[#1B9CE5]/15 focus:outline-none transition-all resize-y"
                          />
                        </div>
                      );
                    }

                    return (
                      <div key={field.name}>
                        <label
                          htmlFor={fieldId}
                          className="block text-xs font-semibold text-slate-700 mb-1.5"
                        >
                          {field.label}
                        </label>
                        <input
                          id={fieldId}
                          type={field.type || 'text'}
                          required={Boolean(field.required)}
                          value={val}
                          onChange={(e) => handleFieldChange(field.name, e.target.value)}
                          placeholder={field.placeholder || ''}
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#1B9CE5] focus:ring-2 focus:ring-[#1B9CE5]/15 focus:outline-none transition-all"
                        />
                      </div>
                    );
                  })}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#E52822] hover:bg-[#CC1F1A] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-[0_8px_22px_rgba(229,40,34,0.28)] hover:shadow-[0_10px_28px_rgba(229,40,34,0.4)] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <span>
                      {submitting
                        ? 'Sending...'
                        : formConfig.submitButtonText || 'Send message'}
                    </span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* =========================================================
              3. EMBEDDED GOOGLE MAP WITH FLOATING LOCATION CARD
             ========================================================= */}
          <div className="mt-12 sm:mt-16">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/80 shadow-[0_10px_35px_rgba(15,23,42,0.06)] h-[320px] sm:h-[380px] bg-slate-100">
              <iframe
                src={
                  mapLoc.embedUrl ||
                  'https://www.google.com/maps?q=Oyin+Jolayemi+Street,+Victoria+Island,+Lagos,+Nigeria&output=embed'
                }
                title={mapLoc.title || 'Oyin Jolayemi Street'}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                allowFullScreen
              />

              {/* Floating Top-Left White Map Info Card matching design */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 w-[225px] sm:w-[255px] bg-white rounded-xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.14)] border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {mapLoc.title || 'Oyin Jolayemi Street'}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {mapLoc.address ||
                    'Oyin Jolayemi Street, Victoria Island, Lagos 106104, Nigeria'}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <a
                    href={
                      mapLoc.googleMapsUrl ||
                      'https://maps.google.com/?q=Oyin+Jolayemi+Street,+Victoria+Island,+Lagos+106104,+Nigeria'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A73E8] hover:bg-[#1557B0] text-white text-xs font-semibold transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    <span>{mapLoc.openInMapsText || 'Open in Maps'}</span>
                  </a>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get directions"
                    title="Get directions"
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-[#1A73E8] flex items-center justify-center transition-colors shrink-0"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
