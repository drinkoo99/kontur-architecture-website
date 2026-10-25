import { useEffect } from 'react'
import { site } from '@/data/site'

const DEFAULT_TITLE = 'KONTUR — Architecture Studio, Prishtina'
const DEFAULT_DESCRIPTION =
  'KONTUR is an architecture studio based in Prishtina, Kosovo. Residential, cultural and adaptive-reuse work across the Balkans.'

interface SeoProps {
  title?: string
  description?: string
  image?: string
  path?: string
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

export function Seo({ title, description, image, path }: SeoProps) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${site.name}` : DEFAULT_TITLE
    const desc = description ?? DEFAULT_DESCRIPTION
    const url = path ? `https://kontur.studio${path}` : 'https://kontur.studio/'

    document.title = fullTitle
    setMeta('name', 'description', desc)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', desc)
    setMeta('property', 'og:url', url)
    if (image) {
      const absolute = image.startsWith('http') ? image : `https://kontur.studio${image}`
      setMeta('property', 'og:image', absolute)
    }
  }, [title, description, image, path])

  return null
}

export { DEFAULT_DESCRIPTION, DEFAULT_TITLE }
