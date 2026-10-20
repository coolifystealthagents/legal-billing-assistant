import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
import { october12Research } from '@/lib/october12-research';
import { october13Research } from '@/lib/october13-research';
import { DocketArtwork } from '@/components/DocketArtwork';

export const metadata: Metadata = { title: 'Legal billing research', description: 'Source-led legal billing study designs with visible definitions, evidence, limitations, and decision boundaries.', alternates: { canonical: '/research' } };

const posts = [
  ...october13Research.map((post) => ({ ...post, description: post.summary })),
  ...october12Research.map((post) => ({ ...post, description: post.question })),
  ...researchPosts.map((post) => ({ ...post, description: post.summary, thumbnail: '' })),
];

export default function ResearchPage() {
  return <main id="main-content" tabIndex={-1}>
    <section className="page-opening editorial-opening"><div><p className="kicker">Research library</p><h1>Study the workflow before drawing a conclusion.</h1><p>These source-led briefs make definitions, denominators, evidence, missing records, reviewer agreement, and limitations visible before leaders interpret the result.</p><Link className="button primary" href="/contact-us">Discuss a measurement workflow</Link></div><DocketArtwork title="Legal billing research register" detail="Source-led study designs separate recorded evidence from accountable interpretation" variant="reporting" /></section>
    <section className="editorial-index"><header><div><p className="kicker">Published research</p><h2>Review every study design.</h2></div><p>{posts.length} research briefs across billing controls, evidence quality, workflow reliability, and role boundaries.</p></header><div className="editorial-grid">{posts.map((post) => <Link href={`/research/${post.slug}`} key={post.slug} className="editorial-card">{post.thumbnail ? <figure><Image src={post.thumbnail} alt={`Research illustration for ${post.title}`} fill sizes="(max-width: 700px) 100vw, 33vw" /></figure> : <figure className="listing-art research-listing-art" role="img" aria-label={`Research illustration for ${post.title}`}><span>Study design</span><strong>{post.cluster}</strong></figure>}<div><p>{post.cluster} · Published {post.publishedAt}</p><h2>{post.title}</h2><p>{post.description}</p><span>Review the study</span></div></Link>)}</div></section>
    <section className="research-method section-dark"><div><p className="kicker">Research standard</p><h2>Distinguish a proposed method from a completed result.</h2></div><p>Every protocol states when client or firm data has not been collected. Public sources inform the questions. Qualified firm owners decide whether the definitions, sample, privacy controls, and limitations are appropriate.</p></section>
    <section className="closing"><p className="kicker">Use the evidence carefully</p><h2>Connect a measured bottleneck to a controlled service lane.</h2><p>We can help define the preparation role without transferring interpretation or approval.</p><Link className="button light" href="/services">Review service scopes</Link></section>
  </main>;
}
