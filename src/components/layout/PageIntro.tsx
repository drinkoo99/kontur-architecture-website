import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface PageIntroProps {
  label: string
  title: ReactNode
  lead?: ReactNode
  children?: ReactNode
  className?: string
}

export function PageIntro({ label, title, lead, children, className }: PageIntroProps) {
  return (
    <section className={cn('shell pt-28 md:pt-40', className)}>
      <SectionLabel className="reveal">{label}</SectionLabel>

      <h1 className="reveal display mt-6 max-w-[20ch] text-[clamp(2.25rem,7vw,5.5rem)]" style={{ '--reveal-delay': '80ms' } as CSSProperties}>
        {title}
      </h1>

      {lead ? (
        <p
          className="reveal mt-8 max-w-[46ch] text-[1.0625rem] leading-relaxed text-ink-soft md:mt-10 md:text-lg"
          style={{ '--reveal-delay': '160ms' } as CSSProperties}
        >
          {lead}
        </p>
      ) : null}

      {children}
    </section>
  )
}
