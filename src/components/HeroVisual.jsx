import React, { useState, useEffect, useCallback } from 'react';
import introImg from '../assets/introimg.png';
import aiBotImg from '../assets/ai-bot-img.png';
import cardImg from '../assets/card-img.png';
import itSecurityImg from '../assets/it-security-img.png';
export default function HeroVisual({ slide }) {
  const visualType = slide?.visualType || '3d-orbit-sphere';
  const metrics = slide?.metrics || {};

  // Resolve matching pasted image for current slide pillar
  const getImage = () => {
    switch (slide?.pillar) {
      case 'AI_AUTOMATION':
        return aiBotImg;
      case 'FINANCIAL_TECH':
        return cardImg;
      case 'CYBERSECURITY':
        return itSecurityImg;
      case 'WHY_INFYTEL':
      default:
        return introImg;
    }
  };

  const currentImg = getImage();

  // Custom data per visualType or pillar
  const getVisualData = () => {
    const p = slide?.pillar;
    if (p === 'CYBERSECURITY' || visualType === '3d-shield') {
      return {
        metric1Title: 'Threats stopped',
        metric1Val: metrics.threatsStopped || '1.2M',
        metric1Badge: metrics.growth || '+41.7%',
        tagTitle: 'Protection',
        tags: metrics.protection || ['Firewall', 'SASE', 'PAM', 'SOC'],
        gaugeVal: metrics.riskReduced || '87%',
        gaugeLabel: 'Risk reduced',
        chartTitle: 'Incidents',
        chartData: [82, 88, 68, 52, 40, 28, 18]
      };
    }
    if (p === 'FINANCIAL_TECH' || visualType === '3d-smartcard') {
      return {
        metric1Title: 'Transactions',
        metric1Val: metrics.transactions || '2.4M',
        metric1Badge: metrics.growth || '+24.4%',
        tagTitle: 'Compliance',
        tags: metrics.compliance || ['KYC', 'AML', 'Fraud', 'Cards'],
        gaugeVal: metrics.fraudBlocker || '92%',
        gaugeLabel: 'Fraud Blocker',
        chartTitle: 'Approval Rate',
        chartData: [45, 68, 88, 72, 92, 78, 95]
      };
    }
    if (p === 'AI_AUTOMATION' || visualType === '3d-robot-agent') {
      return {
        metric1Title: 'Queries resolved',
        metric1Val: metrics.queriesResolved || '70%',
        metric1Badge: metrics.growth || '+18.4%',
        tagTitle: 'Channels',
        tags: metrics.channels || ['WhatsApp', 'Web chat', 'Mobile app', 'Email'],
        gaugeVal: metrics.csat || '92%',
        gaugeLabel: 'CSAT score',
        chartTitle: 'Response time',
        chartData: [85, 75, 68, 55, 42, 30, 20]
      };
    }
    // Default: WHY_INFYTEL or 3d-orbit-sphere
    return {
      metric1Title: 'Brands served',
      metric1Val: metrics.brandsServed || '60+',
      metric1Badge: metrics.growth || '+18.4%',
      tagTitle: 'Industries',
      tags: metrics.industries || ['Banking', 'Government', 'Retail', 'Hospitality'],
      gaugeVal: metrics.uptimeSla || '92%',
      gaugeLabel: 'Uptime SLA',
      chartTitle: metrics.chartTitle || 'Solutions Delivered',
      chartData: metrics.chartData || [50, 85, 70, 92, 60, 42, 78]
    };
  };

  const vData = getVisualData();

  // Circular motion states:
  // Base angles: Top-Left (225°), Top-Right (315°), Bottom-Right (45°), Bottom-Left (135°)
  const baseAngles = [225, 315, 45, 135];
  // 2 motions only: circularly once (90°), and same reversely once (0°) every 5 seconds
  const [rotationAngle, setRotationAngle] = useState(0);

  // Interval: every 5 seconds, toggle between circularly once (+90°) and reversely once (0°)
  useEffect(() => {
    const timer = setInterval(() => {
      setRotationAngle((prev) => (prev === 0 ? 90 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[280px] sm:h-[310px] lg:h-[335px] xl:h-[365px] flex items-center justify-center select-none overflow-visible">
      
      {/* Background Radial Glows */}
      <div 
        className="absolute w-[290px] sm:w-[350px] h-[290px] sm:h-[350px] rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none -top-4 -right-4 animate-hero-scale-in"
        style={{ animationDelay: '300ms' }}
      ></div>
      <div 
        className="absolute w-[250px] sm:w-[310px] h-[250px] sm:h-[310px] rounded-full bg-red-500/15 blur-[70px] pointer-events-none -bottom-4 -left-4 animate-hero-scale-in"
        style={{ animationDelay: '350ms' }}
      ></div>

      {/* 3D Centerpiece Image with Holographic Glow & Smooth Floating Animation (Slightly Bigger Size) */}
      <div 
        className="relative z-20 flex items-center justify-center animate-hero-scale-in select-none"
        style={{ animationDelay: '400ms' }}
      >
        <div className="relative flex items-center justify-center animate-floating select-none">
          {/* Subtle cyan glow reflection beneath the pedestal */}
          <div className="absolute -bottom-2 w-52 sm:w-60 h-11 bg-cyan-400/22 blur-xl rounded-full pointer-events-none"></div>

          <img 
            key={slide?.pillar || visualType}
            src={currentImg} 
            alt={slide?.pillar || 'Infytel 3D Visual'} 
            className="w-auto h-[245px] sm:h-[280px] lg:h-[310px] xl:h-[340px] max-w-[92vw] sm:max-w-md object-contain select-none pointer-events-none filter drop-shadow-[0_18px_40px_rgba(0,210,255,0.45)] animate-in fade-in zoom-in-95 duration-500"
            style={
              slide?.pillar === 'AI_AUTOMATION' || slide?.pillar === 'CYBERSECURITY'
                ? {
                    WebkitMaskImage: 'radial-gradient(ellipse 48% 48% at 50% 50%, black 72%, transparent 98%)',
                    maskImage: 'radial-gradient(ellipse 48% 48% at 50% 50%, black 72%, transparent 98%)'
                  }
                : undefined
            }
          />
        </div>
      </div>

      {/* 4 SURROUNDING GLASS HUD CARDS IN CIRCULAR ORBITAL MOTION (Close to 3D visual with full details) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
        <div className="relative w-0 h-0 flex items-center justify-center scale-x-[1.48] scale-y-[0.92]">

          {/* CARD 0: METRIC & SPARKLINE (Base angle 225° = Top-Left) */}
          <div
            className="absolute flex items-center justify-center transition-transform duration-1000 ease-in-out pointer-events-auto"
            style={{
              transform: `rotate(${baseAngles[0] + rotationAngle}deg) translate(var(--orbit-radius, 185px)) rotate(-${baseAngles[0] + rotationAngle}deg)`
            }}
          >
            <div className="scale-x-[0.675] scale-y-[1.087] origin-center">
              <div className="glass-panel-hud p-2.5 sm:p-3 w-[155px] sm:w-[170px]">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium whitespace-nowrap">{vData.metric1Title}</span>
                  <span className="text-[9.5px] font-bold text-emerald-400 bg-[#FFFFFF01] border border-emerald-500/20 px-1.5 py-0.5 rounded-full shrink-0">
                    {vData.metric1Badge}
                  </span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {vData.metric1Val}
                </div>
                {/* Glowing mini sparkline */}
                <div className="mt-1 h-6 sm:h-7 w-full flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M0,24 Q25,22 40,14 T70,10 T100,2 L100,30 L0,30 Z" 
                      fill="url(#sparklineGrad)" 
                    />
                    <path 
                      d="M0,24 Q25,22 40,14 T70,10 T100,2" 
                      fill="none" 
                      stroke="#00D2FF" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 1: INDUSTRIES / CATEGORIES PILL LIST (Base angle 315° = Top-Right) */}
          <div
            className="absolute flex items-center justify-center transition-transform duration-1000 ease-in-out pointer-events-auto"
            style={{
              transform: `rotate(${baseAngles[1] + rotationAngle}deg) translate(var(--orbit-radius, 185px)) rotate(-${baseAngles[1] + rotationAngle}deg)`
            }}
          >
            <div className="scale-x-[0.675] scale-y-[1.087] origin-center">
              <div className="glass-panel-hud p-2.5 sm:p-3 w-[185px] sm:w-[205px]">
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block mb-2">{vData.tagTitle}</span>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  {vData.tags.map((tag, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.035] border border-white/[0.06] text-[10px] sm:text-[11px] font-medium text-slate-200 whitespace-nowrap shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shrink-0 shadow-[0_0_6px_#00D2FF]"></span>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: ANIMATED VERTICAL BAR CHART (Base angle 45° = Bottom-Right) */}
          <div
            className="absolute flex items-center justify-center transition-transform duration-1000 ease-in-out pointer-events-auto"
            style={{
              transform: `rotate(${baseAngles[2] + rotationAngle}deg) translate(var(--orbit-radius, 185px)) rotate(-${baseAngles[2] + rotationAngle}deg)`
            }}
          >
            <div className="scale-x-[0.675] scale-y-[1.087] origin-center">
              <div className="glass-panel-hud p-2.5 sm:p-3 w-[160px] sm:w-[178px]">
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block mb-2 whitespace-nowrap">{vData.chartTitle}</span>
                <div className="flex items-end justify-between h-7 sm:h-8 gap-1.5">
                  {vData.chartData.map((val, idx) => {
                    const isAlert = idx === vData.chartData.length - 1;
                    return (
                      <div 
                        key={idx} 
                        style={{ height: `${val}%` }} 
                        className={`w-2.5 sm:w-3 rounded-t-sm transition-all duration-300 ${
                          isAlert 
                            ? 'bg-[#E12C2C] shadow-[0_0_8px_#E12C2C]' 
                            : 'bg-[#00D2FF] shadow-[0_0_6px_rgba(0,210,255,0.6)]'
                        }`}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: CIRCULAR SLA GAUGE (Base angle 135° = Bottom-Left) */}
          <div
            className="absolute flex items-center justify-center transition-transform duration-1000 ease-in-out pointer-events-auto"
            style={{
              transform: `rotate(${baseAngles[3] + rotationAngle}deg) translate(var(--orbit-radius, 185px)) rotate(-${baseAngles[3] + rotationAngle}deg)`
            }}
          >
            <div className="scale-x-[0.675] scale-y-[1.087] origin-center">
              <div className="glass-panel-hud p-2 sm:p-2.5 w-[145px] sm:w-[160px] flex items-center gap-2.5">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                  <svg className="w-9 h-9 sm:w-10 sm:h-10 -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-800/80"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#E12C2C]"
                      strokeDasharray={`${vData.gaugeVal.replace('%', '')}, 100`}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-[9.5px] sm:text-[10px] font-bold text-white font-mono">
                    {vData.gaugeVal}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] text-slate-300 font-medium block leading-tight whitespace-nowrap">{vData.gaugeLabel}</span>
                  <span className="text-[10.5px] sm:text-xs font-semibold text-white flex items-center gap-1 mt-0.5">
                    Live
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
