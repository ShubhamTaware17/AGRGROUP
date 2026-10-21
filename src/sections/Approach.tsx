import { Target, Handshake, ShieldCheck, TrendingUp } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { approach } from '@/data/content';

const icons = { Target, Handshake, ShieldCheck, TrendingUp } as const;

export default function Approach() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white lg:py-28">
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-brand-500 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-96 w-96 rounded-full bg-gold-400 blur-3xl" />
      </div>
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center !text-gold-300">How We Work</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-[2.75rem]">
            Our approach to delivering lasting value
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
            Four principles guide how we plan, partner, execute, and grow — across every business vertical.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((item, i) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <Reveal key={item.title} delay={i * 120}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/[0.07] lg:p-7">
                  <span className="font-display text-xs font-bold tracking-[0.18em] text-gold-400">
                    0{i + 1}
                  </span>
                  <span className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-gold-400 ring-1 ring-white/10 transition-colors group-hover:bg-gold-400 group-hover:text-ink-950">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/60">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
