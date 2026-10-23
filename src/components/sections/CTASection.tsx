import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import Reveal from '@/components/common/Reveal';

export default function CTASection() {
  return (
    <section className="bg-ink-50 py-10 sm:py-16 lg:py-20">
      <div className="container-x">
        {/* Rounded Botanical Green Container Card matching the design system */}
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.75rem] bg-brand-700 px-6 py-10 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-white shadow-card">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-900/40 blur-3xl" />

          <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1 text-2xs sm:text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-gold-300" />
              Partner With Us
            </span>
            <h2 className="mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] sm:leading-[1.1] text-white">
              Let&apos;s Build the Future Together
            </h2>
            <p className="mx-auto mt-4 sm:mt-5 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-brand-100">
              We work with clients, institutions, and partners who share our commitment to quality, accountability, and long-term impact.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Link to="/contact" className="btn-gold w-full sm:w-auto text-center justify-center">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98] w-full sm:w-auto text-center"
              >
                Explore Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

