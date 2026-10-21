import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <img
        src="https://images.pexels.com/photos/358549/pexels-photo-358549.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/70" />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow justify-center !text-gold-300">Partner With Us</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
            Let&apos;s Build the Future Together
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            We work with clients, institutions, and partners who share our commitment to quality and long-term
            impact. Reach out to explore how AGRGROUPS can support your goals.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-gold">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="btn-ghost-light">
              Explore Our Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
