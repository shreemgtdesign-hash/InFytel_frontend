import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ShieldCheck, CreditCard, Bot, Sparkles, Layers 
} from 'lucide-react';

import Navbar from './components/Navbar.jsx';
import HeroVisual from './components/HeroVisual.jsx';
import BankTicker from './components/BankTicker.jsx';
import EmpoweringBusiness from './components/EmpoweringBusiness.jsx';
import VisionMission from './components/VisionMission.jsx';
import PracticesSection from './components/PracticesSection.jsx';
import ExcellenceFramework from './components/ExcellenceFramework.jsx';
import RealOutcomes from './components/RealOutcomes.jsx';
import Testimonials from './components/Testimonials.jsx';
import NewsSection from './components/NewsSection.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import AboutPage from './components/AboutPage.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';

import { getHomeData, getAboutData, getSuccessStories, HOME_DEFAULT_DATA } from './services/api.js';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home'); // 'home' | 'about'
  const [homeData, setHomeData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [isLiveApi, setIsLiveApi] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Modal State
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('Get a quote');

  // Initial Hero Slide Index: 0 -> Why Infytel
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [heroCardsEntranceDone, setHeroCardsEntranceDone] = useState(false);

  // Entrance animation completes after initial load; prevent any re-triggers when switching cards
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroCardsEntranceDone(true);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  // Fetch API data on mount
  useEffect(() => {
    async function loadAllData() {
      setLoading(true);
      const [hRes, aRes, sRes] = await Promise.all([
        getHomeData(),
        getAboutData(),
        getSuccessStories()
      ]);

      const rawSlides = (hRes.data?.heroSlides && hRes.data.heroSlides.length > 0)
        ? hRes.data.heroSlides
        : HOME_DEFAULT_DATA.heroSlides;
      const hasWhyInfytel = rawSlides.some(s => s.pillar === 'WHY_INFYTEL');
      const normalizedHeroSlides = hasWhyInfytel
        ? rawSlides
        : [HOME_DEFAULT_DATA.heroSlides[0], ...rawSlides];

      const mergedHomeData = {
        ...hRes.data,
        heroSlides: normalizedHeroSlides,
        realOutcomes: sRes?.data || hRes.data?.realOutcomes
      };
      setHomeData(mergedHomeData);
      setAboutData(aRes.data);
      setIsLiveApi(hRes.isLive || aRes.isLive || sRes.isLive);
      setLoading(false);

      // Default to Why Infytel (displayOrder 1 or WHY_INFYTEL)
      const whyIdx = normalizedHeroSlides.findIndex(s => s.pillar === 'WHY_INFYTEL');
      if (whyIdx !== -1) setActiveSlideIdx(whyIdx);
      else setActiveSlideIdx(0);
    }
    loadAllData();
  }, []);

  const heroSlides = (homeData?.heroSlides && homeData.heroSlides.length > 0)
    ? homeData.heroSlides
    : HOME_DEFAULT_DATA.heroSlides;
  const currentSlide = heroSlides[activeSlideIdx] || heroSlides[0] || {};

  // Exact slide content dictionary matching the Figma design specifications line-by-line
  const slideConfig = {
    'WHY_INFYTEL': {
      badge: 'Welcome to Infytel',
      headlinePart1: 'Powering growth',
      headlinePart2: 'With technology.',
      descLines: [
        'Infytel Communications is a Lagos-based IT company',
        'delivering AI, fintech, cloud and cybersecurity solutions to',
        "Africa's leading banks, government bodies and enterprises."
      ],
      primaryCta: 'Explore Services',
      secondaryCta: 'Discover Infytel'
    },
    'AI_AUTOMATION': {
      badge: 'AI-Powered Automation',
      headlinePart1: 'Smarter service.',
      headlinePart2: 'Happier Customers.',
      descLines: [
        "Infytel's AI chatbots answer, route and resolve customer",
        'queries across WhatsApp, web and mobile — instantly, in any',
        'language.'
      ],
      primaryCta: 'Explore Services',
      secondaryCta: 'Explore AI Chatbot'
    },
    'FINANCIAL_TECH': {
      badge: 'Fintech Solutions',
      headlinePart1: 'Safer Payment.',
      headlinePart2: 'Faster Growth.',
      descLines: [
        'From card issuing to anti-money laundering and fraud risk',
        "management — trusted by Africa's leading banks to move",
        'money securely.'
      ],
      primaryCta: 'Explore Services',
      secondaryCta: 'Explore Cards and Payments'
    },
    'CYBERSECURITY': {
      badge: 'Cybersecurity',
      headlinePart1: 'Stronger defence.',
      headlinePart2: 'Zero downtime.',
      descLines: [
        'Unified threat management, privileged access and round-',
        'the-clock network monitoring that stop attacks before they',
        'reach you.'
      ],
      primaryCta: 'Get in touch',
      secondaryCta: 'Explore IT Security'
    }
  };

  // 4 Pillar tabs matching the exact design and user screenshot
  const pillarTabs = [
    {
      id: 'why-infytel',
      title: 'Why Infytel',
      descLine1: '31 solution one trusted',
      descLine2: 'technology partener',
      icon: Sparkles,
      slidePillar: 'WHY_INFYTEL'
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot',
      descLine1: '24/7 smart conversations on',
      descLine2: 'every channel.',
      icon: Bot,
      slidePillar: 'AI_AUTOMATION'
    },
    {
      id: 'card-payments',
      title: 'Card & Payments',
      descLine1: 'Secure card issuing, AML and',
      descLine2: 'fraud control.',
      icon: CreditCard,
      slidePillar: 'FINANCIAL_TECH'
    },
    {
      id: 'it-security',
      title: 'IT Security',
      descLine1: 'SASE, PAM and 24/7 threat',
      descLine2: 'monitoring.',
      icon: ShieldCheck,
      slidePillar: 'CYBERSECURITY'
    }
  ];

  // Helper to switch slide by pillar
  const selectPillar = (pillarName) => {
    setHeroCardsEntranceDone(true);
    const idx = heroSlides.findIndex(s => s.pillar === pillarName);
    if (idx !== -1) {
      setActiveSlideIdx(idx);
    } else if (pillarName === 'WHY_INFYTEL') {
      setActiveSlideIdx(0);
    }
  };

  // Navigation handler
  const handleNavigate = (route, sectionId = null) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleOpenQuote = (subject = 'Get a quote') => {
    setModalSubject(subject);
    setQuoteModalOpen(true);
  };

  const currentPillar = currentSlide.pillar || 'WHY_INFYTEL';
  const slideText = slideConfig[currentPillar] || slideConfig['WHY_INFYTEL'];

  return (
    <div className={`min-h-screen bg-[#070D1D] text-slate-100 ${isDark ? 'dark' : ''}`}>
      
      {currentRoute === 'home' ? (
        <>
          {/* INITIAL SCREEN HERO SECTION (100% viewport coverage on desktop) */}
          <section className="relative min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between hero-cyber-bg overflow-hidden select-none">
            {/* 1. TOP NAVBAR */}
            <Navbar 
              currentRoute={currentRoute}
              onNavigate={handleNavigate}
              onOpenQuote={handleOpenQuote}
              isLiveApi={isLiveApi}
              isDark={isDark}
              onToggleTheme={() => setIsDark(!isDark)}
            />

            {/* 2. MIDDLE HERO CONTENT SPLIT */}
            <div className="flex-1 min-h-0 flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-1 sm:py-2 lg:py-3 z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
                
                {/* Left Column: Headline, Description & Dual CTA */}
                <div className="lg:col-span-6 z-10 max-w-2xl">
                  {/* Top Badge with glowing red dot */}
                  <div 
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1527]/90 border border-white/10 text-xs font-semibold text-slate-300 mb-3 sm:mb-4 shadow-sm animate-hero-fade-down"
                    style={{ animationDelay: '180ms' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E12C2C] shadow-[0_0_8px_#E12C2C]"></span>
                    <span>
                      {slideText.badge}
                    </span>
                  </div>

                  {/* Dynamic Headline with Dual Colored Text */}
                  <h1 
                    className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold text-white tracking-[-0.03em] leading-[1.1] mb-3 sm:mb-4 animate-hero-fade-up"
                    style={{ animationDelay: '320ms' }}
                  >
                    {slideText.headlinePart1} <br />
                    <span className="text-[#38BDF8]">{slideText.headlinePart2}</span>
                  </h1>

                  {/* Subtitle / Description with exact line formatting matching the design */}
                  <p 
                    className="text-slate-300 text-sm sm:text-[15px] lg:text-base leading-[1.65] font-normal mb-4 sm:mb-6 max-w-xl animate-hero-fade-up"
                    style={{ animationDelay: '460ms' }}
                  >
                    {slideText.descLines.map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx < slideText.descLines.length - 1 && <br className="hidden sm:inline" />}
                      </React.Fragment>
                    ))}
                  </p>

                  {/* Dual CTA Buttons */}
                  <div 
                    className="flex flex-wrap items-center gap-3 sm:gap-4 animate-hero-fade-up"
                    style={{ animationDelay: '600ms' }}
                  >
                    {/* Primary Glowing Red Button */}
                    <button 
                      onClick={() => handleOpenQuote(slideText.primaryCta)}
                      className="px-6 py-3 rounded-xl bg-[#DB2B30] text-white font-bold text-sm shadow-[0_4px_22px_rgba(239,68,68,0.5)] hover:shadow-[0_6px_28px_rgba(239,68,68,0.7)] active:scale-95 transition-all duration-200 flex items-center gap-2 group"
                    >
                      <span>{slideText.primaryCta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Secondary Dark Outline Button */}
                    <button 
                      onClick={() => handleNavigate('about')}
                      className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 flex items-center gap-2 group"
                    >
                      <span>{slideText.secondaryCta}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Right Column: 3D Holographic Pedestal & Surrounding Floating HUD Cards */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <HeroVisual slide={currentSlide} />
                </div>
              </div>
            </div>

            {/* 3. BOTTOM 4 INTERACTIVE PILLAR CARDS (Horizontal Line to Card Transformation) */}
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pb-2 sm:pb-3 relative z-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 xl:gap-4">
                {pillarTabs.map((tab, idx) => {
                  const Icon = tab.icon;
                  const isActive = currentSlide.pillar === tab.slidePillar;
                  const cardDelay = 750 + idx * 140;

                  return (
                    <div
                      key={tab.id}
                      style={!heroCardsEntranceDone ? { animationDelay: `${cardDelay}ms` } : undefined}
                      className={`relative ${!heroCardsEntranceDone ? 'animate-horizontal-line-card' : ''}`}
                    >
                      {/* Luminous horizontal laser beam across center of card - only during initial page load */}
                      {!heroCardsEntranceDone && (
                        <div 
                          className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] pointer-events-none z-30 ${
                            idx === 0 ? 'bg-[#E12C2C] animate-laser-line-h-red' : 'bg-[#00D2FF] animate-laser-line-h'
                          }`}
                          style={{ animationDelay: `${cardDelay}ms` }}
                        />
                      )}

                      {/* Interactive Card Surface */}
                      <div
                        onClick={() => selectPillar(tab.slidePillar)}
                        className={`p-3.5 sm:p-4 rounded-2xl transition-all duration-200 cursor-pointer flex flex-col justify-between border h-full min-h-[125px] sm:min-h-[135px] group ${
                          isActive
                            ? 'bg-[#0E172F] border-[#E12C2C] shadow-[0_0_25px_rgba(239,68,68,0.35)] -translate-y-0.5'
                            : 'bg-[#0A1224]/90 hover:bg-[#0E1733] border-white/5 hover:border-white/15 hover:-translate-y-0.5'
                        }`}
                      >
                        {/* Top: Circular Category Icon */}
                        <div className={`mb-3 ${!heroCardsEntranceDone ? 'animate-card-content-h' : ''}`} style={!heroCardsEntranceDone ? { animationDelay: `${cardDelay}ms` } : undefined}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                            isActive 
                              ? 'bg-[#E12C2C] text-white shadow-[0_0_12px_#E12C2C]' 
                              : 'bg-[#15203A] text-slate-300 border border-white/5'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Bottom: Text on the left, Arrow Button in Bottom Right Corner */}
                        <div 
                          className={`flex items-end justify-between gap-2 mt-auto ${!heroCardsEntranceDone ? 'animate-card-content-h' : ''}`}
                          style={!heroCardsEntranceDone ? { animationDelay: `${cardDelay}ms` } : undefined}
                        >
                          <div>
                            <h4 className="text-sm lg:text-[15px] font-bold text-white mb-0.5 tracking-tight">
                              {tab.title}
                            </h4>
                            <p className="text-[11px] lg:text-xs text-slate-400 leading-snug">
                              {tab.descLine1} <br />
                              {tab.descLine2}
                            </p>
                          </div>

                          {/* Arrow indicator in bottom right corner */}
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                            isActive 
                              ? 'bg-[#E12C2C] text-white shadow-[0_0_10px_rgba(225,44,44,0.6)]' 
                              : 'bg-[#121B30] text-slate-400 border border-white/10 group-hover:text-white group-hover:border-white/20'
                          }`}>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. DOCKED RED CURVED ARCH SHELF WITH BANK TICKER */}
            <BankTicker partners={homeData?.partners} />
          </section>

          {/* REST OF HOMEPAGE CONTENT (Visible when scrolling down) */}
          <main>
            {/* VISION & MISSION */}
            <VisionMission data={homeData?.visionMission} />

            {/* REAL OUTCOMES / SUCCESS STORIES */}
            <RealOutcomes data={homeData?.realOutcomes} />

            {/* EMPOWERING BUSINESS / ABOUT SECTION */}
            <EmpoweringBusiness 
              data={homeData?.empoweringBusiness} 
              onNavigate={handleNavigate}
            />

            {/* PRACTICES & SOLUTIONS (7 Practices, 31 Solutions) */}
            <PracticesSection 
              data={homeData?.practicesSection} 
              onOpenQuote={handleOpenQuote}
            />

            {/* EXCELLENCE FRAMEWORK (5 Stages Delivery Model) */}
            <ExcellenceFramework 
              data={homeData?.excellenceFramework} 
              onOpenQuote={handleOpenQuote}
            />

            {/* TESTIMONIALS */}
            <Testimonials data={homeData?.testimonialsSection} />

            {/* LATEST NEWS & ARTICLES */}
            <NewsSection data={homeData?.newsSection} />

            {/* CTA BANNER */}
            <CtaBanner 
              data={homeData?.cta} 
              onOpenQuote={handleOpenQuote}
            />
          </main>
        </>
      ) : (
        <>
          <Navbar 
            currentRoute={currentRoute}
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
            isLiveApi={isLiveApi}
            isDark={isDark}
            onToggleTheme={() => setIsDark(!isDark)}
          />
          <main>
            <AboutPage 
              data={aboutData} 
              onOpenQuote={handleOpenQuote} 
            />
          </main>
        </>
      )}

      {/* FOOTER */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenQuote={handleOpenQuote} 
      />

      {/* CONTACT / GET A QUOTE MODAL */}
      <ContactModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialSubject={modalSubject}
      />
    </div>
  );
}
