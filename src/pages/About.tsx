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
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
        <img
          src="https://images.pexels.com/photos/946310/pexels-photo-946310.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/60" />
        <div className="container-x relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow !text-gold-300">About Us</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tighter2 sm:text-5xl lg:text-6xl">
              Building value across industries, with responsibility
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{company.intro}</p>
            <Link to="/services" className="btn-gold mt-8">
              Explore Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
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
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl">A diversified group with a focused purpose</h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600">
                AGRGROUPS operates across three business verticals — infrastructure, healthcare technology, and skill
                development. Each vertical is built around a simple commitment: deliver dependable solutions, work
                with trusted partners, and create value that lasts.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                We believe responsible growth means more than financial performance. It means employing people with
                dignity, skilling communities for the future, and holding ourselves to standards that hold up over
                time.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group flex items-center gap-3 rounded-xl border border-ink-100 bg-ink-50/50 p-4 transition-colors hover:border-brand-200 hover:bg-brand-50"
                  >
                    <span className="font-display text-sm font-bold text-ink-900">{s.name}</span>
                    <ArrowRight className="h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="mb-12">
            <SectionHeading
              eyebrow="Our Foundation"
              title="What guides AGRGROUPS"
              description="The principles that shape our decisions, partnerships, and delivery — every day."
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 120}>
                  <article className="h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card lg:p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-950 text-gold-400">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{p.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl">
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
