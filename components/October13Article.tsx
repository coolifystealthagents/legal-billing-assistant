import { october13Blog } from '@/lib/october13-blog';
import { october13Research } from '@/lib/october13-research';
import { ArticleShell } from './ArticleShell';

type BlogItem = (typeof october13Blog)[number];
type ResearchItem = (typeof october13Research)[number];

export function October13BlogArticle({ post }: { post: BlogItem }) {
  const related = october13Blog.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => ({ title: item.title, href: `/blog/${item.slug}`, summary: item.description }));
  return <ArticleShell kind="Blog" title={post.title} summary={post.description} category={post.category} date={post.publishedAt} readTime={post.readTime} thumbnail={post.thumbnail} sections={post.sections} sources={post.sources} related={related} />;
}

export function October13ResearchArticle({ post }: { post: ResearchItem }) {
  const related = october13Research.filter((item) => item.slug !== post.slug).slice(0, 3).map((item) => ({ title: item.title, href: `/research/${item.slug}`, summary: item.summary }));
  return <ArticleShell kind="Research" title={post.title} summary={post.summary} category={post.cluster} date={post.publishedAt} thumbnail={post.thumbnail} sections={post.sections} sources={post.sources} related={related} notice="Protocol note: this is a proposed observational method, not a claim that client or firm data has already been collected." />;
}
