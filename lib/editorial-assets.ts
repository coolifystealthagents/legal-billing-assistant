export const editorialAssets = {
  homeHero: '/editorial/home-legal-billing-operations.jpg',
  servicesHero: '/editorial/services-collection.jpg',
  blogHero: '/editorial/blog-field-notes.jpg',
  researchHero: '/editorial/research-evidence.jpg',
} as const;

const dedicatedArticleHeroCollections = new Set([
  'november-05',
  'november-06',
  'november-07',
  'november-08',
  'november-09',
  'november-10',
  'november-11',
]);

export function articleHeroForThumbnail(thumbnail?: string) {
  if (!thumbnail || !thumbnail.startsWith('/thumbnails/')) return thumbnail;
  const collection = thumbnail.split('/')[2];
  if (!dedicatedArticleHeroCollections.has(collection) || !thumbnail.endsWith('.webp')) return thumbnail;
  return thumbnail.replace('/thumbnails/', '/heroes/').replace(/\.webp$/, '-hero.webp');
}

export const serviceImages: Record<string, { src: string; alt: string }> = {
  'time-entry-review-support': {
    src: '/editorial/service-time-entry.jpg',
    alt: 'Blank time-entry grid and review checklist arranged for a controlled billing review',
  },
  'prebill-preparation': {
    src: '/editorial/service-prebill.jpg',
    alt: 'Versioned document packets and exception checklist prepared for prebill review',
  },
  'e-billing-support': {
    src: '/editorial/service-ebilling.jpg',
    alt: 'Submission packet, evidence trays, and status card arranged as an e-billing workflow',
  },
  'matter-record-upkeep': {
    src: '/editorial/service-matter-record.jpg',
    alt: 'Indexed matter folders and a blank source register organized for record upkeep',
  },
  'invoice-follow-up': {
    src: '/editorial/service-invoice-followup.jpg',
    alt: 'Correspondence card, telephone, and next-action folio arranged for invoice follow up',
  },
  'billing-reporting-support': {
    src: '/editorial/service-reporting.jpg',
    alt: 'Abstract report charts, source cards, and measuring tools arranged for billing reporting',
  },
};
