import {
  HeroCarousel,
  FeatureBar,
  ServicesPreview,
  Capabilities,
  AboutPreview,
  Approach,
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
      {/* 1. Hero with Organic Sage Frame & Terracotta CTA */}
      <HeroCarousel />

      {/* 2. 4-Icon Feature Row directly matching screenshot */}
      <FeatureBar />

      {/* 3. Featured Showcase: Sage Green Container ("Популярные напитки" style) */}
      <ServicesPreview />

      {/* 4. Recommended Focus: 3 White Cards with Circular Action Buttons ("Рекомендуем попробовать" style) */}
      <Capabilities />

      {/* 5. About Preview with Organic Framing & Checkmarks */}
      <AboutPreview />

      {/* 6. By the Numbers in Deep Botanical Pine */}
      <section className="bg-brand-900 py-14 sm:py-20 lg:py-24 text-white relative overflow-hidden">
        <div className="container-x relative z-10">
          <Reveal className="mx-auto mb-10 sm:mb-12 max-w-2xl text-center">
            <span className="eyebrow justify-center !text-gold-300">By the numbers</span>
            <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold leading-[1.15] sm:leading-[1.1] text-white">
              A clear standard, applied everywhere
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-brand-100/80">
              Operating principles and commitments that define our standard of excellence across all verticals.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <StatsBar stats={approachStats} theme="dark" />
          </Reveal>
        </div>
      </section>

      {/* 7. Approach in Warm Cream with White Cards & Sage/Terracotta Accents */}
      <Approach />

      {/* 8. Call to Action Container */}
      <CTASection />
    </>
  );
}
