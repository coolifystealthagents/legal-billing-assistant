type ArtworkProps = {
  title: string;
  detail: string;
  variant?: 'docket' | 'prebill' | 'portal' | 'matter' | 'followup' | 'reporting' | 'editorial';
  className?: string;
};

const labels = {
  docket: ['Source record', 'Narrative check', 'Owner review'],
  prebill: ['Draft packet', 'Exception log', 'Approval queue'],
  portal: ['Submission', 'Status evidence', 'Escalation'],
  matter: ['Guideline', 'Matter field', 'Conflict flag'],
  followup: ['Approved note', 'Client response', 'Next owner'],
  reporting: ['Source check', 'Exception view', 'Leadership brief'],
  editorial: ['Question', 'Evidence', 'Decision boundary'],
};

export function DocketArtwork({ title, detail, variant = 'docket', className = '' }: ArtworkProps) {
  const items = labels[variant];
  return <figure className={`docket-art ${className}`} aria-label={`${title}. ${detail}`}>
    <svg viewBox="0 0 760 520" role="img" aria-labelledby={`art-${variant}-title art-${variant}-desc`}>
      <title id={`art-${variant}-title`}>{title}</title>
      <desc id={`art-${variant}-desc`}>{detail}</desc>
      <rect width="760" height="520" rx="10" className="art-paper" />
      <path d="M72 72H688M72 138H688M72 448H688" className="art-rule" />
      <rect x="72" y="178" width="190" height="214" rx="4" className="art-panel" />
      <rect x="285" y="178" width="190" height="214" rx="4" className="art-panel" />
      <rect x="498" y="178" width="190" height="214" rx="4" className="art-panel" />
      <path d="M262 285H285M475 285H498" className="art-path" />
      <circle cx="273" cy="285" r="5" className="art-node" /><circle cx="486" cy="285" r="5" className="art-node" />
      <path d="M108 228H226M108 252H202M108 276H218M321 228H439M321 252H416M321 276H430M534 228H652M534 252H626M534 276H642" className="art-copy" />
      <path d="M108 334h86M321 334h86M534 334h86" className="art-accent" />
      <circle cx="229" cy="348" r="18" className="art-seal" /><path d="m221 348 6 6 11-14" className="art-check" />
    </svg>
    <figcaption><span>{title}</span><small>{items.join(' · ')}</small></figcaption>
  </figure>;
}
