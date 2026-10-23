import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  linkText?: string;
  linkTo?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  linkText,
  linkTo,
  light = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';
  return (
    <div className={`flex flex-col ${alignment} gap-4 ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
      {eyebrow && <span className={`eyebrow ${light ? '!text-gold-300' : ''}`}>{eyebrow}</span>}
      <h2 className={`text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] sm:leading-[1.1] ${light ? '!text-white' : ''}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-sm sm:text-base lg:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-ink-500'}`}>{description}</p>
      )}
      {linkText && linkTo && (
        <Link to={linkTo} className={`link-underline mt-2 ${light ? '!text-gold-300 hover:!text-gold-200' : ''}`}>
          {linkText}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
