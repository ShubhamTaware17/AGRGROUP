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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setServicesMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none px-2.5 pt-2.5 transition-all duration-300 sm:px-6 sm:pt-4 lg:px-8">
      {/* Floating Capsule Bar - Always pristine warm cream with subtle border */}
      <div
        className={`pointer-events-auto mx-auto max-w-7xl transition-all duration-300 rounded-2xl border ${
          scrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-xl border-ink-200 shadow-[0_12px_40px_-10px_rgba(30,40,30,0.12)] py-2 sm:py-2.5 px-3 sm:px-6'
            : 'bg-[#FAF7F2]/90 backdrop-blur-xl border-ink-100 shadow-[0_6px_25px_-6px_rgba(30,40,30,0.07)] py-2.5 sm:py-3 px-3 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo on Left - Always dark forest text */}
          <Logo variant="dark" />

          {/* Desktop Navigation Center Dock */}
          <nav
            className="hidden items-center gap-1 rounded-full p-1.5 transition-colors lg:flex bg-ink-100/70 border border-ink-200/70 shadow-inner"
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
                          isActive
                            ? 'bg-brand-700 text-white shadow-sm'
                            : 'text-ink-700 hover:text-ink-950 hover:bg-white'
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
                        <div className="w-80 rounded-2xl p-3 shadow-2xl backdrop-blur-2xl border border-ink-200 bg-[#FAF7F2]/98 text-ink-900 shadow-[0_20px_50px_rgba(30,40,30,0.14)]">
                          <div className="px-3 py-2 text-2xs font-bold uppercase tracking-wider text-brand-700">
                            Business Verticals
                          </div>
                          <div className="space-y-1">
                            {services.map((s) => {
                              const Icon = serviceIcons[s.slug] || Building2;
                              return (
                                <Link
                                  key={s.slug}
                                  to={`/services/${s.slug}`}
                                  className="group flex items-start gap-3 rounded-xl p-2.5 transition-all hover:bg-brand-50"
                                >
                                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-700 transition-transform group-hover:scale-105">
                                    <Icon className="h-4.5 w-4.5" />
                                  </span>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-sm font-semibold text-ink-900 transition-colors group-hover:text-brand-700">
                                      {s.name}
                                    </div>
                                    <p className="mt-0.5 line-clamp-1 text-xs text-ink-500">
                                      {s.short}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="mt-2 border-t border-ink-100 pt-2 text-center">
                            <Link
                              to="/services"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-600 hover:text-gold-700 transition-colors py-1"
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
                      isActive
                        ? 'bg-brand-700 text-white shadow-sm'
                        : 'text-ink-700 hover:text-ink-950 hover:bg-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Action CTAs on Right */}
          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
            {/* Phone quick link */}
            <a
              href={company.phoneHref}
              className="hidden items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold transition-all md:inline-flex text-ink-700 hover:text-brand-700 hover:bg-ink-100/70 border border-ink-200/60"
              title={`Call ${company.phone}`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
              </span>
              <Phone className="h-3.5 w-3.5 text-gold-500" />
              <span className="hidden xl:inline">{company.phone}</span>
              <span className="xl:hidden">Call</span>
            </a>

            {/* Primary Action Button - Rounded pill terracotta matching screenshot top-right button */}
            <Link
              to="/contact"
              className="btn-gold !py-2 !px-4 sm:!px-5 text-xs sm:text-sm font-bold shadow-soft"
            >
              <span className="hidden xs:inline">Get in Touch</span>
              <span className="xs:hidden">Contact</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl border border-ink-200 text-ink-800 hover:bg-ink-100 transition-all lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="h-4.5 w-4.5 sm:h-5 sm:w-5" /> : <Menu className="h-4.5 w-4.5 sm:h-5 sm:w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="pointer-events-auto mt-2 max-h-[calc(100svh-5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-ink-200/80 bg-[#FAF7F2]/98 p-4 sm:p-5 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `flex min-h-[44px] items-center justify-between rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-100/70 text-brand-800'
                      : 'text-ink-700 hover:bg-ink-100/70'
                  }`
                }
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 opacity-40" />
              </NavLink>
            ))}
          </div>

          {/* Business Sectors Mini-List on Mobile */}
          <div className="mt-4 border-t border-ink-200/70 pt-3.5">
            <p className="px-2 text-2xs font-bold uppercase tracking-wider text-brand-700">
              Our Verticals
            </p>
            <div className="mt-2 space-y-1">
              {services.map((s) => {
                const Icon = serviceIcons[s.slug] || Building2;
                return (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="flex min-h-[40px] items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100/70"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-brand-600" />
                    <span>{s.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Direct Contact Links */}
          <div className="mt-4 flex flex-col gap-2 border-t border-ink-200/70 pt-3.5">
            <a
              href={company.phoneHref}
              className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-brand-900 px-4 py-2.5 text-sm font-bold text-white shadow-soft active:scale-[0.99]"
            >
              <Phone className="h-4 w-4 text-gold-400" />
              <span>Call Us: {company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex min-h-[40px] items-center justify-center gap-2 rounded-xl border border-ink-200 bg-white/70 px-4 py-2 text-xs font-semibold text-ink-700 hover:bg-ink-100/70"
            >
              <Mail className="h-3.5 w-3.5 text-gold-500" />
              <span className="truncate">{company.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
