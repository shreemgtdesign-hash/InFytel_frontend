import React, { useEffect, useRef, useState } from 'react';
import { Flag, Eye } from 'lucide-react';
import humanHandImg from '../assets/Human_hand .png';
import aiHandImg from '../assets/AI_hand.png';
import bulbImg from '../assets/Bulb.png';
import eyeBgImg from '../assets/Eye.png';

export default function VisionMission() {
  const headerRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  const [headerInView, setHeaderInView] = useState(false);
  const [missionInView, setMissionInView] = useState(false);
  const [visionInView, setVisionInView] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setHeaderInView(true);
      setMissionInView(true);
      setVisionInView(true);
      return;
    }

    const targets = [
      { el: headerRef.current, setVisible: setHeaderInView },
      { el: missionRef.current, setVisible: setMissionInView },
      { el: visionRef.current, setVisible: setVisionInView },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const match = targets.find((t) => t.el === entry.target);
          if (match) {
            match.setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach(({ el }) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const revealEase = 'ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100';

  const bulbMotes = [
    { left: '34%', top: '24%', size: 'w-1.5 h-1.5', color: 'bg-amber-300', delay: '0s', duration: '3.6s' },
    { left: '72%', top: '28%', size: 'w-1 h-1', color: 'bg-yellow-200', delay: '0.9s', duration: '4.1s' },
    { left: '46%', top: '16%', size: 'w-1.5 h-1.5', color: 'bg-orange-300', delay: '1.7s', duration: '3.8s' },
    { left: '66%', top: '42%', size: 'w-1 h-1', color: 'bg-amber-200', delay: '2.3s', duration: '4.4s' },
    { left: '28%', top: '44%', size: 'w-1 h-1', color: 'bg-sky-300', delay: '1.2s', duration: '4.2s' },
  ];

  return (
    <section id="vision-mission" className="relative overflow-hidden select-none">
      {/* =========================================================
          1. TOP HEADER BAND (VISION & MISSION)
         ========================================================= */}
      <div
        ref={headerRef}
        className="relative bg-[#010306] pt-20 pb-14 sm:pt-24 sm:pb-16 overflow-hidden"
      >
        {/* Top laser sweep border when entering from Hero */}
        <div
          className={`absolute inset-x-0 top-0 h-[1px] pointer-events-none transition-all duration-[1000ms] origin-center ${revealEase} ${
            headerInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(56, 189, 248, 0.35) 30%, rgba(225, 44, 44, 0.55) 50%, rgba(56, 189, 248, 0.35) 70%, transparent 100%)',
          }}
        />

        {/* Particular Area 1: Top-left deep teal edge glow (#01121c -> #010a11) */}
        <div
          className="absolute inset-y-0 left-0 w-[34%] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 90% 78% at 0% 24%, rgba(1, 30, 44, 0.88) 0%, rgba(1, 18, 28, 0.45) 45%, transparent 78%)',
          }}
        />

        {/* Particular Area 2: Bottom-right localized deep teal horizon glow (#091f2d -> #061721) */}
        <div
          className={`absolute inset-y-0 right-0 w-[60%] pointer-events-none transition-opacity duration-1000 ${
            headerInView ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background:
              'radial-gradient(ellipse 68% 82% at 68% 100%, rgba(9, 38, 56, 0.92) 0%, rgba(6, 23, 33, 0.68) 44%, rgba(2, 10, 16, 0.25) 74%, transparent 92%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-2.5 mb-5 transition-all duration-700 ${revealEase} ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E12C2C] shadow-[0_0_8px_#E12C2C]" />
            <span className="text-[11px] font-semibold text-[#2AB3E9] uppercase tracking-[0.22em] font-mono">
              VISION &amp; MISSION
            </span>
          </div>

          {/* Headline - exact 3-line sentence formation from design */}
          <h2
            className={`text-2xl sm:text-[28px] lg:text-[32px] xl:text-[34px] font-bold text-white tracking-[-0.02em] leading-[1.32] max-w-4xl transition-all duration-[850ms] delay-150 ${revealEase} ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
            }`}
          >
            Business <span className="text-[#14A8EB]">growth</span> is our core motivation. We seek out <br className="hidden lg:inline" />
            the best technology in the world and make it work for  <br className="hidden lg:inline" />
             the globe&apos;s most forward-thinking companies.
          </h2>
        </div>
      </div>

      {/* =========================================================
          2. MISSION BAND (Human Hand + AI Hand Touch Connection)
         ========================================================= */}
      <div
        ref={missionRef}
        className="relative bg-[#020611]  overflow-hidden"
      >
        {/* Left-edge Crimson Wedge Flare matching updated design */}
        <div
          className="absolute inset-y-0 left-0 w-[280px] sm:w-[360px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 85% 58% at 0% 42%, rgba(185, 28, 28, 0.36) 0%, rgba(127, 29, 29, 0.14) 48%, transparent 78%)',
          }}
        />
        <div
          className="absolute left-0 top-[14%] w-[210px] h-[220px] pointer-events-none opacity-65"
          style={{
            clipPath: 'polygon(0 0, 100% 44%, 0 100%)',
            background: 'linear-gradient(90deg, rgba(185, 28, 28, 0.28) 0%, transparent 100%)',
          }}
        />

        {/* Subtle diagonal light reflection across backdrop */}
        <div
          className="absolute inset-0 pointer-events-none opacity-45"
          style={{
            background:
              'linear-gradient(125deg, transparent 22%, rgba(255, 255, 255, 0.025) 38%, rgba(2, 6, 17, 0.7) 40%, transparent 65%)',
          }}
        />

        {/* Right-side Animated Cyber Grid behind hands */}
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-[66%] pointer-events-none animate-mission-grid"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.08) 1px, transparent 1px)',
            backgroundSize: '42px 42px',
            maskImage:
              'radial-gradient(ellipse 75% 80% at 62% 45%, black 20%, transparent 78%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 75% 80% at 62% 45%, black 20%, transparent 78%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-[72px] relative z-10">
          {/* Top Row: Frosted Badge Card + Animated Hands Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: The |Mission Card */}
            <div
              className={`lg:col-span-4 flex items-center transition-all duration-[850ms] delay-100 ${revealEase} ${
                missionInView
                  ? 'opacity-100 translate-x-0 scale-100'
                  : 'opacity-0 -translate-x-10 scale-95'
              }`}
            >
              <div className="inline-flex flex-col items-start px-7 py-6 sm:px-8 sm:py-7 rounded-2xl bg-[#0F1F34]/85 border border-white/[0.08] backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.07)]">
                <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.09] flex items-center justify-center mb-4 text-slate-200">
                  <Flag className="w-4 h-4" />
                </div>
                <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight flex items-center">
                  <span className="text-white">The</span>
                  <span className="text-white/80 font-light mx-1.5">|</span>
                  <span className="text-[#1AA7EC] drop-shadow-[0_0_14px_rgba(26,167,236,0.45)]">
                    Mission
                  </span>
                </h3>
              </div>
            </div>

            {/* Right Column: Human Hand & AI Hand Touching Stage */}
            <div className="lg:col-span-8 flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[660px] aspect-[1188/474]">
                {/* Ambient Holographic Cyan Halo behind AI Hand */}
                <div
                  className={`absolute right-[6%] top-[10%] w-[56%] h-[74%] rounded-full pointer-events-none blur-3xl transition-opacity duration-1000 delay-200 ${
                    missionInView ? 'opacity-75' : 'opacity-0'
                  }`}
                  style={{
                    background:
                      'radial-gradient(circle, rgba(14, 165, 233, 0.24) 0%, rgba(56, 189, 248, 0.08) 55%, transparent 80%)',
                  }}
                />

                {/* Human Hand (Left side, 543/1188 = 45.707%) */}
                <div
                  className={`absolute left-0 top-0 w-[45.707%] h-full pointer-events-none transition-all duration-[1000ms] delay-150 ${revealEase} ${
                    missionInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                  }`}
                  style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to right, transparent 0%, black 18%, black 100%)',
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      maskImage: 'linear-gradient(to top, transparent 0%, black 14%, black 100%)',
                      WebkitMaskImage:
                        'linear-gradient(to top, transparent 0%, black 14%, black 100%)',
                    }}
                  >
                    <img
                      src={humanHandImg}
                      alt="Human hand reaching toward technology"
                      className="w-full h-full object-contain animate-human-hand-touch"
                    />
                  </div>
                </div>

                {/* AI Hand (Right side, 645/1188 = 54.293%) */}
                <div
                  className={`absolute right-0 top-0 w-[54.293%] h-full pointer-events-none transition-all duration-[1000ms] delay-150 ${revealEase} ${
                    missionInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
                  }`}
                  style={{
                    maskImage: 'linear-gradient(to left, transparent 0%, black 14%, black 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to left, transparent 0%, black 14%, black 100%)',
                  }}
                >
                  <img
                    src={aiHandImg}
                    alt="AI robotic hand reaching toward human hand"
                    className="w-full h-full object-contain animate-ai-hand-touch"
                  />
                </div>

                {/* Synapse Touch Spark Overlay anchored at exact fingertip meeting point (45.65%, 22.05%) */}
                <div
                  className={`absolute pointer-events-none z-20 transition-opacity duration-700 delay-500 ${
                    missionInView ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ left: '45.65%', top: '22.05%' }}
                >
                  {/* Expanding Primary Shockwave Ring */}
                  <div
                    className="absolute left-0 top-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-cyan-300/80 shadow-[0_0_16px_rgba(56,189,248,0.65)] animate-synapse-wave-1"
                  />

                  {/* Expanding Secondary Shockwave Ring */}
                  <div
                    className="absolute left-0 top-0 w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-sky-400/50 animate-synapse-wave-2"
                  />

                  {/* Horizontal Anamorphic Star Flare */}
                  <div
                    className="absolute left-0 top-0 w-28 sm:w-36 h-[3px] rounded-full animate-synapse-star"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.7) 35%, #FFFFFF 50%, rgba(56,189,248,0.7) 65%, transparent 100%)',
                      boxShadow: '0 0 14px 2px rgba(56, 189, 248, 0.8)',
                    }}
                  />

                  {/* Vertical Anamorphic Flare */}
                  <div
                    className="absolute left-0 top-0 w-[2px] h-16 sm:h-20 rounded-full animate-synapse-star"
                    style={{
                      background:
                        'linear-gradient(180deg, transparent 0%, rgba(56,189,248,0.6) 35%, #FFFFFF 50%, rgba(56,189,248,0.6) 65%, transparent 100%)',
                    }}
                  />

                  {/* Bright White-Cyan Core Connection Flash */}
                  <div
                    className="absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full animate-synapse-core mix-blend-screen"
                    style={{
                      background:
                        'radial-gradient(circle, #FFFFFF 0%, #BAE6FD 28%, rgba(14, 165, 233, 0.75) 55%, transparent 78%)',
                      boxShadow: '0 0 28px 8px rgba(56, 189, 248, 0.75)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Mission Copy - exact 3-line sentence formation from design */}
          <p
            className={`mt-8 sm:mt-10 text-[#A3B3C6] text-sm sm:text-[15px] lg:text-[15.5px] leading-[1.7] max-w-4xl font-normal transition-all duration-[850ms] delay-300 ${revealEase} ${
              missionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            We are committed to providing exceptional software engineering, cloud architecture, <br className="hidden lg:inline" />
            and cybersecurity services. By bridging the gap between business needs and <br className="hidden lg:inline" />
            technological capabilities, we help our clients thrive in a digital-first economy.
          </p>
        </div>
      </div>

      {/* =========================================================
          3. VISION BAND (Eye Background + Brightening Lightbulb)
         ========================================================= */}
      <div
        ref={visionRef}
        className="relative bg-[#030A18] border-b border-white/[0.06] overflow-hidden"
      >
        {/* Eye Cyber HUD Circuit Background Image */}
        <div
          className={`absolute inset-0 pointer-events-none transition-all duration-[1100ms] ease-out ${
            visionInView ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.04]'
          }`}
        >
          <img
            src={eyeBgImg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center animate-vision-eye-bg"
          />
          {/* Subtle contrast vignette so Eye HUD rings & circuit lines shine subtly */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(2, 7, 18, 0.42) 0%, rgba(3, 10, 24, 0.25) 50%, rgba(2, 7, 18, 0.55) 100%)',
            }}
          />
        </div>

        {/* Left Blue-Warm Spotlight Backdrop behind Bulb */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[420px] sm:w-[520px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 75% 70% at 24% 48%, rgba(14, 116, 144, 0.24) 0%, rgba(2, 132, 199, 0.08) 48%, transparent 78%)',
          }}
        />

        {/* Right-edge Crimson Wedge Flare matching updated design */}
        <div
          className="absolute inset-y-0 right-0 w-[260px] sm:w-[340px] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 85% 58% at 100% 38%, rgba(185, 28, 28, 0.34) 0%, rgba(127, 29, 29, 0.14) 48%, transparent 78%)',
          }}
        />
        <div
          className="absolute right-0 top-[8%] w-[190px] h-[240px] pointer-events-none opacity-65"
          style={{
            clipPath: 'polygon(100% 0, 0 42%, 100% 100%)',
            background: 'linear-gradient(270deg, rgba(185, 28, 28, 0.28) 0%, transparent 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-[72px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Animated Brightening Lightbulb */}
            <div
              className={`lg:col-span-5 flex items-center justify-center lg:justify-start lg:pl-2 transition-all duration-[950ms] delay-100 ${revealEase} ${
                visionInView
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-90'
              }`}
            >
              <div className="relative w-[220px] sm:w-[270px] lg:w-[300px] aspect-[530/734]">
                {/* Ambient Golden-Amber Volumetric Aura anchored to filament center (57.3%, 37.5%) */}
                <div
                  className="absolute rounded-full pointer-events-none mix-blend-screen animate-bulb-aura"
                  style={{
                    left: '57.3%',
                    top: '37.5%',
                    width: '135%',
                    height: '98%',
                    background:
                      'radial-gradient(circle, rgba(254, 243, 199, 0.55) 0%, rgba(251, 146, 60, 0.38) 28%, rgba(234, 88, 12, 0.14) 55%, transparent 76%)',
                  }}
                />

                {/* Rotating Volumetric Light Rays centered on filament */}
                <div
                  className="absolute pointer-events-none mix-blend-screen animate-bulb-rays-pulse"
                  style={{
                    left: '57.3%',
                    top: '37.5%',
                    width: '128%',
                    height: '92%',
                  }}
                >
                  <div
                    className="w-full h-full rounded-full animate-bulb-rays-spin"
                    style={{
                      background:
                        'repeating-conic-gradient(from 0deg, rgba(253, 224, 71, 0.28) 0deg 8deg, transparent 8deg 30deg)',
                      maskImage:
                        'radial-gradient(circle, black 8%, rgba(0,0,0,0.45) 42%, transparent 72%)',
                      WebkitMaskImage:
                        'radial-gradient(circle, black 8%, rgba(0,0,0,0.45) 42%, transparent 72%)',
                    }}
                  />
                </div>

                {/* Intense White-Gold Filament Core Bloom */}
                <div
                  className="absolute rounded-full pointer-events-none mix-blend-screen animate-bulb-aura"
                  style={{
                    left: '57.3%',
                    top: '37.5%',
                    width: '54%',
                    height: '40%',
                    background:
                      'radial-gradient(circle, #FFFFFF 0%, rgba(254, 240, 138, 0.85) 30%, rgba(249, 115, 22, 0.4) 60%, transparent 80%)',
                  }}
                />

                {/* Rising Light Motes / Ember Sparks */}
                {bulbMotes.map((mote, i) => (
                  <span
                    key={i}
                    className={`absolute rounded-full ${mote.size} ${mote.color} pointer-events-none z-20 animate-bulb-mote shadow-[0_0_8px_currentColor]`}
                    style={{
                      left: mote.left,
                      top: mote.top,
                      animationDelay: mote.delay,
                      animationDuration: mote.duration,
                    }}
                  />
                ))}

                {/* Bulb PNG with Brightening Surge Filter & Micro-Levitation */}
                <img
                  src={bulbImg}
                  alt="Illuminated Vision Lightbulb"
                  className="relative z-10 w-full h-full object-contain animate-bulb-brighten"
                />
              </div>
            </div>

            {/* Right Column: The |Vision Card & Copy (Center octagons remain unobstructed) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="w-full lg:w-fit lg:ml-auto lg:mr-8 xl:mr-12 flex flex-col items-start">
                {/* Top-Right Frosted Badge Card - right edge aligns with end of first Vision sentence */}
                <div
                  className={`self-start lg:self-end mb-10 sm:mb-14 transition-all duration-[850ms] delay-200 ${revealEase} ${
                    visionInView
                      ? 'opacity-100 translate-x-0 scale-100'
                      : 'opacity-0 translate-x-10 scale-95'
                  }`}
                >
                  <div className="inline-flex flex-col items-start px-7 py-6 sm:px-8 sm:py-7 rounded-2xl bg-[#0D1A2E]/85 border border-white/[0.08] backdrop-blur-md shadow-[0_24px_60px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.07)]">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.09] flex items-center justify-center mb-4 text-slate-200">
                      <Eye className="w-4 h-4" />
                    </div>
                    <h3 className="text-2xl sm:text-[26px] font-bold tracking-tight flex items-center text-[#1AA7EC] drop-shadow-[0_0_14px_rgba(26,167,236,0.45)]">
                      <span>The</span>
                      <span className="font-light mx-1.5 opacity-85">|</span>
                      <span>Vision</span>
                    </h3>
                  </div>
                </div>

                {/* Bottom-Right Vision Copy - exact 3-line sentence formation ending flush with Vision card right edge */}
                <p
                  className={`text-[#A3B3C6] text-sm sm:text-[15px] lg:text-[15.5px] leading-[1.7] text-left font-normal transition-all duration-[850ms] delay-300 ${revealEase} ${
                    visionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                  }`}
                >
                  To be the most trusted technology partner for organisations <br className="hidden lg:inline" />
                  across Global, turning every complex requirement into a <br className="hidden lg:inline" />
                  solution that works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
