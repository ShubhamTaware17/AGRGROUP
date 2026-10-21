import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';
import { slides } from '@/data/content';

const AUTOPLAY = 7000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timer = useRef<number | null>(null);
  const raf = useRef<number | null>(null);
  const startTime = useRef<number>(0);

  const go = useCallback((next: number) => setIndex((next + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) {
      if (timer.current) window.clearTimeout(timer.current);
      return;
    }
    startTime.current = performance.now();
    if (raf.current) cancelAnimationFrame(raf.current);
    const animate = (now: number) => {
      const elapsed = now - startTime.current;
      const pct = Math.min(elapsed / AUTOPLAY, 1);
      setProgress(pct);
      if (pct < 1) raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    timer.current = window.setTimeout(() => go(index + 1), AUTOPLAY);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [index, paused, go]);

  useEffect(() => {
    if (!paused) setProgress(0);
  }, [index, paused]);

  return (
    <section
      className="relative h-[100svh] min-h-[620px] w-full overflow-hidden bg-ink-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Featured business sectors"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden={i !== index}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className={`h-full w-full object-cover ${i === index ? 'animate-ken-burns' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'low'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/55 to-ink-950/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/30" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="container-x">
          <div className="max-w-2xl">
            {slides.map((slide, i) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ease-out ${
                  i === index ? 'block translate-y-0 opacity-100' : 'hidden translate-y-6 opacity-0'
                }`}
                aria-hidden={i !== index}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
                  {slide.tag}
                </span>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tighter2 text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
                  {slide.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{slide.copy}</p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link to="/services" className="btn-gold">
                    Discover More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/about" className="btn-ghost-light">
                    About AGRGROUPS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:flex lg:left-6"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:flex lg:right-6"
        aria-label="Next slide"
      >
        <ArrowRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 lg:bottom-8">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-10 bg-white/30' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}: ${slide.tag}`}
            aria-current={i === index}
          >
            {i === index && (
              <span
                className="block h-full rounded-full bg-gold-400"
                style={{ width: `${progress * 100}%` }}
              />
            )}
          </button>
        ))}
      </div>

      <a
        href="#capabilities"
        className="absolute bottom-6 right-6 z-20 hidden items-center gap-2 text-xs font-medium text-white/60 transition-colors hover:text-white lg:flex"
        aria-label="Scroll to content"
      >
        Scroll
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
