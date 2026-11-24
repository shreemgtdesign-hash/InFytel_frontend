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

import { getHomeData, getAboutData } from './services/api.js';

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

  // Fetch API data on mount
  useEffect(() => {
    async function loadAllData() {
      setLoading(true);
      const [hRes, aRes] = await Promise.all([getHomeData(), getAboutData()]);
      setHomeData(hRes.data);
      setAboutData(aRes.data);
      setIsLiveApi(hRes.isLive || aRes.isLive);
      setLoading(false);

      // Default to Why Infytel (displayOrder 1 or WHY_INFYTEL)
      if (hRes.data?.heroSlides) {
        const whyIdx = hRes.data.heroSlides.findIndex(s => s.pillar === 'WHY_INFYTEL');
        if (whyIdx !== -1) setActiveSlideIdx(whyIdx);
        else setActiveSlideIdx(0);
      }
    }
    loadAllData();
  }, []);

  const heroSlides = homeData?.heroSlides || [];
  const currentSlide = heroSlides[activeSlideIdx] || heroSlides[0] || {};

  // 4 Pillar tabs matching the exact design and user screenshot
  const pillarTabs = [
    {
      id: 'why-infytel',
      title: 'Why Infytel',
      desc: '31 solution one trusted technology partener',
      icon: Sparkles,
      slidePillar: 'WHY_INFYTEL'
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot',
      desc: '24/7 smart conversations on every channel.',
      icon: Bot,
      slidePillar: 'AI_AUTOMATION'
    },
    {
      id: 'card-payments',
      title: 'Card & Payments',
      desc: 'Secure card issuing, AML and fraud control.',
      icon: CreditCard,
      slidePillar: 'FINANCIAL_TECH'
    },
    {
      id: 'it-security',
      title: 'IT Security',
      desc: 'SASE, PAM and 24/7 threat monitoring.',
      icon: ShieldCheck,
      slidePillar: 'CYBERSECURITY'
    }
  ];

  // Helper to switch slide by pillar
  const selectPillar = (pillarName) => {
    const idx = heroSlides.findIndex(s => s.pillar === pillarName);
    if (idx !== -1) setActiveSlideIdx(idx);
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

  return (
    <div className={`min-h-screen bg-[#070D1D] text-slate-100 ${isDark ? 'dark' : ''}`}>
      
      {/* 1. TOP NAVBAR */}
      <Navbar 
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
        isLiveApi={isLiveApi}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
      />

      {/* 2. MAIN CONTENT BODY */}
      <main>
        {currentRoute === 'home' ? (
          <div>
            {/* HERO SECTION */}
            <section className="relative pt-8 sm:pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
              
              {/* Background ambient lighting */}
              <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
              <div className="absolute top-20 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>

              {/* Main Hero Split Grid: Left Text + Right 3D Visual */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
                
                {/* Left Column: Headline, Description & Dual CTA */}
                <div className="lg:col-span-6 z-10 max-w-2xl">
                  
                  {/* Top Badge with glowing red dot */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-xs font-semibold text-slate-300 mb-6 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-[#EF4444] shadow-[0_0_8px_#EF4444]"></span>
                    <span>
                      {currentSlide.badge || 'Welcome to Infytel'}
                    </span>
                  </div>

                  {/* Dynamic Headline with Dual Colored Text */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
                    {currentSlide.pillar === 'WHY_INFYTEL' ? (
                      <>
                        Powering growth <br />
                        <span className="text-[#38BDF8]">With technology.</span>
                      </>
                    ) : currentSlide.pillar === 'AI_AUTOMATION' ? (
                      <>
                        Smarter service. <br />
                        <span className="text-[#38BDF8]">Happier Customers.</span>
                      </>
                    ) : currentSlide.pillar === 'FINANCIAL_TECH' ? (
                      <>
                        Safer Payment. <br />
                        <span className="text-[#38BDF8]">Faster Growth.</span>
                      </>
                    ) : currentSlide.pillar === 'CYBERSECURITY' ? (
                      <>
                        Stronger defence. <br />
                        <span className="text-[#38BDF8]">Zero downtime.</span>
                      </>
                    ) : (
                      <>
                        Powering growth <br />
                        <span className="text-[#38BDF8]">With technology.</span>
                      </>
                    )}
                  </h1>

                  {/* Subtitle / Description */}
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                    {currentSlide.description}
                  </p>

                  {/* Dual CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    {/* Primary Glowing Red Button */}
                    <button 
                      onClick={() => handleOpenQuote(currentSlide.primaryCtaText)}
                      className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#EF4444] via-[#F43F5E] to-[#E11D48] text-white font-bold text-sm shadow-[0_6px_25px_rgba(239,68,68,0.5)] hover:shadow-[0_8px_30px_rgba(239,68,68,0.7)] active:scale-95 transition-all duration-200 flex items-center gap-2 group"
                    >
                      <span>{currentSlide.primaryCtaText || "Explore Services"}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    {/* Secondary Dark Outline Button */}
                    <button 
                      onClick={() => handleNavigate('about')}
                      className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-slate-700 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 flex items-center gap-2 group"
                    >
                      <span>{currentSlide.secondaryCtaText || "Discover Infytel"}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Right Column: 3D Holographic Pedestal & Surrounding Floating HUD Cards */}
                <div className="lg:col-span-6 flex items-center justify-center">
                  <HeroVisual slide={currentSlide} />
                </div>
              </div>

              {/* 4 Bottom Interactive Pillar Cards (Tabs) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-20">
                {pillarTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = currentSlide.pillar === tab.slidePillar;

                  return (
                    <div
                      key={tab.id}
                      onClick={() => selectPillar(tab.slidePillar)}
                      className={`p-5 rounded-2xl transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                        isActive
                          ? 'bg-[#0F182E] border-[#EF4444] shadow-[0_0_25px_rgba(239,68,68,0.35)] -translate-y-1'
                          : 'bg-[#0B132B]/80 hover:bg-[#0E1733] border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2.5 rounded-xl ${
                          isActive 
                            ? 'bg-[#EF4444] text-white shadow-glow-red-sm' 
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>

                        {/* Arrow indicator */}
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                          isActive 
                            ? 'bg-[#EF4444] text-white shadow-sm' 
                            : 'bg-white/5 text-slate-400 group-hover:text-white'
                        }`}>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white mb-1">
                          {tab.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                          {tab.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* TRUSTED BY AFRICA'S LEADING TEAMS (Bank Ticker with Red Arch) */}
            <BankTicker />

            {/* EMPOWERING BUSINESS / ABOUT SECTION */}
            <EmpoweringBusiness 
              data={homeData?.empoweringBusiness} 
              onNavigate={handleNavigate}
            />

            {/* VISION & MISSION */}
            <VisionMission data={homeData?.visionMission} />

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

            {/* REAL OUTCOMES (Case Studies Metrics) */}
            <RealOutcomes data={homeData?.realOutcomes} />

            {/* TESTIMONIALS */}
            <Testimonials data={homeData?.testimonialsSection} />

            {/* LATEST NEWS & ARTICLES */}
            <NewsSection data={homeData?.newsSection} />

            {/* CTA BANNER */}
            <CtaBanner 
              data={homeData?.cta} 
              onOpenQuote={handleOpenQuote}
            />
          </div>
        ) : (
          /* ABOUT PAGE */
          <AboutPage 
            data={aboutData} 
            onOpenQuote={handleOpenQuote} 
          />
        )}
      </main>

      {/* 3. FOOTER */}
      <Footer 
        onNavigate={handleNavigate} 
        onOpenQuote={handleOpenQuote} 
      />

      {/* 4. CONTACT / GET A QUOTE MODAL */}
      <ContactModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialSubject={modalSubject}
      />
    </div>
  );
}
