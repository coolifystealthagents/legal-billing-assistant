import type { Metadata } from 'next';
import Script from 'next/script';
import { Header, Footer } from '@/components/SiteChrome';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: `${site.name} | Review-ready legal billing support`, template: `%s | ${site.name}` },
  description: site.heroBody,
  icons: { icon: '/logo.svg', shortcut: '/logo.svg', apple: '/logo.svg' },
  openGraph: { type: 'website', siteName: site.name, title: site.name, description: site.heroBody, images: [{ url: '/hero.png', width: 1600, height: 1200, alt: site.heroAlt }] },
  alternates: { canonical: './' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-design={site.design}><body style={{ '--primary': site.primary, '--secondary': site.secondary, '--accent': site.accent, '--canvas': site.canvas, '--ink': site.ink, '--display': site.displayFont, '--body': site.bodyFont } as React.CSSProperties}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <div>{children}</div>
    <Footer />
    <Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'${site.siteId}',endpoint:'/ingest/track',debug:false};`}</Script>
    <Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" />
  </body></html>;
}
