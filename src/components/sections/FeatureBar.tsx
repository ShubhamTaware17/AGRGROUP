import { ShieldCheck, Handshake, Users, Leaf } from 'lucide-react';
import Reveal from '@/components/common/Reveal';

const features = [
  {
    icon: ShieldCheck,
    title: 'Execution Excellence',
    description: 'Disciplined frameworks, safety rigor, and accountable management on every project.',
  },
  {
    icon: Handshake,
    title: 'Ethical Partnerships',
    description: 'Collaborating with institutions grounded in mutual transparency and long-term trust.',
  },
  {
    icon: Users,
    title: 'Specialised Teams',
    description: 'Skilled professionals delivering with dedication, domain precision, and care.',
  },
  {
    icon: Leaf,
    title: 'Lasting Impact',
    description: 'Sustainable solutions engineered for community empowerment and economic value.',
  },
];

export default function FeatureBar() {
  return (
    <section className="bg-ink-50 py-10 sm:py-14 border-y border-ink-200/60">
      <div className="container-x">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 90}>
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 ring-1 ring-brand-200/80 transition-transform duration-300 hover:scale-105">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-3.5 font-display text-base sm:text-lg font-bold text-ink-900">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-ink-500">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
