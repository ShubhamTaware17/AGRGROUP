import {
  HeroCarousel,
  Capabilities,
  AboutPreview,
  Approach,
  ServicesPreview,
  CTASection,
  StatsBar,
  Reveal,
} from '@/components';
import { approachStats } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle();

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
              Operating principles and commitments that define our standard of excellence across all verticals.
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
