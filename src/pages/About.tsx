import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Users, Award } from 'lucide-react';
import { Reveal, StatsBar, SectionHeading } from '@/components';
import { approachStats, services, company } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const pillars = [
  { icon: Target, title: 'Our Mission', text: company.mission },
  { icon: Eye, title: 'Our Vision', text: 'To be a trusted, diversified business group recognised for dependable delivery, ethical partnerships, and meaningful social impact.' },
  { icon: Users, title: 'Our People', text: 'We invest in skilled, accountable teams and support skill development that opens doors to sustainable livelihoods.' },
  { icon: Award, title: 'Our Standard', text: 'One quality benchmark across every business unit — applied with discipline at every stage of delivery.' },
];

export default function About() {
  useDocumentTitle('About Us');
  return (
    <>
      <section className="relative overflow-hidden bg-ink-50 pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 border-b border-ink-200/60">
        {/* Organic Sage Background Waves */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <svg
            className="absolute -top-16 -right-24 h-[600px] w-[600px] text-brand-100/70 opacity-70"
            viewBox="0 0 800 800"
            fill="currentColor"
          >
            <path d="M420,50 Q650,80 720,280 Q790,480 620,640 Q450,800 280,720 Q110,640 90,440 Q70,240 230,120 Q390,0 420,50 Z" />
          </svg>
        </div>
        <div className="container-x relative z-10">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-100/90 px-3.5 py-1.5 text-2xs sm:text-xs font-semibold uppercase tracking-[0.18em] text-brand-800">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              About Us
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight sm:tracking-tighter2 text-ink-900">
              Building value across industries, with responsibility
            </h1>
            <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-ink-500">{company.intro}</p>
            <Link to="/services" className="btn-gold mt-6 sm:mt-8 w-full sm:w-auto text-center justify-center">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal className="relative">
              <div className="overflow-hidden rounded-2xl shadow-card">
                <img
                  src="https://images.pexels.com/photos/1313534/pexels-photo-1313534.jpeg?auto=compress&cs=tinysrgb&w=1280"
                  alt="Contemporary building facade representing AGRGROUPS corporate identity."
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="flex flex-col justify-center">
              <span className="eyebrow">Who We Are</span>
              <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold leading-[1.15] sm:leading-[1.1]">A diversified group with a focused purpose</h2>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-ink-600">
                AGRGROUPS operates across three business verticals — infrastructure, healthcare technology, and skill
                development. Each vertical is built around a simple commitment: deliver dependable solutions, work
                with trusted partners, and create value that lasts.
              </p>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-ink-600">
                We believe responsible growth means more than financial performance. It means employing people with
                dignity, skilling communities for the future, and holding ourselves to standards that hold up over
                time.
              </p>
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-ink-100 bg-ink-50/50 p-3.5 sm:p-4 transition-colors hover:border-brand-200 hover:bg-brand-50"
                  >
                    <span className="font-display text-xs sm:text-sm font-bold text-ink-900">{s.name}</span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-brand-600 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-14 sm:py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mb-10 sm:mb-12">
            <SectionHeading
              eyebrow="Our Foundation"
              title="What guides AGRGROUPS"
              description="The principles that shape our decisions, partnerships, and delivery — every day."
            />
          </Reveal>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 120}>
                  <article className="h-full rounded-2xl border border-ink-100 bg-white p-5 sm:p-6 lg:p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <span className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 ring-1 ring-brand-200/80">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </span>
                    <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-bold">{p.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-500">{p.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="mx-auto mb-10 sm:mb-12 max-w-2xl">
            <SectionHeading
              align="center"
              eyebrow="By the numbers"
              title="Our operating principles in focus"
              description="Our foundational metrics reflect our operating principles and delivery standards across all business units."
            />
          </Reveal>
          <Reveal delay={120}>
            <StatsBar stats={approachStats} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
