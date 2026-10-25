import { useRef, useState, type MouseEvent as ReactMouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import type { Project } from '@/data/projects'
import { Figure } from '@/components/ui/Figure'

interface ProjectIndexProps {
  items: Project[]
}

export function ProjectIndex({ items }: ProjectIndexProps) {
  const [active, setActive] = useState<number | null>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const floatRef = useRef<HTMLDivElement>(null)

  const updatePosition = (event: ReactMouseEvent) => {
    const list = listRef.current
    const float = floatRef.current
    if (!list || !float) return
    const rect = list.getBoundingClientRect()
    float.style.transform = `translate(${event.clientX - rect.left}px, ${event.clientY - rect.top}px)`
  }

  return (
    <div
      ref={listRef}
      className="relative"
      onMouseMove={updatePosition}
      onMouseLeave={() => setActive(null)}
    >
      <ul>
        {items.map((project, i) => (
          <li key={project.slug} className="border-t border-line last:border-b">
            <Link
              to={`/projects/${project.slug}`}
              onMouseEnter={(event) => {
                setActive(i)
                updatePosition(event)
              }}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-4 py-5 md:grid-cols-[2.75rem_1fr_9rem_3.5rem] md:py-6"
            >
              <span className="label-xs text-ink-soft">{project.index}</span>

              <span className="flex min-w-0 flex-col gap-1">
                <span className="display truncate text-[clamp(1.4rem,3.6vw,2.5rem)] transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">
                  {project.title}
                </span>
                <span className="label-xs text-ink-soft md:hidden">
                  {project.category} — {project.location}
                </span>
              </span>

              <span className="hidden label-xs text-ink-soft md:block">{project.category}</span>
              <span className="label-xs text-right text-ink-soft tabular-nums">{project.year}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        ref={floatRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-20 hidden lg:block"
      >
        <div className="grid -translate-x-1/2 -translate-y-1/2">
          {items.map((project, i) => (
            <div
              key={project.slug}
              className={cn(
                'col-start-1 row-start-1 w-[19rem] shadow-[0_24px_60px_-30px_rgba(18,16,13,0.45)] transition-opacity duration-500 ease-editorial',
                active === i ? 'opacity-100' : 'opacity-0',
              )}
            >
              <Figure name={project.hero.name} alt="" ratio={4 / 3} sizes="304px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
