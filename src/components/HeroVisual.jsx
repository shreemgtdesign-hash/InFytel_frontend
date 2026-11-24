import React from 'react';
import { MessageSquare, CreditCard, Cloud, ShieldCheck } from 'lucide-react';

export default function HeroVisual({ slide }) {
  const visualType = slide?.visualType || '3d-orbit-sphere';
  const metrics = slide?.metrics || {};

  // Custom data per visualType
  const getVisualData = () => {
    switch (visualType) {
      case '3d-shield':
        return {
          metric1Title: 'Threats stopped',
          metric1Val: metrics.threatsStopped || '1.2M',
          metric1Badge: metrics.growth || '+41.7%',
          tagTitle: 'Protection',
          tags: metrics.protection || ['Firewall', 'SASE', 'PAM', 'SOC'],
          gaugeVal: metrics.riskReduced || '87%',
          gaugeLabel: 'Risk reduced',
          chartTitle: 'Incidents',
          chartData: [40, 65, 50, 85, 30, 20, 15]
        };
      case '3d-smartcard':
        return {
          metric1Title: 'Transactions',
          metric1Val: metrics.transactions || '2.4M',
          metric1Badge: metrics.growth || '+26.4%',
          tagTitle: 'Compliance',
          tags: metrics.compliance || ['KYC', 'AML', 'Fraud', 'Cards'],
          gaugeVal: metrics.fraudBlocker || '92%',
          gaugeLabel: 'Fraud Blocker',
          chartTitle: 'Approval Rate',
          chartData: [60, 75, 70, 85, 90, 88, 94]
        };
      case '3d-robot-agent':
        return {
          metric1Title: 'Queries resolved',
          metric1Val: metrics.queriesResolved || '70%',
          metric1Badge: metrics.growth || '+18.4%',
          tagTitle: 'Channels',
          tags: metrics.channels || ['WhatsApp', 'Web chat', 'Mobile app', 'Email'],
          gaugeVal: metrics.csat || '92%',
          gaugeLabel: 'CSAT score',
          chartTitle: 'Response time',
          chartData: [70, 85, 75, 95, 45, 35, 20]
        };
      case '3d-orbit-sphere':
      case '3d-datacenter':
      default:
        return {
          metric1Title: 'Brands served',
          metric1Val: metrics.brandsServed || '60+',
          metric1Badge: metrics.growth || '+18.4%',
          tagTitle: 'Industries',
          tags: metrics.industries || ['Banking', 'Government', 'Retail', 'Hospitality'],
          gaugeVal: metrics.uptimeSla || '92%',
          gaugeLabel: 'Uptime SLA',
          chartTitle: metrics.chartTitle || 'Solutions Delivered',
          chartData: metrics.chartData || [45, 70, 60, 88, 75, 95, 50, 30]
        };
    }
  };

  const vData = getVisualData();

  return (
    <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[540px] flex items-center justify-center select-none overflow-visible">
      
      {/* Background Radial Glows */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/15 blur-[95px] pointer-events-none -top-10 -right-10"></div>
      <div className="absolute w-[360px] h-[360px] rounded-full bg-red-500/15 blur-[85px] pointer-events-none -bottom-10 -left-10"></div>

      {/* Futuristic Circular Pedestal Platform */}
      <div className="absolute bottom-12 sm:bottom-16 w-64 sm:w-80 h-28 flex flex-col items-center justify-end z-10 pointer-events-none">
        
        {/* Upward Hologram Light Cone */}
        <div className="absolute bottom-8 w-48 sm:w-60 h-44 bg-gradient-to-t from-cyan-400/20 via-cyan-500/5 to-transparent blur-md rounded-t-full"></div>
        
        {/* Top Rim of Pedestal with Neon Cyan Ring */}
        <div className="relative w-56 sm:w-72 h-14 rounded-[100%] bg-gradient-to-b from-[#132247] to-[#0A1224] border-2 border-[#00D2FF] shadow-[0_0_25px_#00D2FF,inset_0_0_15px_rgba(0,210,255,0.6)] flex items-center justify-center">
          {/* Inner ring reflection */}
          <div className="w-48 sm:w-60 h-9 rounded-[100%] border border-cyan-300/40 bg-gradient-to-t from-[#0d1c3a] to-[#1c3366] flex items-center justify-center shadow-inner">
            <div className="w-36 sm:w-44 h-5 rounded-[100%] bg-cyan-400/20 blur-sm"></div>
          </div>
        </div>

        {/* Cylinder Body of Pedestal */}
        <div className="w-52 sm:w-68 h-9 -mt-6 bg-gradient-to-b from-[#0C152B] via-[#080E1D] to-[#050A14] border-x border-[#00D2FF]/40 relative">
          {/* Lower Neon Ring */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#00D2FF] shadow-[0_0_15px_#00D2FF]"></div>
        </div>

        {/* Base Rim of Pedestal */}
        <div className="w-60 sm:w-76 h-8 -mt-2 rounded-[100%] bg-[#050A14] border border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"></div>
      </div>

      {/* 3D Floating Element */}
      <div className="relative z-20 mb-16 animate-floating flex items-center justify-center">
        
        {/* 1. WHY INFYTEL / ORBIT SPHERE VISUAL */}
        {(visualType === '3d-orbit-sphere' || visualType === '3d-datacenter') && (
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center filter drop-shadow-[0_20px_45px_rgba(0,210,255,0.45)]">
            
            {/* Center Glowing Glass Orb / Holographic Sphere */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[#021338] via-[#0284c7] to-[#ffffff] border-2 border-white/60 shadow-[0_0_50px_#00D2FF,inset_0_0_35px_rgba(255,255,255,0.8)] flex items-center justify-center overflow-hidden">
              {/* Inner glowing pulse */}
              <div className="w-24 h-24 rounded-full bg-cyan-300/50 blur-lg animate-pulse"></div>
              {/* Top glass reflection highlight */}
              <div className="absolute top-2 left-6 right-6 h-10 rounded-full bg-gradient-to-b from-white/70 to-transparent blur-[1px]"></div>
            </div>

            {/* Orbit Ring 1: Cyan Neon Diagonal Ring */}
            <div className="absolute w-56 h-32 sm:w-64 sm:h-36 rounded-[100%] border-2 border-[#00D2FF] shadow-[0_0_20px_#00D2FF] transform -rotate-[28deg] pointer-events-none"></div>

            {/* Orbit Ring 2: Red/Coral Neon Diagonal Ring */}
            <div className="absolute w-56 h-32 sm:w-64 sm:h-36 rounded-[100%] border-2 border-[#EF4444] shadow-[0_0_20px_#EF4444] transform rotate-[32deg] pointer-events-none"></div>

            {/* Satellite Beads along orbits */}
            <div className="absolute top-8 left-12 w-3 h-3 rounded-full bg-[#EF4444] shadow-[0_0_12px_#EF4444] animate-ping"></div>
            <div className="absolute bottom-10 right-14 w-3 h-3 rounded-full bg-[#00D2FF] shadow-[0_0_12px_#00D2FF]"></div>

            {/* 4 Circular Glass Practice Nodes Mounted on Orbits */}
            
            {/* Node 1: AI Chatbot (Top-Left) */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B1530]/90 backdrop-blur-md border-2 border-[#00D2FF] shadow-[0_0_18px_#00D2FF] flex items-center justify-center text-cyan-300">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-current/30" />
            </div>

            {/* Node 2: Card & Payments (Top-Right) */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B1530]/90 backdrop-blur-md border-2 border-[#00D2FF] shadow-[0_0_18px_#00D2FF] flex items-center justify-center text-cyan-300">
              <CreditCard className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            {/* Node 3: Cloud & Data (Bottom-Left) */}
            <div className="absolute bottom-6 left-2 sm:bottom-8 sm:left-4 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B1530]/90 backdrop-blur-md border-2 border-[#00D2FF] shadow-[0_0_18px_#00D2FF] flex items-center justify-center text-cyan-300">
              <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            {/* Node 4: Cybersecurity (Bottom-Right) */}
            <div className="absolute bottom-6 right-2 sm:bottom-8 sm:right-4 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0B1530]/90 backdrop-blur-md border-2 border-[#00D2FF] shadow-[0_0_18px_#00D2FF] flex items-center justify-center text-cyan-300">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>
        )}

        {/* 2. ROBOT AGENT VISUAL */}
        {visualType === '3d-robot-agent' && (
          <div className="relative w-48 h-56 sm:w-56 sm:h-64 flex flex-col items-center justify-center filter drop-shadow-[0_20px_35px_rgba(0,210,255,0.35)]">
            {/* Robot Head */}
            <div className="relative w-36 h-32 sm:w-44 sm:h-36 rounded-[40px] bg-gradient-to-b from-[#ffffff] via-[#e2e8f0] to-[#cbd5e1] border-2 border-white shadow-[0_10px_25px_rgba(0,0,0,0.4),inset_0_-8px_15px_rgba(148,163,184,0.5)] flex items-center justify-center z-20">
              {/* Ears */}
              <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-4 h-10 rounded-full bg-[#1e293b] border-2 border-[#00D2FF] shadow-[0_0_12px_#00D2FF] flex items-center justify-center">
                <div className="w-1.5 h-4 rounded-full bg-[#00D2FF] animate-pulse"></div>
              </div>
              <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-4 h-10 rounded-full bg-[#1e293b] border-2 border-[#00D2FF] shadow-[0_0_12px_#00D2FF] flex items-center justify-center">
                <div className="w-1.5 h-4 rounded-full bg-[#00D2FF] animate-pulse"></div>
              </div>

              {/* Glossy Black Visor */}
              <div className="w-[85%] h-[70%] rounded-[26px] bg-[#070b19] border border-slate-700/80 shadow-[inset_0_4px_12px_rgba(0,0,0,0.9)] flex items-center justify-around px-5 relative overflow-hidden">
                <div className="absolute top-1 left-2 right-2 h-4 bg-gradient-to-b from-white/25 to-transparent rounded-full pointer-events-none"></div>
                {/* Cheerful Cyan Eyes */}
                <div className="w-7 h-5 rounded-t-full border-t-4 border-x-2 border-b-0 border-[#00D2FF] shadow-[0_0_15px_#00D2FF] -rotate-6"></div>
                <div className="w-7 h-5 rounded-t-full border-t-4 border-x-2 border-b-0 border-[#00D2FF] shadow-[0_0_15px_#00D2FF] rotate-6"></div>
              </div>
            </div>

            {/* Robot Body */}
            <div className="relative w-28 h-24 sm:w-32 sm:h-28 -mt-4 rounded-b-[40px] rounded-t-[20px] bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#94a3b8] border-2 border-white shadow-[0_15px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center z-10">
              <div className="w-6 h-6 rounded-full bg-[#1e293b] border-2 border-[#EF4444] shadow-[0_0_15px_#EF4444] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#F43F5E] to-[#EF4444] shadow-[0_0_8px_#EF4444] animate-pulse"></div>
              </div>
              <div className="w-14 h-1 mt-3 bg-slate-400/60 rounded-full"></div>
            </div>

            {/* Floating Arms */}
            <div className="absolute -left-6 top-28 w-8 h-14 rounded-full bg-gradient-to-b from-white to-slate-400 border border-white shadow-lg rotate-12 transform -translate-y-2"></div>
            <div className="absolute -right-6 top-28 w-8 h-14 rounded-full bg-gradient-to-b from-white to-slate-400 border border-white shadow-lg -rotate-12 transform -translate-y-2"></div>
          </div>
        )}

        {/* 3. SMARTCARD FINTECH VISUAL */}
        {visualType === '3d-smartcard' && (
          <div className="relative w-64 h-48 sm:w-72 sm:h-52 filter drop-shadow-[0_20px_40px_rgba(56,189,248,0.4)] flex items-center justify-center">
            <div className="w-56 h-36 sm:w-64 sm:h-40 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-slate-900/80 to-blue-900/60 backdrop-blur-xl border border-cyan-400/70 shadow-[0_0_30px_rgba(0,210,255,0.3),inset_0_1px_15px_rgba(255,255,255,0.4)] p-4 flex flex-col justify-between transform -rotate-6 transition-transform hover:rotate-0 duration-300">
              <div className="flex items-center justify-between">
                <div className="w-10 h-7 rounded-md bg-gradient-to-br from-amber-300 to-amber-500 border border-amber-200/80 shadow-md flex items-center justify-center">
                  <div className="w-7 h-5 border border-amber-900/40 rounded-sm"></div>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-red-500/80"></div>
                  <div className="w-6 h-6 rounded-full bg-amber-400/80 -ml-3"></div>
                </div>
              </div>
              <div className="text-white/80 font-mono tracking-widest text-xs sm:text-sm font-semibold">
                •••• •••• •••• 8492
              </div>
              <div className="flex justify-between items-end text-[10px] text-cyan-200 uppercase font-mono">
                <div>
                  <span className="text-slate-400 block text-[8px]">Card Holder</span>
                  INFYTEL ENTERPRISE
                </div>
                <div>
                  <span className="text-slate-400 block text-[8px]">VALID THRU</span>
                  12/29
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-2 w-16 h-20 sm:w-20 sm:h-24 rounded-b-full bg-gradient-to-b from-[#EF4444] to-[#991B1B] border-2 border-rose-300 shadow-[0_0_25px_#EF4444] flex items-center justify-center transform rotate-6">
              <svg className="w-8 h-8 text-white filter drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        )}

        {/* 4. CYBERSECURITY SHIELD VISUAL */}
        {visualType === '3d-shield' && (
          <div className="relative w-56 h-60 sm:w-64 sm:h-68 flex items-center justify-center filter drop-shadow-[0_20px_45px_rgba(0,210,255,0.45)]">
            <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-b-[70px] rounded-t-xl bg-gradient-to-b from-slate-200 via-rose-600 to-red-900 p-2 shadow-[0_15px_35px_rgba(0,0,0,0.7)] flex items-center justify-center border border-white/60">
              <div className="w-full h-full rounded-b-[60px] rounded-t-lg bg-gradient-to-b from-[#0B1530] via-[#0D1D42] to-[#040817] border-2 border-[#00D2FF] shadow-[0_0_30px_#00D2FF,inset_0_0_20px_rgba(0,210,255,0.5)] flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00D2FF_1px,transparent_1px)] [background-size:12px_12px]"></div>
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-t-full border-4 border-[#00D2FF] border-b-0 shadow-[0_0_15px_#00D2FF]"></div>
                  <div className="w-16 h-14 -mt-2 rounded-xl bg-gradient-to-b from-cyan-400 to-blue-600 shadow-[0_0_20px_#00D2FF] border border-cyan-200 flex items-center justify-center">
                    <div className="w-3 h-5 rounded-full bg-slate-900 border border-cyan-100 flex items-center justify-center">
                      <div className="w-1 h-2 bg-cyan-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-[#00D2FF] mt-3 uppercase">
                  ZERO BREACH
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FLOATING GLASS HUD CARDS */}

      {/* 1. TOP-LEFT CARD: Metric & Sparkline */}
      <div className="absolute top-4 left-0 sm:left-4 z-30 glass-panel rounded-2xl p-3 sm:p-4 w-36 sm:w-44 shadow-glass border border-white/10 hover:border-cyan-400/40 transition-colors animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-medium">{vData.metric1Title}</span>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-full">
            {vData.metric1Badge}
          </span>
        </div>
        <div className="text-xl sm:text-2xl font-black text-white mt-1">
          {vData.metric1Val}
        </div>
        {/* Glowing mini sparkline */}
        <div className="mt-2 h-7 w-full flex items-end">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
            <defs>
              <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00D2FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path 
              d="M0,25 Q25,22 40,15 T70,12 T100,4 L100,30 L0,30 Z" 
              fill="url(#sparklineGrad)" 
            />
            <path 
              d="M0,25 Q25,22 40,15 T70,12 T100,4" 
              fill="none" 
              stroke="#00D2FF" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
            />
          </svg>
        </div>
      </div>

      {/* 2. TOP-RIGHT CARD: Industries / Categories Pill List */}
      <div className="absolute top-6 right-0 sm:right-4 z-30 glass-panel rounded-2xl p-3 sm:p-4 w-36 sm:w-44 shadow-glass border border-white/10 hover:border-cyan-400/40 transition-colors animate-in fade-in zoom-in-95 duration-200">
        <span className="text-[11px] text-slate-400 font-medium block mb-2">{vData.tagTitle}</span>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
          {vData.tags.map((tag, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-200 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shrink-0"></span>
              <span className="truncate">{tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. BOTTOM-LEFT CARD: Circular Gauge */}
      <div className="absolute bottom-6 left-2 sm:left-6 z-30 glass-panel rounded-2xl p-2.5 sm:p-3 flex items-center gap-3 shadow-glass border border-white/10 hover:border-red-400/40 transition-colors">
        <div className="relative w-11 h-11 flex items-center justify-center">
          <svg className="w-11 h-11 -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-slate-800"
              strokeWidth="3.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-[#EF4444]"
              strokeDasharray="92, 100"
              strokeWidth="3.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span className="absolute text-[11px] font-bold text-white font-mono">
            {vData.gaugeVal}
          </span>
        </div>
        <div>
          <span className="text-[11px] text-slate-400 font-medium block">{vData.gaugeLabel}</span>
          <span className="text-xs font-semibold text-white flex items-center gap-1">
            Live
          </span>
        </div>
      </div>

      {/* 4. BOTTOM-RIGHT CARD: Animated Vertical Bar Chart */}
      <div className="absolute bottom-4 right-2 sm:right-6 z-30 glass-panel rounded-2xl p-3 sm:p-4 w-36 sm:w-44 shadow-glass border border-white/10 hover:border-cyan-400/40 transition-colors">
        <span className="text-[11px] text-slate-400 font-medium block mb-2">{vData.chartTitle}</span>
        <div className="flex items-end justify-between h-9 gap-1">
          {vData.chartData.map((val, idx) => {
            const isAlert = idx === vData.chartData.length - 1;
            return (
              <div 
                key={idx} 
                style={{ height: `${val}%` }} 
                className={`w-2.5 sm:w-3 rounded-t-sm transition-all duration-300 ${
                  isAlert 
                    ? 'bg-[#EF4444] shadow-[0_0_8px_#EF4444]' 
                    : 'bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.5)]'
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
