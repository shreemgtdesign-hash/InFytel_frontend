import React, { useState } from 'react';
import { Clock, ArrowRight, ArrowUpRight, X, User } from 'lucide-react';

export default function NewsSection({ data }) {
  const headline = data?.headline || "Latest news, launches & partnerships";
  const articles = data?.articles || [];

  const [activeArticle, setActiveArticle] = useState(null);

  const featured = articles.find(a => a.isFeatured) || articles[0] || {};
  const recents = articles.filter(a => a.id !== featured.id).slice(0, 3);

  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'FINTECH': return 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'CYBERSECURITY': return 'bg-red-50 text-red-700 border-red-200';
      case 'AI_AUTOMATION': return 'bg-purple-50 text-purple-700 border-purple-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="news-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-slate-900 rounded-[36px] my-6 max-w-7xl mx-auto shadow-xl relative overflow-hidden border border-slate-200 scroll-mt-24">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E12C2C]"></span>
            INSIGHTS & UPDATES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            {headline}
          </h2>
        </div>

        <button 
          onClick={() => setActiveArticle(featured)}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-[#E12C2C] transition-colors self-start md:self-end"
        >
          <span>Explore all briefings</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 2-Column Grid: Featured on Left + 3 Articles on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Big Featured Article */}
        {featured.id && (
          <div 
            onClick={() => setActiveArticle(featured)}
            className="lg:col-span-7 group rounded-3xl overflow-hidden border border-slate-200/90 bg-slate-50 hover:border-slate-300 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Visual Cover Photo */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
              
              {/* Graphic Representation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950 via-slate-900 to-blue-900 opacity-90 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="inline-block p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 mb-3 shadow-2xl">
                    <span className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono tracking-wider">
                      AML // CBN
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-mono uppercase tracking-widest">
                    Automated Transaction Surveillance Switch
                  </p>
                </div>
              </div>

              {/* Category Badge on Image */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border shadow-sm ${getCategoryColor(featured.category)}`}>
                  {featured.category}
                </span>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-[#E12C2C] transition-colors mb-3 leading-snug">
                  {featured.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200/70 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">{featured.authorName}</span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTimeMinutes} min read
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Right Column: 3 Recent Articles List */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {recents.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveArticle(item)}
              className="p-5 sm:p-6 rounded-3xl border border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col justify-between flex-1"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getCategoryColor(item.category)}`}>
                    {item.category.replace('_', ' ')}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                    <Clock className="w-3 h-3" />
                    {item.readTimeMinutes} min
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#E12C2C] transition-colors leading-snug mb-2">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">{item.authorName}</span>
                <span className="text-[#E12C2C] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read article <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Detail Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-900 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border mb-4 inline-block ${getCategoryColor(activeArticle.category)}`}>
              {activeArticle.category}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-3 leading-tight">
              {activeArticle.title}
            </h3>

            <div className="flex items-center gap-4 text-xs text-slate-500 mb-6 pb-4 border-b border-slate-200 font-mono">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {activeArticle.authorName}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {activeArticle.readTimeMinutes} min read
              </span>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line mb-8">
              {activeArticle.content || activeArticle.excerpt}
            </div>

            <button
              onClick={() => setActiveArticle(null)}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-[#E12C2C] text-white font-bold text-sm transition-colors shadow-md"
            >
              Close Article
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
