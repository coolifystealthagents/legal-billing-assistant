import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { researchPosts, researchBySlug } from '@/lib/content';
import { october12Research } from '@/lib/october12-research';
import { October12ResearchArticle } from '@/components/October12Article';
import { october13Research } from '@/lib/october13-research';
import { October13ResearchArticle } from '@/components/October13Article';
import { ArticleShell } from '@/components/ArticleShell';

export function generateStaticParams() { return [...october13Research, ...october12Research, ...researchPosts].map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const latest = october13Research.find((post) => post.slug === slug); if (latest) return { title: latest.title, description: latest.summary, alternates: { canonical: `/research/${latest.slug}` } };
  const fresh = october12Research.find((post) => post.slug === slug); if (fresh) return { title: fresh.title, description: `A reproducible study design for ${fresh.question}.`, alternates: { canonical: `/research/${fresh.slug}` } };
  const post = researchBySlug(slug); return post ? { title: post.title, description: post.summary, alternates: { canonical: `/research/${post.slug}` } } : {};
}
export default async function ResearchPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const latest = october13Research.find((post) => post.slug === slug); if (latest) return <October13ResearchArticle post={latest} />;
  const fresh = october12Research.find((post) => post.slug === slug); if (fresh) return <October12ResearchArticle post={fresh} />;
  const post = researchBySlug(slug); if (!post) notFound();
  if (post.sections?.length) { const related = researchPosts.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => ({ title: item.title, href: `/research/${item.slug}`, summary: item.summary })); return <ArticleShell kind="Research" title={post.title} summary={post.summary} category={post.cluster} date={post.publishedAt} thumbnail={post.thumbnail} sections={post.sections} sources={post.sources} related={related} notice="Method note: this brief proposes a source-led review approach. It does not claim that private client or firm data has been collected." />; }
  const sections = [
    { heading: 'Finding in context', paragraphs: [post.finding, 'Treat this finding as an operating hypothesis to test against the firm\'s definitions, source records, privacy requirements, and review ownership.'] },
    { heading: 'What this brief examines', paragraphs: ['This brief connects public guidance with the practical question of how recurring billing preparation can be separated from accountable judgment.', 'It does not replace professional advice or claim a result from private client data. It gives leaders a structured starting point for workflow review.'] },
    { heading: 'Questions to test in the workflow', paragraphs: ['Identify which steps are preparation, coordination, or documentation. Then identify which decisions require an attorney, billing leader, finance owner, privacy owner, or client authority.', 'For each step, name the source, accepted evidence, exception rule, and person who can approve completion.'] },
    { heading: 'Evidence and definitions', paragraphs: ['Define the record, status, period, denominator, and exclusion before counting. Retain missing and conflicting data instead of silently forcing a clean result.', 'A reviewer should be able to reconstruct how each included record met the definition.'] },
    { heading: 'Limits and responsible use', paragraphs: ['Small samples, inconsistent source fields, changing guidelines, and reviewer disagreement can limit interpretation. Keep those limitations beside any summary.', 'Use the brief to improve the operating system, not to judge professional worth or transfer accountable decisions.'] },
    { heading: 'A controlled next test', paragraphs: ['Choose a small live sample and have two authorized reviewers test the definitions against the same evidence. Record disagreement before expanding the method.', 'If the result is useful, update the checklist, source guidance, and escalation path before applying it to a larger queue.'] },
  ];
  const related = researchPosts.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => ({ title: item.title, href: `/research/${item.slug}`, summary: item.summary }));
  return <ArticleShell kind="Research" title={post.title} summary={post.summary} category={post.cluster} date={post.publishedAt} sections={sections} sources={post.sources} related={related} notice="Method note: this brief proposes a source-led review approach. It does not claim that private client or firm data has been collected." />;
}
