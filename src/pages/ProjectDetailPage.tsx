import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { cn } from '@/lib/cn'
import { Seo } from '@/components/Seo'
import { Figure } from '@/components/ui/Figure'
import { MetaList } from '@/components/ui/MetaList'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { getAdjacent, getProject, type GalleryImage } from '@/data/projects'
import { imageSrc } from '@/lib/images'
import { NotFoundPage } from '@/pages/NotFoundPage'

type Span = NonNullable<GalleryImage['span']>

const spanClass: Record<Span, string> = {
  full: 'md:col-span-12',
  'two-thirds': 'md:col-span-8',
  third: 'md:col-span-4',
  half: 'md:col-span-6',
}

const spanRatio: Record<Span, number> = {
  full: 16 / 9,
  'two-thirds': 4 / 3,
  third: 3 / 4,
  half: 4 / 3,
}

const spanSizes: Record<Span, string> = {
  full: '100vw',
  'two-thirds': '(min-width: 768px) 64vw, 100vw',
  third: '(min-width: 768px) 32vw, 100vw',
  half: '(min-width: 768px) 48vw, 100vw',
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <NotFoundPage />

  const { next } = getAdjacent(project.slug)

  const metaItems = [
    { term: 'Location', value: project.location },
    { term: 'Client', value: project.client },
    { term: 'Year', value: project.year },
    { term: 'Status', value: project.status },
    { term: 'Category', value: project.category },
    { term: 'Area', value: project.area },
    { term: 'Scope', value: project.team },
  ]

  return (
    <>
      <Seo
        title={project.title}
        description={project.summary}
        image={imageSrc(project.hero.name, 1280)}
        path={`/projects/${project.slug}`}
      />

      <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-2 md:aspect-[16/9] lg:aspect-[2/1]">
        <Figure
          name={project.hero.name}
          alt={project.hero.alt}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full"
        />
      </div>

      <section className="shell pt-10 md:pt-16">
        <nav aria-label="Breadcrumb" className="label-xs text-ink-soft">
          <Link to="/projects" className="link-underline">
            Projects
          </Link>
          <span className="px-2" aria-hidden="true">
            /
          </span>
          <span aria-current="page">{project.index}</span>
        </nav>

        <div className="mt-10 md:mt-14">
          <SectionLabel className="reveal">{project.category}</SectionLabel>
          <h1
            className="reveal display mt-5 max-w-[18ch] text-[clamp(2.25rem,7vw,5.5rem)]"
            style={{ '--reveal-delay': '80ms' } as CSSProperties}
          >
            {project.title}
          </h1>
          <p
            className="reveal mt-5 max-w-[48ch] text-lg text-ink-soft md:text-xl"
            style={{ '--reveal-delay': '160ms' } as CSSProperties}
          >
            {project.subtitle}
          </p>
        </div>
      </section>

      <section className="shell mt-14 md:mt-24">
        <div className="grid gap-12 border-t border-line pt-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              {project.description.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-[1.0625rem] leading-relaxed text-ink/90">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <MetaList items={metaItems} />
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-28">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-2">
            <SectionLabel>Concept</SectionLabel>
          </div>
          <p className="reveal display max-w-[24ch] text-[clamp(1.4rem,2.8vw,2.25rem)] leading-[1.2] md:col-span-9 md:col-start-4">
            {project.concept}
          </p>
        </div>
      </section>

      <section className="shell pb-24 md:pb-40">
        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-12 md:gap-y-20">
          {project.gallery.map((image) => {
            const span = image.span ?? 'full'
            return (
              <figure key={image.name} className={cn(spanClass[span])}>
                <Figure
                  name={image.name}
                  alt={image.alt}
                  ratio={spanRatio[span]}
                  sizes={spanSizes[span]}
                  imageReveal
                />
                {image.caption ? (
                  <figcaption className="mt-3 flex items-center gap-3 label-xs text-ink-soft">
                    <span className="h-px w-4 bg-line" aria-hidden="true" />
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            )
          })}
        </div>
      </section>

      <section className="shell pb-24 md:pb-36">
        <div className="flex items-end justify-between gap-6 border-t border-line pt-6">
          <SectionLabel>Next project</SectionLabel>
          <span className="label-xs text-ink-soft tabular-nums">{next.index} / 06</span>
        </div>

        <Link to={`/projects/${next.slug}`} className="group mt-8 block md:mt-12">
          <h2 className="display text-[clamp(2rem,6vw,5rem)] transition-opacity duration-500 group-hover:opacity-70">
            {next.title}
          </h2>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 label-xs text-ink-soft">
            <span>{next.category}</span>
            <span aria-hidden="true" className="text-ink-soft/50">
              /
            </span>
            <span>{next.location}</span>
            <span aria-hidden="true" className="text-ink-soft/50">
              /
            </span>
            <span className="tabular-nums">{next.year}</span>
          </p>
        </Link>
      </section>
    </>
  )
}
