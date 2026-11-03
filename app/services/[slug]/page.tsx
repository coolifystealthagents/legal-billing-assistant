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
  const { slug } = await params; const service = serviceBySlug(slug);
  return service ? { title: service.name, description: service.short, alternates: { canonical: `/services/${slug}` } } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = serviceBySlug(slug); const detail = serviceDetails[slug];
  if (!service || !detail) notFound();
  const related = site.services.filter((item) => item.slug !== slug).slice(0, 3);
  const image = serviceImages[slug];
  return <main id="main-content" tabIndex={-1} className="service-detail">
    <section className="page-opening service-opening"><div><p className="kicker">Legal billing service</p><h1>{service.name}</h1><p>{service.short} The role prepares a traceable operating record while attorneys and authorized firm leaders retain every professional, financial, and client decision.</p><div className="hero-actions"><Link className="button primary" href="/contact-us">Discuss this support lane</Link><a className="text-link" href="#scope">Review the full scope</a></div></div><figure className="editorial-hero-image service-hero-image"><Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 820px) 100vw, 50vw" /></figure></section>
    <section className="service-audience"><div><p className="kicker">Who this support is for</p><h2>A clear queue, a known source, and an available reviewer.</h2></div><div><p>{detail.audience}</p><h3>The problem it addresses</h3><p>{detail.problem}</p></div></section>
    <section id="scope" className="service-manual"><header><p className="kicker">Scope of work</p><h2>What enters, what is prepared, and what comes out.</h2></header><div className="manual-columns"><section><h3>Inputs the workflow needs</h3><ul>{detail.inputs.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h3>What the assistant prepares</h3><ul>{detail.work.map((item) => <li key={item}>{item}</li>)}</ul></section><section><h3>Deliverables and outcomes</h3><ul>{detail.outputs.map((item) => <li key={item}>{item}</li>)}</ul></section></div></section>
    <aside className="service-inline-cta" aria-label="Discuss this service"><div><p className="kicker">A practical first step</p><h2>Test this lane with one reviewable queue.</h2></div><p>Bring the source, expected output, common exception, and accountable reviewer. We will use them to shape the role boundary.</p><Link className="button primary" href="/contact-us">Discuss this service</Link></aside>
    <section className="owner-boundary section-dark"><div><p className="kicker">Human decision boundary</p><h2>What your firm approves</h2><p>Support staff do not practice law, infer professional meaning, change financial terms, or make client commitments. These decisions remain with qualified and authorized owners.</p></div><ul>{detail.ownerDecisions.map((item) => <li key={item}>{item}</li>)}</ul></section>
    <section className="section controls-layout"><div><p className="kicker">Quality controls</p><h2>Make accepted work reconstructable.</h2><p>A reviewer should be able to see the source, check performed, exception, next action, and person responsible without rebuilding the history from private messages.</p></div><ul className="control-list">{detail.controls.map((item) => <li key={item}><strong>{item}</strong><span>Recorded in the workflow before the item moves forward.</span></li>)}</ul></section>
    <section className="section scenario-section"><div className="section-heading"><p className="kicker">Common starting scenarios</p><h2>Begin where the boundary is easiest to test.</h2></div><div className="scenario-list">{detail.scenarios.map((item) => <article key={item}><h3>{item}</h3><p>Run a small live sample, retain exceptions, and ask the accountable owner to verify the evidence before expanding.</p></article>)}</div></section>
    <section className="service-faq"><div><p className="kicker">Service questions</p><h2>Frequently asked questions</h2></div><div>{detail.faqs.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}<details><summary>How does an engagement start?</summary><p>Choose one recurring queue, identify its sources and owner, define an accepted output, test a small batch, and revise the checklist from observed exceptions.</p></details></div></section>
    <section className="section related-services"><div className="section-heading"><p className="kicker">Related legal billing services</p><h2>Connect adjacent lanes only when ownership stays clear.</h2></div>{related.map((item) => { const relatedImage = serviceImages[item.slug]; return <Link href={`/services/${item.slug}`} key={item.slug}><figure><Image src={relatedImage.src} alt={relatedImage.alt} fill sizes="(max-width: 820px) 100vw, 33vw" /></figure><div><h3>{item.name}</h3><p>{item.short}</p><span>Review this scope</span></div></Link>; })}</section>
    <section className="closing"><p className="kicker">Next action</p><h2>Turn this scope into a role brief.</h2><p>Bring one live workflow, its source records, common exceptions, and the person who approves the result.</p><Link className="button light" href="/contact-us">Plan a free consultation</Link></section>
  </main>;
}
