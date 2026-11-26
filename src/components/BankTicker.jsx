import React, { useState } from 'react';

const DEFAULT_PARTNERS = [
  {
    id: '61301f3f-1051-4165-9d94-a78da323e224',
    name: 'Zenith Bank',
    logoUrl: 'https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/zenith-bank.jpg',
    displayOrder: 1,
    isActive: true,
  },
  {
    id: '8154e6a0-5761-403d-b591-48650999b1dd',
    name: 'FCMB',
    logoUrl: 'https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/fcmb.jpg',
    displayOrder: 2,
    isActive: true,
  },
  {
    id: '2a92c228-80ec-43f6-a2df-95b4037702ec',
    name: 'GTBank',
    logoUrl: 'https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/gtbank.jpg',
    displayOrder: 3,
    isActive: true,
  },
  {
    id: '5559a46a-6d8b-438b-af10-299956904a92',
    name: 'Access Bank',
    logoUrl: 'https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/access-bank.jpg',
    displayOrder: 4,
    isActive: true,
  },
  {
    id: '6da92c36-e5a6-471a-8ba7-1eeaf08c18e9',
    name: 'Wema Bank',
    logoUrl: 'https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/wema-bank.jpg',
    displayOrder: 5,
    isActive: true,
  },
  {
    id: '00990376-9745-4c58-8d2b-4d3f22c24d8e',
    name: 'UBA',
    logoUrl: 'https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/uba.jpg',
    displayOrder: 6,
    isActive: true,
  },
  {
    id: '5143a447-9ec8-4246-a99f-812fc5510609',
    name: 'Stanbic IBTC',
    logoUrl: 'https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/stanbic-ibtc.jpg',
    displayOrder: 7,
    isActive: true,
  },
  {
    id: '943ef55d-6b28-4013-9dee-b651fca4472b',
    name: 'Standard Chartered',
    logoUrl: 'https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/standard-chartered.jpg',
    displayOrder: 8,
    isActive: true,
  },
];

function TickerBankItem({ partner }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="flex items-center gap-2 sm:gap-2.5 px-2 py-1 rounded-lg group transition-all duration-200 cursor-default">
      {partner.logoUrl && !imgFailed ? (
        <img
          src={partner.logoUrl}
          alt={`${partner.name} logo`}
          onError={() => setImgFailed(true)}
          loading="lazy"
          decoding="async"
          className="w-4 h-4 sm:w-5 sm:h-5 rounded-[3px] sm:rounded-[4px] object-contain bg-white p-[1px] shrink-0 ring-1 ring-white/15 group-hover:ring-white/40 transition-all"
        />
      ) : (
        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-700 group-hover:bg-[#E12C2C] group-hover:shadow-[0_0_8px_#E12C2C] transition-colors shrink-0" />
      )}
      <span className="text-xs sm:text-sm font-bold text-slate-400 group-hover:text-white transition-colors tracking-tight whitespace-nowrap">
        {partner.name}
      </span>
    </div>
  );
}

export default function BankTicker({ partners }) {
  const activeBanks = (
    Array.isArray(partners) && partners.length > 0
      ? partners.filter((p) => p.isActive !== false)
      : DEFAULT_PARTNERS
  )
    .slice()
    .sort((a, b) => (a.displayOrder ?? 99) - (b.displayOrder ?? 99));

  // Repeat the list for seamless continuous infinite scroll
  const marqueeList = [...activeBanks, ...activeBanks, ...activeBanks];

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
            <TickerBankItem key={`${b.id || b.name}-${idx}`} partner={b} />
          ))}
        </div>
      </div>
    </div>
  );
}
