import { Target, Handshake, ShieldCheck, TrendingUp } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import { approach } from '@/data/content';

const icons = { Target, Handshake, ShieldCheck, TrendingUp } as const;

export default function Approach() {
  return (
    <section className="relative overflow-hidden bg-ink-50 py-14 sm:py-20 lg:py-24">
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center !text-brand-700">How We Work</span>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] sm:leading-[1.1] text-ink-900">
            Our approach to delivering lasting value
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-ink-500">
            Four principles guide how we plan, partner, execute, and grow — across every business vertical.
          </p>
        </Reveal>

        <div className="mt-10 sm:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} delay={i * 120}>
                <article className="group h-full rounded-2xl border border-ink-100 bg-white p-5 sm:p-6 lg:p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card">
                  <span className="font-display text-xs font-bold tracking-[0.18em] text-gold-500">
                    0{i + 1}
                  </span>
                  <span className="mt-3 sm:mt-4 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 ring-1 ring-brand-200/80 transition-colors group-hover:bg-gold-500 group-hover:text-white">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold text-ink-900 transition-colors group-hover:text-brand-700">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-500">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

