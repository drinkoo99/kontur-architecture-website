import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { PageIntro } from '@/components/layout/PageIntro'
import { CategoryFilter } from '@/components/projects/CategoryFilter'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { categories, projects, type ProjectCategory } from '@/data/projects'

type Filter = ProjectCategory | 'All'

function parseFilter(value: string | null): Filter {
  if (value && (categories as readonly string[]).includes(value)) {
    return value as Filter
  }
  return 'All'
}

export function ProjectsPage() {
  const [params, setParams] = useSearchParams()
  const active = parseFilter(params.get('category'))

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: projects.length }
    for (const project of projects) {
      result[project.category] = (result[project.category] ?? 0) + 1
    }
    return result
  }, [])

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  const handleChange = (value: Filter) => {
    setParams(value === 'All' ? {} : { category: value }, { replace: true })
  }

  return (
    <>
      <Seo
        title="Projects"
        description="An index of KONTUR's residential, cultural, adaptive-reuse and urban projects across the Balkans."
        path="/projects"
      />

      <PageIntro
        label="Index — 2014 / 2027"
        title="Projects"
        lead="Houses, cultural buildings and adaptive-reuse work — from completed buildings to competition proposals."
      />

      <section className="shell pb-24 pt-14 md:pb-40 md:pt-20">
        <div className="flex flex-col gap-6 border-t border-line pt-5 md:flex-row md:items-center md:justify-between">
          <CategoryFilter value={active} onChange={handleChange} counts={counts} />
          <span className="label-xs text-ink-soft tabular-nums">
            {String(filtered.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        <div className="mt-12 md:mt-16 md:columns-2 md:gap-x-10">
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              ratio={project.tall ? 4 / 5 : 4 / 3}
              sizes="(min-width: 768px) 46vw, 100vw"
              priority={i < 2}
              delay={(i % 2) * 90}
              className="mb-12 break-inside-avoid md:mb-16"
            />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-24 text-center text-ink-soft">
            No projects in this category yet.
          </p>
        ) : null}
      </section>
    </>
  )
}
