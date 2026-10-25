import { useState, type FormEvent } from 'react'
import { Seo } from '@/components/Seo'
import { PageIntro } from '@/components/layout/PageIntro'
import { MetaList } from '@/components/ui/MetaList'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { site } from '@/data/site'

const contactItems = [
  { term: 'Studio', value: site.address.join(', ') },
  { term: 'Email', value: site.email },
  { term: 'Telephone', value: site.phone },
  { term: 'Hours', value: 'Monday – Friday, 09:00 – 18:00 (CET)' },
]

export function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = `New enquiry${form.name ? ` — ${form.name}` : ''}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  const field =
    'w-full border-b border-line bg-transparent py-3 text-[1rem] text-ink placeholder:text-ink-soft/60 transition-colors focus:border-ink focus:outline-none'

  return (
    <>
      <Seo
        title="Contact"
        description="Contact KONTUR architecture studio in Prishtina, Kosovo — new projects, collaborations and press."
        path="/contact"
      />

      <PageIntro
        label="Contact"
        title="Start a conversation."
        lead="Tell us about the site, the brief and the timeline. We reply to every enquiry within a few days."
      />

      <section className="shell pb-24 pt-16 md:pb-40 md:pt-24">
        <div className="grid gap-16 border-t border-line pt-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <SectionLabel>Details</SectionLabel>
            <div className="mt-6">
              <MetaList items={contactItems} />
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 label-xs text-ink-soft">
              {site.social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-ink"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <SectionLabel>New project</SectionLabel>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="label-xs text-ink-soft">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    className={field}
                    placeholder="Your name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="label-xs text-ink-soft">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    className={field}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="label-xs text-ink-soft">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  className={`${field} resize-none`}
                  placeholder="Site, brief, timeline"
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 self-start border border-ink px-6 py-3.5 label-xs transition-colors duration-300 hover:bg-ink hover:text-paper"
                >
                  Send enquiry
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                    <path d="M0 5h12M8.5 1.5 12 5l-3.5 3.5" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </button>
                <p className="max-w-[34ch] text-[0.8125rem] leading-relaxed text-ink-soft">
                  This opens your email client with the message prepared. You can also write to{' '}
                  <a href={`mailto:${site.email}`} className="link-underline text-ink">
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
