'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export type TocItem = { id: string; label: string };

export function ArticleSidebar({ items, meta, relatedHref, relatedLabel }: { items: TocItem[]; meta: string[]; relatedHref: string; relatedLabel: string }) {
  const [active, setActive] = useState(items[0]?.id || '');
  useEffect(() => {
    const nodes = items.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]?.target.id) setActive(visible[0].target.id);
    }, { rootMargin: '-112px 0px -68% 0px', threshold: [0, 0.2, 0.8] });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  const toc = <nav className="article-toc" aria-label="On this page">
    <h2>On this page</h2>
    {items.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>)}
  </nav>;

  return <>
    <details className="article-toc-mobile"><summary>Explore this article</summary>{toc}</details>
    <aside className="article-sidebar" aria-label="Article guide">
      {toc}
      <section className="sidebar-meta"><h2>Article details</h2><ul>{meta.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="sidebar-support"><h2>Apply the guidance</h2><p>Use the evidence to define a support boundary. Qualified firm owners retain interpretation, approval, and professional judgment.</p><Link href={relatedHref}>{relatedLabel}</Link></section>
    </aside>
  </>;
}
