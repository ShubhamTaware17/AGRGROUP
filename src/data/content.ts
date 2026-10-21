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

export const slides = [
  {
    id: 'infrastructure',
    tag: 'Infrastructure',
    title: 'Building Reliable Infrastructure for Tomorrow.',
    copy: 'Delivering dependable infrastructure and engineering solutions designed to support development and create lasting value.',
    image: 'https://images.pexels.com/photos/33350001/pexels-photo-33350001.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Bandra-Worli Sea Link bridge in Mumbai showcasing modern infrastructure.',
  },
  {
    id: 'healthcare-technology',
    tag: 'Healthcare Technology',
    title: 'Advancing Healthcare Through Innovation.',
    copy: 'Connecting healthcare institutions with reliable technology, equipment, and solutions that support better care.',
    image: 'https://images.pexels.com/photos/13176356/pexels-photo-13176356.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Modern MRI scanner room in a hospital facility.',
  },
  {
    id: 'skill-development',
    tag: 'Skill Development',
    title: 'Empowering People Through Skills and Opportunity.',
    copy: 'Supporting vocational training, employment readiness, and opportunities for sustainable livelihoods.',
    image: 'https://images.pexels.com/photos/33925031/pexels-photo-33925031.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Participants learning AC repair during a hands-on training session.',
  },
] as const;

export const services: Service[] = [
  {
    slug: 'infrastructure',
    name: 'Infrastructure',
    short: 'Dependable infrastructure and engineering solutions that support long-term development.',
    description:
      'Our infrastructure vertical focuses on delivering engineering and construction solutions with an emphasis on quality, safety, and timely delivery. We work across civil, structural, and systems integration disciplines to support development that stands the test of time.',
    image: 'https://images.pexels.com/photos/633625/pexels-photo-633625.jpeg?auto=compress&cs=tinysrgb&w=1280',
    alt: 'Modern cable-stayed bridge in Mumbai under a clear blue sky.',
    highlights: ['Civil & structural engineering', 'Project management', 'Quality & safety discipline'],
    capabilities: [
      'Civil and structural engineering for transport, utility, and built-environment projects.',
      'Integrated project management covering planning, procurement, and execution.',
      'Quality assurance and safety protocols aligned to industry standards.',
      'Long-life asset delivery designed for reliability and maintainability.',
    ],
  },
  {
    slug: 'healthcare-technology',
    name: 'Healthcare Technology',
    short: 'Reliable medical technology and equipment that helps institutions deliver better care.',
    description:
      'Our healthcare technology vertical connects healthcare institutions with dependable equipment, digital systems, and support services. We focus on enabling better diagnosis, efficient operations, and improved patient experiences through carefully selected technology.',
    image: 'https://images.pexels.com/photos/7108402/pexels-photo-7108402.jpeg?auto=compress&cs=tinysrgb&w=1280',
    alt: 'High-tech ultrasound equipment in a medical clinic.',
    highlights: ['Medical equipment & systems', 'Digital health integration', 'Service & support'],
    capabilities: [
      'Supply and integration of diagnostic and clinical equipment for hospitals and clinics.',
      'Digital health solutions that connect workflows, records, and care teams.',
      'Preventive maintenance, calibration, and responsive service support.',
      'Training for clinical and biomedical staff on safe, effective use of technology.',
    ],
  },
  {
    slug: 'skill-development',
    name: 'Skill Development',
    short: 'Vocational training and employment readiness for sustainable livelihoods.',
    description:
      'Our skill development vertical supports vocational training, employment readiness, and entrepreneurship pathways. We work to equip people with practical, industry-relevant skills that open doors to sustainable livelihoods and long-term opportunity.',
    image: 'https://images.pexels.com/photos/9242810/pexels-photo-9242810.jpeg?auto=compress&cs=tinysrgb&w=1280',
    alt: 'Two young adults working on an electronics project in a lab setting.',
    highlights: ['Vocational training', 'Employment readiness', 'Entrepreneurship pathways'],
    capabilities: [
      'Vocational training programs aligned to current industry needs.',
      'Employment readiness coaching, certifications, and placement support.',
      'Entrepreneurship and self-employment pathways for emerging talent.',
      'Partnerships with institutions to scale skilling impact in communities.',
    ],
  },
];

export const approach = [
  {
    title: 'Strategic Execution',
    description: 'Disciplined planning, coordination, and accountability across every project — so commitments become deliverables.',
    icon: 'Target',
  },
  {
    title: 'Partnership & Collaboration',
    description: 'Working closely with clients, institutions, suppliers, and communities to align goals and share responsibility for outcomes.',
    icon: 'Handshake',
  },
  {
    title: 'Technology & Quality',
    description: 'Reliable processes, modern tools, and rigorous quality standards that hold up across every stage of delivery.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Long-Term Impact',
    description: 'Sustainable outcomes and responsible growth — building value that lasts well beyond project completion.',
    icon: 'TrendingUp',
  },
] as const;

export const capabilities = [
  {
    title: 'Execution Excellence',
    description:
      'We approach every engagement with operational discipline — clear plans, accountable teams, and quality built into each stage. Our focus is delivering what we promise, on time, to standard.',
    image: 'https://images.pexels.com/photos/8961073/pexels-photo-8961073.jpeg?auto=compress&cs=tinysrgb&w=1280',
    alt: 'Engineers reviewing architectural plans at a construction site.',
  },
  {
    title: 'Institutional Partnerships',
    description:
      'We collaborate with clients, institutions, suppliers, and partners who share our commitment to quality and integrity — building relationships grounded in trust and measurable results.',
    image: 'https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&w=1280',
    alt: 'Two businesspeople shaking hands symbolizing partnership.',
  },
  {
    title: 'Sustainable & Social Impact',
    description:
      'Through employment, skilling, and responsible operations, we aim to contribute to economic development and stronger communities in the regions where we work.',
    image: 'https://images.pexels.com/photos/8684942/pexels-photo-8684942.jpeg?auto=compress&cs=tinysrgb&w=1280',
    alt: 'Silhouette of workers on a crane against a sunset sky.',
  },
] as const;

export const approachStats = [
  { value: 100, suffix: '%', label: 'Commitment to delivery', note: 'Every engagement treated as a commitment, not a transaction.' },
  { value: 3, suffix: '', label: 'Business verticals', note: 'Infrastructure, healthcare technology, and skill development.' },
  { value: 24, suffix: '/7', label: 'Operational support', note: 'Responsive support across project and service lifecycles.' },
  { value: 1, suffix: '', label: 'Shared standard', note: 'One quality benchmark applied across every business unit.' },
] as const;

export const company = {
  name: 'AGRGROUPS',
  tagline: 'Building Value Across Industries',
  intro:
    'AGRGROUPS is a diversified Indian business group with a focus on infrastructure, healthcare technology, and skill development. We exist to deliver dependable solutions, build trusted relationships, and create lasting value for the communities and institutions we serve.',
  mission:
    'Our mission is to combine disciplined execution, honest partnerships, and responsible growth to solve real-world problems across the sectors we operate in — and to do so in a way that endures.',
  phone: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  email: 'info@agrgroups.example',
  addressLines: ['AGRGROUPS', 'Registered Office', 'City, State — India'],
} as const;

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Services', to: '/services' },
  { label: 'Contact Us', to: '/contact' },
] as const;
