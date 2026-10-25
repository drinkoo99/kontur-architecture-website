import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionLabelProps {
  children: ReactNode
  className?: string
  dark?: boolean
}

export function SectionLabel({ children, className, dark = false }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-3 label-xs',
        dark ? 'text-paper/55' : 'text-ink-soft',
        className,
      )}
    >
      <span className={cn('h-px w-6', dark ? 'bg-paper/40' : 'bg-ink-soft/60')} aria-hidden="true" />
      {children}
    </span>
  )
}
