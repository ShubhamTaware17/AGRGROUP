import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import { services } from '@/data/content';

const verticalMeta: Record<string, { subtitle: string; badge: string }> = {
  infrastructure: { subtitle: 'Civil & Engineering', badge: 'Turnkey Delivery' },
  'healthcare-technology': { subtitle: 'Medical & Digital', badge: 'Precision Care' },
  'skill-development': { subtitle: 'Vocational & Training', badge: 'Empowering Talent' },
};

export default function ServicesPreview() {
  return (
    <section className="bg-ink-50 py-10 sm:py-16 lg:py-20">
      <div className="container-x">
        {/* Signature Sage Green Container Card directly matching screenshot "Популярные напитки" */}
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.75rem] bg-brand-500 p-6 sm:p-10 lg:p-14 text-white shadow-card">
          {/* Subtle Organic Background Circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-700/30 blur-2xl" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Header & Warm Cream Pill Button */}
            <div className="lg:col-span-4">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-2xs sm:text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                  <Sparkles className="h-3 w-3 text-gold-300" />
                  Core Business Units
                </div>

                <h2 className="mt-4 font-display text-2xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.12] text-white">
                  Featured Verticals
                </h2>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-brand-100">
                  Disciplined engineering, modern medical technology, and workforce enablement designed for focused impact.
                </p>

                <div className="mt-6 sm:mt-8">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full bg-[#FAF5EE] px-6 py-3 text-xs sm:text-sm font-bold text-ink-900 shadow-soft transition-all duration-200 hover:bg-white hover:shadow-card active:scale-[0.98]"
                  >
                    View All Services
                    <ArrowRight className="h-4 w-4 text-brand-700" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: 3 Circular Drink-Style Showcase Cards */}
            <div className="lg:col-span-8">
              <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                {services.map((s, i) => {
                  const meta = verticalMeta[s.slug] || { subtitle: 'Specialised Focus', badge: 'Certified' };
                  return (
                    <Reveal key={s.slug} delay={i * 120}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="group flex flex-col items-center rounded-2xl bg-white/15 p-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/25 hover:shadow-lg border border-white/20"
                      >
                        {/* Circular Image Container matching screenshot latte / matcha cups */}
                        <div className="relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border-4 border-white/40 shadow-inner transition-transform duration-500 group-hover:scale-105 group-hover:border-white">
                          <img
                            src={s.image}
                            alt={s.alt}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-white transition-colors group-hover:text-gold-200">
                          {s.name}
                        </h3>
                        <p className="mt-1 text-xs text-brand-100">
                          {meta.subtitle}
                        </p>

                        {/* Badge / Pill like 250 ₽ */}
                        <div className="mt-3.5 inline-flex items-center rounded-full bg-white/25 px-3 py-1 text-2xs sm:text-xs font-bold text-white backdrop-blur-sm group-hover:bg-gold-500 group-hover:text-white transition-colors">
                          {meta.badge}
                        </div>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
