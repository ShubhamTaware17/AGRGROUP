import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
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
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
        <img src={service.image} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/60" />
        <div className="container-x relative">
          <Reveal className="max-w-3xl">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
            <span className="eyebrow mt-6 !text-gold-300">{service.name}</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tighter2 sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{service.short}</p>
            <Link to="/contact" className="btn-gold mt-8">
              Enquire Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <span className="eyebrow">Overview</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl">
                What this vertical delivers
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600">{service.description}</p>
              <div className="mt-8 overflow-hidden rounded-2xl shadow-card">
                <img src={service.image} alt={service.alt} loading="lazy" className="aspect-[16/9] w-full object-cover" />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <span className="eyebrow">Capabilities</span>
              <h2 className="mt-4 text-2xl font-extrabold leading-[1.15] sm:text-3xl">
                How we deliver
              </h2>
              <ul className="mt-6 space-y-4">
                {service.capabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-ink-50/50 p-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink-700">{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-brand-950 p-6 text-white">
                <p className="text-sm leading-relaxed text-white/70">
                  Want to explore how {service.name} can support your goals?
                </p>
                <Link to="/contact" className="btn-gold mt-4">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16 lg:py-20">
        <div className="container-x">
          <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <span className="eyebrow">Next Service</span>
              <h3 className="mt-3 text-2xl font-extrabold">{next.name}</h3>
              <p className="mt-2 max-w-md text-sm text-ink-500">{next.short}</p>
            </div>
            <Link to={`/services/${next.slug}`} className="btn-primary shrink-0">
              {next.name}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
