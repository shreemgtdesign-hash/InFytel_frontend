import React, { useState } from 'react';
import { Search, PenTool, Cpu, CheckCircle, LifeBuoy, ArrowRight, Check } from 'lucide-react';

export default function ExcellenceFramework({ data, onOpenQuote }) {
  const headline = data?.headline || "From complex requirements to functional excellence";
  const subtitle = data?.subtitle || "A structured, five-stage delivery model that ensures predictable outcomes, zero surprises, and continuous value.";
  const stages = data?.stages || [];

  const [activeStage, setActiveStage] = useState(1);

  const getStageIcon = (icon) => {
    switch (icon) {
      case 'search': return Search;
      case 'pen-tool': return PenTool;
      case 'cpu': return Cpu;
      case 'check-circle': return CheckCircle;
      case 'life-buoy': return LifeBuoy;
      default: return Check;
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 rounded-[36px] my-6 max-w-7xl mx-auto shadow-2xl relative overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Heading & Framework Intro */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
            DELIVERY MODEL
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-4">
            From complex requirements to <span className="text-[#0EA5E9]">functional excellence</span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed mb-8">
            {subtitle}
          </p>

          <button 
            onClick={() => onOpenQuote && onOpenQuote('Framework Discovery Call')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#EF4444] text-white hover:bg-rose-600 text-sm font-bold transition-all shadow-[0_6px_20px_rgba(239,68,68,0.35)] group"
          >
            <span>Schedule Discovery Audit</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right Column: 5-Stage Stepped Vertical Timeline */}
        <div className="lg:col-span-7 space-y-6">
          {stages.map((st) => {
            const Icon = getStageIcon(st.icon);
            const isSelected = activeStage === st.stageNumber;

            return (
              <div
                key={st.id || st.stageNumber}
                onClick={() => setActiveStage(st.stageNumber)}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-200 cursor-pointer ${
                  isSelected 
                    ? 'bg-slate-50 border-[#0EA5E9] shadow-lg translate-x-1' 
                    : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  
                  {/* Stage Number & Icon Badge */}
                  <div className={`p-3 rounded-2xl shrink-0 ${
                    isSelected 
                      ? 'bg-[#0EA5E9] text-white shadow-[0_0_15px_rgba(14,165,233,0.4)]' 
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                      <h4 className="text-xl font-black text-slate-950">
                        {st.stageName}
                      </h4>
                      <span className="text-xs font-semibold text-[#0EA5E9] font-mono">
                        {st.subtitle}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {st.description}
                    </p>

                    {/* Deliverables Badges */}
                    {st.deliverables && (
                      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/60">
                        <span className="text-[10px] font-bold text-slate-400 uppercase font-mono mr-1">
                          Key Deliverables:
                        </span>
                        {st.deliverables.map((d, dIdx) => (
                          <span 
                            key={dIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]"></span>
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
