import type { CSSProperties } from 'react'
import { Seo } from '@/components/Seo'
import { PageIntro } from '@/components/layout/PageIntro'
import { Figure } from '@/components/ui/Figure'
import { MetaList } from '@/components/ui/MetaList'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TextLink } from '@/components/ui/TextLink'
import { site, studio } from '@/data/site'

const profile = [
  { term: 'Founded', value: site.founded },
  { term: 'Based', value: site.location },
  { term: 'Practice', value: studio.disciplines.join(', ') },
  { term: 'Coordinates', value: site.coordinates },
]

export function StudioPage() {
  return (
    <>
      <Seo
        title="Studio"
        description="KONTUR is an architecture studio in Prishtina, Kosovo, working on houses, cultural buildings and adaptive reuse across the Balkans."
        path="/studio"
      />

      <PageIntro
        label="The studio"
        title="A practice in Prishtina."
        lead={studio.intro}
      />

      <section className="shell py-20 md:py-32">
        <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-2">
            <SectionLabel className="reveal">Approach</SectionLabel>
          </div>
          <p
            className="reveal display text-[clamp(1.5rem,3.2vw,2.6rem)] leading-[1.16] md:col-span-9 md:col-start-4"
            style={{ '--reveal-delay': '80ms' } as CSSProperties}
          >
            {studio.statement}
          </p>
        </div>
      </section>

      <section className="shell pb-20 md:pb-32">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <Figure
              name="museum-construction"
              alt="Concrete frame under construction with workers on site"
              ratio={4 / 3}
              sizes="(min-width: 768px) 66vw, 100vw"
              imageReveal
            />
            <p className="mt-3 flex items-center gap-3 label-xs text-ink-soft">
              <span className="h-px w-4 bg-line" aria-hidden="true" />
              Atrium Museum — structure, phase two
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-10 md:pt-28">
            <Figure
              name="studio-completion"
              alt="Completed residence with a reflecting pool and clean white volumes"
              ratio={4 / 3}
              sizes="(min-width: 768px) 24vw, 100vw"
              imageReveal
              delay={120}
            />
            <p className="mt-3 flex items-center gap-3 label-xs text-ink-soft">
              <span className="h-px w-4 bg-line" aria-hidden="true" />
              Courtyard House — completion
            </p>
          </div>
        </div>
      </section>

      <section className="shell pb-20 md:pb-32">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <SectionLabel>How we work</SectionLabel>
          <span className="label-xs text-ink-soft">Four principles</span>
        </div>

        <ul className="border-t border-line">
          {studio.principles.map((principle) => (
            <li
              key={principle.index}
              className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8 md:py-10"
            >
              <span className="label-xs text-ink-soft md:col-span-1">{principle.index}</span>
              <h3 className="display text-[clamp(1.5rem,3vw,2.25rem)] md:col-span-4">
                {principle.title}
              </h3>
              <p className="max-w-[54ch] text-[1.0625rem] leading-relaxed text-ink-soft md:col-span-6 md:col-start-7">
                {principle.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="shell pb-24 md:pb-40">
        <div className="grid gap-12 border-t border-line pt-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <SectionLabel>Profile</SectionLabel>
            <p className="mt-6 max-w-[42ch] text-[1.0625rem] leading-relaxed text-ink-soft">
              The studio works with a small, consistent team and a network of structural,
              environmental and landscape engineers. We take on a limited number of projects each
              year, from first sketch to completion on site.
            </p>
            <div className="mt-8">
              <TextLink to="/contact">Start a project</TextLink>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <MetaList items={profile} />
          </div>
        </div>
      </section>
    </>
  )
}
