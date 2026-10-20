import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/content';
import { october12Blog } from '@/lib/october12-blog';
import { october13Blog } from '@/lib/october13-blog';
import { DocketArtwork } from '@/components/DocketArtwork';

export const metadata: Metadata = { title: 'Legal billing blog', description: 'Practical legal billing workflow guides for role design, evidence, review, and controlled delegation.', alternates: { canonical: '/blog' } };

const posts = [
  ...october13Blog.map((post) => ({ ...post, summary: post.description })),
  ...october12Blog.map((post) => ({ ...post, summary: post.focus, readTime: '7 min read' })),
  ...blogPosts.map((post) => ({ ...post, summary: post.description, thumbnail: '' })),
];

export default function BlogPage() {
  return <main id="main-content" tabIndex={-1}>
    <section className="page-opening editorial-opening"><div><p className="kicker">Legal billing field notes</p><h1>Practical guides for clearer billing handoffs.</h1><p>Use these guides to define source records, administrative checks, decision rights, exception paths, quality samples, and review-ready outputs.</p><Link className="button primary" href="/services">Connect guidance to a service</Link></div><DocketArtwork title="Legal billing field notes" detail="Practical workflow guidance organized around evidence and accountable firm review" variant="editorial" /></section>
    <section className="editorial-index"><header><div><p className="kicker">Published library</p><h2>Browse every practical guide.</h2></div><p>{posts.length} articles across time capture, prebill, e-billing, matter records, and role design.</p></header><div className="editorial-grid">{posts.map((post) => <Link href={`/blog/${post.slug}`} key={post.slug} className="editorial-card">{post.thumbnail ? <figure><Image src={post.thumbnail} alt={`Editorial illustration for ${post.title}`} fill sizes="(max-width: 700px) 100vw, 33vw" /></figure> : <figure className="listing-art" role="img" aria-label={`Editorial illustration for ${post.title}`}><span>Field note</span><strong>{post.category}</strong></figure>}<div><p>{post.category} · {post.readTime}</p><h2>{post.title}</h2><p>{post.summary}</p><span>Read the article</span></div></Link>)}</div></section>
    <section className="closing"><p className="kicker">Apply the guidance</p><h2>Turn one recurring queue into a controlled support role.</h2><p>Bring the workflow, source, owner, and common exceptions.</p><Link className="button light" href="/contact-us">Plan a free consultation</Link></section>
  </main>;
}
