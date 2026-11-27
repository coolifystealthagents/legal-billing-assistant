'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { site } from '@/lib/site';

const primaryNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact-us' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const focusable = () => Array.from(panelRef.current?.querySelectorAll<HTMLElement>('a,button') || []);
    focusable()[0]?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key === 'Tab') {
        const items = focusable();
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.body.classList.add('menu-open');
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('menu-open');
      document.removeEventListener('keydown', onKey);
      if (previous && previous !== document.body) previous.focus();
    };
  }, [open]);

  return <header data-site-header="sticky" className="site-header">
    <Link className="brand" href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
      <Image src="/logo.svg" alt="" width={38} height={38} priority />
      <span>{site.name}</span>
    </Link>
    <p className="parent-attribution"><strong>Powered by StealthAgents</strong></p>
    <button ref={buttonRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-menu" onClick={() => setOpen((value) => !value)}>
      <span>{open ? 'Close' : 'Menu'}</span><span aria-hidden="true" className="menu-lines" />
    </button>
    <nav ref={panelRef} id="primary-menu" className={open ? 'primary-nav open' : 'primary-nav'} aria-label="Primary navigation">
      {primaryNav.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
    </nav>
  </header>;
}

export function Footer() {
  return <footer data-site-footer="true" className="site-footer">
    <div className="footer-brand">
      <Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link>
      <p>Review-ready legal billing support for law firms that keep judgment and approval with accountable owners.</p>
    </div>
    <nav data-footer-menu="true" className="footer-primary" aria-label="Footer primary navigation">{primaryNav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    <nav className="footer-secondary" aria-label="Resources and legal"><Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/research">Research</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></nav>
    <div className="footer-parent"><Image src="/brand/stealth-agents-logo-black.png" alt="StealthAgents" width={149} height={50} /><p><strong>Powered by StealthAgents</strong></p></div>
    <section className="site-parent-company" aria-label="Powered by StealthAgents"><a className="site-parent-logo" href="https://stealthagents.com/" aria-label="Visit StealthAgents"><img src="/stealthagents-parent-logo.png" alt="StealthAgents" width="158" height="53" loading="lazy" /></a><div><h2>Powered by StealthAgents</h2><p>StealthAgents recruits and supports the remote professionals behind our services, from matching and onboarding to ongoing team support.</p><a className="site-parent-link" href="https://stealthagents.com/">Explore StealthAgents ↗</a></div></section><p className="copyright">© {new Date().getFullYear()} {site.name}. Administrative support does not replace legal, billing, finance, or client authority.</p>
  </footer>;
}
