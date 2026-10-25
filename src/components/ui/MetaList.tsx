import { cn } from '@/lib/cn'

export interface MetaItem {
  term: string
  value: string
}

interface MetaListProps {
  items: MetaItem[]
  className?: string
  dark?: boolean
}

export function MetaList({ items, className, dark = false }: MetaListProps) {
  return (
    <dl className={cn('w-full', className)}>
      {items.map((item) => (
        <div
          key={item.term}
          className={cn(
            'grid grid-cols-[6.5rem_1fr] gap-4 border-t py-3.5 sm:grid-cols-[8.5rem_1fr]',
            dark ? 'border-paper/15' : 'border-line',
            'last:border-b',
          )}
        >
          <dt className={cn('label-xs pt-0.5', dark ? 'text-paper/50' : 'text-ink-soft')}>
            {item.term}
          </dt>
          <dd
            className={cn(
              'text-[0.9375rem] leading-relaxed',
              dark ? 'text-paper/90' : 'text-ink',
            )}
          >
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
