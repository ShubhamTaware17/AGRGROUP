import { Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '@/components/common/Reveal';
import { capabilities } from '@/data/content';

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-ink-50 py-10 sm:py-16 lg:py-20">
      <div className="container-x">
        {/* Screenshot Styled Centered Heading with Ornaments */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-bold tracking-wider text-brand-700 uppercase">
            <span className="h-px w-6 sm:w-10 bg-brand-300" />
            <span className="flex items-center gap-1.5">
              <span className="text-gold-500">◆</span>
              Recommended Focus Areas
              <span className="text-gold-500">◆</span>
            </span>
            <span className="h-px w-6 sm:w-10 bg-brand-300" />
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink-900">
            Disciplined capabilities built for scale
          </h2>
          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base leading-relaxed text-ink-500">
            Three principles shape how AGRGROUPS operates across every business vertical.
          </p>
        </Reveal>

        {/* 3 Clean White Cards matching the bottom row of screenshot */}
        <div className="mt-8 sm:mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 120}
              className={i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <article className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-ink-100 bg-white p-4 sm:p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div>
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-xl bg-ink-100">
                    <img
                      src={c.image}
                      alt={c.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded-full bg-ink-900/70 px-2.5 py-0.5 text-2xs font-bold text-white backdrop-blur-sm">
                      Pillar 0{i + 1}
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-ink-900 transition-colors group-hover:text-brand-700">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-500 line-clamp-3">
                    {c.description}
                  </p>
                </div>

                {/* Bottom Row matching screenshot price & green plus button */}
                <div className="mt-4 sm:mt-5 flex items-center justify-between border-t border-ink-100 pt-3">
                  <span className="font-display text-xs sm:text-sm font-bold text-brand-700">
                    National Standard
                  </span>
                  <Link
                    to="/about"
                    className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-brand-700 text-white shadow-sm transition-all duration-200 group-hover:bg-gold-500 group-hover:scale-105"
                    aria-label={`Learn more about ${c.title}`}
                  >
                    <Plus className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
