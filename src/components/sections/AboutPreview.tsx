import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import { company } from '@/data/content';

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-ink-50 py-14 sm:py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2.25rem] sm:rounded-[2.75rem] border-2 border-brand-200/90 bg-brand-200/40 p-2 sm:p-3 shadow-card">
              <div className="overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem]">
                <img
                  src="https://images.pexels.com/photos/37320179/pexels-photo-37320179.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="Modern glass office building representing AGRGROUPS corporate headquarters."
                  loading="lazy"
                  className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 right-2 hidden rounded-2xl border border-ink-100 bg-white p-4 shadow-card sm:block sm:p-5 lg:-bottom-6 lg:-right-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-brand-700">
                  <span className="font-display text-base sm:text-lg font-extrabold text-gold-300">AGR</span>
                </div>
                <div>
                  <p className="font-display text-xs sm:text-sm font-bold text-ink-900">Diversified Group</p>
                  <p className="text-[11px] sm:text-xs text-ink-500">Building value across industries</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">About AGRGROUPS</span>
            <h2 className="mt-4 text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] sm:leading-[1.1]">
              Responsible growth grounded in real outcomes
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-ink-600">{company.intro}</p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-ink-600">{company.mission}</p>

            <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
              {[
                'Infrastructure, healthcare technology, and skill development',
                'Disciplined execution with accountability at every stage',
                'Partnerships grounded in trust and measurable results',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-ink-700">
                  <span className="mt-0.5 flex h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-gold mt-6 sm:mt-8 w-full sm:w-auto text-center justify-center">
              Discover More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
