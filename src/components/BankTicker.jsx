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

  // Repeat the list for seamless continuous infinite scroll
  const marqueeList = [...banks, ...banks, ...banks];

  return (
    <div 
      className="relative w-full pt-1 pb-2.5 sm:pb-3.5 overflow-hidden select-none z-20 animate-hero-fade-up"
      style={{ animationDelay: '1250ms' }}
    >
      
      {/* Glowing Curved Red Arch Shelf matching uploaded design */}
      <div className="relative w-full max-w-[1400px] mx-auto px-2 sm:px-4">
        {/* Curved Glowing Red Line Shelf */}
        <div className="w-full h-7 sm:h-8 relative flex items-center justify-center">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 40" preserveAspectRatio="none">
            <defs>
              <linearGradient id="neonRedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E12C2C" stopOpacity="0.2" />
                <stop offset="6%" stopColor="#E12C2C" stopOpacity="0.8" />
                <stop offset="15%" stopColor="#E12C2C" stopOpacity="1" />
                <stop offset="50%" stopColor="#F43F5E" stopOpacity="1" />
                <stop offset="85%" stopColor="#E12C2C" stopOpacity="1" />
                <stop offset="94%" stopColor="#E12C2C" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E12C2C" stopOpacity="0.2" />
              </linearGradient>

              {/* Red glow wash beneath arch */}
              <linearGradient id="redWashGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E12C2C" stopOpacity="0.12" />
                <stop offset="60%" stopColor="#E12C2C" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#030712" stopOpacity="0" />
              </linearGradient>

              <filter id="neonBlur" x="-10%" y="-40%" width="120%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur1" />
                <feGaussianBlur stdDeviation="6" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Subtle red ambient fill beneath shelf */}
            <path 
              d="M 0,38 C 30,38 50,2 90,2 L 910,2 C 950,2 970,38 1000,38 L 1000,45 L 0,45 Z"
              fill="url(#redWashGrad)"
            />

            {/* Exact arched line spanning horizontally with rounded shoulders */}
            <path 
              d="M 0,38 C 30,38 50,2 90,2 L 910,2 C 950,2 970,38 1000,38" 
              fill="none" 
              stroke="url(#neonRedGradient)" 
              strokeWidth="2.5" 
              filter="url(#neonBlur)" 
            />
          </svg>
        </div>

        {/* Section Subtitle */}
        <p className="text-center text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400 mt-1 mb-1.5">
          TRUSTED BY GLOBAL LEADING TEAMS
        </p>
      </div>

      {/* Infinite Logo / Bank Name Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee track */}
        <div className="flex items-center gap-8 sm:gap-14 w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeList.map((b, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 sm:gap-2.5 px-2 py-1 rounded-lg group transition-all duration-200 cursor-default"
            >
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-700 group-hover:bg-[#E12C2C] group-hover:shadow-[0_0_8px_#E12C2C] transition-colors"></div>
              <span className="text-xs sm:text-sm font-bold text-slate-400 group-hover:text-white transition-colors tracking-tight whitespace-nowrap">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
