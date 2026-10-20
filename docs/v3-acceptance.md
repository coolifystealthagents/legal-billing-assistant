     1|# Legal Billing Assistant V3 acceptance ledger
     2|
     3|## Binding
     4|
     5|- Domain: `legalbillingassistant.com`
     6|- Repository: `coolifystealthagents/legal-billing-assistant`
     7|- Baseline branch and SHA: `main` at `9890aed`
     8|- Candidate branch: `hermes/v3-legal-billing-20261020`
     9|- Conversion contract: `/contact-us` lead form posts to `/api/submit-lead`, calls `window.acrTracker.trackLead`, then routes to `/thank-you`; `/thank-you` embeds `https://go.oncehub.com/StealthAgentsTeam`; completed booking routes to `/thanks-whats-next` through OnceHub configuration.
    10|- Tracking contract: site ID `legal-billing-assistant`, centralized tracker, first-party `/ingest/track` proxy.
    11|- Protected lead fields: `first_name`, `last_name`, `email`, `phone_country`, `phone`, `company`, `company_website`, `company_size`, `positions_to_fill`, `referral_source`, `message`, `source`, and honeypot `website_url`.
    12|
    13|## Design read
    14|
    15|Reading this as: a legal billing operations service for law-firm partners and billing leaders, with a precise, composed, evidence-led visual language, leaning toward an editorial docket and review-ledger system rather than a generic staffing card template.
    16|
    17|- DESIGN_VARIANCE: 8
    18|- MOTION_INTENSITY: 2
    19|- VISUAL_DENSITY: 8
    20|- Redesign mode: evolve
    21|- Primary theme: light editorial docket with dark review bands
    22|- Accent: aubergine actions with brass evidence cues
    23|- Shapes: squared docket sheets, rule lines, tabs, and restrained corners
    24|- Type: literary legal-editorial display with compact humanist interface text
    25|- Images: legal billing workflow illustrations, article-specific editorial plates, and official StealthAgents documentary team photography
    26|- Motion: one continuous review rail only, static under reduced motion
    27|- Signature: review docket showing input, preparation, evidence, owner decision, and exception path
    28|
    29|## Pass or fail gates
    30|
    31|- [ ] Sticky header is visible at all scroll positions with exactly Home, Services, and Contact Us primary options and correct destinations.
    32|- [ ] Header and footer visibly say `Powered by StealthAgents` and use the official parent mark.
    33|- [ ] Subsidiary logo is consistent in favicon, header, and footer.
    34|- [ ] No timed, promotional, newsletter, welcome, exit, chat, or lead-capture popup exists.
    35|- [ ] Contact first fold contains title, visible StealthAgents review rail, every approved form field, and submit button at 1366x768 and 1440x800.
    36|- [ ] Contact review data contains at least 10 distinct approved records, visible five-star treatment, explicit StealthAgents identification, automatic horizontal movement, no playback controls, and static reduced-motion behavior.
    37|- [ ] Contact contains official team photograph, explanation, official logo, and exact `Official team, Bacolod` plate immediately after its first-fold conversion composition.
    38|- [ ] Contact does not embed OnceHub.
    39|- [ ] Form success routes to `/thank-you`; `/thank-you` embeds the approved OnceHub URL; `/thanks-whats-next` is a direct branded confirmation route.
    40|- [ ] Homepage, services index, six service detail pages, About, blog index, research index, all blog details, and all research details have relevant prominent hero imagery.
    41|- [ ] Homepage, service index, About, and all six service detail pages provide substantial page-specific content and strong final actions.
    42|- [ ] Every service detail answers audience, problem, inputs, work, outputs, human boundary, controls, start path, FAQ, related services, and next action.
    43|- [ ] Every blog and research detail has a heading-derived TOC, useful populated sidebar, sticky desktop behavior below the header, active-section state, usable anchors, constrained overflow, and mobile in-flow fallback.
    44|- [ ] Every article has opening metadata, topic-specific hero, readable measure, deliberate spacing, related content, and final action.
    45|- [ ] No decorative zero-padded number or alphabet marker remains in commercial layouts.
    46|- [ ] No visible em dash, en dash, or double-hyphen punctuation remains.
    47|- [ ] Every route has one H1, correct canonical metadata, useful title and description, and no duplicate global canonical.
    48|- [ ] Skip link, keyboard-visible focus, mobile menu disclosure, Escape close, focus containment/return, semantic landmarks, and 320px/390px overflow checks pass.
    49|- [ ] Sitemap contains public indexable routes only; robots excludes conversion completion routes; every sitemap and rendered internal link resolves.
    50|- [ ] Images have dimensions, descriptive alternatives, relevant crops, sufficient source resolution, no broken files, and no unintended repetition.
    51|- [ ] HTTP redirects to HTTPS, one hostname is canonical, and required security headers are present after deployment.
    52|- [ ] Typecheck, contract tests, production build, punctuation scan, dependency audit, candidate crawl, browser matrix, independent review, and live certification pass.
    53|
    54|Production deployment is not authorized by this document. Exact candidate approval is required immediately before deployment.
    55|

## Candidate evidence

- Frozen-candidate prerequisite baseline: local and remote `main` remained `9890aed`; candidate branch `hermes/v3-legal-billing-20261020`.
- Locked install: `npm ci` completed with `package-lock.json` unchanged and no unnecessary version changes.
- Automated gates: V3 contracts PASS; TypeScript PASS; 81-page production build PASS; production dependency audit PASS with zero vulnerabilities; rendered punctuation scan PASS; `git diff --check` PASS.
- Semantic candidate crawl: 73 unique sitemap URLs plus two noindex completion routes; 75 routes, 75 internal destinations, and 38 assets passed status, title, description, canonical, H1, alt, link, image, noindex, and punctuation checks.
- Rendered browser matrix: 75 routes at 320x900, 390x844, 1366x768, and 1440x800, totaling 300 cases, with zero functional failures and 24 representative full-page screenshots inspected after local images were loaded and decoded.
- Contact first-fold desktop geometry: at 1366x768 the submit button bottom was 678.98 px, leaving 89.02 px; at 1440x800 it was 697.09 px, leaving 102.91 px.
- Review rail: exactly 10 unique approved records in one DOM set; automatic recycling movement PASS; hover pause PASS; keyboard focus pause PASS; reduced-motion movement delta 0 with a 2,401 px manually scrollable row in a 358 px viewport.
- Redirect artifact proof: HTTP apex, HTTP `www`, and HTTPS `www` each return one 308 to `https://legalbillingassistant.com` while preserving `/probe/path?qa=1&x=two`; public-edge certification remains pending deployment.
- External calls were blocked during browser QA. The blocked requests were 300 ACR tracker loads and four OnceHub embeds. No lead was submitted and no booking was created.
- Final publication authorization was supplied in the continuation request, conditional on all remaining gates, authoritative binding, independent review, one deployment receipt, and live certification.
