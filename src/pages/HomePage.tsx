import type { CSSProperties } from 'react'
import { Seo } from '@/components/Seo'
import { Hero } from '@/components/home/Hero'
import { FeaturedWork } from '@/components/home/FeaturedWork'
import { Approach } from '@/components/home/Approach'
import { ProjectIndex } from '@/components/projects/ProjectIndex'
import { MetaList } from '@/components/ui/MetaList'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TextLink } from '@/components/ui/TextLink'
import { getFeatured, projects } from '@/data/projects'
import { site, studio } from '@/data/site'

const studioFacts = [
  { term: 'Founded', value: site.founded },
  { term: 'Based', value: site.location },
  { term: 'Practice', value: studio.disciplines.join(', ') },
  { term: 'Enquiries', value: site.email },
]

export function HomePage() {
  const hero = getFeatured()[0] ?? projects[0]

  return (
    <>
      <Seo />

      <Hero project={hero} />

      <section id="studio" className="shell scroll-mt-24 py-20 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-2">
            <SectionLabel className="reveal">The studio</SectionLabel>
          </div>

          <div className="lg:col-span-6">
            <p
              className="reveal display text-[clamp(1.4rem,2.8vw,2.35rem)] leading-[1.18]"
              style={{ '--reveal-delay': '80ms' } as CSSProperties}
            >
              {studio.intro}
            </p>
            <div
              className="reveal mt-8"
              style={{ '--reveal-delay': '160ms' } as CSSProperties}
            >
              <TextLink to="/studio">About the studio</TextLink>
            </div>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <MetaList items={studioFacts} />
          </div>
        </div>
      </section>

      <FeaturedWork />

      <section className="shell pb-20 md:pb-32">
        <div className="flex items-end justify-between gap-6 border-t border-line pt-6">
          <h2>
            <SectionLabel>Project index</SectionLabel>
          </h2>
          <span className="label-xs text-ink-soft tabular-nums">
            {site.founded} — 2027
          </span>
        </div>
        <div className="mt-8 md:mt-12">
          <ProjectIndex items={projects} />
        </div>
      </section>

      <Approach />
    </>
  )
}
