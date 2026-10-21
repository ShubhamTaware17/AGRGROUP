import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components';
import { services } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function Services() {
  useDocumentTitle('Our Services');
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
        <img
          src="https://images.pexels.com/photos/34842276/pexels-photo-34842276.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/60" />
        <div className="container-x relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow !text-gold-300">Our Services</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tighter2 sm:text-5xl lg:text-6xl">
              Business units built for focused, lasting impact
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              AGRGROUPS operates across three verticals. Each one is designed around dependable delivery, trusted
              partnerships, and real-world outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="space-y-20 lg:space-y-28">
            {services.map((s, i) => (
              <Reveal key={s.slug}>
                <div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                  <div className="lg:[direction:ltr]">
                    <div className="relative overflow-hidden rounded-2xl shadow-card">
                      <img
                        src={s.image}
                        alt={s.alt}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-ink-950/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300 backdrop-blur-sm">
                        0{i + 1}
                      </div>
                    </div>
                  </div>
                  <div className="lg:[direction:ltr]">
                    <span className="eyebrow">{`0${i + 1} — ${s.name}`}</span>
                    <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl">{s.name}</h2>
                    <p className="mt-5 text-base leading-relaxed text-ink-600">{s.description}</p>
                    <ul className="mt-6 space-y-3">
                      {s.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm font-medium text-ink-700">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                            <Check className="h-3 w-3" />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/services/${s.slug}`} className="btn-primary mt-8">
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
