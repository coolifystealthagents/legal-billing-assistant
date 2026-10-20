import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { blogPosts, blogBySlug } from '@/lib/content';
import { october12Blog } from '@/lib/october12-blog';
import { October12BlogArticle } from '@/components/October12Article';
import { october13Blog } from '@/lib/october13-blog';
import { October13BlogArticle } from '@/components/October13Article';
import { ArticleShell } from '@/components/ArticleShell';

export function generateStaticParams() { return [...october13Blog, ...october12Blog, ...blogPosts].map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const latest = october13Blog.find((post) => post.slug === slug); if (latest) return { title: latest.title, description: latest.description, alternates: { canonical: `/blog/${latest.slug}` } };
  const fresh = october12Blog.find((post) => post.slug === slug); if (fresh) return { title: fresh.title, description: `${fresh.focus} organized as a reviewable legal billing workflow.`, alternates: { canonical: `/blog/${fresh.slug}` } };
  const post = blogBySlug(slug); return post ? { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } } : {};
}
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const latest = october13Blog.find((post) => post.slug === slug); if (latest) return <October13BlogArticle post={latest} />;
  const fresh = october12Blog.find((post) => post.slug === slug); if (fresh) return <October12BlogArticle post={fresh} />;
  const post = blogBySlug(slug); if (!post) notFound();
  const sections = [...post.sections, { heading: 'Common questions answered', paragraphs: post.faq.map((item) => `${item.q} ${item.a}`) }];
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => ({ title: item.title, href: `/blog/${item.slug}`, summary: item.description }));
  return <ArticleShell kind="Blog" title={post.title} summary={post.description} category={post.category} date={post.publishedAt} readTime={post.readTime} sections={sections} sources={[post.source]} related={related} />;
}
