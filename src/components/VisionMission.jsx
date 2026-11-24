import React from 'react';
import { Target, Flag, CheckCircle } from 'lucide-react';

export default function VisionMission({ data }) {
  const headline = data?.headline || "Business growth is our core motivation. We seek out the best technology in the world and make it work for Africa's most forward-thinking companies.";
  const visionTitle = data?.visionTitle || "Our Vision";
  const visionText = data?.visionText || "To be the most trusted technology partner for organisations across global, turning every complex requirement into a solution that works.";
  const missionTitle = data?.missionTitle || "Our Mission";
  const missionText = data?.missionText || "We are committed to providing exceptional software engineering, cloud architecture, and cybersecurity services. By bridging the gap between business needs and technological capabilities, we help our clients thrive in a digital-first economy.";
  const coreValues = data?.coreValues || ["Listen", "Recommend", "Deliver", "Support"];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-cyan-500/10 pointer-events-none -z-10"></div>
      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-red-500/10 pointer-events-none -z-10"></div>

      {/* Section Tag */}
      <div className="flex items-center gap-2 mb-6">
        <span className="w-2 h-2 rounded-full bg-[#EF4444]"></span>
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono">
          VISION & MISSION
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-relaxed max-w-4xl mb-14">
        Business <span className="text-[#38BDF8]">growth</span> is our core motivation. We seek out the best technology in the world and make it work for Africa's most forward-thinking companies.
      </h2>

      {/* 2 Big Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 1: Our Vision */}
        <div className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#0e1d3d] to-[#091124] border border-cyan-500/20 hover:border-cyan-400/50 shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none"></div>

          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-[#38BDF8] mb-6 shadow-glow-cyan-sm">
            <Target className="w-7 h-7" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            {visionTitle}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {visionText}
          </p>
        </div>

        {/* Card 2: Our Mission */}
        <div className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#16132b] to-[#090b17] border border-red-500/20 hover:border-red-400/50 shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-red-500/10 blur-2xl pointer-events-none"></div>

          <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-400/30 flex items-center justify-center text-[#EF4444] mb-6 shadow-glow-red-sm">
            <Flag className="w-7 h-7" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            {missionTitle}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {missionText}
          </p>
        </div>
      </div>

      {/* Core Values Pills */}
      <div className="mt-12 flex flex-wrap items-center justify-center sm:justify-start gap-4">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Core Principles:</span>
        {coreValues.map((val, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-xs font-semibold text-slate-200"
          >
            <CheckCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>{val}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
