export type ServiceSlug = 'infrastructure' | 'healthcare-technology' | 'skill-development';

export interface Service {
  slug: ServiceSlug;
  name: string;
  short: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
  capabilities: string[];
}

export interface SlideItem {
  id: string;
  tag: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
}

export interface ApproachItem {
  title: string;
  description: string;
  icon: 'Target' | 'Handshake' | 'ShieldCheck' | 'TrendingUp';
}

export interface CapabilityItem {
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  note: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  intro: string;
  mission: string;
  phone: string;
  phoneHref: string;
  email: string;
  addressLines: readonly string[];
}

export interface NavItem {
  label: string;
  to: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
