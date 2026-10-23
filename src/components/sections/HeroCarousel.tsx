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
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      go(index + 1); // Swiped left -> next
    } else if (distance < -50) {
      go(index - 1); // Swiped right -> prev
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-ink-50 pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Featured business sectors"
    >
      {/* Organic Sage Background Waves / Blobs matching the screenshot */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -top-16 -right-24 h-[650px] w-[650px] lg:h-[800px] lg:w-[800px] text-brand-100/70 opacity-80"
          viewBox="0 0 800 800"
          fill="currentColor"
        >
          <path d="M420,50 Q650,80 720,280 Q790,480 620,640 Q450,800 280,720 Q110,640 90,440 Q70,240 230,120 Q390,0 420,50 Z" />
        </svg>
        <svg
          className="absolute -bottom-32 -left-20 h-[500px] w-[500px] text-brand-50/90"
          viewBox="0 0 600 600"
          fill="currentColor"
        >
          <path d="M300,40 Q480,90 520,260 Q560,430 420,510 Q280,590 150,480 Q20,370 70,220 Q120,70 300,40 Z" />
        </svg>
      </div>

      <div className="container-x relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading, Copy, Terracotta CTA & Trust Badges */}
          <div className="lg:col-span-7">
            {slides.map((slide, i) => {
              const isActive = i === index;
              return (
                <div
                  key={slide.id}
                  className={`transition-all duration-700 ease-out ${
                    isActive ? 'block translate-y-0 opacity-100' : 'hidden translate-y-4 opacity-0'
                  }`}
                  aria-hidden={!isActive}
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-100/90 px-3.5 py-1.5 text-2xs sm:text-xs font-semibold uppercase tracking-[0.18em] text-brand-800">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                    {slide.tag}
                  </span>

                  {isActive ? (
                    <h1 className="mt-4 sm:mt-5 font-display text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold leading-[1.12] sm:leading-[1.08] tracking-tight sm:tracking-tighter2 text-ink-900 text-balance">
                      {slide.title}
                    </h1>
                  ) : (
                    <div className="mt-4 sm:mt-5 font-display text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-extrabold leading-[1.12] sm:leading-[1.08] tracking-tight sm:tracking-tighter2 text-ink-900 text-balance">
                      {slide.title}
                    </div>
                  )}

                  <p className="mt-4 sm:mt-5 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-ink-500">
                    {slide.copy}
                  </p>

                  <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Link to="/services" className="btn-gold w-full sm:w-auto text-center justify-center">
                      Discover More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link to="/about" className="btn-outline w-full sm:w-auto text-center justify-center">
                      About AGRGROUPS
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* 3 Trust Badges directly matching the screenshot below the CTA button */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-ink-200/80 pt-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                <span className="text-xs font-semibold text-ink-700">Disciplined Quality</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </span>
                <span className="text-xs font-semibold text-ink-700">Trusted Delivery</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span className="text-xs font-semibold text-ink-700">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Organic Sage Frame with Slide Photo & Floating Badge */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Organic Sage Container Frame matching screenshot right-hand latte card */}
              <div className="relative overflow-hidden rounded-[2.25rem] sm:rounded-[2.75rem] border-2 border-brand-200/90 bg-brand-200/40 p-2 sm:p-3 shadow-card">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.5] w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] bg-ink-100">
                  {slides.map((slide, i) => (
                    <img
                      key={slide.id}
                      src={slide.image}
                      alt={slide.alt}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                        i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                      }`}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      fetchPriority={i === 0 ? 'high' : 'low'}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />

                  {/* Floating Pill Tag in Bottom Right (matching "100% арабика" in screenshot) */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-2 rounded-2xl border border-ink-100 bg-white/95 px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-card backdrop-blur-md">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div className="text-left leading-none">
                      <p className="font-display text-[11px] sm:text-xs font-bold text-ink-900">100% Verified</p>
                      <p className="text-[10px] text-ink-500">Quality Benchmark</p>
                    </div>
                  </div>
                </div>

                {/* Integrated Slide Navigation bar below card */}
                <div className="mt-3 flex items-center justify-between px-2">
                  {/* Indicator Pills */}
                  <div className="flex items-center gap-1.5">
                    {slides.map((slide, i) => (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => go(i)}
                        className="group py-1.5 px-0.5"
                        aria-label={`Go to slide ${i + 1}: ${slide.tag}`}
                        aria-current={i === index}
                      >
                        <span
                          className={`block h-1.5 rounded-full transition-all duration-300 ${
                            i === index ? 'w-8 bg-brand-600' : 'w-3 bg-brand-200 group-hover:bg-brand-300'
                          }`}
                        >
                          {i === index && (
                            <span
                              className="block h-full rounded-full bg-gold-500"
                              style={{ width: `${progress * 100}%` }}
                            />
                          )}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Arrow Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => go(index - 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-300 bg-white text-ink-800 shadow-sm transition-all hover:bg-brand-50"
                      aria-label="Previous slide"
                    >
                      <ArrowLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => go(index + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-300 bg-white text-ink-800 shadow-sm transition-all hover:bg-brand-50"
                      aria-label="Next slide"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
