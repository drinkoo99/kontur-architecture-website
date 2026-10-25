export const site = {
  name: 'KONTUR',
  descriptor: 'Architecture Studio',
  founded: '2014',
  location: 'Prishtina, Kosovo',
  timeZone: 'Europe/Belgrade',
  coordinates: '42.6629° N, 21.1655° E',
  email: 'studio@kontur.studio',
  phone: '+383 38 000 000',
  address: ['Rr. Garibaldi 12', '10000 Prishtina', 'Kosovo'],
  social: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
  nav: [
    { label: 'Studio', href: '/studio' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
} as const

export const studio = {
  intro:
    'KONTUR is an architecture studio based in Prishtina, Kosovo. We work on houses, cultural buildings and the careful reuse of existing structures across the Balkans.',
  statement:
    'We design with daylight, material and the land. Every project begins with a long reading of its site — its slope, its climate, the way light moves through it — and ends with a building that is quiet, precise and made to last.',
  principles: [
    {
      index: '01',
      title: 'Site',
      body: 'Buildings are drawn from the conditions they stand in. Orientation, terrain and the existing fabric come first; form follows the argument.',
    },
    {
      index: '02',
      title: 'Material',
      body: 'Concrete, stone, timber and lime. Few materials, used fully, with their structure and their age left visible rather than concealed.',
    },
    {
      index: '03',
      title: 'Light',
      body: 'Rooms are organised around the sun. Openings are sized and placed to shape light across the day and to hold a steady, even interior.',
    },
    {
      index: '04',
      title: 'Use',
      body: 'Buildings are made to be lived in and to age well. Plan, servicing and detail are resolved so the work remains legible for decades.',
    },
  ],
  disciplines: ['Architecture', 'Interiors', 'Adaptive Reuse', 'Masterplanning'],
} as const
