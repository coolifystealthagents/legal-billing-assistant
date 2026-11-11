import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { editorialAssets, serviceImages } from '@/lib/editorial-assets';

export const metadata: Metadata = {
  title: 'Legal billing support services',
  description: 'Review six focused legal billing support lanes, their evidence, owner boundaries, and controlled starting points.',
  alternates: { canonical: '/services' },
};

const systemSteps = [
  { term: 'Define the source', detail: 'Name the approved record, current instruction, required fields, and access boundary before work begins.' },
  { term: 'Prepare the queue', detail: 'Apply documented administrative checks, retain source references, and organize the next review.' },
  { term: 'Surface exceptions', detail: 'Keep missing, conflicting, or judgment dependent items visible instead of resolving them by inference.' },
  { term: 'Return to the owner', detail: 'Send the evidence and precise question to the attorney, billing leader, or authorized firm reviewer.' },
];

const serviceQuestions = [
  { q: 'Which service should a firm start with?', a: 'Choose the recurring queue with the clearest source records, the most visible rework, and an available owner who can review exceptions. A narrow first lane is easier to test than a broad role.' },
  { q: 'What remains with attorneys and firm leaders?', a: 'Legal interpretation, professional judgment, rates, write downs, fee decisions, client commitments, disputes, and final approval remain with qualified and authorized firm personnel.' },
  { q: 'How is the first workflow tested?', a: 'Define an accepted output, run a small live sample, retain every exception, and have the accountable owner review the evidence before expanding access or volume.' },
  { q: 'Can several service lanes begin at once?', a: 'They can be planned together, but the safer operating start is one bounded queue. Add an adjacent lane only after sources, ownership, acceptance checks, and escalation are working.' },
];

export default function ServicesPage() {
  return <main id="main-content" tabIndex={-1} className="services-page">
    <section className="page-opening services-opening">
      <div>
        <p className="kicker">Legal billing support system</p>
        <h1>Prepare the record. Preserve the decision.</h1>
        <p>Legal billing support works when routine preparation is separated from professional and financial authority. The assistant makes source records, checks, exceptions, and next actions easier to review. Your firm decides what the evidence means and what happens next.</p>
        <div className="hero-actions"><Link className="button primary" href="/contact-us">Map your first workflow</Link><a className="text-link" href="#service-system">See how the system works</a></div>
      </div>
      <figure className="editorial-hero-image"><Image src={editorialAssets.servicesHero} alt="Six organized workflow packets leading to one legal billing review tray" fill priority sizes="(max-width: 820px) 100vw, 50vw" /></figure>
    </section>

    <section id="service-system" className="service-system section">
      <header><p className="kicker">How the support system works</p><h2>One visible path from source record to owner review.</h2><p>The operating model is intentionally conservative. It reduces search and reconstruction without asking support staff to interpret legal work, approve financial changes, or make client commitments.</p></header>
      <dl>{systemSteps.map((step) => <div key={step.term}><dt>{step.term}</dt><dd>{step.detail}</dd></div>)}</dl>
    </section>

    <section className="service-context section-dark">
      <div><p className="kicker">Why scope matters</p><h2>A broad job title does not define safe, useful work.</h2></div>
      <div><p>A dependable role names the queue, approved sources, preparation rules, accepted output, accountable reviewer, and stop conditions. Without that structure, routine work moves through inboxes and memory while exceptions become difficult to reconstruct.</p><p>These six service lanes describe distinct operating purposes. They can connect, but each keeps its own inputs, evidence, reviewer, and completion standard.</p></div>
    </section>

    <section className="service-index">
      <div className="section-heading"><div><p className="kicker">Complete service collection</p><h2>Choose the lane that matches the bottleneck.</h2></div><p>Each destination is a full service manual with audience, problem, inputs, scope, workflow, deliverables, owner boundaries, controls, starting scenarios, questions, and related services.</p></div>
      <div className="service-card-grid">{site.services.map((service) => { const image = serviceImages[service.slug]; return <Link href={`/services/${service.slug}`} key={service.slug}><figure><Image src={image.src} alt={image.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 1050px) 50vw, 33vw" /></figure><div><p>{service.tasks.join(' · ')}</p><h2>{service.name}</h2><p>{service.short}</p><span>Review the complete scope</span></div></Link>; })}</div>
    </section>

    <section className="service-operating-guide section">
      <div><p className="kicker">Operational guidance</p><h2>Start with evidence that a reviewer can inspect.</h2><p>A role brief should be usable during real work. It should state what enters, what may be prepared, what must pause, what complete means, and who accepts the result.</p></div>
      <div className="operating-checklist"><h3>Bring these five items to the first workflow review</h3><ul><li>The current source record or system of record</li><li>The written administrative checks already approved by the firm</li><li>Examples of missing, conflicting, or sensitive items</li><li>The output a reviewer needs to make the next decision</li><li>The person authorized to approve, resolve, or close the work</li></ul></div>
    </section>

    <section className="service-reference">
      <div><p className="kicker">Approved public reference</p><h2>Structure for electronic billing records.</h2></div>
      <div><p>The site uses the Legal Electronic Data Exchange Standard as a public reference for electronic billing structure. Client instructions, firm policy, professional duties, and authorized human review still govern each matter.</p><a className="text-link" href="https://ledes.org/" rel="noopener noreferrer">Review the LEDES reference</a></div>
    </section>

    <section className="section decision-guide"><div><p className="kicker">Decision support</p><h2>Choose by workflow, not by a generic title.</h2><p>Match the service to the point where records stop being review ready. Keep related queues separate until the first handoff is stable.</p></div><dl><div><dt>Time entry review support</dt><dd>For missing fields, narrative checks, and correction queues before prebill.</dd></div><div><dt>Prebill preparation</dt><dd>For versioned packets, requested edits, and visible unresolved items.</dd></div><div><dt>E-billing support</dt><dd>For submission evidence, portal status, and exact rejection records.</dd></div><div><dt>Matter record upkeep</dt><dd>For approved billing fields, guideline sources, and conflicting instructions.</dd></div><div><dt>Invoice follow up coordination</dt><dd>For approved routine communication, response records, and escalation.</dd></div><div><dt>Billing reporting support</dt><dd>For source-linked operating views with definitions and limitations.</dd></div></dl></section>

    <section className="service-faq services-index-faq"><div><p className="kicker">Service planning questions</p><h2>Decide what to delegate before deciding how much.</h2></div><div>{serviceQuestions.map((item) => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>

    <section className="closing"><p className="kicker">A controlled first step</p><h2>Define one lane before expanding the role.</h2><p>Bring the source records, current owner, common exceptions, and desired review output. The first conversation can turn them into a bounded starting brief.</p><Link className="button light" href="/contact-us">Plan a free consultation</Link></section>
  </main>;
}
