import HeroCarousel from '@/components/HeroCarousel';
import StatsBar from '@/components/StatsBar';
import Capabilities from '@/sections/Capabilities';
import AboutPreview from '@/sections/AboutPreview';
import Approach from '@/sections/Approach';
import ServicesPreview from '@/sections/ServicesPreview';
import CTASection from '@/sections/CTASection';
import Reveal from '@/components/Reveal';
import { approachStats } from '@/data/content';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Capabilities />
      <AboutPreview />
      <section className="bg-ink-950 py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="eyebrow justify-center !text-gold-300">By the numbers</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl">
              A clear standard, applied everywhere
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              These reflect our operating principles — not fabricated milestones. Edit them to match verified company data before going live.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <StatsBar stats={approachStats} theme="dark" />
          </Reveal>
        </div>
      </section>
      <Approach />
      <ServicesPreview />
      <CTASection />
    </>
  );
}
