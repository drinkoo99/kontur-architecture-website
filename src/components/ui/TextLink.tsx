import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

interface TextLinkProps {
  to: string
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  external?: boolean
}

const sizes = {
  sm: 'text-[0.8125rem]',
  md: 'text-[0.9375rem]',
  lg: 'text-lg',
}

export function TextLink({ to, children, className, size = 'md', external = false }: TextLinkProps) {
  const content = (
    <span className="inline-flex items-center gap-2.5">
      <span className="link-underline">{children}</span>
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        aria-hidden="true"
        className="translate-y-px transition-transform duration-500 ease-editorial group-hover:translate-x-1"
      >
        <path d="M0 5h12M8.5 1.5 12 5l-3.5 3.5" stroke="currentColor" strokeWidth="1" />
      </svg>
    </span>
  )

  const classes = cn(
    'group inline-flex font-medium tracking-tight transition-colors',
    sizes[size],
    className,
  )

  if (external) {
    return (
      <a href={to} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {content}
    </Link>
  )
}
