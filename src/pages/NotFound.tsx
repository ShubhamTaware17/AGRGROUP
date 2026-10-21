import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Page Not Found');
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950 text-white">
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500 blur-3xl" />
      </div>
      <div className="container-x relative py-32">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-[10rem] font-extrabold leading-none tracking-tighter2 text-gold-400/90 sm:text-[14rem]">
            404
          </p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">This page couldn&apos;t be found</h1>
          <p className="mt-4 text-base leading-relaxed text-white/60">
            The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/" className="btn-gold">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <Link to="/services" className="btn-ghost-light">
              View Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
