import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';
import { DocketArtwork } from './DocketArtwork';

function ServiceDirectory() {
  return <div className="service-directory">{site.services.map((service) => <Link href={`/services/${service.slug}`} key={service.slug}><div><p>{service.tasks.slice(0, 2).join(' · ')}</p><h3>{service.name}</h3></div><span>View scope</span></Link>)}</div>;
}

export function HomePage() {
  return <main id="main-content" tabIndex={-1} className="home">
    <section className="home-hero">
      <div className="hero-copy"><p className="kicker">Legal billing operations support</p><h1>Move billing work forward without moving approval away.</h1><p className="hero-body">Specialist remote assistants prepare time records, prebills, e-billing evidence, matter data, and follow-up queues. Your firm keeps legal interpretation, financial approval, client commitments, and professional judgment.</p><div className="hero-actions"><Link className="button primary" href="/contact-us">Plan a legal billing role</Link><Link className="text-link" href="/services">Review service scopes</Link></div><dl className="hero-proof"><div><dt>Work lane</dt><dd>Documented preparation</dd></div><div><dt>Control</dt><dd>Named firm reviewer</dd></div><div><dt>Exception</dt><dd>Visible escalation</dd></div></dl></div>
      <DocketArtwork title="The review-ready billing docket" detail="Source records become prepared evidence, then return to the firm owner for approval" variant="docket" />
    </section>

    <section className="operating-thesis"><p>Billing support should make the next decision easier to inspect.</p><div><h2>Capacity with a visible boundary.</h2><p>A useful assistant does not make disputed, legal, or financial decisions. The assistant keeps approved preparation moving, records what was checked, and routes uncertainty to the person who owns it.</p></div></section>

    <section className="section service-overview"><div className="section-heading"><p className="kicker">Focused service lanes</p><h2>Choose a queue that already has an accountable owner.</h2><p>Each service begins with source material, a completion definition, a review point, and a documented exception path.</p></div><ServiceDirectory /></section>

    <section className="review-docket section-dark">
      <div><p className="kicker">Signature operating model</p><h2>Build the handoff around evidence.</h2><p>The review docket gives managers a compact record of what entered the workflow, what the assistant prepared, what remains unresolved, and who must decide next.</p><Link className="button light" href="/services">Explore the full operating model</Link></div>
      <dl className="docket-ledger"><div><dt>Input</dt><dd>Approved system records, client guidelines, and the current queue.</dd></div><div><dt>Preparation</dt><dd>Checks, indexing, packet assembly, status updates, and exception notes.</dd></div><div><dt>Evidence</dt><dd>Source reference, completion status, open question, and next action.</dd></div><div><dt>Owner gate</dt><dd>Authorized attorney, billing leader, finance owner, or firm manager.</dd></div></dl>
    </section>

    <section className="section boundary-layout"><div className="boundary-image"><Image src="/hero.png" alt="Legal billing ledger, source records, and balance scales arranged for review" fill sizes="(max-width: 900px) 100vw, 46vw" /></div><div><p className="kicker">Clear responsibility</p><h2>Preparation can be delegated. Authority cannot.</h2><p>Assistants can organize records, apply written checks, maintain approved fields, and prepare routine communications. Attorneys and authorized firm leaders retain narrative judgment, privilege decisions, rate changes, write downs, invoice approval, disputes, payment decisions, and every client commitment.</p><ul className="check-list"><li>Least privilege system access</li><li>Approved written procedures</li><li>Named review and escalation owners</li><li>Sampled quality checks and retained evidence</li></ul></div></section>

    <section className="section journal"><div className="section-heading"><p className="kicker">Legal billing field notes</p><h2>Guidance for better handoffs.</h2><Link className="text-link" href="/blog">View all practical guides</Link></div><div className="editorial-row">{blogPosts.slice(0, 3).map((post) => <Link href={`/blog/${post.slug}`} key={post.slug}><p>{post.category} · {post.readTime}</p><h3>{post.title}</h3><span>Read the guide</span></Link>)}</div></section>

    <section className="closing"><p className="kicker">Start with one controlled workflow</p><h2>Bring the billing queue that consumes the most review time.</h2><p>We will help define the support lane, evidence standard, owner gate, and candidate profile.</p><Link className="button light" href="/contact-us">Book a free consultation</Link></section>
  </main>;
}
