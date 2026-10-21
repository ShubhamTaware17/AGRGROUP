import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { company, services } from '@/data/content';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const empty: FormState = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  useDocumentTitle('Contact Us');
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
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
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL ?? ''}/functions/v1/contact-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }).catch(() => null);

      if (res && res.ok) {
        setStatus('success');
        setForm(empty);
        return;
      }

      throw new Error('No submission endpoint configured');
    } catch {
      setStatus('error');
    }
  }

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  const inputBase =
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 transition-colors placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500';
  const inputOk = 'border-ink-200';
  const inputErr = 'border-red-400 focus:ring-red-500 focus:border-red-500';

  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
        <img
          src="https://images.pexels.com/photos/31715450/pexels-photo-31715450.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/60" />
        <div className="container-x relative">
          <Reveal className="max-w-3xl">
            <span className="eyebrow !text-gold-300">Contact Us</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tighter2 sm:text-5xl lg:text-6xl">
              Let&apos;s talk about what&apos;s next
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              Whether you&apos;re a client, institution, or partner, we&apos;d like to hear from you. Share a few
              details and our team will get back to you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <span className="eyebrow">Get in touch</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl">Contact information</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-500">
                Reach us directly using the details below, or send a message through the form.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-ink-100 bg-ink-50/50 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-950 text-gold-400">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Registered Office</p>
                    <p className="mt-1 text-sm text-ink-500">{company.addressLines.join(', ')}</p>
                  </div>
                </div>
                <a href={company.phoneHref} className="flex items-start gap-4 rounded-xl border border-ink-100 bg-ink-50/50 p-5 transition-colors hover:border-brand-200 hover:bg-brand-50">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-950 text-gold-400">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Phone</p>
                    <p className="mt-1 text-sm text-ink-500">{company.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${company.email}`} className="flex items-start gap-4 rounded-xl border border-ink-100 bg-ink-50/50 p-5 transition-colors hover:border-brand-200 hover:bg-brand-50">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-950 text-gold-400">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Email</p>
                    <p className="mt-1 text-sm text-ink-500">{company.email}</p>
                  </div>
                </a>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7">
              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card sm:p-8 lg:p-10">
                <h2 className="text-2xl font-extrabold">Send us a message</h2>
                <p className="mt-2 text-sm text-ink-500">Fields marked with * are required.</p>

                {status === 'success' && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    <p>Thank you — your message has been received. Our team will get back to you shortly.</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <p>We couldn&apos;t send your message right now. Please try again or email us directly at {company.email}.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink-800">Name *</label>
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
                      {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-800">Email *</label>
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
                      {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink-800">Phone</label>
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
                      <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-ink-800">Service of interest</label>
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
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-800">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder="Tell us how we can help..."
                      className={`${inputBase} ${errors.message ? inputErr : inputOk} resize-y`}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full sm:w-auto disabled:opacity-70 disabled:pointer-events-none"
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
                  <p className="text-xs text-ink-400">
                    Note: A submission endpoint must be configured for the form to deliver messages. Contact details above are editable placeholders.
                  </p>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
