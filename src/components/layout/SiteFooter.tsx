import { Link } from 'react-router-dom'
import { site } from '@/data/site'
import { useLocalTime } from '@/lib/hooks'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Wordmark } from '@/components/ui/Wordmark'

export function SiteFooter() {
  const time = useLocalTime(site.timeZone)
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-paper">
      <div className="shell pb-10 pt-16 md:pb-12 md:pt-24">
        <SectionLabel dark>New enquiries</SectionLabel>

        <a
          href={`mailto:${site.email}`}
          className="group mt-8 block"
        >
          <span className="display block text-[clamp(1.6rem,6vw,4.75rem)] transition-opacity duration-500 group-hover:opacity-70">
            {site.email}
          </span>
        </a>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-paper/15 pt-10 md:grid-cols-4 md:mt-20">
          <div className="col-span-2 flex flex-col gap-3 md:col-span-1">
            <span className="label-xs text-paper/50">Studio</span>
            <address className="not-italic text-[0.9375rem] leading-relaxed text-paper/85">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div className="flex flex-col gap-3">
            <span className="label-xs text-paper/50">Contact</span>
            <a
              href={`mailto:${site.email}`}
              className="link-underline self-start text-[0.9375rem] text-paper/85"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, '')}`}
              className="link-underline self-start text-[0.9375rem] text-paper/85"
            >
              {site.phone}
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <span className="label-xs text-paper/50">Elsewhere</span>
            {site.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline self-start text-[0.9375rem] text-paper/85"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="label-xs text-paper/50">Index</span>
            {site.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="link-underline self-start text-[0.9375rem] text-paper/85"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-6 md:flex-row md:items-center md:justify-between">
          <Wordmark dark />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 label-xs text-paper/45">
            <span>
              © {year} {site.name}
            </span>
            <span aria-hidden="true">{site.coordinates}</span>
            <span className="tabular-nums">{time || '--:--'} local</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
