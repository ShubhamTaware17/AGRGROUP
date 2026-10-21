import Reveal from '@/components/common/Reveal';
import { capabilities } from '@/data/content';

export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-white py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">What Drives Us</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
            Corporate capabilities built on discipline and trust
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
            Three principles shape how AGRGROUPS operates across every business vertical.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="group h-full overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="font-display text-xs font-bold uppercase tracking-[0.16em] text-gold-300">
                      0{i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-7">
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-500">{c.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
