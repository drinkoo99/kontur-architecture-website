import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { useLockBodyScroll, useLocalTime } from '@/lib/hooks'
import { site } from '@/data/site'
import { Wordmark } from '@/components/ui/Wordmark'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

const items = [{ label: 'Home', href: '/' }, ...site.nav]

export function MobileNav({ open, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const time = useLocalTime(site.timeZone)

  useLockBodyScroll(open)

  useEffect(() => {
    if (open) onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const firstLink = panelRef.current?.querySelector<HTMLElement>('a, button')
    firstLink?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className={cn(
        'fixed inset-0 z-[70] flex flex-col bg-paper transition-[opacity,visibility] duration-500 ease-editorial lg:hidden',
        open ? 'visible opacity-100' : 'invisible opacity-0',
      )}
    >
      <div className="shell flex h-16 items-center justify-between md:h-20">
        <Link to="/" aria-label="KONTUR — home">
          <Wordmark />
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="label-xs text-ink-soft transition-colors hover:text-ink"
        >
          Close
        </button>
      </div>

      <nav className="shell flex flex-1 flex-col justify-center">
        <ul>
          {items.map((item, i) => (
            <li key={item.href} className="border-t border-line last:border-b">
              <Link
                to={item.href}
                onClick={onClose}
                className="group flex items-baseline gap-5 py-5 transition-opacity hover:opacity-60"
                style={{
                  transitionDelay: open ? `${120 + i * 55}ms` : '0ms',
                  opacity: open ? 1 : 0,
                  transform: open ? 'none' : 'translateY(14px)',
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '700ms',
                  transitionTimingFunction: 'var(--ease)',
                }}
              >
                <span className="label-xs text-ink-soft">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="display text-[2.25rem] sm:text-[3rem]">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="shell flex flex-col gap-3 pb-10 pt-6 label-xs text-ink-soft">
        <a href={`mailto:${site.email}`} className="text-ink transition-opacity hover:opacity-60">
          {site.email}
        </a>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span>{site.location}</span>
          <span aria-hidden="true">—</span>
          <span>{time} local</span>
        </div>
      </div>
    </div>
  )
}
