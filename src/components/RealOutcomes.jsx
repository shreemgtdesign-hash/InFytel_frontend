import React, { useState } from 'react';
import { Target, Users, Layers, Building2, ArrowUpRight, X } from 'lucide-react';

export default function RealOutcomes({ data }) {
  const badge = data?.badge || "SUCCESS STORIES";
  const headline = data?.headline || "Real outcomes for real businesses";
  const subtitle = data?.subtitle || "How we've helped banks, retailers and insurers solve hard problems with the right technology.";
  
  // 4 KPIs matching the user request
  const kpis = data?.kpis || [
    { id: '1', key: 'projects_delivered', label: 'Projects delivered', value: 104, icon: 'target' },
    { id: '2', key: 'active_clients', label: 'Active clients', value: 83, icon: 'users' },
    { id: '3', key: 'solutions_live', label: 'Solutions live', value: 31, icon: 'layers' },
    { id: '4', key: 'sectors_served', label: 'Sectors served', value: 4, icon: 'building' }
  ];

  // Growth Chart Data
  const growthChart = data?.growthChart || {};
  const series = growthChart?.series || [
    { year: 2021, projectsCount: 32, clientsCount: 18 },
    { year: 2022, projectsCount: 48, clientsCount: 31 },
    { year: 2023, projectsCount: 74, clientsCount: 47 },
    { year: 2024, projectsCount: 60, clientsCount: 54 },
    { year: 2025, projectsCount: 60, clientsCount: 65 },
    { year: 2026, projectsCount: 120, clientsCount: 83 }
  ];

  // Sector Breakdown Data
  const sectorBreakdown = data?.sectorBreakdown || {};
  const centerValue = sectorBreakdown?.centerValue || 104;
  const centerLabel = sectorBreakdown?.centerLabel || 'projects';
  const rawSectors = sectorBreakdown?.sectors || [
    { name: 'Financial Services', slug: 'financial-services', projectSharePercent: 75, chartColor: '#00B4D8' },
    { name: 'Government', slug: 'government', projectSharePercent: 16, chartColor: '#FB923C' },
    { name: 'Real Estate', slug: 'real-estate', projectSharePercent: 25, chartColor: '#FB7185' },
    { name: 'Hospitality', slug: 'hospitality', projectSharePercent: 38, chartColor: '#FFFFFF' }
  ];

  // Case Studies
  const caseStudies = data?.caseStudies || [];
  const [selectedCase, setSelectedCase] = useState(null);

  // Growth Chart: Active Metric ('projects' | 'clients') and Active Year Point Index (default: 0 = 2021)
  const [activeMetric, setActiveMetric] = useState('projects');
  const [activePointIdx, setActivePointIdx] = useState(0);

  // Donut Chart: Hovered Sector for Bidirectional Highlighting
  const [hoveredSector, setHoveredSector] = useState(null);

  // Helper for KPI icon
  const getKpiIcon = (iconName) => {
    switch (iconName) {
      case 'target':
        return Target;
      case 'users':
        return Users;
      case 'layers':
        return Layers;
      case 'building':
      default:
        return Building2;
    }
  };

  // Growth Chart Calculations
  const isProjects = activeMetric === 'projects';
  const unitLabel = isProjects ? 'projects delivered' : 'active clients';
  const currentSubtitle = isProjects ? 'Projects delivered per year' : 'Active clients per year';

  // Y-axis bounds & ticks
  const maxY = isProjects ? 120 : 100;
  const yTicks = isProjects ? [120, 90, 60, 30, 0] : [100, 75, 50, 25, 0];

  const svgWidth = 540;
  const svgHeight = 240;
  const padLeft = 45;
  const padRight = 20;
  const padTop = 18;
  const padBottom = 34;

  const chartW = svgWidth - padLeft - padRight;
  const chartH = svgHeight - padTop - padBottom;
  const baselineY = padTop + chartH;

  // Compute points
  const points = series.map((item, idx) => {
    const val = isProjects ? item.projectsCount : item.clientsCount;
    const x = padLeft + (idx / (series.length - 1)) * chartW;
    const y = baselineY - (val / maxY) * chartH;
    return { x, y, val, year: item.year };
  });

  // Smooth spline path
  const getSmoothPath = (pts) => {
    if (!pts || pts.length === 0) return '';
    let d = `M ${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i === 0 ? 0 : i - 1];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[i + 2 < pts.length ? i + 2 : i + 1];

      const cp1x = p1.x + (p2.x - p0.x) / 5.5;
      const cp1y = p1.y + (p2.y - p0.y) / 5.5;
      const cp2x = p2.x - (p3.x - p1.x) / 5.5;
      const cp2y = p2.y - (p3.y - p1.y) / 5.5;

      d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
    }
    return d;
  };

  const linePath = getSmoothPath(points);
  const areaPath = points.length > 0 
    ? `${linePath} L ${points[points.length - 1].x.toFixed(1)},${baselineY} L ${points[0].x.toFixed(1)},${baselineY} Z`
    : '';

  const activePt = points[activePointIdx] || points[0];

  // Donut Arc visual ordering matching reference image media_1795601804773_8957dea3.jpg:
  // Clockwise from 12 o'clock:
  // 1. Financial Services (Cyan, right)
  // 2. Hospitality (White, bottom)
  // 3. Real Estate (Coral/Pink, bottom-left)
  // 4. Government (Orange, top-left)
  const donutVisualOrder = ['Financial Services', 'Hospitality', 'Real Estate', 'Government'];
  const orderedSectorsForDonut = donutVisualOrder.map(name => {
    return rawSectors.find(s => s.name === name) || { name, projectSharePercent: 25, chartColor: '#00B4D8' };
  });

  const donutRadius = 66;
  const donutCircumference = 2 * Math.PI * donutRadius;
  const totalSectorWeight = orderedSectorsForDonut.reduce((acc, s) => acc + (s.projectSharePercent || 0), 0) || 1;
  const gapAngle = 5; // Clean visual gap between arcs

  let accumulatedLength = 0;
  const donutSlices = orderedSectorsForDonut.map((sector) => {
    const fraction = (sector.projectSharePercent || 0) / totalSectorWeight;
    const sliceLength = fraction * donutCircumference;
    const strokeDash = Math.max(0, sliceLength - gapAngle);
    const dashOffset = -accumulatedLength;
    accumulatedLength += sliceLength;
    return {
      ...sector,
      strokeDasharray: `${strokeDash} ${donutCircumference - strokeDash}`,
      strokeDashoffset: dashOffset
    };
  });

  // Selected or hovered sector object for dynamic center text
  const currentHoveredSectorObj = hoveredSector 
    ? rawSectors.find(s => s.name === hoveredSector) 
    : null;

  return (
    <div className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 select-none transition-colors duration-300" style={{ backgroundColor: '#04142A' }}>
      <section className="max-w-7xl mx-auto">
        
        {/* 1. Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E12C2C] shadow-[0_0_8px_#E12C2C]"></span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-mono">
                {badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Real outcomes for <br className="hidden sm:inline" />
              <span className="text-[#38BDF8]">real businesses</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed lg:text-right lg:mb-1">
            {subtitle}
          </p>
        </div>

        {/* 2. Four KPI Cards with User-Requested Gradient (#1E2336 -> #12162B) & Increased Size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12">
          {kpis.map((kpi) => {
            const Icon = getKpiIcon(kpi.icon);
            return (
              <div
                key={kpi.id || kpi.key}
                style={{
                  background: 'linear-gradient(180deg, #1E2336 0%, #12162B 100%)'
                }}
                className="border border-white/[0.08] hover:border-cyan-400/40 rounded-2xl sm:rounded-[22px] p-6 sm:py-6 sm:px-7 min-h-[110px] sm:min-h-[118px] flex items-center gap-4 sm:gap-5 shadow-[0_12px_30px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Rounded squircle container with exact #323848 background and pure white icon matching design */}
                <div className="w-12 h-12 sm:w-[50px] sm:h-[50px] rounded-xl sm:rounded-[14px] bg-[#323848] border border-white/10 flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.2]" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-none mb-1.5">
                    {kpi.value}
                  </div>
                  <div className="text-xs sm:text-[13.5px] text-[#9EABCA] font-medium whitespace-nowrap">
                    {kpi.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3. Interactive Charts Grid (Growth Curve & Sector Donut) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 mb-12 sm:mb-16">
          
          {/* LEFT CARD: Growth since 2021 (Projects / Clients toggle) */}
          <div className="lg:col-span-7 rounded-[28px] bg-[#070E20]/95 border border-white/10 p-6 sm:p-7 shadow-2xl flex flex-col relative overflow-hidden">
            
            {/* Header with Title and Toggle */}
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {growthChart.title || "Growth since 2021"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  {currentSubtitle}
                </p>
              </div>

              {/* Toggle Button Pill */}
              <div className="bg-[#0D182E] p-1 rounded-full border border-white/10 flex items-center shrink-0">
                <button
                  onClick={() => setActiveMetric('projects')}
                  className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isProjects
                      ? 'bg-[#00B4D8] text-white shadow-[0_0_12px_rgba(0,180,216,0.5)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveMetric('clients')}
                  className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                    !isProjects
                      ? 'bg-[#FB923C] text-white shadow-[0_0_12px_rgba(251,146,60,0.5)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Clients
                </button>
              </div>
            </div>

            {/* SVG Growth Chart Area - Reduced gap to heading */}
            <div className="relative w-full mt-1 sm:mt-2">
              <svg 
                className="w-full h-auto overflow-visible" 
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  {/* Projects Blue/Cyan Gradients */}
                  <linearGradient id="projectsAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.55" />
                    <stop offset="45%" stopColor="#0096C7" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#0077B6" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="projectsLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="65%" stopColor="#00D2FF" />
                    <stop offset="100%" stopColor="#00F0FF" />
                  </linearGradient>

                  {/* Clients Warm Orange Gradients (matching Image 2) */}
                  <linearGradient id="clientsAreaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FB923C" stopOpacity="0.55" />
                    <stop offset="45%" stopColor="#F97316" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#EA580C" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="clientsLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FDBA74" />
                    <stop offset="65%" stopColor="#FB923C" />
                    <stop offset="100%" stopColor="#EA580C" />
                  </linearGradient>
                </defs>

                {/* Horizontal Dashed Gridlines & Y-Axis Labels (Crisp Whiter Gridlines) */}
                {yTicks.map((tickVal) => {
                  const tickY = baselineY - (tickVal / maxY) * chartH;
                  return (
                    <g key={tickVal}>
                      <text
                        x={padLeft - 10}
                        y={tickY + 4}
                        textAnchor="end"
                        fill="#94A3B8"
                        fontSize="11"
                        fontFamily="monospace"
                        fontWeight="bold"
                      >
                        {tickVal}
                      </text>
                      <line
                        x1={padLeft}
                        y1={tickY}
                        x2={padLeft + chartW}
                        y2={tickY}
                        stroke="rgba(255, 255, 255, 0.25)"
                        strokeDasharray="4 4"
                        strokeWidth="1.2"
                      />
                    </g>
                  );
                })}

                {/* Area Gradient Fill */}
                {areaPath && (
                  <path
                    d={areaPath}
                    fill={isProjects ? 'url(#projectsAreaGrad)' : 'url(#clientsAreaGrad)'}
                    className="transition-all duration-500 ease-out"
                  />
                )}

                {/* Smooth Stroke Line with Glow */}
                {linePath && (
                  <path
                    d={linePath}
                    fill="none"
                    stroke={isProjects ? 'url(#projectsLineGrad)' : 'url(#clientsLineGrad)'}
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    className="transition-all duration-500 ease-out"
                    style={{
                      filter: isProjects 
                        ? 'drop-shadow(0 0 8px rgba(0,210,255,0.7))' 
                        : 'drop-shadow(0 0 8px rgba(251,146,60,0.7))'
                    }}
                  />
                )}

                {/* Active Point Vertical Red Dashed Line */}
                {activePt && (
                  <line
                    x1={activePt.x}
                    y1={activePt.y}
                    x2={activePt.x}
                    y2={baselineY}
                    stroke="#E12C2C"
                    strokeDasharray="3 3"
                    strokeWidth="1.5"
                  />
                )}

                {/* Data Points on the Curve */}
                {points.map((pt, idx) => {
                  const isActive = idx === activePointIdx;
                  return (
                    <g key={idx} className="cursor-pointer" onClick={() => setActivePointIdx(idx)}>
                      {isActive ? (
                        // Glowing Active White Circle with Colored Halo
                        <g>
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r="6.5"
                            fill="#FFFFFF"
                            stroke={isProjects ? '#00D2FF' : '#FB923C'}
                            strokeWidth="2.5"
                            style={{
                              filter: 'drop-shadow(0 0 8px #FFFFFF)'
                            }}
                          />
                        </g>
                      ) : (
                        // Subtle Point Dot
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="3.5"
                          fill={isProjects ? '#00D2FF' : '#FB923C'}
                          stroke="#070E20"
                          strokeWidth="1.5"
                          className="transition-transform hover:scale-125"
                        />
                      )}

                      {/* Wide Hit Area for Easy Hovering */}
                      <rect
                        x={pt.x - 22}
                        y={padTop}
                        width="44"
                        height={chartH + padBottom}
                        fill="transparent"
                        onMouseEnter={() => setActivePointIdx(idx)}
                      />
                    </g>
                  );
                })}

                {/* Floating Dark Glass Tooltip on Active Point */}
                {activePt && (
                  <g 
                    transform={`translate(${Math.max(12, Math.min(activePt.x - 75, svgWidth - 165))}, ${Math.max(-4, activePt.y - 42)})`}
                    className="pointer-events-none transition-all duration-200"
                  >
                    <rect
                      width="150"
                      height="32"
                      rx="8"
                      fill="#0B152B"
                      stroke="rgba(255, 255, 255, 0.16)"
                      strokeWidth="1"
                      style={{ filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.75))' }}
                    />
                    <text
                      x="75"
                      y="20"
                      textAnchor="middle"
                      fill="#FFFFFF"
                      fontSize="11"
                      fontWeight="600"
                      fontFamily="sans-serif"
                    >
                      {activePt.year} ({activePt.val} {unitLabel})
                    </text>
                  </g>
                )}

                {/* X-Axis Year Labels */}
                {points.map((pt, idx) => (
                  <text
                    key={idx}
                    x={pt.x}
                    y={baselineY + 22}
                    textAnchor="middle"
                    fill={idx === activePointIdx ? '#FFFFFF' : '#94A3B8'}
                    fontSize="11.5"
                    fontWeight={idx === activePointIdx ? 'bold' : 'normal'}
                    fontFamily="monospace"
                  >
                    {pt.year}
                  </text>
                ))}
              </svg>
            </div>
          </div>

          {/* RIGHT CARD: Projects by sector (Donut Chart & Interactive Sector Breakdown) */}
          <div className="lg:col-span-5 rounded-[28px] bg-[#070E20]/95 border border-white/10 p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            
            {/* Header */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {sectorBreakdown.title || "Projects by sector"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                {sectorBreakdown.subtitle || "Share of delivered projects"}
              </p>
            </div>

            {/* Donut Chart with Interactive Hover & Highlighting */}
            <div className="my-6 sm:my-8 flex items-center justify-center relative">
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90 overflow-visible" viewBox="0 0 160 160">
                  {donutSlices.map((slice, idx) => {
                    const isHovered = hoveredSector === slice.name;
                    return (
                      <circle
                        key={idx}
                        cx="80"
                        cy="80"
                        r={donutRadius}
                        fill="none"
                        stroke={slice.chartColor}
                        strokeWidth={isHovered ? 27 : 22}
                        strokeDasharray={slice.strokeDasharray}
                        strokeDashoffset={slice.strokeDashoffset}
                        onMouseEnter={() => setHoveredSector(slice.name)}
                        onMouseLeave={() => setHoveredSector(null)}
                        className="cursor-pointer transition-all duration-300 ease-out"
                        style={{
                          opacity: hoveredSector && !isHovered ? 0.35 : 1,
                          filter: isHovered 
                            ? `drop-shadow(0 0 12px ${slice.chartColor})` 
                            : slice.chartColor === '#00B4D8' 
                              ? 'drop-shadow(0 0 4px rgba(0,180,216,0.35))' 
                              : undefined
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Center Donut Hole Text (Dynamic on Hover) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none transition-all duration-200">
                  {currentHoveredSectorObj ? (
                    <>
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none mb-0.5 font-mono">
                        {currentHoveredSectorObj.projectSharePercent}%
                      </span>
                      <span 
                        className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-full mt-0.5 max-w-[110px] truncate"
                        style={{ color: currentHoveredSectorObj.chartColor }}
                      >
                        {currentHoveredSectorObj.name}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none mb-0.5">
                        {centerValue}
                      </span>
                      <span className="text-xs text-slate-400 font-medium tracking-wide">
                        {centerLabel}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Sector Breakdown Legend with Bidirectional Hover Highlighting */}
            <div className="space-y-1.5 border-t border-white/[0.08] pt-5">
              {rawSectors.map((sec, idx) => {
                const isHovered = hoveredSector === sec.name;
                return (
                  <div 
                    key={idx} 
                    onMouseEnter={() => setHoveredSector(sec.name)}
                    onMouseLeave={() => setHoveredSector(null)}
                    className={`flex items-center justify-between py-1.5 px-3 rounded-xl transition-all duration-200 cursor-pointer ${
                      isHovered
                        ? 'bg-white/10 shadow-lg border border-white/10 scale-[1.02]'
                        : hoveredSector
                          ? 'opacity-35'
                          : 'hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span 
                        className={`w-2.5 h-2.5 rounded-full shrink-0 transition-transform ${
                          isHovered ? 'scale-125' : ''
                        }`} 
                        style={{ 
                          backgroundColor: sec.chartColor,
                          boxShadow: isHovered 
                            ? `0 0 10px ${sec.chartColor}` 
                            : sec.chartColor === '#00B4D8' 
                              ? '0 0 6px rgba(0,180,216,0.6)' 
                              : undefined
                        }}
                      ></span>
                      <span className={`text-xs sm:text-sm font-medium transition-colors ${
                        isHovered ? 'text-white font-bold' : 'text-slate-300'
                      }`}>
                        {sec.name}
                      </span>
                    </div>
                    <span className={`text-xs sm:text-sm font-bold font-mono transition-colors ${
                      isHovered ? 'text-white' : 'text-slate-200'
                    }`}>
                      {sec.projectSharePercent}%
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* 4. Case Studies Section with Blueprint Details Modal */}
       

       

      </section>
    </div>
  );
}
