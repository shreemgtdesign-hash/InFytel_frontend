import React, { useState } from 'react';
import { 
  Bot, CreditCard, Cloud, ShieldCheck, Users, Server, Code, 
  ChevronRight, Check, CheckCircle2, ArrowRight, Sparkles, Building2
} from 'lucide-react';

export default function PracticesSection({ data, onOpenQuote }) {
  const practices = data?.practices || [];
  const [activeIdx, setActiveIdx] = useState(0);

  const activePractice = practices[activeIdx] || practices[0] || {};
  const solutions = activePractice.solutions || [];

  const getIcon = (slug) => {
    switch (slug) {
      case 'ai-automation': return Bot;
      case 'financial-technology': return CreditCard;
      case 'cloud-data': return Cloud;
      case 'cybersecurity': return ShieldCheck;
      case 'enterprise-collaboration': return Users;
      case 'infrastructure-hardware': return Server;
      case 'digital-engineering': return Code;
      default: return Sparkles;
    }
  };

  return (
    <section id="practices-section" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="text-xs font-bold text-[#E12C2C] uppercase tracking-wider font-mono block mb-3">
          {data?.badge || "# OUR PRACTICES & SOLUTIONS"}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          {data?.headline || "Seven practices, 31 Solutions. One Partner."}
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          {data?.description || "From individual technologies to end-to-end transformation, our 7 core practices cover every layer of modern enterprise ICT."}
        </p>
      </div>

      {/* Interactive 2-Column Split: List on Left, Showcase Card on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: 7 Practices Selector List */}
        <div className="lg:col-span-5 space-y-2.5">
          {practices.map((p, idx) => {
            const Icon = getIcon(p.slug);
            const isActive = idx === activeIdx;

            return (
              <div
                key={p.id || idx}
                onClick={() => setActiveIdx(idx)}
                className={`w-full p-4 sm:p-5 rounded-2xl flex items-center justify-between text-left transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#0F1E3D] border-[#38BDF8] shadow-[0_0_25px_rgba(56,189,248,0.25)] translate-x-1'
                    : 'bg-[#0B132B]/60 hover:bg-[#0B132B] border-white/5 hover:border-white/10 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-sm font-bold ${isActive ? 'text-[#38BDF8]' : 'text-slate-500'}`}>
                    {p.code || `0${idx + 1}`}
                  </span>
                  
                  <div className={`p-2.5 rounded-xl ${isActive ? 'bg-[#38BDF8]/10 text-[#38BDF8]' : 'bg-slate-800 text-slate-400'}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className={`text-sm sm:text-base font-bold ${isActive ? 'text-white' : 'text-slate-200'}`}>
                      {p.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 block line-clamp-1">
                      {p.tagline}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {p.badge && (
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-white/5 text-slate-300 border border-white/10">
                      {p.badge}
                    </span>
                  )}
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#38BDF8] translate-x-1' : 'text-slate-600'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Practice Showcase Card */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0c1630] via-[#091124] to-[#060B18] border border-white/10 shadow-2xl overflow-hidden min-h-[520px]">
            
            {/* Background Watermark Code (e.g. 01, 02) */}
            <div className="absolute right-4 top-2 text-[120px] font-black text-white/[0.03] select-none pointer-events-none font-mono">
              {activePractice.code || `0${activeIdx + 1}`}
            </div>

            {/* Header info */}
            <div className="relative z-10 mb-8 pb-6 border-b border-white/10">
              <div className="flex items-center justify-between gap-4 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                  {activePractice.badge || "Core Practice"}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Practice Code: {activePractice.code || `0${activeIdx + 1}`}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {activePractice.name}
              </h3>
              <p className="text-sm font-medium text-[#38BDF8] mb-3">
                {activePractice.tagline}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activePractice.description}
              </p>
            </div>

            {/* Solutions List */}
            <div className="relative z-10 space-y-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                Key Enterprise Solutions:
              </h4>

              {solutions.map((sol) => (
                <div 
                  key={sol.id}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h5 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E12C2C]"></span>
                      {sol.name}
                    </h5>
                    {sol.oemPartners && sol.oemPartners.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {sol.oemPartners.map((oem, oIdx) => (
                          <span key={oIdx} className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E12C2C]/15 text-[#E12C2C] border border-[#E12C2C]/30">
                            OEM: {oem}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {sol.fullDescription || sol.shortSummary}
                  </p>

                  {/* Features & Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-4">
                    {sol.features && sol.features.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Capabilities:</span>
                        {sol.features.slice(0, 3).map((f, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-1.5 text-slate-300">
                            <Check className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {sol.benefits && sol.benefits.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Impact:</span>
                        {sol.benefits.slice(0, 3).map((b, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-1.5 text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Target Sectors */}
                  {sol.targetSectors && (
                    <div className="flex items-center gap-1.5 flex-wrap pt-3 border-t border-white/5">
                      <span className="text-[10px] text-slate-500 uppercase font-mono mr-1">Sectors:</span>
                      {sol.targetSectors.map((sec, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 rounded-full text-[10px] bg-slate-800 text-slate-300">
                          {sec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Action */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Need a tailored architecture for {activePractice.name}?
              </span>
              <button 
                onClick={() => onOpenQuote && onOpenQuote(`Consultation for ${activePractice.name}`)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E12C2C] to-[#F43F5E] text-white text-xs font-bold hover:shadow-glow-red-sm transition-all"
              >
                <span>Request Practice Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Bottom Highlight Badges */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { title: "Turnkey Delivery", desc: "Design, procurement & implementation" },
          { title: "OEM-Certified Engineers", desc: "Feitian, Freshworks, Microsoft & Cisco" },
          { title: "24/7 SLA Backed", desc: "Tier-3 mission critical NOC support" },
          { title: "Zero-Downtime Migration", desc: "Proven cutover methodology" },
        ].map((item, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
            <h5 className="text-xs font-bold text-white mb-1">{item.title}</h5>
            <p className="text-[11px] text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
