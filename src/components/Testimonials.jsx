import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials({ data }) {
  const headline = data?.headline || "Loved by the teams who run Africa's business";
  const testimonials = data?.testimonials || [];

  const [page, setPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const displayed = testimonials.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const getInitials = (name) => {
    if (!name) return 'IN';
    const parts = name.split(' ');
    return parts.map(p => p[0]).join('').slice(0, 2).toUpperCase();
  };

  const getAvatarColor = (idx) => {
    const colors = [
      'bg-red-500 text-white',
      'bg-cyan-500 text-slate-950',
      'bg-emerald-500 text-white',
      'bg-amber-500 text-slate-950',
      'bg-blue-600 text-white',
      'bg-purple-600 text-white'
    ];
    return colors[idx % colors.length];
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-slate-900 rounded-[36px] my-6 max-w-7xl mx-auto shadow-xl relative overflow-hidden border border-slate-200">
      
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E12C2C]"></span>
            CLIENT TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            {headline}
          </h2>
        </div>

        {/* Carousel controls */}
        {totalPages > 1 && (
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
              className="p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-400 text-slate-700 shadow-sm transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
              className="p-3 rounded-xl bg-slate-900 text-white hover:bg-[#E12C2C] shadow-sm transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Testimonials 2x2 or 4-col Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayed.map((t, idx) => (
          <div
            key={t.id || idx}
            className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating || 5)].map((_, sIdx) => (
                  <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-500 ml-2 font-mono">5.0</span>
              </div>

              {/* Quote */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center justify-between pt-5 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm shadow-sm ${getAvatarColor(idx)}`}>
                  {getInitials(t.authorName)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {t.authorName}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {t.designation}, <span className="font-semibold text-slate-700">{t.company}</span>
                  </p>
                </div>
              </div>

              {t.industry && (
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 uppercase font-mono">
                  {t.industry}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
