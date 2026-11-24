import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, TrendingUp, X } from 'lucide-react';

export default function RealOutcomes({ data }) {
  const headline = data?.headline || "Real outcomes for real businesses";
  const subtitle = data?.subtitle || "Quantifiable results achieved for clients across Africa.";
  const caseStudies = data?.caseStudies || [];

  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono">
            PROVEN TRACK RECORD
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
          Real outcomes for <span className="text-[#38BDF8]">real businesses</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          {subtitle}
        </p>
      </div>

      {/* 3 Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((cs) => (
          <div
            key={cs.id}
            className="group relative rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-[#0F1E3D]/80 via-[#0B152B]/90 to-[#070D1D] border border-white/10 hover:border-cyan-400/50 shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
          >
            {/* Top Sector Badge */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {cs.sector}
                </span>
                <span className="text-xs font-mono text-slate-500">CASE STUDY</span>
              </div>

              {/* Big Impact Metric */}
              <div className="mb-4">
                <div className="text-5xl sm:text-6xl font-black text-[#38BDF8] tracking-tight filter drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]">
                  {cs.metricValue}
                </div>
                <p className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wide">
                  {cs.metricLabel}
                </p>
              </div>

              {/* Title & Client */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {cs.title}
              </h3>
              
              <p className="text-xs font-mono text-slate-400 mb-4">
                Client: {cs.clientMasked}
              </p>

              {/* Quick Challenge / Solution summary */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 mb-6 text-xs text-slate-300">
                <p><strong className="text-rose-400 font-semibold">Challenge:</strong> {cs.challenge}</p>
                <p><strong className="text-emerald-400 font-semibold">Outcome:</strong> {cs.resultsText}</p>
              </div>
            </div>

            {/* Read Full Case Study Button */}
            <button
              onClick={() => setSelectedCase(cs)}
              className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#EF4444] text-slate-200 hover:text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group/btn"
            >
              <span>Explore Solution Blueprint</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Case Study Modal Details */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0B132B] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3 inline-block">
              {selectedCase.sector}
            </span>

            <h3 className="text-2xl font-bold mb-2">{selectedCase.title}</h3>
            <p className="text-xs font-mono text-slate-400 mb-6">Client: {selectedCase.clientMasked}</p>

            <div className="space-y-4 text-sm text-slate-300 mb-8">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1 font-mono">The Challenge</h4>
                <p>{selectedCase.challenge}</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-1 font-mono">Implemented Architecture</h4>
                <p>{selectedCase.solutionText}</p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 font-mono">Measured Business Impact</h4>
                <p className="text-emerald-200 font-medium">{selectedCase.resultsText}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedCase(null)}
              className="w-full py-3 rounded-xl bg-[#EF4444] hover:bg-rose-600 text-white font-bold text-sm transition-colors shadow-glow-red-sm"
            >
              Close Blueprint
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
