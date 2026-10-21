import { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  Building2,
  HeartPulse,
  GraduationCap,
  ArrowRight,
  Mail,
  Sparkles,
} from 'lucide-react';
import Logo from './Logo';
import { nav, company, services } from '@/data/content';

const serviceIcons = {
  infrastructure: Building2,
  'healthcare-technology': HeartPulse,
  'skill-development': GraduationCap,
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const dropdownTimeout = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setServicesMenuOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = window.setTimeout(() => {
      setServicesMenuOpen(false);
    }, 180);
  };

  const isLightMode = scrolled; // when scrolled, navbar is frosted white; when top, frosted dark

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none px-3 pt-3 transition-all duration-300 sm:px-6 sm:pt-4 lg:px-8">
      {/* Floating Capsule Bar */}
      <div
        className={`pointer-events-auto mx-auto max-w-7xl transition-all duration-300 rounded-2xl border ${
          isLightMode
            ? 'bg-white/95 backdrop-blur-xl border-ink-200/80 shadow-[0_12px_40px_-10px_rgba(15,23,42,0.14)] py-2 sm:py-2.5 px-4 sm:px-6'
            : 'bg-ink-950/75 backdrop-blur-xl border-white/15 shadow-[0_16px_45px_rgba(0,0,0,0.45)] py-2.5 sm:py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <Logo variant={isLightMode ? 'dark' : 'light'} />

          {/* Desktop Navigation Center Dock */}
          <nav
            className={`hidden items-center gap-1 rounded-full p-1.5 transition-colors lg:flex ${
              isLightMode
                ? 'bg-ink-50/80 border border-ink-100 shadow-inner'
                : 'bg-white/[0.06] border border-white/10 shadow-inner'
            }`}
            aria-label="Primary navigation"
          >
            {nav.map((item) => {
              const isServices = item.to === '/services';

              if (isServices) {
                return (
                  <div
                    key={item.to}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                          isLightMode
                            ? isActive
                              ? 'bg-brand-700 text-white shadow-sm'
                              : 'text-ink-700 hover:text-ink-950 hover:bg-white'
                            : isActive
                              ? 'bg-gradient-to-r from-gold-400/25 to-gold-500/20 text-gold-300 border border-gold-400/40 shadow-sm'
                              : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`h-3.5 w-3.5 transition-transform duration-200 ${
                              servicesMenuOpen ? 'rotate-180' : ''
                            } ${isActive ? 'opacity-100' : 'opacity-60'}`}
                          />
                        </>
                      )}
                    </NavLink>

                    {/* Services Dropdown Mega-Card */}
                    {servicesMenuOpen && (
                      <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                        <div
                          className={`w-80 rounded-2xl p-3 shadow-2xl backdrop-blur-2xl border transition-all ${
                            isLightMode
                              ? 'bg-white/95 border-ink-100 text-ink-900 shadow-[0_20px_50px_rgba(15,23,42,0.18)]'
                              : 'bg-ink-950/95 border-white/15 text-white shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
                          }`}
                        >
                          <div className="px-3 py-2 text-2xs font-bold uppercase tracking-wider text-gold-400">
                            Business Verticals
                          </div>
                          <div className="space-y-1">
                            {services.map((s) => {
                              const Icon = serviceIcons[s.slug] || Building2;
                              return (
                                <Link
                                  key={s.slug}
                                  to={`/services/${s.slug}`}
                                  className={`group flex items-start gap-3 rounded-xl p-2.5 transition-all ${
                                    isLightMode
                                      ? 'hover:bg-brand-50/80'
                                      : 'hover:bg-white/10'
                                  }`}
                                >
                                  <span
                                    className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-105 ${
                                      isLightMode
                                        ? 'bg-brand-100 text-brand-700'
                                        : 'bg-white/10 text-gold-400'
                                    }`}
                                  >
                                    <Icon className="h-4.5 w-4.5" />
                                  </span>
                                  <div className="flex-1 min-w-0">
                                    <div
                                      className={`text-sm font-semibold transition-colors ${
                                        isLightMode
                                          ? 'group-hover:text-brand-700 text-ink-900'
                                          : 'group-hover:text-gold-300 text-white'
                                      }`}
                                    >
                                      {s.name}
                                    </div>
                                    <p
                                      className={`mt-0.5 line-clamp-1 text-xs ${
                                        isLightMode ? 'text-ink-500' : 'text-white/60'
                                      }`}
                                    >
                                      {s.short}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          <div
                            className={`mt-2 border-t pt-2 text-center ${
                              isLightMode ? 'border-ink-100' : 'border-white/10'
                            }`}
                          >
                            <Link
                              to="/services"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors py-1"
                            >
                              Explore all verticals
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      isLightMode
                        ? isActive
                          ? 'bg-brand-700 text-white shadow-sm'
                          : 'text-ink-700 hover:text-ink-950 hover:bg-white'
                        : isActive
                          ? 'bg-gradient-to-r from-gold-400/25 to-gold-500/20 text-gold-300 border border-gold-400/40 shadow-sm'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Action CTAs on Right */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Phone quick link */}
            <a
              href={company.phoneHref}
              className={`hidden items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold transition-all md:inline-flex ${
                isLightMode
                  ? 'text-ink-700 hover:text-brand-700 hover:bg-ink-100/70'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              title={`Call ${company.phone}`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <Phone className="h-3.5 w-3.5 text-gold-400" />
              <span className="hidden xl:inline">{company.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Primary Action Button */}
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-ink-950 shadow-[0_4px_16px_rgba(211,165,65,0.35)] transition-all duration-300 hover:shadow-[0_6px_25px_rgba(211,165,65,0.55)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Get in Touch</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-all lg:hidden ${
                isLightMode
                  ? 'border-ink-200 text-ink-800 hover:bg-ink-100'
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div
          id="mobile-menu"
          className="pointer-events-auto mt-2 rounded-2xl border border-ink-100 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-ink-700 hover:bg-ink-50'
                  }`
                }
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 opacity-40" />
              </NavLink>
            ))}
          </div>

          {/* Business Sectors Mini-List on Mobile */}
          <div className="mt-4 border-t border-ink-100 pt-4">
            <p className="px-2 text-2xs font-bold uppercase tracking-wider text-ink-400">
              Our Verticals
            </p>
            <div className="mt-2 space-y-1">
              {services.map((s) => {
                const Icon = serviceIcons[s.slug] || Building2;
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-50"
                  >
                    <Icon className="h-4 w-4 text-brand-600" />
                    <span>{s.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Direct Contact Links */}
          <div className="mt-4 flex flex-col gap-2 border-t border-ink-100 pt-4">
            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 rounded-xl bg-ink-950 px-4 py-3 text-sm font-bold text-white shadow-soft"
            >
              <Phone className="h-4 w-4 text-gold-400" />
              <span>Call Us: {company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-ink-200 px-4 py-2.5 text-xs font-semibold text-ink-700 hover:bg-ink-50"
            >
              <Mail className="h-3.5 w-3.5 text-gold-500" />
              <span>{company.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
