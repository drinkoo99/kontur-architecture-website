import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { projects } from '@/data/projects'
import { Figure } from '@/components/ui/Figure'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface HeroProps {
  project: Project
}

export function Hero({ project }: HeroProps) {
  const total = String(projects.length).padStart(2, '0')

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-ink text-paper">
      <Figure
        name={project.hero.name}
        alt={project.hero.alt}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
        imgClassName="h-full w-full object-cover"
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/45 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mt-auto w-full">
        <div className="shell pb-9 md:pb-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="reveal is-visible">
              <SectionLabel dark>
                Selected work — {project.index} / {total}
              </SectionLabel>

              <Link to={`/projects/${project.slug}`} className="group mt-5 block max-w-[16ch]">
                <h1 className="display text-[clamp(2.5rem,8vw,6.25rem)] transition-opacity duration-500 group-hover:opacity-75">
                  {project.title}
                </h1>
              </Link>

              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 label-xs text-paper/70">
                <span>{project.category}</span>
                <span aria-hidden="true" className="text-paper/40">
                  /
                </span>
                <span>{project.location}</span>
                <span aria-hidden="true" className="text-paper/40">
                  /
                </span>
                <span className="tabular-nums">{project.year}</span>
              </p>
            </div>

            <a
              href="#studio"
              className="group hidden items-center gap-4 label-xs text-paper/70 md:flex"
            >
              <span className="transition-opacity group-hover:opacity-100">Scroll</span>
              <span className="relative h-12 w-px overflow-hidden bg-paper/25" aria-hidden="true">
                <span className="scroll-cue-line absolute inset-0 bg-paper" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
