import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { useLocalTime, useScrolled } from '@/lib/hooks'
import { site } from '@/data/site'
import { Wordmark } from '@/components/ui/Wordmark'
import { MobileNav } from '@/components/layout/MobileNav'

interface SiteHeaderProps {
  transparent?: boolean
}

export function SiteHeader({ transparent = false }: SiteHeaderProps) {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)
  const time = useLocalTime(site.timeZone)
  const overHero = transparent && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-editorial',
          overHero
            ? 'border-b border-transparent text-paper'
            : 'border-b border-line bg-paper/85 text-ink backdrop-blur-md',
        )}
      >
        <div className="shell flex h-16 items-center justify-between md:h-20">
          <Link to="/" aria-label="KONTUR — home" className="transition-opacity hover:opacity-70">
            <Wordmark dark={overHero} />
          </Link>

          <div className="flex items-center gap-8 xl:gap-12">
            <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
              {site.nav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'inline-flex items-center gap-2 label-xs transition-opacity hover:opacity-60',
                      isActive && 'text-accent',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={cn(
                          'h-1 w-1 rounded-full bg-accent transition-opacity duration-300',
                          isActive ? 'opacity-100' : 'opacity-0',
                        )}
                        aria-hidden="true"
                      />
                      {item.label}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <span
              className={cn(
                'hidden items-center gap-2 label-xs xl:flex',
                overHero ? 'text-paper/60' : 'text-ink-soft',
              )}
            >
              <span className="tabular-nums">{time || '--:--'}</span>
              <span className={cn('h-3 w-px', overHero ? 'bg-paper/30' : 'bg-line')} aria-hidden="true" />
              <span>Prishtina</span>
            </span>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="label-xs transition-opacity hover:opacity-60 lg:hidden"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  )
}
