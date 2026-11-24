import React from 'react';

export default function BankTicker() {
  const banks = [
    { name: 'Access Bank', symbol: 'ACCESS' },
    { name: 'Zenith Bank', symbol: 'ZENITH' },
    { name: 'GTBank', symbol: 'GTCO' },
    { name: 'UBA', symbol: 'UBA' },
    { name: 'FCMB', symbol: 'FCMB' },
    { name: 'Standard Chartered', symbol: 'SCB' },
    { name: 'Stanbic IBTC', symbol: 'STANBIC' },
    { name: 'Wema Bank', symbol: 'ALAT' },
  ];

  // Double the list for infinite continuous scroll
  const marqueeList = [...banks, ...banks];

  return (
    <div className="relative w-full pt-12 pb-14 overflow-hidden select-none bg-[#070D1D]">
      
      {/* Glowing Curved Red Arch Shelf */}
      <div className="relative max-w-6xl mx-auto mb-8 px-4">
        {/* Curved Glowing Red Line */}
        <div className="w-full h-8 relative flex items-center justify-center">
          <svg className="w-full h-8 overflow-visible" viewBox="0 0 1000 30" preserveAspectRatio="none">
            <defs>
              <linearGradient id="redArchGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0" />
                <stop offset="20%" stopColor="#EF4444" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#F43F5E" stopOpacity="1" />
                <stop offset="80%" stopColor="#EF4444" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#EF4444" stopOpacity="0" />
              </linearGradient>
              <filter id="neonBlur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path 
              d="M0,28 Q500,2 1000,28" 
              fill="none" 
              stroke="url(#redArchGlow)" 
              strokeWidth="2.5" 
              filter="url(#neonBlur)" 
            />
          </svg>
        </div>

        {/* Header Text */}
        <p className="text-center text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mt-2">
          TRUSTED BY AFRICA'S LEADING TEAMS
        </p>
      </div>

      {/* Infinite Logo / Bank Name Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#070D1D] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#070D1D] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee track */}
        <div className="flex items-center gap-10 sm:gap-16 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeList.map((b, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 px-4 py-2 rounded-xl group transition-all duration-200 cursor-default"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-[#EF4444] group-hover:shadow-[0_0_8px_#EF4444] transition-colors"></div>
              <span className="text-base sm:text-lg font-bold text-slate-400 group-hover:text-white transition-colors tracking-tight whitespace-nowrap">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
