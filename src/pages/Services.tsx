import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components';
import { services } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function Services() {
  useDocumentTitle('Our Services');
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
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-100/90 px-3.5 py-1.5 text-2xs sm:text-xs font-semibold uppercase tracking-[0.18em] text-brand-800">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Our Services
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight sm:tracking-tighter2 text-ink-900">
              Business units built for focused, lasting impact
            </h1>
            <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-ink-500">
              AGRGROUPS operates across three verticals. Each one is designed around dependable delivery, trusted
              partnerships, and real-world outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="container-x">
          <div className="space-y-14 sm:space-y-20 lg:space-y-28">
            {services.map((s, i) => (
              <Reveal key={s.slug}>
                <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className={i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="relative overflow-hidden rounded-[2.25rem] sm:rounded-[2.75rem] border-2 border-brand-200/90 bg-brand-200/40 p-2 sm:p-3 shadow-card">
                      <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem]">
                        <img
                          src={s.image}
                          alt={s.alt}
                          loading="lazy"
                          className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full object-cover"
                        />
                        <div className="absolute left-3.5 top-3.5 sm:left-4 sm:top-4 rounded-full bg-brand-700/90 px-3.5 py-1 sm:px-4 sm:py-1.5 text-2xs sm:text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                          0{i + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                    <span className="eyebrow">{`0${i + 1} — ${s.name}`}</span>
                    <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.15] sm:leading-[1.1] text-ink-900">{s.name}</h2>
                    <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-relaxed text-ink-600">{s.description}</p>
                    <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-ink-700">
                          <span className="mt-0.5 flex h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                            <Check className="h-3 w-3" />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/services/${s.slug}`} className="btn-gold mt-6 sm:mt-8 w-full sm:w-auto text-center justify-center">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
