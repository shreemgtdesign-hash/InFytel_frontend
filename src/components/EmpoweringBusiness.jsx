import React from 'react';
import { ArrowRight, Server, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export default function EmpoweringBusiness({ data, onNavigate }) {
  const headline = data?.headline || "Efficient technology to turn powerful engine of growth.";
  const stats = data?.stats || [
    {
      id: "1",
      numericValue: "99.9",
      suffix: "%",
      label: "Uptime Guaranteed",
      description: "Tier-3 data center availability with enterprise SLA",
      isHighlight: false
    },
    {
      id: "2",
      numericValue: "15",
      suffix: "+ YEARS",
      label: "Industry Experience",
      description: "Delivering mission-critical enterprise systems across Africa",
      isHighlight: false
    },
    {
      id: "3",
      numericValue: "200",
      suffix: "+ PROJECTS",
      label: "Projects Delivered",
      description: "Successfully deployed across multiple industry verticals",
      isHighlight: false
    },
    {
      id: "4",
      numericValue: "80",
      suffix: "+",
      label: "Enterprise Clients",
      description: "Trusted by major financial institutions and government entities",
      isHighlight: true
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 rounded-[36px] my-6 max-w-7xl mx-auto shadow-2xl relative overflow-hidden">
      
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E12C2C]"></span>
            ABOUT INFYTEL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
            {headline}
          </h2>
        </div>

        <button 
          onClick={() => onNavigate && onNavigate('about')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-950 text-white hover:bg-[#E12C2C] text-sm font-semibold transition-all duration-200 shadow-md group self-start md:self-end"
        >
          <span>About Infytel</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Main Grid: Left Tech Image / Visual + Right Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: High-Tech Security Operations Center Dashboard */}
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl bg-slate-950 border border-slate-800 group h-[380px] sm:h-[440px] flex items-center justify-center">
          
          {/* NOC Monitoring Visual Graphics */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-[#0B1530] to-[#0A2540] opacity-95"></div>
          
          {/* Glowing Map & Grid Lines */}
          <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
          
          {/* Animated NOC Interface Simulation */}
          <div className="relative z-10 w-full p-6 sm:p-8 flex flex-col justify-between h-full">
            
            {/* Top Bar of NOC */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase">
                  NOC Operations • Tier-3 Active
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">LAGOS DC-01</span>
            </div>

            {/* Middle Graphic: Server Cluster Status Grid */}
            <div className="my-auto grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-slate-400 block font-mono">LATENCY</span>
                <span className="text-lg font-bold text-cyan-400 font-mono">1.2 ms</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-slate-400 block font-mono">PACKET LOSS</span>
                <span className="text-lg font-bold text-emerald-400 font-mono">0.00%</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-slate-400 block font-mono">ENCRYPTION</span>
                <span className="text-lg font-bold text-rose-400 font-mono">AES-256</span>
              </div>
            </div>

            {/* Bottom Overlay Badge: 99.9% Uptime Guaranteed */}
            <div className="p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 shadow-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl font-black text-white tracking-tight flex items-center gap-1.5">
                    99.9% <span className="text-xs font-semibold text-cyan-400 font-sans">Uptime Guaranteed</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Tier-3 data center availability with enterprise SLA</p>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="inline-flex px-2 py-1 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Grid of Stat Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {stats.map((st) => {
            const isRed = st.isHighlight;
            return (
              <div 
                key={st.id}
                className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                  isRed 
                    ? 'bg-gradient-to-br from-[#E12C2C] via-[#F43F5E] to-[#DC2626] text-white shadow-[0_15px_30px_rgba(239,68,68,0.35)] transform hover:-translate-y-1' 
                    : 'bg-slate-50 border border-slate-200/80 hover:border-slate-300 text-slate-900 hover:shadow-lg transform hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className={`text-3xl sm:text-4xl font-black tracking-tight mb-2 ${isRed ? 'text-white' : 'text-slate-950'}`}>
                    {st.numericValue}
                    <span className={`text-xl sm:text-2xl font-bold ml-1 ${isRed ? 'text-white/90' : 'text-[#E12C2C]'}`}>
                      {st.suffix}
                    </span>
                  </div>
                  <h4 className={`text-base font-bold mb-1.5 ${isRed ? 'text-white' : 'text-slate-900'}`}>
                    {st.label}
                  </h4>
                </div>
                
                <p className={`text-xs mt-3 leading-relaxed ${isRed ? 'text-white/80' : 'text-slate-500'}`}>
                  {st.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
