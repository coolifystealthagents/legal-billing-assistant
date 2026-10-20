import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { site } from '@/lib/site';
import { ReviewRail } from '@/components/ReviewRail';

export const metadata: Metadata = { title: 'Contact Us | Legal billing staffing consultation', description: 'Define a controlled legal billing support role with clear inputs, owner decisions, review evidence, and escalation.', alternates: { canonical: '/contact-us' } };

export default function ContactPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: `Contact ${site.name}`, url: `https://${site.domain}/contact-us`, description: 'Legal billing staffing consultation.' };
  return <main id="main-content" tabIndex={-1} className="contact-page">
    <section className="contact-fold">
      <div className="contact-story"><p className="kicker">Legal billing consultation</p><h1>Define the work before you hire for it.</h1><p>Bring one billing queue that needs more preparation capacity. We will map the source, output, owner gate, access boundary, and candidate profile.</p><ul className="scope-chips"><li>Workflow discovery</li><li>Role boundary</li><li>Candidate matching</li></ul><div className="review-label"><strong>StealthAgents reviews</strong><span>Verified first-party client feedback</span></div><ReviewRail /></div>
      <div className="contact-form-card"><div><p className="kicker">Start the conversation</p><h2>Book a free consultation</h2><p>Describe the workflow only. Do not include client names, matter numbers, invoice details, or privileged information.</p></div><LeadForm source="contact-page-consultation" /></div>
    </section>
    <section className="parent-proof">
      <div className="team-photo"><Image src="/brand/stealth-agents-team.webp" alt="StealthAgents operations team in Bacolod" fill sizes="(max-width: 900px) 100vw, 52vw" /></div>
      <div><p className="kicker">Managed operations partner</p><h2>Legal billing context, supported by StealthAgents.</h2><p>StealthAgents recruits and supports remote professionals through a managed staffing model. For this service, the role is shaped around your approved legal billing workflow, access rules, evidence standard, and accountable firm review.</p><p>Legal Billing Assistant remains the specialist service identity. StealthAgents provides the recruiting, matching, onboarding, and operating support behind the engagement.</p><div className="official-plate"><Image src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" width={180} height={44} /><strong>Official team, Bacolod</strong></div></div>
    </section>
    <section className="contact-path section-dark"><div><p className="kicker">What happens after you reach out</p><h2>A controlled path from workflow to candidate.</h2></div><dl><div><dt>Discover</dt><dd>Map the queue, source records, current owner, exceptions, and desired output.</dd></div><div><dt>Design</dt><dd>Define responsibilities, minimum access, review rules, and escalation.</dd></div><div><dt>Match</dt><dd>Review candidates whose strengths fit the approved role brief.</dd></div><div><dt>Launch</dt><dd>Test a narrow live sample before the support lane expands.</dd></div></dl></section>
    <section className="service-faq contact-faq"><div><p className="kicker">Before the call</p><h2>Questions law firms often ask</h2></div><div><details><summary>What can a legal billing assistant support?</summary><p>Administrative preparation can include required-field checks, prebill packet assembly, e-billing evidence, approved matter-field upkeep, routine follow-up coordination, and source-linked reporting.</p></details><details><summary>What stays with the firm?</summary><p>Legal interpretation, privilege, billability, rates, adjustments, invoice approval, disputes, client commitments, financial decisions, and every professional judgment stay with authorized firm owners.</p></details><details><summary>Can we begin with one workflow?</summary><p>Yes. A narrow first lane makes access, quality, review ownership, and exceptions easier to test.</p></details><details><summary>Where is the scheduling calendar?</summary><p>After the consultation form succeeds, the thank-you page presents the StealthAgents scheduling calendar.</p></details></div></section>
    <section className="closing"><p className="kicker">Prefer to review the scope first?</p><h2>Read the service manuals before you contact us.</h2><p>Each service page explains inputs, work, evidence, owner decisions, controls, examples, and safe starting points.</p><Link className="button light" href="/services">Explore legal billing services</Link></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
