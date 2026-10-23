import Image from 'next/image';
import Link from 'next/link';
import TocSync from './TocSync';
import { ArticleSidebar, type TocItem } from './ArticleSidebar';
import { DocketArtwork } from './DocketArtwork';
import { site } from '@/lib/site';

type Section = { heading: string; paragraphs: readonly string[] };
type Source = { label: string; url: string };
type Related = { title: string; href: string; summary: string };

const id = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function ArticleShell({ kind, title, summary, category, date, readTime, thumbnail, sections, sources = [], related = [], notice }: {
  kind: 'Blog' | 'Research'; title: string; summary: string; category: string; date: string; readTime?: string;
  thumbnail?: string; sections: readonly Section[]; sources?: readonly Source[]; related?: Related[]; notice?: string;
}) {
  const items: TocItem[] = sections.map((section) => ({ id: id(section.heading), label: section.heading }));
  if (sources.length) items.push({ id: 'authoritative-sources', label: 'Authoritative sources' });
  items.push({ id: 'next-step', label: 'Put the guidance to work' });
  const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));
  const meta = [category, `Published ${formattedDate}`, readTime || `${kind} brief`, `Publisher: ${site.name}`];

  return <main id="main-content" tabIndex={-1} className="article-page"><TocSync />
    <header className="article-hero">
      <div className="article-heading"><p className="kicker"><Link href="/">Home</Link> / <Link href={`/${kind.toLowerCase()}`}>{kind}</Link> / {category}</p><h1>{title}</h1><p className="dek">{summary}</p><p className="meta">{site.name} Editorial Team · <time dateTime={date}>{formattedDate}</time>{readTime ? ` · ${readTime}` : ''}</p></div>
      {thumbnail ? <figure className="article-hero-image"><Image src={thumbnail} alt={`Editorial illustration for ${title}`} fill priority sizes="(max-width: 900px) 100vw, 46vw" /></figure> : <DocketArtwork title={title} detail={`${category} evidence, control, and accountable decision path`} variant="editorial" className="article-generated-art" />}
    </header>
    <section className="article-frame">
      <ArticleSidebar items={items} meta={meta} relatedHref="/services" relatedLabel="Review legal billing support roles" />
      <article className="article-prose">
        {notice && <p className="research-finding">{notice}</p>}
        {sections.map((section) => <section key={section.heading} id={id(section.heading)}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
        {sources.length > 0 && <section id="authoritative-sources" className="sources"><h2>Authoritative sources</h2><p>These public references inform the operating questions in this article. They do not replace legal, ethics, privacy, financial, or client-specific advice.</p><ol>{sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>)}</ol></section>}
        <section id="next-step" className="article-next"><h2>Put the guidance to work</h2><p>Choose one recurring billing workflow, identify its authoritative source records, and name the owner who reviews exceptions. We can help turn that boundary into a focused support role.</p><Link className="button primary" href="/contact-us">Discuss your workflow</Link></section>
      </article>
    </section>
    {related.length > 0 && <section className="related-reading"><div><p className="kicker">Related reading</p><h2>Continue the operating system.</h2></div><div className="related-list">{related.map((item) => <Link href={item.href} key={item.href}><h3>{item.title}</h3><p>{item.summary}</p><span>Read next</span></Link>)}</div></section>}
  </main>;
}
