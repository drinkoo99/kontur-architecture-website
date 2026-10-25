import manifest from '@/generated/images.json'

export interface ImageMeta {
  widths: number[]
  ratio: number
}

const images = manifest as Record<string, ImageMeta>

export type ImageName = keyof typeof manifest

export function getImage(name: ImageName): ImageMeta {
  return images[name]
}

export function imageSrc(name: ImageName, width?: number): string {
  const meta = images[name]
  const target = width ?? meta.widths[0]
  const closest = meta.widths.reduce((prev, curr) =>
    Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev,
  )
  return `/images/${name}-${closest}.jpg`
}

export function imageSrcSet(name: ImageName): string {
  return images[name].widths.map((w) => `/images/${name}-${w}.jpg ${w}w`).join(', ')
}

export function imageRatio(name: ImageName): number {
  return 1 / images[name].ratio
}
