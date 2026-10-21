import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/common/Reveal';
import { company } from '@/data/content';

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-ink-50 py-20 lg:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-card">
              <img
                src="https://images.pexels.com/photos/37320179/pexels-photo-37320179.jpeg?auto=compress&cs=tinysrgb&w=1280"
                alt="Modern glass office building representing AGRGROUPS corporate headquarters."
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-ink-100 bg-white p-5 shadow-card sm:block lg:-right-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-950">
                  <span className="font-display text-lg font-extrabold text-gold-400">AGR</span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-ink-900">Diversified Group</p>
                  <p className="text-xs text-ink-500">Building value across industries</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">About AGRGROUPS</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
              Responsible growth grounded in real outcomes
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600">{company.intro}</p>
            <p className="mt-4 text-base leading-relaxed text-ink-600">{company.mission}</p>

            <ul className="mt-6 space-y-3">
              {[
                'Infrastructure, healthcare technology, and skill development',
                'Disciplined execution with accountability at every stage',
                'Partnerships grounded in trust and measurable results',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-medium text-ink-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Check className="h-3 w-3" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <Link to="/about" className="btn-primary mt-8">
              Discover More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
