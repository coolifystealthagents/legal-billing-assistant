import { october12Blog } from '@/lib/october12-blog';
import { october12Research } from '@/lib/october12-research';
import { ArticleShell } from './ArticleShell';

type BlogItem = (typeof october12Blog)[number];
type ResearchItem = (typeof october12Research)[number];

export function October12BlogArticle({ post }: { post: BlogItem }) {
  const related = october12Blog.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => ({ title: item.title, href: `/blog/${item.slug}`, summary: item.focus }));
  return <ArticleShell kind="Blog" title={post.title} summary={`${post.focus} organized as a reviewable workflow with explicit authority and evidence.`} category={post.category} date={post.publishedAt} readTime="7 min read" thumbnail={post.thumbnail} sections={post.sections} related={related} />;
}

export function October12ResearchArticle({ post }: { post: ResearchItem }) {
  const related = october12Research.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => ({ title: item.title, href: `/research/${item.slug}`, summary: item.question }));
  return <ArticleShell kind="Research" title={post.title} summary={`A reproducible study design for ${post.question}.`} category={post.cluster} date={post.publishedAt} thumbnail={post.thumbnail} sections={post.sections} sources={post.sources} related={related} notice="Protocol note: this is a proposed observational method, not a claim that original client or firm data has already been collected." />;
}
