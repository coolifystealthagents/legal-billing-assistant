import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const allSource = [
  ...walk('app'),
  ...walk('components'),
  ...walk('lib'),
].filter((file) => /\.(?:ts|tsx|json)$/.test(file)).map(read).join('\n');

function walk(relative) {
  const absolute = path.join(root, relative);
  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const child = path.join(relative, entry.name);
    return entry.isDirectory() ? walk(child) : [child];
  });
}

function mustContain(file, fragments) {
  const value = read(file);
  fragments.forEach((fragment) => assert.ok(value.includes(fragment), `${file} must contain ${fragment}`));
}

mustContain('components/SiteChrome.tsx', [
  "{ label: 'Home', href: '/' }",
  "{ label: 'Services', href: '/services' }",
  "{ label: 'Contact Us', href: '/contact-us' }",
  'Powered by StealthAgents',
  'aria-expanded',
  'aria-controls',
]);
assert.ok(!allSource.includes('TimedLeadModal'), 'promotional timed modal must be removed');

const provenance = JSON.parse(read('app/review-provenance.json'));
assert.equal(provenance.source, 'https://stealthagents.com/');
assert.ok(provenance.records.length >= 10, 'at least ten approved review records required');
assert.equal(new Set(provenance.records.map((item) => `${item.name}|${item.body}`)).size, provenance.records.length, 'reviews must be unique');
mustContain('components/ReviewRail.tsx', ['prefers-reduced-motion: reduce', 'requestAnimationFrame', 'appendChild(first)', 'onMouseEnter', 'onFocus', 'tabIndex={0}']);
assert.ok(!read('components/ReviewRail.tsx').includes('review-copy'), 'review records must render once and recycle without cloned cards');

mustContain('app/contact-us/page.tsx', [
  'StealthAgents reviews',
  'Official team, Bacolod',
  '/brand/stealth-agents-team.webp',
  '/brand/stealth-agents-logo-black.png',
  '<LeadForm',
]);
assert.ok(!read('app/contact-us/page.tsx').includes('go.oncehub.com'), 'OnceHub must not appear on contact page');

mustContain('components/LeadForm.tsx', [
  "fetch('/api/submit-lead'",
  "window.acrTracker?.trackLead",
  "router.push('/thank-you')",
  'name="first_name"', 'name="last_name"', 'name="email"', 'name="phone_country"',
  'name="phone"', 'name="company"', 'name="company_website"', 'name="company_size"',
  'name="positions_to_fill"', 'name="referral_source"', 'name="message"', 'name="website_url"',
]);
mustContain('app/thank-you/page.tsx', ['https://go.oncehub.com/StealthAgentsTeam']);
mustContain('app/thanks-whats-next/page.tsx', ['You are booked']);

mustContain('app/services/[slug]/page.tsx', [
  'Who this support is for', 'Inputs the workflow needs', 'What the assistant prepares',
  'What your firm approves', 'Quality controls', 'Common starting scenarios',
  'Frequently asked questions', 'Related legal billing services',
]);

for (const file of ['components/ArticleShell.tsx', 'components/ArticleSidebar.tsx']) {
  assert.ok(fs.existsSync(path.join(root, file)), `${file} must exist`);
}
mustContain('components/ArticleSidebar.tsx', ['IntersectionObserver', 'aria-current', 'article-sidebar', 'article-toc-mobile']);

const bannedCommercial = /(?:className=["'`]\w*(?:number|step-marker|alpha)|>0[1-9]<|>[A-D]<)/;
assert.ok(!bannedCommercial.test(allSource), 'decorative numeric or alphabet markers must not remain');

for (const character of ['—', '–']) assert.ok(!allSource.includes(character), `visible punctuation must not include ${character}`);
assert.ok(!/(?:[A-Za-z]\s)--(?:\s|[A-Za-z])/.test(allSource), 'visible prose must not contain double-hyphen punctuation');

mustContain('next.config.mjs', [
  "type: 'host'", 'www.legalbillingassistant.com',
  "key: 'x-forwarded-proto'", "value: 'http'",
  'https://legalbillingassistant.com/:path*',
]);

mustContain('app/layout.tsx', ["alternates: { canonical: './' }", 'icon: \'/logo.svg\'', 'href="#main-content"']);
assert.ok(!read('app/layout.tsx').includes('id="main-content"'), 'root layout must not duplicate the page main-content target');
const mainTargetFiles = [
  'components/Marketing.tsx', 'components/ArticleShell.tsx',
  'app/about/page.tsx', 'app/blog/page.tsx', 'app/contact-us/page.tsx', 'app/not-found.tsx',
  'app/privacy/page.tsx', 'app/research/page.tsx', 'app/services/page.tsx',
  'app/services/[slug]/page.tsx', 'app/terms/page.tsx', 'app/thank-you/page.tsx',
  'app/thanks-whats-next/page.tsx',
];
mainTargetFiles.forEach((file) => mustContain(file, ['<main id="main-content" tabIndex={-1}']));
mustContain('app/globals.css', ['position:sticky', ':focus-visible', '@media(prefers-reduced-motion:reduce)', 'scroll-margin-top']);
mustContain('next.config.mjs', ['Strict-Transport-Security', 'Content-Security-Policy', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']);

console.log(`V3 source contracts passed: ${provenance.records.length} unique approved reviews and protected conversion contracts verified.`);
