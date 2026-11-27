import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Rocket,
  Zap,
  Award,
  Users,
  Clock,
  MapPin,
  X,
  CheckCircle2,
  AlertCircle,
  Send,
  Briefcase,
  ArrowLeft,
} from 'lucide-react';
import careerImg from '../assets/career-img.png';
import {
  CAREER_DEFAULT_DATA,
  getCareerData,
  getCareerJobDetails,
  submitCareerApplication,
} from '../services/api.js';

export default function CareerPage({ data }) {
  const [careerData, setCareerData] = useState(data || CAREER_DEFAULT_DATA);
  const [activeDept, setActiveDept] = useState(
    data?.openRoles?.activeFilter || 'all'
  );
  const [filtering, setFiltering] = useState(false);

  // Scroll-triggered section reveals
  const whyRef = useRef(null);
  const rolesRef = useRef(null);
  const hiringRef = useRef(null);
  const [whyInView, setWhyInView] = useState(false);
  const [rolesInView, setRolesInView] = useState(false);
  const [hiringInView, setHiringInView] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setWhyInView(true);
      setRolesInView(true);
      setHiringInView(true);
      return;
    }

    const targets = [
      { el: whyRef.current, setVisible: setWhyInView },
      { el: rolesRef.current, setVisible: setRolesInView },
      { el: hiringRef.current, setVisible: setHiringInView },
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
      { threshold: 0.12, rootMargin: '0px 0px -35px 0px' }
    );

    targets.forEach(({ el }) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const revealEase =
    'ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100';

  // Job Details & Application Modal state
  const [selectedJob, setSelectedJob] = useState(null);
  const [loadingJobDetails, setLoadingJobDetails] = useState(false);
  const [modalMode, setModalMode] = useState('details'); // 'details' | 'apply'
  const [appForm, setAppForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    cvUrl: '',
    portfolioUrl: '',
    coverNote: '',
  });
  const [applying, setApplying] = useState(false);
  const [applyStatus, setApplyStatus] = useState(null); // { type: 'success' | 'error', text: string }

  useEffect(() => {
    if (data) {
      setCareerData(data);
      if (data?.openRoles?.activeFilter) {
        setActiveDept(data.openRoles.activeFilter);
      }
    }
  }, [data]);

  const hero = careerData?.hero || CAREER_DEFAULT_DATA.hero;
  const whyInfytel = careerData?.whyInfytel || CAREER_DEFAULT_DATA.whyInfytel;
  const openRoles = careerData?.openRoles || CAREER_DEFAULT_DATA.openRoles;
  const hiringProcess = careerData?.hiringProcess || CAREER_DEFAULT_DATA.hiringProcess;

  const benefits = (whyInfytel.benefits || []).filter((b) => b.isActive !== false);
  const departments = openRoles.departments || CAREER_DEFAULT_DATA.openRoles.departments;
  const jobs = (openRoles.jobs || []).filter((j) => j.isActive !== false);
  const steps = (hiringProcess.steps || []).filter((s) => s.isActive !== false);
  const modalActions =
    openRoles.modalActions || CAREER_DEFAULT_DATA.openRoles.modalActions;

  const getBenefitIcon = (iconName) => {
    switch (iconName) {
      case 'zap':
        return Rocket;
      case 'award':
        return Award;
      case 'users':
        return Users;
      case 'clock':
        return Clock;
      default:
        return Zap;
    }
  };

  const handleFilterChange = async (slug) => {
    setActiveDept(slug);
    setFiltering(true);
    try {
      const res = await getCareerData(slug);
      if (res?.data) {
        setCareerData(res.data);
      }
    } finally {
      setFiltering(false);
    }
  };

  const handleOpenJobDetails = async (job) => {
    setSelectedJob(job);
    setModalMode('details');
    setApplyStatus(null);
    setLoadingJobDetails(true);
    try {
      const res = await getCareerJobDetails(job.slug);
      if (res?.data) {
        setSelectedJob(res.data);
      }
    } finally {
      setLoadingJobDetails(false);
    }
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setModalMode('details');
    setApplyStatus(null);
    setAppForm({
      fullName: '',
      email: '',
      phone: '',
      cvUrl: '',
      portfolioUrl: '',
      coverNote: '',
    });
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    if (!selectedJob) return;
    setApplying(true);
    setApplyStatus(null);
    try {
      const res = await submitCareerApplication({
        jobSlug: selectedJob.slug,
        fullName: appForm.fullName.trim(),
        email: appForm.email.trim(),
        phone: appForm.phone.trim(),
        cvUrl: appForm.cvUrl.trim(),
        portfolioUrl: appForm.portfolioUrl.trim(),
        coverNote: appForm.coverNote.trim(),
      });
      setApplyStatus({
        type: 'success',
        text:
          res.message ||
          `Application submitted for ${selectedJob.title}. Our talent team will be in touch soon.`,
      });
    } catch (err) {
      setApplyStatus({
        type: 'error',
        text: err.message || 'Unable to submit application right now. Please try again.',
      });
    } finally {
      setApplying(false);
    }
  };

  const scrollToRoles = () => {
    const targetId = (hero.ctaUrl || '#open-roles').replace(/^#/, '');
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full select-none">
      {/* =========================================================
          1. DARK CYBER CAREER HERO SECTION
         ========================================================= */}
      <section className="relative bg-[#030A1E] overflow-hidden min-h-[360px] sm:min-h-[410px] flex items-center">
        {/* Right-side Midnight Blue Atmospheric Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 52% 85% at 82% 52%, rgba(16, 48, 126, 0.5) 0%, rgba(11, 29, 78, 0.22) 48%, transparent 80%)',
          }}
        />
        {/* Subtle Bottom-Left Warm Glow matching reference */}
        <div
          className="absolute left-0 bottom-0 w-72 h-40 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 12% 100%, rgba(185, 28, 28, 0.16) 0%, transparent 72%)',
          }}
        />

        {/* Right-side Career Visual (`career-img.png`) - compact proportional sizing + animated portal glow */}
        <div className="hidden md:flex items-end justify-end absolute right-0 bottom-0 top-0 pointer-events-none pr-2 lg:pr-8">
          <div className="relative w-[310px] lg:w-[355px] xl:w-[385px] aspect-[2072/1876] animate-hero-scale-in" style={{ animationDelay: '180ms' }}>
            {/* Pulsing Cyan Portal Glow behind image */}
            <div
              className="absolute right-[10%] top-[18%] w-[64%] h-[64%] rounded-full blur-2xl animate-career-orbit-pulse pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(56, 189, 248, 0.34) 0%, rgba(14, 165, 233, 0.1) 55%, transparent 80%)',
              }}
            />

            {/* Slow-Rotating Concentric Dashed Orbital Rings */}
            <div className="absolute right-[4%] top-[8%] w-[260px] lg:w-[295px] h-[260px] lg:h-[295px] rounded-full border border-white/[0.06] pointer-events-none animate-spin-slow" style={{ animationDuration: '42s' }}>
              <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_10px_#38BDF8]" />
            </div>
            <div className="absolute right-[14%] top-[18%] w-[180px] lg:w-[205px] h-[180px] lg:h-[205px] rounded-full border border-sky-400/[0.1] pointer-events-none" />

            {/* Soft Feathered Image Mask + Floating Portal Animation */}
            <div
              className="w-full h-full"
              style={{
                maskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.75) 22%, black 48%, black 100%)',
                WebkitMaskImage:
                  'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.75) 22%, black 48%, black 100%)',
              }}
            >
              <img
                src={careerImg}
                alt="Career growth steps"
                className="w-full h-full object-contain object-bottom mix-blend-lighten opacity-95 animate-career-portal-float"
              />
            </div>
          </div>
        </div>

        {/* Left Content Column */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 w-full relative z-10">
          <div className="max-w-xl">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-2.5 mb-5 animate-hero-fade-down"
              style={{ animationDelay: '60ms' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E12C2C] shadow-[0_0_8px_#E12C2C]" />
              <span className="text-[11px] font-semibold text-[#5E8BB6] uppercase tracking-[0.22em] font-mono">
                {hero.badge || 'CAREER'}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-[-0.02em] leading-[1.15] mb-4 animate-hero-fade-up"
              style={{ animationDelay: '160ms' }}
            >
              {hero.headline || 'Do the best work of your career.'}
            </h1>

            {/* Subtitle */}
            <p
              className="text-slate-300/80 text-sm sm:text-[15px] leading-relaxed max-w-lg mb-8 animate-hero-fade-up"
              style={{ animationDelay: '260ms' }}
            >
              {hero.subtitle ||
                "Join a growth-minded team delivering technology that powers Africa's leading banks and enterprises."}
            </p>

            {/* Primary Red Pill CTA */}
            <div className="animate-hero-fade-up" style={{ animationDelay: '360ms' }}>
              <button
                type="button"
                onClick={scrollToRoles}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E52822] hover:bg-[#CC1F1A] text-white font-semibold text-xs sm:text-sm shadow-[0_6px_22px_rgba(229,40,34,0.38)] hover:shadow-[0_8px_28px_rgba(229,40,34,0.55)] active:scale-95 transition-all group"
              >
                <span>{hero.ctaText || 'See open roles'}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. LIGHT BODY: WHY INFYTEL + OPEN ROLES + HIRING PROCESS
         ========================================================= */}
      <div className="bg-[#F8FAFC] text-slate-900">
        {/* A. WHY INFYTEL (4 Benefit Cards) */}
        <section
          ref={whyRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 sm:pt-16 sm:pb-16"
        >
          <div
            className={`transition-all duration-700 ${revealEase} ${
              whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E12C2C]" />
              <span className="text-[11px] font-semibold text-[#3B95C8] uppercase tracking-[0.2em] font-mono">
                {whyInfytel.badge || 'WHY INFYTEL'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight mb-8 sm:mb-10">
              {whyInfytel.headline || 'A place to grow fast'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((benefit, idx) => {
              const Icon = getBenefitIcon(benefit.icon);
              return (
                <div
                  key={benefit.id || benefit.title}
                  style={{ transitionDelay: whyInView ? `${idx * 95}ms` : '0ms' }}
                  className={`group rounded-2xl bg-white border border-slate-200/80 p-6 shadow-[0_4px_18px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:border-sky-200 hover:-translate-y-1 transition-all duration-700 ${revealEase} ${
                    whyInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.97]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E8F4FE] group-hover:bg-[#1B9CE5] text-[#1B9CE5] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* B. OPEN ROLES (Department Filter Pills + Job Cards) */}
        <section
          id="open-roles"
          ref={rolesRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 scroll-mt-20"
        >
          <div
            className={`transition-all duration-700 ${revealEase} ${
              rolesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E12C2C]" />
              <span className="text-[11px] font-semibold text-[#3B95C8] uppercase tracking-[0.2em] font-mono">
                {openRoles.badge || 'OPEN ROLES'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight mb-6">
              {openRoles.headline || 'Find your next move'}
            </h2>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              {departments.map((dept) => {
                const isSelected = activeDept === dept.slug;
                return (
                  <button
                    key={dept.id || dept.slug}
                    type="button"
                    onClick={() => handleFilterChange(dept.slug)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 border active:scale-95 ${
                      isSelected
                        ? 'bg-[#0B1736] text-white border-[#0B1736] shadow-sm'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                    }`}
                  >
                    {dept.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Jobs List */}
          <div className={`space-y-4 transition-opacity duration-200 ${filtering ? 'opacity-60' : 'opacity-100'}`}>
            {jobs.length > 0 ? (
              jobs.map((job, idx) => (
                <div
                  key={job.id || job.slug}
                  style={{ transitionDelay: rolesInView ? `${idx * 80}ms` : '0ms' }}
                  className={`rounded-2xl bg-white border border-slate-200/80 p-6 sm:px-7 sm:py-6 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:border-sky-200 hover:shadow-[0_12px_28px_rgba(15,23,42,0.07)] hover:-translate-y-0.5 transition-all duration-700 flex flex-col md:flex-row md:items-center justify-between gap-5 ${revealEase} ${
                    rolesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
                  }`}
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5">
                      {job.title}
                    </h3>

                    {/* Metadata Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium">
                        <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-medium">
                        {job.employmentType}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-medium">
                        {job.experienceRange}
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-3xl">
                      {job.shortSummary}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenJobDetails(job)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#00A3E0] hover:bg-[#0284C7] text-white text-xs font-semibold shrink-0 transition-all shadow-sm self-start md:self-center group active:scale-95"
                  >
                    <span>{modalActions.viewDetailsButtonText || 'View Details'}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              ))
            ) : (
              <div className="rounded-2xl bg-white border border-slate-200/80 p-10 text-center">
                <Briefcase className="w-8 h-8 text-slate-300 mx-auto mb-3" />
                <p className="text-sm font-semibold text-slate-700">
                  No open positions in this department right now.
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Try another filter or select &ldquo;{modalActions.allFilterLabel || 'All'}&rdquo; to view all roles.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* C. HIRING PROCESS (4 Step Cards) */}
        <section
          ref={hiringRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 sm:pt-12 sm:pb-24"
        >
          <div
            className={`transition-all duration-700 ${revealEase} ${
              hiringInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E12C2C]" />
              <span className="text-[11px] font-semibold text-[#3B95C8] uppercase tracking-[0.2em] font-mono">
                {hiringProcess.badge || 'HIRING PROCESS'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight mb-8 sm:mb-10">
              {hiringProcess.headline || 'Simple, Transparent, Fast'}
            </h2>
          </div>

          <div className="relative">
            {/* Animated desktop progress connector line behind step cards */}
            <div
              className={`hidden lg:block absolute top-11 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#1AA7EC]/15 via-[#1AA7EC]/35 to-[#1AA7EC]/15 pointer-events-none origin-left transition-transform duration-[1100ms] delay-200 ${revealEase} ${
                hiringInView ? 'scale-x-100' : 'scale-x-0'
              }`}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
              {steps.map((step, idx) => (
                <div
                  key={step.id || step.stepCode}
                  style={{ transitionDelay: hiringInView ? `${idx * 100}ms` : '0ms' }}
                  className={`group rounded-2xl bg-white border border-slate-200/80 p-6 shadow-[0_4px_18px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:border-sky-200 hover:-translate-y-1 transition-all duration-700 ${revealEase} ${
                    hiringInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.97]'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#E6F4FE] group-hover:bg-[#1AA7EC] text-[#1AA7EC] group-hover:text-white font-bold text-sm flex items-center justify-center mb-5 font-mono transition-colors duration-300">
                    {step.stepCode || String(step.stepNumber).padStart(2, '0')}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================
          3. JOB DETAILS & APPLICATION MODAL
         ========================================================= */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 my-8 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={handleCloseModal}
              aria-label={modalActions.closeButtonText || 'Close'}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {modalMode === 'details' ? (
              <div>
                {selectedJob.department?.name && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E6F4FE] text-[#1B9CE5] text-[11px] font-semibold uppercase tracking-wider mb-3">
                    {selectedJob.department.name}
                  </span>
                )}

                <h3 className="text-2xl font-extrabold text-slate-900 pr-8 mb-3">
                  {selectedJob.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    {selectedJob.location}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
                    {selectedJob.employmentType}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium">
                    {selectedJob.experienceRange}
                  </span>
                </div>

                {loadingJobDetails && (
                  <p className="text-xs text-[#1B9CE5] mb-4 font-medium">
                    Refreshing latest role details...
                  </p>
                )}

                <div className="space-y-5 text-sm text-slate-600">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
                      About this role
                    </h4>
                    <p className="leading-relaxed">
                      {selectedJob.aboutJob || selectedJob.shortSummary}
                    </p>
                  </div>

                  {Array.isArray(selectedJob.responsibilities) &&
                    selectedJob.responsibilities.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                          Responsibilities
                        </h4>
                        <ul className="space-y-1.5 list-disc pl-5">
                          {selectedJob.responsibilities.map((item, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {Array.isArray(selectedJob.requirements) &&
                    selectedJob.requirements.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                          Requirements
                        </h4>
                        <ul className="space-y-1.5 list-disc pl-5">
                          {selectedJob.requirements.map((item, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {Array.isArray(selectedJob.benefits) &&
                    selectedJob.benefits.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                          Benefits
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedJob.benefits.map((b, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                </div>

                <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    {modalActions.closeButtonText || 'Close'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalMode('apply')}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#E52822] hover:bg-[#CC1F1A] text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors"
                  >
                    <span>{modalActions.applyButtonText || 'Apply Now'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => setModalMode('details')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B9CE5] hover:underline mb-4"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to role details</span>
                </button>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                  Apply for {selectedJob.title}
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  {selectedJob.location} · {selectedJob.employmentType}
                </p>

                {applyStatus?.type === 'success' ? (
                  <div className="py-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      Application Received
                    </h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                      {applyStatus.text}
                    </p>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="px-6 py-2.5 rounded-full bg-[#0B1736] text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                    >
                      {modalActions.closeButtonText || 'Close'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitApplication} className="space-y-4">
                    {applyStatus?.type === 'error' && (
                      <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 flex items-start gap-2 text-rose-800 text-xs">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                        <span>{applyStatus.text}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Full name *
                        </label>
                        <input
                          type="text"
                          required
                          value={appForm.fullName}
                          onChange={(e) =>
                            setAppForm({ ...appForm, fullName: e.target.value })
                          }
                          placeholder="e.g. Adaeze Okafor"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1B9CE5] focus:ring-2 focus:ring-[#1B9CE5]/15 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={appForm.email}
                          onChange={(e) =>
                            setAppForm({ ...appForm, email: e.target.value })
                          }
                          placeholder="you@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1B9CE5] focus:ring-2 focus:ring-[#1B9CE5]/15 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          value={appForm.phone}
                          onChange={(e) =>
                            setAppForm({ ...appForm, phone: e.target.value })
                          }
                          placeholder="e.g. 09168832163"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1B9CE5] focus:ring-2 focus:ring-[#1B9CE5]/15 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          CV / Resume link *
                        </label>
                        <input
                          type="url"
                          required
                          value={appForm.cvUrl}
                          onChange={(e) =>
                            setAppForm({ ...appForm, cvUrl: e.target.value })
                          }
                          placeholder="https://drive.google.com/..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1B9CE5] focus:ring-2 focus:ring-[#1B9CE5]/15 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Portfolio / GitHub URL
                      </label>
                      <input
                        type="url"
                        value={appForm.portfolioUrl}
                        onChange={(e) =>
                          setAppForm({ ...appForm, portfolioUrl: e.target.value })
                        }
                        placeholder="https://github.com/..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1B9CE5] focus:ring-2 focus:ring-[#1B9CE5]/15 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Cover note
                      </label>
                      <textarea
                        rows={3}
                        value={appForm.coverNote}
                        onChange={(e) =>
                          setAppForm({ ...appForm, coverNote: e.target.value })
                        }
                        placeholder="Briefly tell us about your relevant experience..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#1B9CE5] focus:ring-2 focus:ring-[#1B9CE5]/15 focus:outline-none resize-y"
                      />
                    </div>

                    <div className="pt-2 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs sm:text-sm font-semibold"
                      >
                        {modalActions.closeButtonText || 'Close'}
                      </button>
                      <button
                        type="submit"
                        disabled={applying}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E52822] hover:bg-[#CC1F1A] disabled:opacity-60 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors"
                      >
                        <span>{applying ? 'Submitting...' : 'Submit Application'}</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
