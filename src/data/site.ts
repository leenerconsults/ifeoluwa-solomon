/**
 * Positioning: not "I build websites."
 * Digital product for brands, campaigns, and investor-grade surfaces.
 */
export const site = {
  name: 'Ifeoluwa Solomon',
  shortName: 'Ifeoluwa',
  title: 'Ifeoluwa Solomon | Digital product for brands & markets',
  description:
    'Frontend and product engineer for brands, campaigns, and investor sites. Use-case led work across corporate, IR, commerce, and launch.',
  /** Hero line: brand-first, one job */
  line: 'Digital product for brands, campaigns, and markets.',
  /** Supporting sentence under the line */
  support:
    'I design and ship the surfaces companies need when the stakes are public: IPOs, IR, group rebuilds, and products that run.',
  cta: {
    primary: { label: 'See selected work', href: '/#work' },
    secondary: { label: 'Start a conversation', href: '/contact' },
  },
  availability: 'Open to agencies, retainers, and high-stakes builds.',
  email: 'kiingsolomon@gmail.com',
  /** E.164 without + */
  phone: '2347057171227',
  phoneDisplay: '+234 705 717 1227',
  telHref: 'tel:+2347057171227',
  whatsappHref:
    'https://wa.me/2347057171227?text=' +
    encodeURIComponent('Hi Ifeoluwa, I found your site and would like to talk.'),
  /** Public site URL (Cloudflare Pages) */
  url: 'https://ifeoluwa.pages.dev',
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Approach', href: '/#approach' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  focus: [
    {
      title: 'Campaigns & public offers',
      body: 'Investor education, channel routing, and live ops when the offer is on the clock.',
    },
    {
      title: 'Investor & corporate',
      body: 'IR hubs, group flagships, and BU sites that have to hold under brand and legal scrutiny.',
    },
    {
      title: 'Product & launch',
      body: 'Commerce, rentals, and greenfield operator sites that ship with payments and real workflows.',
    },
  ],
  approach: [
    {
      title: 'Use-case first',
      body: 'Every build answers a job: educate investors, launch an operator, rent gear, cut over a BU. Layout follows the job.',
    },
    {
      title: 'Stakeholder-grade',
      body: 'Campaign, IR, and corporate surfaces that hold up under legal, brand, and ops pressure. Not portfolio fluff.',
    },
    {
      title: 'Ship and hand off',
      body: 'From greenfield launch to Azure staging and DNS cutover. Built to run in their environment, not just look good in mine.',
    },
  ],
} as const
