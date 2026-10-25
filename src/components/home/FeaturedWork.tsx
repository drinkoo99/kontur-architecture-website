import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { getFeatured, type Project } from '@/data/projects'
import { Figure } from '@/components/ui/Figure'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TextLink } from '@/components/ui/TextLink'

function ProjectCaption({
  project,
  wide = false,
  className,
}: {
  project: Project
  wide?: boolean
  className?: string
}) {
  return (
    <div
      className={cn(
        'mt-4 border-t border-line pt-4',
        wide && 'md:grid md:grid-cols-12 md:gap-8',
        className,
      )}
    >
      <div className={cn(wide && 'md:col-span-5')}>
        <h3 className="flex items-baseline gap-3 text-[1.1875rem] font-medium tracking-tight">
          <span className="label-xs text-ink-soft">{project.index}</span>
          <span>{project.title}</span>
        </h3>
        <p className="mt-2 label-xs text-ink-soft">
          {project.category} — {project.location} — {project.year}
        </p>
      </div>
      <p
        className={cn(
          'mt-3 max-w-[52ch] text-[0.9375rem] leading-relaxed text-ink-soft',
          wide && 'md:col-span-6 md:col-start-7 md:mt-0',
        )}
      >
        {project.summary}
      </p>
    </div>
  )
}

export function FeaturedWork() {
  const [primary, tall, second] = getFeatured()

  return (
    <section className="shell pb-20 md:pb-32" aria-labelledby="selected-work">
      <div className="flex items-end justify-between gap-6 border-t border-line pt-6">
        <h2 id="selected-work">
          <SectionLabel>Selected work</SectionLabel>
        </h2>
        <TextLink to="/projects" size="sm">
          All projects
        </TextLink>
      </div>

      {primary ? (
        <article className="mt-10 md:mt-14">
          <Link
            to={`/projects/${primary.slug}`}
            className="group block"
            aria-label={`${primary.title} — view project`}
          >
            <Figure
              name={primary.hero.name}
              alt={primary.hero.alt}
              ratio={16 / 9}
              sizes="100vw"
              imageReveal
              imgClassName="transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.02]"
            />
          </Link>
          <ProjectCaption project={primary} wide />
        </article>
      ) : null}

      {tall && second ? (
        <div className="mt-14 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
          <article className="md:col-span-5">
            <Link
              to={`/projects/${tall.slug}`}
              className="group block"
              aria-label={`${tall.title} — view project`}
            >
              <Figure
                name={tall.hero.name}
                alt={tall.hero.alt}
                ratio={4 / 5}
                sizes="(min-width: 768px) 40vw, 100vw"
                imageReveal
                imgClassName="transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.035]"
              />
            </Link>
            <ProjectCaption project={tall} />
          </article>

          <article className="md:col-span-6 md:col-start-7 md:pt-28">
            <Link
              to={`/projects/${second.slug}`}
              className="group block"
              aria-label={`${second.title} — view project`}
            >
              <Figure
                name={second.hero.name}
                alt={second.hero.alt}
                ratio={4 / 3}
                sizes="(min-width: 768px) 50vw, 100vw"
                imageReveal
                delay={90}
                imgClassName="transition-transform duration-[1.4s] ease-editorial group-hover:scale-[1.035]"
              />
            </Link>
            <ProjectCaption project={second} />
          </article>
        </div>
      ) : null}
    </section>
  )
}
