import { cn } from '@/lib/cn'

interface WordmarkProps {
  className?: string
  dark?: boolean
}

export function Wordmark({ className, dark = false }: WordmarkProps) {
  return (
    <span className={cn('inline-flex items-baseline gap-2.5', className)}>
      <span className="text-[0.95rem] font-medium leading-none tracking-[0.2em]">KONTUR</span>
      <span
        className={cn(
          'hidden font-mono text-[0.5625rem] uppercase leading-none tracking-[0.18em] sm:inline',
          dark ? 'text-paper/55' : 'text-ink-soft',
        )}
      >
        Architects
      </span>
      <span className="inline-block h-1.5 w-1.5 translate-y-[-0.15em] bg-accent" aria-hidden="true" />
    </span>
  )
}
