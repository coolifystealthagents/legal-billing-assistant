export const editorialAssets = {
  homeHero: '/editorial/home-legal-billing-operations.jpg',
  servicesHero: '/editorial/services-collection.jpg',
  blogHero: '/editorial/blog-field-notes.jpg',
  researchHero: '/editorial/research-evidence.jpg',
} as const;

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
