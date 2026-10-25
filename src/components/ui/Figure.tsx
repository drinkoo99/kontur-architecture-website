import type { CSSProperties } from 'react'
import { cn } from '@/lib/cn'
import { getImage, imageRatio, imageSrc, imageSrcSet, type ImageName } from '@/lib/images'

interface FigureProps {
  name: ImageName
  alt: string
  className?: string
  imgClassName?: string
  sizes?: string
  priority?: boolean
  ratio?: number
  position?: string
  imageReveal?: boolean
  delay?: number
  tone?: 'paper' | 'ink'
}

export function Figure({
  name,
  alt,
  className,
  imgClassName,
  sizes = '100vw',
  priority = false,
  ratio,
  position,
  imageReveal = false,
  delay = 0,
  tone = 'paper',
}: FigureProps) {
  const meta = getImage(name)
  const width = meta.widths[0]
  const height = Math.round(width * meta.ratio)
  const aspect = ratio ?? imageRatio(name)

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        tone === 'ink' ? 'bg-ink' : 'bg-paper-2',
        imageReveal && 'reveal-img',
        className,
      )}
      style={{ aspectRatio: aspect, '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      <img
        src={imageSrc(name)}
        srcSet={imageSrcSet(name)}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className={cn('h-full w-full object-cover', imgClassName)}
        style={position ? { objectPosition: position } : undefined}
      />

      {imageReveal ? (
        <span
          aria-hidden="true"
          className="reveal-cover"
          style={{ background: tone === 'ink' ? 'rgb(var(--ink))' : 'rgb(var(--paper-2))' }}
        />
      ) : null}
    </div>
  )
}
