import { studio } from '@/data/site'
import { Figure } from '@/components/ui/Figure'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TextLink } from '@/components/ui/TextLink'

export function Approach() {
  return (
    <section className="bg-ink text-paper">
      <div className="shell grid gap-14 py-20 md:grid-cols-12 md:py-32">
        <div className="reveal md:col-span-5">
          <SectionLabel dark>Approach</SectionLabel>
          <p className="display mt-8 text-[clamp(1.5rem,3.1vw,2.4rem)] leading-[1.16]">
            {studio.statement}
          </p>
          <div className="mt-10">
            <TextLink to="/studio" size="md" className="text-paper">
              How we work
            </TextLink>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Figure
            name="approach-timber"
            alt="Dark timber facade lit from within against an evening sky"
            ratio={4 / 3}
            sizes="(min-width: 768px) 50vw, 100vw"
            imageReveal
            tone="ink"
          />
        </div>
      </div>

      <div className="shell">
        <ul className="grid grid-cols-1 gap-px border-t border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
          {studio.principles.map((principle) => (
            <li key={principle.index} className="bg-ink py-8 pr-6 lg:py-10">
              <span className="label-xs text-paper/45">{principle.index}</span>
              <h3 className="mt-5 text-lg font-medium tracking-tight">{principle.title}</h3>
              <p className="mt-3 max-w-[34ch] text-[0.9375rem] leading-relaxed text-paper/70">
                {principle.body}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="shell pb-20 pt-10 md:pb-28 md:pt-12">
        <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-paper/15 pt-6 label-xs text-paper/50">
          {studio.disciplines.map((discipline) => (
            <span key={discipline}>{discipline}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
