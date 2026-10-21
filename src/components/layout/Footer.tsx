import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';
import { nav, services, company } from '@/data/content';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-x py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">{company.intro}</p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{company.addressLines.join(', ')}</span>
              </div>
              <a href={company.phoneHref} className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                {company.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/90">Business Units</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-white/60 transition-colors hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/40">© {year} {company.name}. All rights reserved.</p>
          <p className="text-xs text-white/40">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
