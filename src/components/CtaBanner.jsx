import React from 'react';
import { ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';

export default function CtaBanner({ data, onOpenQuote }) {
  const headline = data?.headline || "Start your dream project with Infytel";
  const subtitle = data?.subtitle || "Besides our high-impact technology solutions, you get the expertise and support of passionate professionals committed to your success.";
  const whatsappNumber = data?.whatsappNumber || "2348144033103";

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[36px] p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#0c1630] via-[#091124] to-[#060B18] border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_20px_rgba(56,189,248,0.2)] overflow-hidden">
        
        {/* Ambient Glows */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-red-500/15 blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E12C2C] animate-pulse"></span>
            TRANSFORM YOUR ICT OPERATIONS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
            {headline}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {/* Primary Action Button */}
            <button
              onClick={() => onOpenQuote && onOpenQuote('Talk to an Expert')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#E12C2C] via-[#F43F5E] to-[#E11D48] text-white font-bold text-sm sm:text-base shadow-[0_8px_30px_rgba(239,68,68,0.5)] hover:shadow-[0_12px_40px_rgba(239,68,68,0.7)] active:scale-95 transition-all duration-200 flex items-center gap-2 group"
            >
              <span>Talk to an expert</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Direct WhatsApp Chat Action */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Infytel%20team,%20I%20would%20like%20to%20discuss%20an%20enterprise%20technology%20solution.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-emerald-500/50 text-white font-bold text-sm sm:text-base shadow-lg transition-all duration-200 flex items-center gap-2.5 group"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-slate-950 font-black shadow-sm group-hover:scale-110 transition-transform">
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
