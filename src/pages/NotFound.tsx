import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Page Not Found');
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-50 text-ink-900 pt-20">
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-200 blur-3xl" />
      </div>
      <div className="container-x relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] font-extrabold leading-none tracking-tight sm:tracking-tighter2 text-gold-500/80 select-none">
            404
          </p>
          <h1 className="mt-3 sm:mt-4 text-2xl sm:text-4xl font-extrabold text-ink-900">This page couldn&apos;t be found</h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-ink-500">
            The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you back on track.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link to="/" className="btn-gold w-full sm:w-auto text-center justify-center">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <Link to="/services" className="btn-outline w-full sm:w-auto text-center justify-center">
              View Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
