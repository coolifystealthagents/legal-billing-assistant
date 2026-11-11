import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';
import { serviceDetails } from '@/lib/service-details';
import { serviceImages } from '@/lib/editorial-assets';

export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service ? { title: service.name, description: service.short, alternates: { canonical: `/services/${slug}` } } : {};
}

const relatedByService: Record<string, string[]> = {
  'time-entry-review-support': ['prebill-preparation', 'matter-record-upkeep', 'billing-reporting-support'],
  'prebill-preparation': ['time-entry-review-support', 'e-billing-support', 'matter-record-upkeep'],
  'e-billing-support': ['prebill-preparation', 'matter-record-upkeep', 'billing-reporting-support'],
  'matter-record-upkeep': ['time-entry-review-support', 'e-billing-support', 'prebill-preparation'],
  'invoice-follow-up': ['e-billing-support', 'billing-reporting-support', 'matter-record-upkeep'],
  'billing-reporting-support': ['time-entry-review-support', 'e-billing-support', 'invoice-follow-up'],
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();
  const related = (relatedByService[slug] || []).map((item) => serviceBySlug(item)).filter((item): item is NonNullable<typeof item> => Boolean(item));
  const image = serviceImages[slug];
  const workflow = [
    { label: 'Receive and identify', text: `Confirm the queue against ${detail.inputs[0].toLowerCase()} and record the responsible reviewer before preparation begins.` },
    { label: 'Prepare under written rules', text: `${detail.work[0]}. ${detail.work[1]}. Preserve the source beside each material check.` },
    { label: 'Hold and route exceptions', text: `${detail.work[2]}. ${detail.work[3]}. Do not convert uncertainty into an unsupported answer.` },
    { label: 'Return a reviewable handoff', text: `Deliver the ${detail.outputs[0].toLowerCase()} with the ${detail.outputs[1].toLowerCase()} and keep final acceptance with the authorized owner.` },
  ];

  return <main id="main-content" tabIndex={-1} className={`service-detail service-${detail.variant}`}>
    <section className="page-opening service-opening"><div><p className="kicker">Legal billing service</p><h1>{service.name}</h1><p>{service.short} The role prepares a traceable operating record while attorneys and authorized firm leaders retain every professional, financial, and client decision.</p><div className="hero-actions"><Link className="button primary" href="/contact-us">Discuss this support lane</Link><a className="text-link" href="#scope">Review the full scope</a></div></div><figure className="editorial-hero-image service-hero-image"><Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 820px) 100vw, 50vw" /></figure></section>

    <section className="service-audience"><div><p className="kicker">Who this support is for</p><h2>A clear queue, a known source, and an available reviewer.</h2></div><div><p>{detail.audience}</p><h3>The operating problem</h3><p>{detail.problem}</p><p className="boundary-note"><strong>Authority stays visible:</strong> preparation may move forward under documented rules. Interpretation, approval, commitments, and exceptions return to the firm.</p></div></section>

    <section id="scope" className="service-manual"><header><p className="kicker">Scope of work</p><h2>What enters, what is prepared, and what comes out.</h2><p>This scope is an operating boundary, not a transfer of professional responsibility. Each item remains linked to its approved source and named review owner.</p></header><div className="manual-columns"><section><h3>Inputs the workflow needs</h3><ul>{detail.inputs.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h3>What the assistant prepares</h3><ul>{detail.work.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h3>Deliverables and outcomes</h3><ul>{detail.outputs.map((item) => <li key={item}>{item}</li>)}</ul></section></div></section>

    <section className="service-workflow section-dark"><div><p className="kicker">Working sequence</p><h2>A handoff the owner can reconstruct.</h2><p>The same control model applies at each stage: use an approved source, record what was checked, preserve the exception, and return judgment to the authorized person.</p></div><ol>{workflow.map((step) => <li key={step.label}><h3>{step.label}</h3><p>{step.text}</p></li>)}</ol></section>

    <aside className="service-inline-cta" aria-label="Discuss this service"><div><p className="kicker">A practical first step</p><h2>Test this lane with one reviewable queue.</h2></div><p>Bring the source, expected output, common exception, and accountable reviewer. We will use them to shape the role boundary.</p><Link className="button primary" href="/contact-us">Discuss this service</Link></aside>

    <section className="owner-boundary"><div><p className="kicker">Human decision boundary</p><h2>What your firm approves</h2><p>Support staff do not practice law, infer professional meaning, change financial terms, or make client commitments. These decisions remain with qualified and authorized owners.</p></div><ul>{detail.ownerDecisions.map((item) => <li key={item}>{item}</li>)}</ul></section>

    <section className="section controls-layout"><div><p className="kicker">Quality controls</p><h2>Make accepted work reconstructable.</h2><p>A reviewer should be able to see the source, check performed, exception, next action, and person responsible without rebuilding the history from private messages.</p></div><ul className="control-list">{detail.controls.map((item) => <li key={item}><strong>{item}</strong><span>Recorded before the item moves forward, with any unresolved limitation left visible.</span></li>)}</ul></section>

    <section className="section scenario-section"><div className="section-heading"><div><p className="kicker">Common starting scenarios</p><h2>Begin where the boundary is easiest to test.</h2></div><p>Use a small live sample, retain every exception, and ask the accountable owner to verify both the evidence and the proposed next state.</p></div><div className="scenario-list">{detail.scenarios.map((item, index) => <article key={item}><h3>{item}</h3><p>Start with {detail.inputs[index % detail.inputs.length].toLowerCase()}. Prepare {detail.outputs[index % detail.outputs.length].toLowerCase()}, then pause for owner review before expanding the queue.</p></article>)}</div></section>

    <section className="service-faq"><div><p className="kicker">Service questions</p><h2>Frequently asked questions</h2><p>Use these answers to set expectations before access, volume, or responsibility expands.</p></div><div>{detail.faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}<details><summary>How does an engagement start?</summary><p>Choose one recurring queue, identify its sources and owner, define an accepted output, test a small batch, and revise the checklist from observed exceptions.</p></details><details><summary>When should the work pause?</summary><p>Pause when the source is missing or conflicting, the instruction is unclear, the requested action changes a financial or client position, or qualified judgment is required.</p></details></div></section>

    <section className="section related-services"><div className="section-heading"><div><p className="kicker">Related legal billing services</p><h2>Connect adjacent lanes only when ownership stays clear.</h2></div><p>Each related lane keeps a separate source, completion standard, and reviewer even when the records move through the same billing cycle.</p></div>{related.map((item) => { const relatedImage = serviceImages[item.slug]; return <Link href={`/services/${item.slug}`} key={item.slug}><figure><Image src={relatedImage.src} alt={relatedImage.alt} fill sizes="(max-width: 820px) 100vw, 33vw" /></figure><div><h3>{item.name}</h3><p>{item.short}</p><span>Review this scope</span></div></Link>; })}</section>

    <section className="closing"><p className="kicker">Next action</p><h2>Turn this scope into a role brief.</h2><p>Bring one live workflow, its source records, common exceptions, and the person who approves the result.</p><Link className="button light" href="/contact-us">Plan a free consultation</Link></section>
  </main>;
}
