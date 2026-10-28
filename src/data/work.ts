/**
 * Portfolio work: use-case led, not a generic "sites I built" dump.
 * Featured strip = high-signal proof. Support = depth / later case studies.
 */

export type WorkKind =
  | 'campaign'
  | 'investor'
  | 'corporate'
  | 'product'
  | 'hospitality'
  | 'commerce'

export type WorkStatus = 'live' | 'staged' | 'archive'

/** Display categories for Work page filters */
export type WorkCategory =
  | 'campaigns'
  | 'corporate-ir'
  | 'commerce-product'
  | 'studios-hospitality'

export const workCategories: { id: WorkCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'campaigns', label: 'Campaigns' },
  { id: 'corporate-ir', label: 'Corporate & IR' },
  { id: 'commerce-product', label: 'Commerce & product' },
  { id: 'studios-hospitality', label: 'Studios & hospitality' },
]

export interface WorkCaseDetail {
  goal: string
  context: string
  approach: string[]
  shipped: string[]
  outcome: string
}

export interface WorkProject {
  slug: string
  name: string
  client: string
  url?: string
  stagedUrl?: string
  kind: WorkKind
  /** Short card line */
  angle: string
  /** Longer opener for case page */
  useCase: string
  summary: string
  caseStudy?: WorkCaseDetail
  featured: boolean
  status: WorkStatus
  category: WorkCategory
  year?: string
  tags: string[]
  /** Homepage capture under /public/work */
  preview?: string
}

/** IPO → Transgrid → Studio Hive → IR → BukiHQ → Refinery → Cement */
export const featuredSlugs = [
  'dangote-ipo',
  'transgrid-enerco',
  'studio-hive',
  'dangote-investors-hub',
  'bukihq',
  'dangote-refinery',
  'dangote-cement',
] as const

export const projects: WorkProject[] = [
  {
    slug: 'dangote-ipo',
    name: 'The IPO for the People',
    client: 'Dangote Petroleum Refinery & Petrochemicals',
    url: 'https://ipo.dangote.com',
    preview: '/work/dangote-ipo.png',
    kind: 'campaign',
    angle: 'National-scale offer infrastructure.',
    useCase:
      'Public-offer campaign site: educate, route, and convert at national scale, then carry investors through close and allotment.',
    summary:
      'Full investor-information webapp under live offer pressure: education, prospectus, channels, anti-fraud, partner landings, and post-close next-steps.',
    caseStudy: {
      goal: 'Give every eligible investor a clear, trusted path from curiosity to an approved subscription channel, then through close and allotment, at the scale of a landmark African energy IPO.',
      context:
        'The offer demanded a surface that could teach, reassure, and route millions of visitors while staying aligned with issuing houses, regulators, and a constantly moving partner channel list. After close, the same surface had to shift into allotment and next-steps without losing trust. This was campaign infrastructure, not a static brochure.',
      approach: [
        'Lead with offer clarity: price, minimums, dates, and what “subscribe” actually means.',
        'Build channel systems for banks, apps, and international routes, with featured strips that could change without a full redesign.',
        'Treat fraud and safety as first-class UX: warnings, approved-channel discipline, and support paths.',
        'Ship partner landing kits and digital ops (WhatsApp, /digital, noindex rules) so the campaign could run day to day.',
        'Flip the hero and CTAs for post-close: thank-you narrative, allotment progress, prospectus, and share/refund support.',
      ],
      shipped: [
        'Live campaign site at ipo.dangote.com',
        'Prospectus and education flows',
        'Subscription channel architecture (domestic + international)',
        'Anti-fraud messaging and investor support surfaces',
        'Partner landing kit and digital ops tooling',
        'Post-close / allotment state with next-steps and support chat',
      ],
      outcome:
        'A production campaign platform that held under national attention through the offer window and into allotment, with continuous channel and messaging updates under regulatory scrutiny.',
    },
    featured: true,
    status: 'live',
    year: '2025-26',
    category: 'campaigns',
    tags: ['Campaign', 'Investor education', 'Channels', 'Azure'],
  },
  {
    slug: 'transgrid-enerco',
    name: 'Transgrid Enerco',
    client: 'Transgrid Enerco',
    url: 'https://transgridenerco.com',
    preview: '/work/transgrid-enerco.png',
    kind: 'corporate',
    angle: 'Credibility from day one.',
    useCase: 'Fresh digital launch as operations began: a clear signal of who they are and why to trust them now.',
    summary:
      'Greenfield corporate site for an energy operator starting operations: brand and web shipped together.',
    caseStudy: {
      goal: 'Launch a credible digital home the moment operations started, so partners and stakeholders met a serious operator, not a placeholder.',
      context:
        'New energy businesses often go live with thin web presence. Transgrid needed presence, clarity, and a downloadable profile path that matched the ambition of infrastructure work.',
      approach: [
        'Pair brand geometry and messaging with a tight information architecture.',
        'Lead with purpose and value chain, not generic corporate filler.',
        'Keep navigation short: about, newsroom, contact, profile download.',
        'Design for desktop-first corporate browsing with strong hero presence.',
      ],
      shipped: [
        'Live corporate site at transgridenerco.com',
        'Hero narrative and company positioning',
        'About / newsroom / contact structure',
        'Profile download CTA',
      ],
      outcome:
        'A finished launch surface that introduced the operator with confidence from day one.',
    },
    featured: true,
    status: 'live',
    category: 'corporate-ir',
    tags: ['Launch', 'Energy', 'Corporate'],
  },
  {
    slug: 'studio-hive',
    name: 'Studio Hive',
    client: 'Studio Hive Ltd',
    url: 'https://studiohiveltd.com',
    preview: '/work/studio-hive.png',
    kind: 'commerce',
    angle: 'Rental commerce with presence.',
    useCase: 'Cinematic production-gear rental: browse, quote, pay, and operate as a real store.',
    summary:
      'Full rental commerce experience: equipment locker, availability, checkout, and ops dashboard.',
    caseStudy: {
      goal: 'Turn a Lagos production-gear rental business into a modern product experience: stock, availability, quotes, and checkout that feel as sharp as the gear.',
      context:
        'Rental businesses often hide behind WhatsApp and PDFs. Studio Hive needed a cinematic brand presence with working commerce underneath, including ops tooling for real fulfilment.',
      approach: [
        'Lead with atmosphere and trust (“gear that shows up”), then drive into equipment and quote flows.',
        'Build catalogue and availability as product surfaces, not static lists.',
        'Wire checkout and submissions so requests become operational data.',
        'Add a dashboard path for products, calendar, and order handling.',
      ],
      shipped: [
        'Live store at studiohiveltd.com',
        'Equipment browsing and product detail',
        'Quote and checkout flows',
        'Availability-aware rental experience',
        'Ops dashboard foundations',
      ],
      outcome:
        'A working rental commerce site with presence strong enough to sell, and systems strong enough to run.',
    },
    featured: true,
    status: 'live',
    year: '2026',
    category: 'commerce-product',
    tags: ['Commerce', 'Rental', 'Product'],
  },
  {
    slug: 'dangote-investors-hub',
    name: 'Dangote Investors Hub',
    client: 'Dangote Group',
    url: 'https://investors.dangote.com',
    preview: '/work/dangote-investors-hub.png',
    kind: 'investor',
    angle: 'IR Nest API. One source for every BU.',
    useCase:
      'Group IR hub plus a Nest-backed API and embed widgets that feed investor pages across standalone BU sites.',
    summary:
      'Investor relations platform: the Hub front end, Nest API as SSOT, and embeds that power BU investor pages from one admin workflow.',
    caseStudy: {
      goal: 'Centralise investor content so Group and BU pages stay accurate from one system: documents, updates, and figures published once, consumed everywhere.',
      context:
        'Cement, NASCON, and other BUs each have their own sites. Investor docs, updates, and figures still need to stay consistent. The Hub and Nest API became the single source of truth; BU investor pages embed that content instead of maintaining parallel stacks.',
      approach: [
        'Ship investors.dangote.com as the primary IR experience.',
        'Run investor content through an IR Nest API: documents, updates, figures, and related IR data as SSOT.',
        'Build embeddable widgets so BU standalone investor pages fetch live from that API.',
        'Give admins login to publish and update once; embeds refresh across the Hub and BU surfaces.',
      ],
      shipped: [
        'Live IR hub at investors.dangote.com',
        'IR Nest API (SSOT for investor content)',
        'Embeddable widgets for BU investor pages',
        'Admin login for ongoing updates',
      ],
      outcome:
        'BU investor pages do not maintain a parallel content stack. They pull documents, updates, and figures from the Nest API embeds, kept in sync from one admin workflow.',
    },
    featured: true,
    status: 'live',
    category: 'corporate-ir',
    tags: ['IR', 'Nest API', 'SSOT', 'Embed', 'Admin'],
  },
  {
    slug: 'bukihq',
    name: 'BukiHQ',
    client: 'BukiHQ Dotcom',
    url: 'https://bukihq.com',
    preview: '/work/bukihq.png',
    kind: 'corporate',
    angle: 'Many engines. One canopy.',
    useCase:
      'Group repositioning: ESC, BukiHQ Media, Mulberry Vista, PlanHouse, Ilé Mókirá, and Incubator under one holding frame.',
    summary:
      'Rebuild of bukihq.com as a group holding company: strategy, ownership, and independent engines with a shared canopy.',
    caseStudy: {
      goal: 'Reposition BukiHQ Dotcom as a group holding company that builds, owns, and develops businesses, with each engine clear and independent.',
      context:
        'The old story read like a single agency. The new site had to express a holding canopy: governance and IP at the centre, specialised engines underneath, Nigeria-first and globally fluent.',
      approach: [
        'Lead with the holding thesis: Build. Own. Develop.',
        'Map engines as distinct commercial purposes under one strategic canopy.',
        'Use editorial group aesthetics: calm typography, clear hierarchy, invitation to converse.',
        'Keep the frame coherent so Media, ESC, hospitality, and incubator brands can hang off it.',
      ],
      shipped: [
        'Live group site at bukihq.com',
        'Holding narrative and engine structure',
        'Build / Own / Develop positioning',
        'Engine showcase for Group companies',
      ],
      outcome:
        'A coherent group digital home that presents BukiHQ as an owner-operator of businesses, not a single-service shop.',
    },
    featured: true,
    status: 'live',
    category: 'corporate-ir',
    tags: ['Group', 'Reposition', 'Holding'],
  },
  {
    slug: 'dangote-refinery',
    name: 'Dangote Refinery',
    client: 'Dangote Petroleum Refinery',
    url: 'https://refinery.dangote.com',
    preview: '/work/dangote-refinery.png',
    kind: 'corporate',
    angle: 'Industrial scale, made clear.',
    useCase: 'Digital home for Africa’s largest refinery: BU presence in the run-up to IPO.',
    summary:
      'Business-unit site for the Refinery: positioning the asset for stakeholders ahead of and alongside the public offer.',
    caseStudy: {
      goal: 'Give the Refinery a digital home worthy of the asset: operations, story, and market readiness in one BU presence.',
      context:
        'Africa’s largest refinery needed more than a brochure page. The site had to make industrial scale legible for stakeholders while sitting next to Group and IPO narratives.',
      approach: [
        'Anchor the experience in the asset and its significance.',
        'Keep BU messaging aligned with Group and offer communications without duplicating the IPO campaign.',
        'Prioritise clarity over spectacle: stakeholders should leave knowing what the Refinery is and why it matters.',
      ],
      shipped: [
        'Live BU site at refinery.dangote.com',
        'Refinery narrative and stakeholder-facing structure',
        'Alignment with broader Dangote digital system',
      ],
      outcome:
        'A standing digital home for the Refinery that supports stakeholder understanding before and during the IPO period.',
    },
    featured: true,
    status: 'live',
    category: 'corporate-ir',
    tags: ['BU site', 'Energy', 'IPO prep'],
  },
  {
    slug: 'dangote-cement',
    name: 'Dangote Cement',
    client: 'Dangote Cement',
    stagedUrl:
      'https://cement-webapp-e3fhgxbubwfrg0e2.ukwest-01.azurewebsites.net',
    preview: '/work/dangote-cement.png',
    kind: 'corporate',
    angle: 'Built, staged, ready to cut over.',
    useCase:
      'Full BU rebuild with an investors page that fetches documents, updates, and figures from the IR Hub Nest API embeds.',
    summary:
      'Complete Cement web rebuild on Azure staging, including an investors surface powered by the Group IR Hub system.',
    caseStudy: {
      goal: 'Rebuild the Cement digital presence end to end, including an investors page that stays in sync with Group IR without a duplicate content stack.',
      context:
        'Enterprise rebuilds fail at the last mile: beautiful staging that never goes live. Cement also needed investor documents, updates, and figures on its own site. Those pull from the IR Hub Nest API via embeddable widgets, not a parallel CMS.',
      approach: [
        'Rebuild the BU site for modern corporate standards.',
        'Wire the Cement investors page to IR Hub embeds so docs, updates, and figures come from the Nest API SSOT.',
        'Deploy into the client Azure environment early; leave DNS as the final client-owned flip.',
      ],
      shipped: [
        'Full Cement site rebuild',
        'Investors page fed by IR Hub Nest API embeds',
        'Azure staging deployment',
        'Cutover-ready environment (DNS pending)',
      ],
      outcome:
        'Staged and waiting on DNS: BU site ready, with investor content staying consistent through the IR Hub system.',
    },
    featured: true,
    status: 'staged',
    category: 'corporate-ir',
    tags: ['Rebuild', 'Azure', 'Cutover', 'IR embeds'],
  },

  // Support / later depth (not lead strip)
  {
    slug: 'dangote-group',
    name: 'Dangote Group',
    client: 'Dangote Group',
    url: 'https://www.dangote.com',
    preview: '/work/dangote-group.png',
    kind: 'corporate',
    angle: 'The mothership, rebuilt.',
    useCase: 'Group flagship rebuild: replace a rigid legacy layout with a modern corporate narrative system.',
    summary:
      'Full rebuild of dangote.com from an outdated, rigid structure into a contemporary Group presence.',
    caseStudy: {
      goal: 'Rebuild the Group mothership so dangote.com could carry a modern corporate narrative and give every business unit a coherent place to hang off.',
      context:
        'The legacy Group site felt rigid and dated. Stakeholders needed a clearer story of who Dangote is across industries, without the weight of an old layout fighting the brand.',
      approach: [
        'Replace the rigid legacy structure with a contemporary Group information architecture.',
        'Lead with industrial and African scale while keeping navigation scannable for diverse audiences.',
        'Design a platform frame that BU sites and campaigns can sit beside without colliding.',
      ],
      shipped: [
        'Live Group site at dangote.com',
        'Modern corporate narrative system',
        'Group-level structure for BU adjacency',
      ],
      outcome:
        'A rebuilt mothership presence that reads as current Group scale, not a legacy brochure.',
    },
    featured: false,
    status: 'live',
    category: 'corporate-ir',
    tags: ['Rebuild', 'Corporate', 'Narrative'],
  },
  {
    slug: 'nascon',
    name: 'NASCON',
    client: 'NASCON Allied Industries',
    stagedUrl:
      'https://nasconnew-webapp-dbc8crbqd9hbgbcn.ukwest-01.azurewebsites.net',
    preview: '/work/nascon.png',
    kind: 'corporate',
    angle: 'Same cutover discipline as Cement.',
    useCase:
      'BU rebuild staged on Azure, with investors content fetched from the IR Hub Nest API embeds.',
    summary:
      'Full NASCON site rebuild on Azure staging, including IR surfaces powered by the Group Investors Hub system.',
    caseStudy: {
      goal: 'Deliver a full NASCON rebuild with the same cutover discipline as Cement, and an investors experience that pulls from the IR Hub instead of a duplicate document store.',
      context:
        'Like Cement, NASCON is a standalone BU site that still needs investor documents, updates, and figures. Those come from the IR Hub Nest API via embeddable widgets, so Group IR stays the single source of truth.',
      approach: [
        'Rebuild the BU site for contemporary corporate standards.',
        'Connect the NASCON investors page to IR Hub embeds for docs, updates, and figures.',
        'Deploy early to Azure staging; leave DNS as the final client-owned flip.',
      ],
      shipped: [
        'Full NASCON site rebuild',
        'Investors page fed by IR Hub Nest API embeds',
        'Azure staging deployment',
        'Cutover-ready environment (DNS pending)',
      ],
      outcome:
        'Staged and waiting on DNS: rebuild complete, investor content kept in sync through the IR Hub system.',
    },
    featured: false,
    status: 'staged',
    category: 'corporate-ir',
    tags: ['Rebuild', 'Azure', 'Cutover', 'IR embeds'],
  },
  {
    slug: 'otkings-electrical',
    name: 'Otkings Electrical Hub',
    client: 'Otkings Electrical Hub',
    url: 'https://www.otkingselectricalhub.com',
    preview: '/work/otkings-electrical.png',
    kind: 'commerce',
    angle: 'Commerce that actually pays.',
    useCase: 'Full-stack electrical retail: catalogue through payment, live.',
    summary: 'Functional e-commerce for electrical products with live payment flows.',
    caseStudy: {
      goal: 'Ship a working electrical retail store: browse, cart, and pay for real, not a catalogue mockup.',
      context:
        'Trade and retail electrical buyers expect stock clarity and checkout that completes. The Hub needed full commerce, including live payment, under a clear brand presence.',
      approach: [
        'Build catalogue and product detail as the primary shopping path.',
        'Wire cart through to live payment so orders are real.',
        'Keep the storefront practical and scannable for buyers who know what they need.',
      ],
      shipped: [
        'Live store at otkingselectricalhub.com',
        'Product catalogue and detail flows',
        'Working payment-enabled checkout',
      ],
      outcome:
        'A live commerce site that takes money and fulfils electrical retail demand.',
    },
    featured: false,
    status: 'live',
    category: 'commerce-product',
    tags: ['Commerce', 'Payments'],
  },
  {
    slug: 'polypropylene',
    name: 'Polypropylene',
    client: 'Dangote Refinery',
    url: 'https://polypropylene.dangote.com',
    preview: '/work/polypropylene.png',
    kind: 'product',
    angle: 'Product clarity under an industrial parent.',
    useCase: 'Petrochemical product micro-site under the Refinery umbrella.',
    summary: 'Focused product microsite for polypropylene within the Refinery digital system.',
    caseStudy: {
      goal: 'Give polypropylene a focused product home under the Refinery umbrella: clear, technical, and aligned with the parent industrial brand.',
      context:
        'Petrochemical products get lost inside heavy corporate sites. A micro-site lets buyers and stakeholders understand the product without wading through the full Refinery narrative.',
      approach: [
        'Scope tightly around the product, not the whole Refinery.',
        'Keep visual language consistent with Dangote industrial systems.',
        'Prioritise clarity of what the product is and why it matters.',
      ],
      shipped: [
        'Live micro-site at polypropylene.dangote.com',
        'Product-focused information architecture',
        'Alignment with Refinery / Group digital system',
      ],
      outcome:
        'A sharp product surface that stands alone while still belonging to the Refinery family.',
    },
    featured: false,
    status: 'live',
    category: 'commerce-product',
    tags: ['Microsite', 'Product', 'Petrochemical'],
  },
  {
    slug: 'nemsia-studios',
    name: 'Nemsia Studios',
    client: 'Nemsia Studios',
    url: 'https://nemsiastudios.com',
    preview: '/work/nemsia-studios.png',
    kind: 'corporate',
    angle: 'African stories, global screen.',
    useCase:
      'Digital home for Nemsia Studios: the producers behind Breath of Life and a growing film catalogue.',
    summary:
      'Studio presence for Nemsia: films, storytelling mission, and a home for titles like Breath of Life.',
    caseStudy: {
      goal: 'Give Nemsia Studios a digital home that presents the slate, the mission, and the makers behind films like Breath of Life.',
      context:
        'A film studio needs more than a social feed. The site had to carry purpose-led African storytelling and make the catalogue feel real for collaborators and audiences.',
      approach: [
        'Lead with mission: storytelling with purpose and passion.',
        'Surface titles and roles so the studio reads as a working production house.',
        'Keep the aesthetic cinematic and restrained so the work stays centre stage.',
      ],
      shipped: [
        'Live studio site at nemsiastudios.com',
        'Studio narrative and catalogue presence',
        'Film and production role framing',
      ],
      outcome:
        'A clear digital home for Nemsia Studios and its slate, including Breath of Life.',
    },
    featured: false,
    status: 'live',
    category: 'studios-hospitality',
    tags: ['Studio', 'Film', 'Brand'],
  },
  {
    slug: 'bukihq-media',
    name: 'BukiHQ Media',
    client: 'BukiHQ Media',
    url: 'https://media.bukihq.com',
    preview: '/work/bukihq-media.png',
    kind: 'corporate',
    angle: 'The advisory engine.',
    useCase: 'Media arm rebuild: creative and institutional communications presence.',
    summary: 'Rebuild of the media.bukihq.com presence as the advisory engine under BukiHQ Dotcom.',
    caseStudy: {
      goal: 'Give BukiHQ Media a distinct digital presence as the Group’s advisory engine: institutional communications with creative credibility.',
      context:
        'Under the holding canopy, Media needed its own face: not a clone of Dotcom, and not a generic agency template. The site had to signal advisory seriousness.',
      approach: [
        'Position Media as a specialised engine within the BukiHQ Group.',
        'Keep brand language aligned with the holding company while staying agency-sharp.',
        'Focus the story on communications advisory, not a vague services dump.',
      ],
      shipped: [
        'Media presence at media.bukihq.com',
        'Advisory-engine positioning',
        'Group-aligned brand system',
      ],
      outcome:
        'A clear Media arm surface that sits correctly under the BukiHQ canopy.',
    },
    featured: false,
    status: 'archive',
    category: 'studios-hospitality',
    tags: ['Media', 'Agency'],
  },
  {
    slug: 'ile-mokira',
    name: 'Ilé Mókirá',
    client: 'Ilé Mókirá',
    url: 'https://ilemokira.com',
    preview: '/work/ile-mokira.png',
    kind: 'hospitality',
    angle: 'Rooms as colour-led stays.',
    useCase: 'Boutique hotel: rooms as colour-led experiences (yellow, red, and more).',
    summary: 'Boutique hotel site organised around distinctly coloured rooms and stay experience.',
    caseStudy: {
      goal: 'Express Ilé Mókirá as a boutique stay where each room is a colour-led experience, not a generic hotel grid.',
      context:
        'Boutique hospitality sells atmosphere. The site had to make yellow, red, and sibling rooms feel distinct and bookable in the imagination before a guest arrives.',
      approach: [
        'Organise the experience around rooms and colour, not bland amenity lists.',
        'Lead with place and mood: Lagos boutique residence energy.',
        'Keep booking and enquiry paths short once desire is set.',
      ],
      shipped: [
        'Live hospitality site at ilemokira.com',
        'Colour-led room storytelling',
        'Boutique stay narrative and enquiry paths',
      ],
      outcome:
        'A hospitality presence that feels like the property: distinct rooms, clear atmosphere.',
    },
    featured: false,
    status: 'archive',
    category: 'studios-hospitality',
    tags: ['Hospitality', 'Brand'],
  },
  {
    slug: 'planb-insurance',
    name: 'PlanB Insurance',
    client: 'PlanB / Leadway',
    url: 'http://planbinsurance.org',
    preview: '/work/planb-insurance.png',
    kind: 'product',
    angle: 'Insurance for a specific audience.',
    useCase: 'Women-focused insurance under Leadway: clarity and trust for a specific audience.',
    summary: 'Audience-led insurance presence for women, under the Leadway umbrella.',
    caseStudy: {
      goal: 'Present PlanB as insurance designed for women: clear, trustworthy, and distinct while still living under the Leadway umbrella.',
      context:
        'Audience-led products fail when they sound like generic insurer copy. PlanB needed a voice and structure that spoke to women without losing institutional trust.',
      approach: [
        'Lead with audience and clarity, not dense policy jargon.',
        'Keep parent-insurer credibility visible without drowning the PlanB brand.',
        'Make next steps obvious for someone evaluating cover for the first time.',
      ],
      shipped: [
        'Live PlanB presence at planbinsurance.org',
        'Audience-led product storytelling',
        'Leadway-aligned trust framing',
      ],
      outcome:
        'A focused insurance surface that reads as PlanB first, backed by Leadway.',
    },
    featured: false,
    status: 'live',
    category: 'commerce-product',
    tags: ['Insurance', 'Audience'],
  },
]

export function getFeatured(): WorkProject[] {
  return featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is WorkProject => Boolean(p))
}

export function getSupport(): WorkProject[] {
  return projects.filter((p) => !p.featured)
}

export function getAllProjects(): WorkProject[] {
  const featured = getFeatured()
  const rest = projects.filter((p) => !featuredSlugs.includes(p.slug as (typeof featuredSlugs)[number]))
  return [...featured, ...rest]
}

export function getByCategory(category: WorkCategory | 'all'): WorkProject[] {
  const all = getAllProjects()
  if (category === 'all') return all
  return all.filter((p) => p.category === category)
}

export function getBySlug(slug: string): WorkProject | undefined {
  return projects.find((p) => p.slug === slug)
}

/** Next project in roster order (featured first, then support). Wraps to start. */
export function getNextProject(slug: string): WorkProject | undefined {
  const roster = getAllProjects()
  const i = roster.findIndex((p) => p.slug === slug)
  if (i < 0 || roster.length === 0) return undefined
  return roster[(i + 1) % roster.length]
}
