import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Globe } from 'lucide-react';
import InfytelLogo from './InfytelLogo.jsx';

export default function Footer({ onNavigate, onOpenQuote }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050A14] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <InfytelLogo 
              onClick={() => onNavigate && onNavigate('home')} 
              className="h-9 w-auto"
            />

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Infytel Communications Ltd. is a leading information technology company providing industry-focused solutions integrated with leading-edge ICT to clients in government, financial services, real estate, hospitality and other sectors.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#38BDF8] hover:text-slate-950 flex items-center justify-center text-slate-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#38BDF8] hover:text-slate-950 flex items-center justify-center text-slate-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://infytel.ng" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#E12C2C] hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold tracking-wider uppercase font-mono text-[11px]">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'practices-section')} className="hover:text-white transition-colors">
                  Solutions & Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'news-section')} className="hover:text-white transition-colors">
                  Insights & Blogs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate && onNavigate('career')} className="hover:text-white transition-colors">
                  Careers at Infytel
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate && onNavigate('contact')} className="hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Practices (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold tracking-wider uppercase font-mono text-[11px]">
              Practices
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('home', 'practice-ai-automation')} className="hover:text-[#38BDF8] transition-colors text-left">
                  AI & Automation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'practice-financial-technology')} className="hover:text-[#38BDF8] transition-colors text-left">
                  Financial Technology
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'practice-cloud-data')} className="hover:text-[#38BDF8] transition-colors text-left">
                  Cloud & Data
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'practice-cybersecurity')} className="hover:text-[#38BDF8] transition-colors text-left">
                  Cybersecurity & IAM
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'practice-enterprise-collaboration')} className="hover:text-[#38BDF8] transition-colors text-left">
                  Enterprise Collaboration
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'practice-infrastructure-hardware')} className="hover:text-[#38BDF8] transition-colors text-left">
                  Infrastructure & Hardware
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('home', 'practice-digital-engineering')} className="hover:text-[#38BDF8] transition-colors text-left">
                  Digital & Engineering
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold tracking-wider uppercase font-mono text-[11px]">
              Lagos Head Office
            </h4>

            <div className="space-y-3">
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-[#E12C2C] shrink-0 mt-0.5" />
                <span>Plot 1661, Oyin Jolayemi Street, Victoria Island, Lagos, Nigeria</span>
              </div>

              <div className="flex items-start gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="mailto:hello@infytel.ng" className="hover:text-white">hello@infytel.ng</a>
                  <a href="mailto:sales@infytel.net" className="hover:text-white">sales@infytel.net</a>
                </div>
              </div>

              <div className="flex items-start gap-2 text-slate-400">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <a href="tel:08144033103" className="hover:text-white">08144033103</a>
                  <a href="tel:09168832564" className="hover:text-white">09168832564</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {currentYear} Infytel Communications Ltd. All rights reserved.</p>
          <p className="font-mono tracking-wider uppercase text-[10px] text-slate-400">
            POWERED BY ENTERPRISE AFRICAN ICT TECHNOLOGY
          </p>
        </div>
      </div>
    </footer>
  );
}
