import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Reveal } from '@/components';
import { company, services } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { submitContactForm } from '@/services/contactService';
import type { ContactFormData, FormStatus } from '@/types';

const empty: ContactFormData = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  useDocumentTitle('Contact Us');
  const [form, setForm] = useState<ContactFormData>(empty);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  function validate(): boolean {
    const e: Partial<ContactFormData> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const result = await submitContactForm(form);
      if (result.success) {
        setStatus('success');
        setForm(empty);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  function update<K extends keyof ContactFormData>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  const inputBase =
    'w-full rounded-xl border bg-white px-3.5 py-2.5 sm:px-4 sm:py-3 text-base sm:text-sm text-ink-900 transition-colors placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500';
  const inputOk = 'border-ink-200';
  const inputErr = 'border-red-400 focus:ring-red-500 focus:border-red-500';

  return (
    <>
      <section className="relative overflow-hidden bg-ink-50 pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 border-b border-ink-200/60">
        {/* Organic Sage Background Waves */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <svg
            className="absolute -top-16 -right-24 h-[600px] w-[600px] text-brand-100/70 opacity-70"
            viewBox="0 0 800 800"
            fill="currentColor"
          >
            <path d="M420,50 Q650,80 720,280 Q790,480 620,640 Q450,800 280,720 Q110,640 90,440 Q70,240 230,120 Q390,0 420,50 Z" />
          </svg>
        </div>
        <div className="container-x relative z-10">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-100/90 px-3.5 py-1.5 text-2xs sm:text-xs font-semibold uppercase tracking-[0.18em] text-brand-800">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              Contact Us
            </span>
            <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] sm:leading-[1.05] tracking-tight sm:tracking-tighter2 text-ink-900">
              Let&apos;s talk about what&apos;s next
            </h1>
            <p className="mt-4 sm:mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-ink-500">
              Whether you&apos;re a client, institution, or partner, we&apos;d like to hear from you. Share a few
              details and our team will get back to you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <span className="eyebrow">Get in touch</span>
              <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.15] sm:leading-[1.1]">Contact information</h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-ink-500">
                Reach us directly using the details below, or send a message through the form.
              </p>

              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4 rounded-xl border border-ink-100 bg-ink-50/50 p-4 sm:p-5">
                  <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700 ring-1 ring-brand-200/80">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-ink-900">Registered Office</p>
                    <p className="mt-1 text-xs sm:text-sm text-ink-500">{company.addressLines.join(', ')}</p>
                  </div>
                </div>
                <a href={company.phoneHref} className="flex items-start gap-3 sm:gap-4 rounded-xl border border-ink-100 bg-ink-50/50 p-4 sm:p-5 transition-colors hover:border-brand-200 hover:bg-brand-50">
                  <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700 ring-1 ring-brand-200/80">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-ink-900">Phone</p>
                    <p className="mt-1 text-xs sm:text-sm text-ink-500">{company.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${company.email}`} className="flex items-start gap-3 sm:gap-4 rounded-xl border border-ink-100 bg-ink-50/50 p-4 sm:p-5 transition-colors hover:border-brand-200 hover:bg-brand-50">
                  <span className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700 ring-1 ring-brand-200/80">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-ink-900">Email</p>
                    <p className="mt-1 text-xs sm:text-sm text-ink-500 truncate">{company.email}</p>
                  </div>
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7">
              <div className="rounded-2xl border border-ink-100 bg-white p-4.5 sm:p-8 lg:p-10 shadow-card">
                <h2 className="text-xl sm:text-2xl font-extrabold">Send us a message</h2>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-ink-500">Fields marked with * are required.</p>

                {status === 'success' && (
                  <div className="mt-5 sm:mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-3.5 sm:p-4 text-xs sm:text-sm text-green-800">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0" />
                    <p>Thank you — your message has been received. Our team will get back to you shortly.</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-5 sm:mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-3.5 sm:p-4 text-xs sm:text-sm text-red-700">
                    <AlertCircle className="mt-0.5 h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0" />
                    <p>We couldn&apos;t send your message right now. Please try again or email us directly at {company.email}.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-5 sm:mt-6 space-y-4 sm:space-y-5" noValidate>
                  <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs sm:text-sm font-semibold text-ink-800">Name *</label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Your full name"
                        className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
                        aria-invalid={!!errors.name}
                        autoComplete="name"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs sm:text-sm font-semibold text-ink-800">Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="you@example.com"
                        className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
                        aria-invalid={!!errors.email}
                        autoComplete="email"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-xs sm:text-sm font-semibold text-ink-800">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="Optional"
                        className={`${inputBase} ${inputOk}`}
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-1.5 block text-xs sm:text-sm font-semibold text-ink-800">Service of interest</label>
                      <select
                        id="subject"
                        value={form.subject}
                        onChange={(e) => update('subject', e.target.value)}
                        className={`${inputBase} ${inputOk}`}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s.slug} value={s.name}>{s.name}</option>
                        ))}
                        <option value="General enquiry">General enquiry</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs sm:text-sm font-semibold text-ink-800">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Tell us how we can help..."
                      className={`${inputBase} ${errors.message ? inputErr : inputOk} resize-y`}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-gold w-full sm:w-auto text-center justify-center disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
