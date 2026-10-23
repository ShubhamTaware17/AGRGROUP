import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Reveal } from '@/components';
import { services } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  useDocumentTitle(service ? service.name : 'Service Not Found');

  if (!service) return <Navigate to="/services" replace />;

  const currentIndex = services.findIndex((s) => s.slug === slug);
  const next = services[(currentIndex + 1) % services.length];

  return (
    <>
      <section className="relative overflow-hidden bg-ink-50 pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 border-b border-ink-200/60">
        {/* Organic Sage Background Waves */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <svg
            className="absolute -top-16 -right-24 h-[600px] w-[600px] text-brand-100/70 opacity-70"
            viewBox="0 0 800 800"
            fill="currentColor"
          >
            <path d="M420,50 Q650,80 720,280 Q790,480 620,640 Q450,800 280,720 Q110,640 90,440 Q70,240 230,120 Q390,0 420,50 Z" />
          </svg>
        </div>
        <div className="container-x relative z-10">
          <Reveal className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900">
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
            <div className="mt-4 sm:mt-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-100/90 px-3.5 py-1.5 text-2xs sm:text-xs font-semibold uppercase tracking-[0.18em] text-brand-800">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                {service.name}
              </span>
            </div>
            <h1 className="mt-3 sm:mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight sm:tracking-tighter2 text-ink-900">
              {service.name}
            </h1>
            <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-ink-500">{service.short}</p>
            <Link to="/contact" className="btn-gold mt-6 sm:mt-8 w-full sm:w-auto text-center justify-center">
              Enquire Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <span className="eyebrow">Overview</span>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.15] sm:leading-[1.1]">
                What this vertical delivers
              </h2>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-ink-600">{service.description}</p>
              <div className="mt-6 sm:mt-8 overflow-hidden rounded-[2rem] border-2 border-brand-200/90 bg-brand-200/40 p-2 sm:p-3 shadow-card">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img src={service.image} alt={service.alt} loading="lazy" className="aspect-[4/3] sm:aspect-[16/9] w-full object-cover" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <span className="eyebrow">Capabilities</span>
              <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl lg:text-3xl font-extrabold leading-[1.2]">
                How we deliver
              </h2>
              <ul className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
                {service.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 sm:gap-3 rounded-xl border border-ink-100 bg-ink-50/50 p-3.5 sm:p-4">
                    <span className="mt-0.5 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                      <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed text-ink-700">{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 sm:mt-8 rounded-2xl bg-brand-700 p-5 sm:p-6 text-white shadow-soft">
                <p className="text-xs sm:text-sm leading-relaxed text-brand-100">
                  Want to explore how {service.name} can support your goals?
                </p>
                <Link to="/contact" className="btn-gold mt-4 w-full sm:w-auto text-center justify-center">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-12 sm:py-16 lg:py-20 border-t border-ink-200/60">
        <div className="container-x">
          <Reveal className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <span className="eyebrow">Next Service</span>
              <h3 className="mt-2 sm:mt-3 text-xl sm:text-2xl font-extrabold">{next.name}</h3>
              <p className="mt-1.5 sm:mt-2 max-w-md text-xs sm:text-sm text-ink-500">{next.short}</p>
            </div>
            <Link to={`/services/${next.slug}`} className="btn-gold w-full sm:w-auto text-center justify-center shrink-0">
              {next.name}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
