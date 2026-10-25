import { cn } from '@/lib/cn'
import { categories, type ProjectCategory } from '@/data/projects'

interface CategoryFilterProps {
  value: ProjectCategory | 'All'
  onChange: (value: ProjectCategory | 'All') => void
  counts: Record<string, number>
}

export function CategoryFilter({ value, onChange, counts }: CategoryFilterProps) {
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap items-center gap-x-7 gap-y-3">
      {categories.map((category) => {
        const active = category === value
        return (
          <button
            key={category}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(category)}
            className={cn(
              'inline-flex items-baseline gap-2 label-xs transition-colors',
              active ? 'text-ink' : 'text-ink-soft hover:text-ink',
            )}
          >
            <span
              className={cn(
                'h-1 w-1 rounded-full bg-accent transition-opacity duration-300',
                active ? 'opacity-100' : 'opacity-0',
              )}
              aria-hidden="true"
            />
            <span className={cn(active && 'link-underline')}>{category}</span>
            <span className="text-[0.5625rem] text-ink-soft/70 tabular-nums">
              {counts[category] ?? 0}
            </span>
          </button>
        )
      })}
    </div>
  )
}
