import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { nav, services, company } from '@/data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-950 text-white border-t border-brand-900/60">
      <div className="container-x py-10 sm:py-14 lg:py-20">
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-4 sm:mt-5 max-w-sm text-xs sm:text-sm leading-relaxed text-brand-100/70">{company.intro}</p>
            <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-brand-100/80">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{company.addressLines.join(', ')}</span>
              </div>
              <a href={company.phoneHref} className="flex items-center gap-2.5 sm:gap-3 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <span>{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 sm:gap-3 transition-colors hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <span className="truncate">{company.email}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">Company</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-brand-100/70 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">Business Units</h3>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 text-xs sm:text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-brand-100/70 transition-colors hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col items-center justify-between gap-3 border-t border-brand-900/80 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-brand-100/50">© {year} {company.name}. All rights reserved.</p>
          <p className="text-xs text-brand-100/50">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
