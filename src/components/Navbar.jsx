import React, { useState } from 'react';
import { 
  Menu, X, ChevronDown, Sun, Moon, ArrowUpRight, 
  Bot, CreditCard, Cloud, ShieldCheck, Users, Server, Code, Phone, Mail
} from 'lucide-react';
import InfytelLogo from './InfytelLogo.jsx';

export default function Navbar({ 
  currentRoute = 'home', 
  onNavigate, 
  onOpenQuote,
  isLiveApi = false,
  isDark = true,
  onToggleTheme 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const practiceItems = [
    { name: 'AI & Automation', slug: 'ai-automation', icon: Bot, desc: 'Conversational chatbots & RPA workflows' },
    { name: 'Financial Technology', slug: 'financial-technology', icon: CreditCard, desc: 'Core banking & Feitian Smart POS' },
    { name: 'Cloud & Data', slug: 'cloud-data', icon: Cloud, desc: 'Enterprise migration & high availability' },
    { name: 'Cybersecurity', slug: 'cybersecurity', icon: ShieldCheck, desc: 'Zero-trust defense & HSM authentication' },
    { name: 'Enterprise Collaboration', slug: 'enterprise-collaboration', icon: Users, desc: 'ITSM & Freshservice helpdesk' },
    { name: 'Infrastructure & Hardware', slug: 'infrastructure-hardware', icon: Server, desc: 'Cisco networking & Dell PowerEdge' },
    { name: 'Digital & Engineering', slug: 'digital-engineering', icon: Code, desc: 'Custom React & Node applications' },
  ];

  const handleNav = (route, sectionId = null) => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    if (onNavigate) onNavigate(route, sectionId);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#070D1D]/90 backdrop-blur-md border-b border-white/5 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo matching the uploaded design */}
        <div className="flex items-center gap-3">
          <InfytelLogo 
            onClick={() => handleNav('home')}
            className="h-9 sm:h-10 w-auto" 
          />
          
          {/* Live API indicator pill */}
          <span 
            title={isLiveApi ? "Connected to Backend API" : "Using verified data"}
            className={`hidden md:inline-flex items-center gap-1.5 ml-2 px-2 py-0.5 text-[10px] font-semibold rounded-full border ${
              isLiveApi 
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' 
                : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isLiveApi ? 'bg-emerald-400 animate-ping' : 'bg-cyan-400'}`}></span>
            {isLiveApi ? 'API LIVE' : 'SYNCED'}
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {/* Home */}
          <button 
            onClick={() => handleNav('home')}
            className={`relative py-1 transition-colors ${
              currentRoute === 'home' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
            {currentRoute === 'home' && (
              <span className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#EF4444] rounded-full shadow-[0_0_8px_#EF4444]"></span>
            )}
          </button>

          {/* About */}
          <button 
            onClick={() => handleNav('about')}
            className={`relative py-1 transition-colors ${
              currentRoute === 'about' ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            About
            {currentRoute === 'about' && (
              <span className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#EF4444] rounded-full shadow-[0_0_8px_#EF4444]"></span>
            )}
          </button>

          {/* Services with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <button 
              onClick={() => handleNav('home', 'practices-section')}
              className="flex items-center gap-1 text-slate-300 hover:text-white py-1 transition-colors"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-[#38BDF8]' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdown && (
              <div className="absolute top-full -left-20 w-80 mt-1 py-2 bg-[#0B132B]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="px-4 py-2 border-b border-white/5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Our 7 Core Practices
                </div>
                <div className="p-1 space-y-0.5">
                  {practiceItems.map((p) => {
                    const Icon = p.icon;
                    return (
                      <button
                        key={p.slug}
                        onClick={() => handleNav('home', `practice-${p.slug}`)}
                        className="w-full flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-white/5 transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:bg-[#EF4444]/20 group-hover:text-[#EF4444] transition-colors mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                            {p.name}
                          </p>
                          <p className="text-[11px] text-slate-400 line-clamp-1">{p.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Career */}
          <button 
            onClick={() => onOpenQuote && onOpenQuote('Career Inquiry')}
            className="text-slate-300 hover:text-white py-1 transition-colors"
          >
            Career
          </button>

          {/* Blogs */}
          <button 
            onClick={() => handleNav('home', 'news-section')}
            className="text-slate-300 hover:text-white py-1 transition-colors"
          >
            Blogs
          </button>

          {/* Contact Us */}
          <button 
            onClick={() => onOpenQuote ? onOpenQuote('Contact Inquiry') : handleNav('home', 'contact-section')}
            className="text-slate-300 hover:text-white py-1 transition-colors"
          >
            Contact Us
          </button>
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center space-x-4">
          
          {/* Theme Toggle Pill */}
          <button 
            onClick={onToggleTheme}
            title="Toggle appearance"
            className="flex items-center justify-between w-14 h-7 p-1 rounded-full bg-slate-900 border border-white/10 hover:border-slate-700 transition-colors"
          >
            <span className={`w-5 h-5 flex items-center justify-center rounded-full transition-transform ${isDark ? 'bg-amber-400 text-slate-950 translate-x-7' : 'bg-slate-700 text-white'}`}>
              {isDark ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
            </span>
            <span className={`w-5 h-5 flex items-center justify-center rounded-full text-slate-500 ${isDark ? '-translate-x-7' : ''}`}>
              {isDark ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
            </span>
          </button>

          {/* "Get a quote >" Button */}
          <button 
            onClick={() => onOpenQuote && onOpenQuote('Get a quote')}
            className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-[#EF4444] via-[#F43F5E] to-[#E11D48] shadow-[0_4px_20px_rgba(239,68,68,0.45)] hover:shadow-[0_6px_25px_rgba(239,68,68,0.6)] active:scale-95 transition-all duration-200 flex items-center gap-1.5"
          >
            <span>Get a quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile hamburger button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D1D] border-b border-white/10 px-6 py-6 space-y-4">
          <button 
            onClick={() => handleNav('home')} 
            className={`block w-full text-left py-2 font-medium text-base ${currentRoute === 'home' ? 'text-[#EF4444]' : 'text-slate-200'}`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('about')} 
            className={`block w-full text-left py-2 font-medium text-base ${currentRoute === 'about' ? 'text-[#EF4444]' : 'text-slate-200'}`}
          >
            About Infytel
          </button>
          <button 
            onClick={() => handleNav('home', 'practices-section')} 
            className="block w-full text-left py-2 font-medium text-base text-slate-200"
          >
            Services & Practices
          </button>
          <button 
            onClick={() => handleNav('home', 'news-section')} 
            className="block w-full text-left py-2 font-medium text-base text-slate-200"
          >
            Latest News & Blogs
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenQuote('Mobile Contact'); }} 
            className="block w-full text-left py-2 font-medium text-base text-slate-200"
          >
            Contact Us
          </button>
          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <a 
              href="tel:08144033103" 
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              08144033103 / 09168832564
            </a>
            <a 
              href="mailto:hello@infytel.ng" 
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
            >
              <Mail className="w-3.5 h-3.5 text-[#EF4444]" />
              hello@infytel.ng
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
