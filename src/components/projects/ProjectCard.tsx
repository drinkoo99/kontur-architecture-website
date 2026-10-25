import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import type { Project } from '@/data/projects'
import { Figure } from '@/components/ui/Figure'

interface ProjectCardProps {
  project: Project
  ratio?: number
  sizes?: string
  priority?: boolean
  delay?: number
  className?: string
}

export function ProjectCard({
  project,
  ratio = 4 / 3,
  sizes = '(min-width: 1024px) 45vw, 100vw',
  priority = false,
  delay = 0,
  className,
}: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.slug}`} className={cn('group block', className)}>
      <Figure
        name={project.hero.name}
        alt={project.hero.alt}
        ratio={ratio}
        sizes={sizes}
        priority={priority}
        imageReveal
        delay={delay}
        imgClassName="transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.035]"
      />

      <div className="mt-4 flex items-baseline justify-between gap-6 border-t border-line pt-3.5">
        <h3 className="flex items-baseline gap-3 text-[1.0625rem] font-medium tracking-tight">
          <span className="label-xs text-ink-soft">{project.index}</span>
          <span className="link-underline">{project.title}</span>
        </h3>
        <span className="label-xs shrink-0 text-ink-soft">{project.category}</span>
      </div>

      <div className="mt-1.5 flex items-baseline justify-between gap-6 label-xs text-ink-soft">
        <span>{project.location}</span>
        <span className="tabular-nums">{project.year}</span>
      </div>
    </Link>
  )
}
