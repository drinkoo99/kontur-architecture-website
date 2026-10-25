import type { ImageName } from '@/lib/images'

export type ProjectCategory = 'Residential' | 'Cultural' | 'Adaptive Reuse' | 'Urban'

export type ProjectStatus = 'Completed' | 'In progress' | 'Concept'

export interface GalleryImage {
  name: ImageName
  alt: string
  caption?: string
  span?: 'full' | 'half' | 'third' | 'two-thirds'
}

export interface Project {
  slug: string
  index: string
  title: string
  subtitle: string
  location: string
  year: string
  status: ProjectStatus
  category: ProjectCategory
  area: string
  client: string
  team: string
  featured?: boolean
  tall?: boolean
  hero: GalleryImage
  summary: string
  description: string[]
  concept: string
  gallery: GalleryImage[]
}

export const categories: Array<ProjectCategory | 'All'> = [
  'All',
  'Residential',
  'Cultural',
  'Adaptive Reuse',
  'Urban',
]

export const projects: Project[] = [
  {
    slug: 'house-on-the-hill',
    index: '01',
    title: 'House on the Hill',
    subtitle: 'A residence above the city',
    location: 'Prishtina, Kosovo',
    year: '2025',
    status: 'Completed',
    category: 'Residential',
    area: '340 m²',
    client: 'Private',
    team: 'Architecture, interiors',
    featured: true,
    hero: {
      name: 'hill-hero',
      alt: 'Dark timber residence lit from within at dusk, standing on a lawn',
    },
    summary:
      'A family house set into a wooded slope, arranged to follow the fall of the land and open to the evening light.',
    description: [
      'The house is a single volume pressed into the hillside, so that it reads as one storey from the street and two from the garden below. A long, deep balcony runs along the western face, catching the low sun and shading the glass beneath it.',
      'Rooms are stacked as a simple sequence of open and closed: living spaces to the west, bedrooms and study held back to the east against the hill. A stair of board-formed concrete links the two levels and gives the interior its calm, structural rhythm.',
    ],
    concept:
      'A horizontal line held against the slope, with a single cantilever to mark the entrance.',
    gallery: [
      {
        name: 'hill-interior-stair',
        alt: 'Open stair rising through a double-height interior with timber floors',
        caption: 'Circulation spine, ground floor',
        span: 'two-thirds',
      },
      {
        name: 'hill-living',
        alt: 'Living room with soft daylight, pale walls and warm timber furniture',
        caption: 'Living room, west',
        span: 'third',
      },
      {
        name: 'hill-kitchen',
        alt: 'Kitchen with a long counter and a tall window to the garden',
        caption: 'Kitchen and garden window',
        span: 'half',
      },
      {
        name: 'hill-detail-room',
        alt: 'Quiet corner room with a single plant and filtered daylight',
        caption: 'Study, upper level',
        span: 'half',
      },
    ],
  },
  {
    slug: 'courtyard-house',
    index: '02',
    title: 'Courtyard House',
    subtitle: 'Two courts around a single room',
    location: 'Prizren, Kosovo',
    year: '2024',
    status: 'Completed',
    category: 'Residential',
    area: '285 m²',
    client: 'Private',
    team: 'Architecture, interiors',
    hero: {
      name: 'courtyard-villa',
      alt: 'Low house with timber and brick cladding opening onto a planted garden',
    },
    summary:
      'A compact house for a narrow plot, folded around two planted courtyards that bring light and air into the centre of the plan.',
    description: [
      'The plot is long and only six metres wide at its front. Rather than build to the edges, the house steps back twice, opening a small entrance court and a larger private garden court behind.',
      'The rooms sit between the two courts, so that every space borrows light and outlook from a garden. A single continuous wall of warm brick runs the length of the plan and holds the composition together.',
    ],
    concept:
      'A house turned inward, where the courtyard — not the facade — is the principal room.',
    gallery: [
      {
        name: 'courtyard-pool',
        alt: 'White courtyard house with a reflecting pool and mature planting',
        caption: 'Water court, west',
        span: 'full',
      },
      {
        name: 'courtyard-interior',
        alt: 'Bright interior with pale walls, plants and afternoon light',
        caption: 'Garden room',
        span: 'half',
      },
      {
        name: 'courtyard-dining',
        alt: 'Dining area beside a stair with timber and dark stone finishes',
        caption: 'Dining and stair',
        span: 'half',
      },
      {
        name: 'courtyard-furniture',
        alt: 'Softly furnished room in muted tones with a large window',
        caption: 'Principal room',
        span: 'full',
      },
    ],
  },
  {
    slug: 'terrace-house',
    index: '03',
    title: 'Terrace House',
    subtitle: 'A house stepped into the valley',
    location: 'Peja, Kosovo',
    year: '2026',
    status: 'In progress',
    category: 'Residential',
    area: '410 m²',
    client: 'Private',
    team: 'Architecture, landscape',
    featured: true,
    tall: true,
    hero: {
      name: 'terrace-hero',
      alt: 'White modernist house stepping down a slope with deep window reveals',
    },
    summary:
      'On a steep valley plot, the house is cut into the ground as a series of planted terraces, one room deep at every level.',
    description: [
      'The site falls almost eight metres across its depth. Instead of a single retaining gesture, the house is broken into four terraces, each holding a band of rooms and a planted edge that belongs to the ground above.',
      'Every room opens twice — to the valley on one side and to a garden terrace on the other — so that the house is never more than one room deep and daylight is available to all of it.',
    ],
    concept:
      'Structure as landscape: each storey of the house becomes a terrace of the hill.',
    gallery: [
      {
        name: 'terrace-white',
        alt: 'Timber and glass house opening onto a garden beneath mature trees',
        caption: 'Valley elevation',
        span: 'two-thirds',
      },
      {
        name: 'terrace-stair',
        alt: 'Timber stair and open landing within a bright interior',
        caption: 'Terrace stair',
        span: 'third',
      },
      {
        name: 'terrace-interior',
        alt: 'Interior with a long open stair and pale, even daylight',
        caption: 'Upper landing',
        span: 'half',
      },
      {
        name: 'terrace-room',
        alt: 'Calm room with a large window and muted natural materials',
        caption: 'Bedroom, level two',
        span: 'half',
      },
    ],
  },
  {
    slug: 'atrium-museum',
    index: '04',
    title: 'Atrium Museum',
    subtitle: 'City museum and archive',
    location: 'Prishtina, Kosovo',
    year: '2026',
    status: 'In progress',
    category: 'Cultural',
    area: '2,400 m²',
    client: 'City of Prishtina',
    team: 'Architecture, exhibition design',
    featured: true,
    hero: {
      name: 'museum-facade',
      alt: 'Angular glazed museum facade with a folded, faceted roof',
    },
    summary:
      'A public museum organised around a single top-lit atrium, with galleries that can be read in any order.',
    description: [
      'The building is arranged as a ring of galleries around a day-lit central atrium. The atrium is the museum\u2019s public room; the galleries open from it without a fixed route, allowing visitors to move through the collection as they choose.',
      'A deep concrete frame shades the glass where the building meets the street and gives the elevation its measured, civic character. Inside, a lattice of coffers carries daylight down to the lowest level.',
    ],
    concept: 'One room to hold the city, and a quiet frame around it.',
    gallery: [
      {
        name: 'museum-dome',
        alt: 'Circular coffered ceiling with a central skylight letting daylight into an atrium',
        caption: 'Central atrium',
        span: 'full',
      },
      {
        name: 'museum-pavilion',
        alt: 'Timber and glass pavilion behind a perforated screen facade',
        caption: 'Gallery wing',
        span: 'half',
      },
      {
        name: 'museum-construction',
        alt: 'Construction site with workers on a concrete frame',
        caption: 'Structure, phase two',
        span: 'half',
      },
    ],
  },
  {
    slug: 'linen-mill',
    index: '05',
    title: 'Linen Mill',
    subtitle: 'A 1970s textile mill, reworked',
    location: 'Tirana, Albania',
    year: '2023',
    status: 'Completed',
    category: 'Adaptive Reuse',
    area: '1,850 m²',
    client: 'Private',
    team: 'Architecture, interiors',
    hero: {
      name: 'mill-balconies',
      alt: 'Concrete balconies and deep horizontal openings on a reused industrial building',
    },
    summary:
      'An industrial frame kept and repaired, its concrete structure left exposed and its floors opened to a new central void.',
    description: [
      'The mill had a sound concrete frame and little else worth keeping. We kept the frame, repaired it where it had spalled, and removed the later partitions to expose the full length of the floor plates.',
      'A new void is cut through the centre of the building to bring light to the lower levels, bridged by a light steel stair. The original concrete is left raw against new joinery in oak.',
    ],
    concept:
      'Reuse as subtraction — removing what was added, and keeping what already worked.',
    gallery: [
      {
        name: 'mill-stair',
        alt: 'Glass and steel stair rising through an open interior',
        caption: 'New stair',
        span: 'half',
      },
      {
        name: 'mill-entrance',
        alt: 'Timber and glass entrance to a converted building',
        caption: 'Entrance',
        span: 'half',
      },
      {
        name: 'mill-detail',
        alt: 'Interior detail with pale walls, stone and warm timber',
        caption: 'Interior detail',
        span: 'full',
      },
    ],
  },
  {
    slug: 'vertical-court',
    index: '06',
    title: 'Vertical Court',
    subtitle: 'A dense urban block',
    location: 'Prishtina, Kosovo',
    year: '2027',
    status: 'Concept',
    category: 'Urban',
    area: '18,000 m²',
    client: 'Competition',
    team: 'Architecture, urban design',
    hero: {
      name: 'vertical-towers',
      alt: 'Curved tower facades rising against a clear sky',
    },
    summary:
      'A competition proposal for a dense city block, lifting the ground plane into a series of stacked public courts.',
    description: [
      'The block is arranged as three connected volumes around a raised courtyard. The ground floor is given back to the city as arcade and market space; housing and small offices sit above.',
      'Loggias run the full height of each volume, providing every home with an outdoor room and a shaded edge. The proposal tests how much shared, open space a dense block can hold.',
    ],
    concept: 'Density with a floor for the city — one court, repeated at height.',
    gallery: [
      {
        name: 'vertical-facade',
        alt: 'Curved facade with a finely gridded pattern against a blue sky',
        caption: 'Loggia facade study',
        span: 'full',
      },
      {
        name: 'vertical-skyline',
        alt: 'Looking up between tall towers towards the sky',
        caption: 'Block massing',
        span: 'half',
      },
      {
        name: 'vertical-grid',
        alt: 'Glass and steel tower grid seen from below',
        caption: 'Street elevation',
        span: 'half',
      },
    ],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeatured(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getAdjacent(slug: string): { prev: Project; next: Project } {
  const i = projects.findIndex((project) => project.slug === slug)
  const prev = projects[(i - 1 + projects.length) % projects.length]
  const next = projects[(i + 1) % projects.length]
  return { prev, next }
}
