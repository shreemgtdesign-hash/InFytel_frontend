import React, { useState } from 'react';
import { 
  Building2, Wallet, MapPin, Star, CheckCircle, 
  ArrowRight, ShieldCheck, Cpu, Globe, Check 
} from 'lucide-react';
import VisionMission from './VisionMission.jsx';
import CtaBanner from './CtaBanner.jsx';

export default function AboutPage({ data, onOpenQuote }) {
  const hero = data?.hero || {};
  const whoWeAre = data?.whoWeAre || {};
  const visionMission = data?.visionMission || {};
  const industries = data?.industries || [];
  const partners = data?.partners || [];
  const cta = data?.cta || {};
  const contactDetails = data?.contactDetails || {};

  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const getIndustryIcon = (slug) => {
    switch (slug) {
      case 'government': return Building2;
      case 'financial-services': return Wallet;
      case 'real-estate': return MapPin;
      case 'hospitality': return Star;
      default: return Globe;
    }
  };

  return (
    <div className="w-full text-white">
      
      {/* 1. ABOUT HERO SECTION */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Glowing Radar Background Rings on Top Right */}
        <div className="absolute right-0 top-10 w-[450px] h-[450px] rounded-full border border-cyan-500/15 pointer-events-none -z-10"></div>
        <div className="absolute right-12 top-24 w-[320px] h-[320px] rounded-full border border-cyan-500/20 pointer-events-none -z-10"></div>
        <div className="absolute right-28 top-36 w-[180px] h-[180px] rounded-full border border-red-500/20 pointer-events-none -z-10"></div>

        <div className="max-w-3xl">
          <span className="text-xs font-bold text-[#EF4444] uppercase tracking-wider font-mono block mb-4">
            {hero.badge || "# ABOUT INFYTEL"}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
            {hero.headline || "A technology partner built around your outcomes."}
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
            {hero.description || "Infytel Communications Ltd. is a leading information technology company providing industry-focused solutions integrated with leading-edge ICT to clients in government, financial services, real estate, hospitality and other sectors."}
          </p>
        </div>
      </section>

      {/* 2. WHO WE ARE & 4-STAGE CORE MODEL */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 rounded-[36px] my-6 max-w-7xl mx-auto shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Who We Are text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
              WHO WE ARE
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-6">
              {whoWeAre.headline || "We seek out, develop and deploy the right solution."}
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              {whoWeAre.fullAbout || "We build tailor-made solutions in-house or through strategic technology partnerships, then serve them to forward-thinking companies. Our consultants, engineers, and support teams work as one group, so you deal with a single accountable partner. Based in Victoria Island, Lagos, we combine local knowledge with global vendor relationships to bring proven platforms to organisations that cannot afford to get technology wrong."}
            </p>

            {whoWeAre.headOffice && (
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-slate-900 uppercase font-mono text-[10px]">Head Office</span>
                  <span>{whoWeAre.headOffice}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: 4 Stages (Listen, Recommend, Deliver, Support) */}
          <div className="lg:col-span-6 space-y-4">
            {(whoWeAre.stages || [
              { step: 1, title: "Listen", description: "We start with your goals, constraints and the people who will use the system." },
              { step: 2, title: "Recommend", description: "We propose the simplest solution that meets the need, and tell you when something is not required." },
              { step: 3, title: "Deliver", description: "We implement, integrate and train, with a named owner for every workstream." },
              { step: 4, title: "Support", description: "We stay after go-live with monitoring, service reviews and improvements." },
            ]).map((st) => (
              <div 
                key={st.step}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#EF4444] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                  {st.step}
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {st.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <VisionMission data={visionMission} />

      {/* 4. SECTORS WE SERVE (INDUSTRIES) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 rounded-[36px] my-6 max-w-7xl mx-auto shadow-xl relative overflow-hidden border border-slate-200">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
            INDUSTRIES & VERTICALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Sectors We Serve
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = getIndustryIcon(ind.slug);
            const isSelected = selectedIndustry === idx;

            return (
              <div
                key={ind.id || idx}
                onClick={() => setSelectedIndustry(idx)}
                className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected 
                    ? 'border-[#0EA5E9] shadow-lg -translate-y-1' 
                    : 'border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                    isSelected ? 'bg-[#0EA5E9] text-white shadow-md' : 'bg-slate-100 text-[#0EA5E9]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    {ind.shortDescription}
                  </p>
                </div>

                {/* Key Capabilities */}
                {ind.keyCapabilities && (
                  <div className="pt-4 border-t border-slate-100 space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase font-mono block">Capabilities:</span>
                    {ind.keyCapabilities.slice(0, 2).map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                        <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                        <span className="line-clamp-1">{cap}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. TECHNOLOGY PARTNERS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono">
              TECHNOLOGY PARTNERS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Partners
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Strategic alliances with tier-1 global hardware, networking, and software OEMs.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div
              key={p.id}
              className="p-5 rounded-2xl bg-[#0B132B]/70 border border-white/10 hover:border-cyan-400/50 shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] font-bold text-[#EF4444] uppercase font-mono block mb-1">
                  {p.tier || "Partner"}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {p.name}
                </h4>
              </div>

              <p className="text-[11px] text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <CtaBanner data={cta} onOpenQuote={onOpenQuote} />
    </div>
  );
}
