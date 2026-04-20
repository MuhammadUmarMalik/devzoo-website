import type { ReactNode } from "react";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  service: string;
  timeline: string;
  industry: string;
  liveUrl?: string;
  sourceUrl?: string;
  sourceName?: string;
  category: string;
  tags: string[];
  cardDescription: string;
  heroImage?: string;
  screenshots?: { src: string; caption: string }[];
  overview: string;
  challenge: string;
  approach: {
    title: string;
    body: string;
    icon: ReactNode;
    screenshot?: string;
    screenshotAlt?: string;
  }[];
  results: {
    value: string;
    label: string;
  }[];
  resultNarrative: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const structureIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M3 5h18v4H3zM6 9v10m12-10v10M3 19h18" />
  </svg>
);

const workflowIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M4 7h9M4 12h16M4 17h11" />
    <path d="m15 5 2 2-2 2M18 10l2 2-2 2M17 15l2 2-2 2" />
  </svg>
);

const growthIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M3 3v18h18" />
    <path d="m7 15 4-4 3 3 5-6" />
  </svg>
);

const audienceIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const brandIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
    <path d="M3 12l9 4.5 9-4.5M3 16.5 12 21l9-4.5" />
  </svg>
);

const automationIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <path d="M10 6.5h4M17.5 10v4M10 17.5h4" />
  </svg>
);

const playIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m10 9 5 3-5 3V9Z" />
  </svg>
);

export const caseStudies: CaseStudy[] = [
  {
    slug: "powerschool",
    title: "PowerSchool Platform Website",
    client: "PowerSchool",
    service: "Web Development",
    timeline: "Enterprise rollout",
    industry: "Education Technology",
    liveUrl: "https://www.powerschool.com",
    sourceUrl: "https://www.powerschool.com",
    sourceName: "PowerSchool",
    category: "Web Development",
    tags: ["Reference", "EdTech", "Enterprise", "Platform"],
    cardDescription:
      "A large-scale education platform site serving district buyers, school leaders, teachers, and families across a global product ecosystem.",
    overview:
      "This temporary reference case study is based on PowerSchool's public product and company materials. The site has to explain a broad K-12 platform clearly across many audiences, from district administrators and IT leaders to teachers and families, without making the product suite feel fragmented.",
    challenge:
      "PowerSchool's public web presence carries a heavy job. It has to position a large portfolio of products, make role-based discovery easier, and build trust around security, compliance, and district-scale operations. The hard part is not just visual design. It is information architecture at enterprise scale.",
    approach: [
      {
        title: "Role-based product paths",
        body: "The strongest part of the platform story is how it guides different buyers into the right workflows. District leaders, curriculum teams, operations staff, and families need different entry points and different proof.",
        icon: structureIcon,
      },
      {
        title: "Connected-platform positioning",
        body: "The site consistently frames separate tools as one connected ecosystem. That reduces product confusion and helps enterprise buyers understand why the suite is more valuable together than as isolated point solutions.",
        icon: workflowIcon,
      },
      {
        title: "Trust-first enterprise messaging",
        body: "Education buyers care about privacy, uptime, interoperability, and reporting. The site surfaces those trust signals as part of the main evaluation flow, not as an afterthought hidden in support pages.",
        icon: growthIcon,
      },
    ],
    results: [
      { value: "60M+", label: "Students served globally" },
      { value: "70K+", label: "School organizations supported" },
      { value: "140+", label: "Countries reached" },
      { value: "15+", label: "Major product areas presented" },
    ],
    resultNarrative:
      "As a reference, PowerSchool shows what a mature enterprise platform site has to do well: segment audiences, organize a broad product portfolio, and keep the story coherent at global scale.",
  },
  {
    slug: "field-engineer",
    title: "Field Engineer Marketplace Experience",
    client: "Field Engineer",
    service: "Web Development",
    timeline: "Marketplace product evolution",
    industry: "B2B Services Marketplace",
    liveUrl: "https://www.fieldengineer.com",
    sourceUrl: "https://www.fieldengineer.com",
    sourceName: "Field Engineer",
    category: "Web Development",
    tags: ["Reference", "Marketplace", "B2B", "Operations"],
    cardDescription:
      "A marketplace experience built around matching companies with field engineers across regions, roles, and technical specialties.",
    overview:
      "This reference case study is based on Field Engineer's public site and product positioning. It is a useful benchmark for marketplace UX because it has to balance two audiences at once: companies posting work and engineers looking for assignments.",
    challenge:
      "Two-sided marketplaces are hard to explain cleanly. Employers care about reliability, hiring speed, and geographic reach. Engineers care about visibility, trust, job flow, and payment clarity. The product has to make both sides feel supported without bloating the experience.",
    approach: [
      {
        title: "Two-sided user journeys",
        body: "The structure separates hiring and talent flows clearly, helping each audience see the right actions first instead of forcing both into the same generic funnel.",
        icon: audienceIcon,
      },
      {
        title: "Operational trust signals",
        body: "Marketplace credibility depends on proof. Public messaging focuses on vetted talent, global coverage, and structured work management rather than vague marketplace language.",
        icon: brandIcon,
      },
      {
        title: "Workflow-led product framing",
        body: "Instead of describing the platform only as a directory, the site talks through posting, matching, coordination, and delivery. That gives the product a more complete business case.",
        icon: workflowIcon,
      },
    ],
    results: [
      { value: "75K+", label: "Engineers on the platform" },
      { value: "200+", label: "Countries served" },
      { value: "24/7", label: "Platform support positioning" },
      { value: "30%", label: "Savings claim on public materials" },
    ],
    resultNarrative:
      "For portfolio reference, Field Engineer is a strong example of a service marketplace that has to sell speed, trust, and operations discipline at the same time.",
  },
  {
    slug: "gymshark-shopify",
    title: "Gymshark Replatforming for Global Scale",
    client: "Gymshark",
    service: "Web Development",
    timeline: "10-month replatforming window",
    industry: "Ecommerce / Fitness Apparel",
    sourceUrl: "https://www.shopify.com/ie/case-studies/gymshark",
    sourceName: "Shopify",
    category: "Web Development",
    tags: ["Reference", "Ecommerce", "Shopify Plus", "Scale"],
    cardDescription:
      "A public Shopify case study on how Gymshark moved away from Adobe Commerce after growth and reliability issues started blocking scale.",
    overview:
      "According to Shopify's published case study, Gymshark needed a commerce setup that could handle major traffic spikes, support international growth, and create a stronger bridge between online and offline brand experience.",
    challenge:
      "The legacy stack took too long to build, became outdated before launch, and then failed during a critical Black Friday moment. The next version had to be faster to manage, more resilient under load, and flexible enough for brand-led commerce experiments.",
    approach: [
      {
        title: "Replatform for reliability",
        body: "The move to Shopify Plus was positioned around uptime and scale first. That is what made the rest of the brand and conversion work possible.",
        icon: structureIcon,
      },
      {
        title: "Connect ecommerce with experiences",
        body: "Shopify's case study highlights how Gymshark linked digital shopping with pop-ups, events, and in-person moments, making the brand feel more immersive across channels.",
        icon: audienceIcon,
      },
      {
        title: "Use checkout customization for loyalty",
        body: "Custom scripts and promotional logic gave the team more room to personalize checkout and create reward-style experiences without long custom development cycles.",
        icon: automationIcon,
      },
    ],
    results: [
      { value: "GBP41M", label: "Sales reported for 2017" },
      { value: "5.1M", label: "Social followers cited by Shopify" },
      { value: "131", label: "Countries in Gymshark's audience" },
      { value: "8 hrs", label: "Black Friday outage on old platform" },
    ],
    resultNarrative:
      "Gymshark is a useful benchmark for ecommerce portfolio content because it ties platform choice directly to business risk, customer experience, and global growth capacity.",
  },
  {
    slug: "jasper-webflow",
    title: "Jasper Homepage Repositioning",
    client: "Jasper",
    service: "Web Development",
    timeline: "2-week homepage rebuild",
    industry: "AI Software",
    sourceUrl: "https://webflow.com/customers/jasper",
    sourceName: "Webflow",
    category: "Web Development",
    tags: ["Reference", "SaaS", "Webflow", "Conversion"],
    cardDescription:
      "A Webflow customer story showing how Jasper turned its website into a sharper enterprise-growth asset while speeding up page production.",
    overview:
      "Webflow's public customer story on Jasper is a strong example of conversion-focused web strategy. The company needed to shift perception from a single AI tool to a more enterprise-ready platform, and the website had to carry that repositioning clearly.",
    challenge:
      "Jasper had rapid internal demand for pages, too many publishing bottlenecks, and a homepage that needed to do more than look good. It had to move upmarket, improve demo requests, and support a more coordinated marketing operation.",
    approach: [
      {
        title: "Rebuild the homepage around the upmarket story",
        body: "The homepage was treated as a positioning asset, not just a design refresh. Messaging, packaging, and calls to action were rebuilt to support higher-intent buyers.",
        icon: brandIcon,
      },
      {
        title: "Improve publishing speed inside the team",
        body: "Webflow's collaboration and app tooling reduced production time and made it easier for more stakeholders to contribute without stepping on each other.",
        icon: workflowIcon,
      },
      {
        title: "Keep testing tied to pipeline outcomes",
        body: "The site changes were measured against demand-generation results like demo requests, SQL growth, and movement toward more upmarket customers.",
        icon: growthIcon,
      },
    ],
    results: [
      { value: "62%", label: "Increase in demo requests" },
      { value: "61%", label: "More sales qualified leads" },
      { value: "17%", label: "More upmarket customers" },
      { value: "3x", label: "Faster page builds" },
    ],
    resultNarrative:
      "Jasper is the clearest web-development reference in this set for how design, messaging, and publishing systems can directly improve pipeline performance.",
  },
  {
    slug: "classpass-content-hub",
    title: "ClassPass Conversion-Led Content Hub",
    client: "ClassPass",
    service: "Digital Marketing",
    timeline: "Marketing stack consolidation",
    industry: "Fitness / Wellness",
    sourceUrl: "https://www.hubspot.com/case-studies/classpass",
    sourceName: "HubSpot",
    category: "Digital Marketing",
    tags: ["Reference", "Lead Gen", "CMS", "Conversion"],
    cardDescription:
      "A HubSpot case study showing how ClassPass gave marketers direct control of web updates and improved lead conversion from the site.",
    overview:
      "HubSpot's ClassPass case study is a strong digital-marketing reference because the gain did not come from more traffic alone. It came from faster content control, better alignment between CMS and marketing operations, and fewer handoffs to engineering.",
    challenge:
      "The B2B marketing team needed to update partner counts, messaging, and offer details quickly, but even small site changes were tied to engineering cycles. That slowed campaigns and made testing harder than it needed to be.",
    approach: [
      {
        title: "Move website control closer to marketing",
        body: "Giving marketers direct control over page updates reduced wait time and made the website more responsive to inventory changes and campaign needs.",
        icon: workflowIcon,
      },
      {
        title: "Unify content and campaign data",
        body: "Keeping content operations in the same platform as broader marketing activity improved visibility and reduced the failure points that come from juggling disconnected tools.",
        icon: structureIcon,
      },
      {
        title: "Optimize around lead conversion, not just publishing",
        body: "The real win was not convenience alone. Faster iteration helped the team improve the site as a conversion asset for partnerships and workplace wellness demand.",
        icon: growthIcon,
      },
    ],
    results: [
      { value: "52%", label: "Increase in lead conversion rate" },
      { value: "1", label: "Unified platform for content and marketing" },
      { value: "Faster", label: "Update cycles without engineering queues" },
      { value: "Clearer", label: "Lead attribution and campaign reporting" },
    ],
    resultNarrative:
      "ClassPass is a useful marketing reference because it shows how operational speed can become a conversion advantage when content teams stop depending on long engineering backlogs.",
  },
  {
    slug: "crunch-fitness-marketing-hub",
    title: "Crunch Fitness Franchise Marketing Engine",
    client: "Crunch Fitness",
    service: "Digital Marketing",
    timeline: "Scaled franchise marketing system",
    industry: "Fitness",
    sourceUrl: "https://www.hubspot.com/case-studies/crunch-fitness?price=FREE",
    sourceName: "HubSpot",
    category: "Digital Marketing",
    tags: ["Reference", "Franchise Marketing", "Email", "Lead Capture"],
    cardDescription:
      "A franchise-scale marketing setup built to help local gyms move faster while keeping member acquisition campaigns personalized.",
    overview:
      "HubSpot's Crunch Fitness story is a strong fit for the digital-marketing category because it focuses on scale with local execution. The system had to empower franchisees while preserving brand quality and keeping lead generation active across a wide network.",
    challenge:
      "When a fitness brand grows through franchises, marketing can easily split in two directions: slow central control or chaotic local execution. Crunch needed a system that could let local teams act quickly without losing personalization or campaign quality.",
    approach: [
      {
        title: "Template local campaigns for franchise teams",
        body: "The marketing system gave local operators a faster way to launch campaigns without rebuilding every asset or workflow from scratch.",
        icon: automationIcon,
      },
      {
        title: "Keep communication personal at high volume",
        body: "The public story emphasizes member-first communication, showing that scale only works when targeting and timing still feel relevant to each audience.",
        icon: audienceIcon,
      },
      {
        title: "Use automation to multiply output",
        body: "Email, landing pages, and lead capture were treated as connected growth assets rather than separate channels managed manually.",
        icon: growthIcon,
      },
    ],
    results: [
      { value: "15M+", label: "Emails sent per month" },
      { value: "2M+", label: "Leads collected per year" },
      { value: "1M+", label: "Landing page views" },
      { value: "500+", label: "Locations cited by HubSpot" },
    ],
    resultNarrative:
      "Crunch Fitness is a strong example of multi-location digital marketing done properly: local action, central systems, and clear measurement across the funnel.",
  },
  {
    slug: "kelly-services-content-ops",
    title: "Kelly Services Unified Marketing Operations",
    client: "Kelly Services",
    service: "Digital Marketing",
    timeline: "3-month implementation phase",
    industry: "Staffing and Recruiting",
    sourceUrl: "https://www.hubspot.com/case-studies/kelly-services?region=benelux-region",
    sourceName: "HubSpot",
    category: "Digital Marketing",
    tags: ["Reference", "Content Ops", "Personalization", "Lead Gen"],
    cardDescription:
      "A marketing-operations case study focused on unifying teams, simplifying content workflows, and improving traffic and conversion performance.",
    overview:
      "HubSpot's Kelly Services case study highlights a classic growth-stage marketing problem: multiple business units, disconnected systems, and content that is too general to convert well. The fix was not only tooling. It was a more connected way to operate.",
    challenge:
      "Decentralized teams were trying to move faster, but legacy systems made personalization difficult and even simple campaign actions too slow. That made content broad, generic, and harder to tie to actual conversion outcomes.",
    approach: [
      {
        title: "Centralize content and marketing data",
        body: "The system combined content production, segmentation, and reporting in one place so teams could work from a shared view of the customer journey.",
        icon: structureIcon,
      },
      {
        title: "Make personalization easier for distributed teams",
        body: "By reducing the friction in campaign building and publishing, the business units could create more relevant content for their own audiences instead of sending the same message to everyone.",
        icon: audienceIcon,
      },
      {
        title: "Tie workflow changes to measurable gains",
        body: "Traffic growth mattered, but the stronger proof point was that more targeted content and easier operations also lifted conversions meaningfully.",
        icon: growthIcon,
      },
    ],
    results: [
      { value: "+32%", label: "Increase in users" },
      { value: "+26%", label: "Increase in sessions" },
      { value: "+60%", label: "Increase in conversions" },
      { value: "300+", label: "Users onboarded across 15 teams" },
    ],
    resultNarrative:
      "Kelly Services works well as a portfolio reference for marketing systems because it shows how cleaner operations can improve both volume metrics and conversion quality.",
  },
  {
    slug: "exodus-adventure-travel-crm",
    title: "Exodus Adventure Travel Personalized Journeys",
    client: "Exodus Adventure Travel",
    service: "Digital Marketing",
    timeline: "CRM and automation transformation",
    industry: "Travel",
    sourceUrl: "https://www.hubspot.com/case-studies/exodus-adventure-travel",
    sourceName: "HubSpot",
    category: "Digital Marketing",
    tags: ["Reference", "CRM", "Segmentation", "Personalization"],
    cardDescription:
      "A travel-marketing case study built around connected customer data, faster campaign creation, and more personalized communication across the journey.",
    overview:
      "Exodus is a strong digital-marketing reference because the published story ties marketing directly to operational data. Once customer and booking information were connected, segmentation and personalized follow-up became much more practical.",
    challenge:
      "The business had grown around disconnected reservation systems, spreadsheets, and manual marketing tasks. Even routine email creation could take hours, and the team lacked a clean way to personalize outreach based on real booking behavior and customer intent.",
    approach: [
      {
        title: "Connect booking data with CRM workflows",
        body: "The backbone of the improvement was real-time synchronization between legacy reservation systems and HubSpot. Without that, personalization would stay shallow.",
        icon: structureIcon,
      },
      {
        title: "Build segmented lifecycle swim lanes",
        body: "The team organized communications around stages like prospect, pre-travel, post-travel, and repeat traveler, making the experience more relevant without adding manual workload.",
        icon: audienceIcon,
      },
      {
        title: "Compress campaign production time",
        body: "Once the data model was connected, highly targeted emails could be created in minutes instead of hours, which made experimentation and timely follow-up much easier.",
        icon: automationIcon,
      },
    ],
    results: [
      { value: "98%", label: "Faster creation of personalized campaigns" },
      { value: "28%", label: "Reduction in lead qualification time" },
      { value: "17%", label: "Faster lead reply velocity" },
      { value: "97%", label: "Customers who recommend Exodus" },
    ],
    resultNarrative:
      "Exodus is one of the best references in this set for showing how personalization gets stronger when marketing, service, and booking data stop living in separate systems.",
  },
  {
    slug: "just-cuts-rebrand",
    title: "Just Cuts Global Brand Rollout",
    client: "Just Cuts",
    service: "Graphic Design",
    timeline: "3-month rebrand rollout",
    industry: "Beauty and Franchise Retail",
    sourceUrl: "https://www.canva.com/case-studies/just-cuts/",
    sourceName: "Canva",
    category: "Graphic Design",
    tags: ["Reference", "Rebrand", "Franchise", "Templates"],
    cardDescription:
      "A design-systems case study on scaling a rebrand across hundreds of salons while reducing approval time and manual design work.",
    overview:
      "Canva's Just Cuts case study is a strong graphic-design benchmark because it is not only about how the brand looks. It is about how brand systems, templates, and approvals make a rebrand actually deployable across a distributed network.",
    challenge:
      "A growing franchise network needed faster content production, stronger consistency, and a better way for local operators to create marketing materials without waiting on a central design team for every asset.",
    approach: [
      {
        title: "Turn the rebrand into a usable template system",
        body: "Brand templates let local teams work quickly while keeping core visual standards intact across countries and locations.",
        icon: brandIcon,
      },
      {
        title: "Shorten approvals dramatically",
        body: "The biggest workflow gain came from simplifying how local teams requested, reviewed, and approved materials, replacing a much heavier manual process.",
        icon: workflowIcon,
      },
      {
        title: "Free designers for higher-value work",
        body: "Once repetitive requests were handled through a system, the design team could spend more time on strategic brand and campaign work.",
        icon: growthIcon,
      },
    ],
    results: [
      { value: "82%", label: "Faster local marketing delivery" },
      { value: "3x", label: "Design output in the first month" },
      { value: "99%", label: "Decrease in approval times" },
      { value: "230", label: "Salons covered by the network" },
    ],
    resultNarrative:
      "Just Cuts is a practical graphic-design reference because it proves brand consistency is usually a systems problem as much as a visual one.",
  },
  {
    slug: "docusign-global-rebrand",
    title: "Docusign In-House Global Rebrand",
    client: "Docusign",
    service: "Graphic Design",
    timeline: "4-month global rollout",
    industry: "Technology",
    sourceUrl: "https://www.canva.com/case-studies/docusign/",
    sourceName: "Canva",
    category: "Graphic Design",
    tags: ["Reference", "Rebrand", "Design Ops", "Enterprise"],
    cardDescription:
      "A design-operations story about scaling a major rebrand across a large organization without turning the creative team into a bottleneck.",
    overview:
      "Docusign's Canva case study shows how brand design becomes an operational challenge at enterprise size. The creative team had to support thousands of assets, many teams, and a company-wide shift in identity without depending on outside agencies for every execution layer.",
    challenge:
      "A small central creative team was serving a global organization of thousands of employees. A major rebrand would only work if the new system let non-design teams produce branded assets safely and consistently.",
    approach: [
      {
        title: "Centralize the new identity in one brand system",
        body: "A shared library of approved fonts, colors, logos, and templates gave teams a practical way to work within the rebrand instead of guessing at it.",
        icon: brandIcon,
      },
      {
        title: "Enable self-serve branded content",
        body: "Sales, strategy, marketing, and customer teams gained a faster way to produce presentations and campaign assets while reducing design bottlenecks.",
        icon: automationIcon,
      },
      {
        title: "Use the rebrand to unlock creative capacity",
        body: "The public case study frames the system not just as a consistency tool, but as a way to return meaningful time to the core creative team.",
        icon: growthIcon,
      },
    ],
    results: [
      { value: "500+", label: "Creative hours unlocked" },
      { value: "4 mo", label: "Global rebrand timeline" },
      { value: "2,700+", label: "New Canva designs post-launch" },
      { value: "6,000", label: "Employees served by the system" },
    ],
    resultNarrative:
      "Docusign is a strong reference for enterprise design operations because it shows how rebrands succeed when the system is teachable, reusable, and scalable beyond the core design team.",
  },
  {
    slug: "skyscanner-brand-rollout",
    title: "Skyscanner Rebrand at Global Scale",
    client: "Skyscanner",
    service: "Graphic Design",
    timeline: "6-month rollout",
    industry: "Travel Technology",
    sourceUrl: "https://www.canva.com/case-studies/skyscanner/",
    sourceName: "Canva",
    category: "Graphic Design",
    tags: ["Reference", "Brand Rollout", "Global Teams", "Travel"],
    cardDescription:
      "A rebrand case study centered on giving marketing teams more speed without making the design team the long-term bottleneck.",
    overview:
      "Skyscanner's public Canva story is a useful design reference because it focuses on rollout discipline. The brand refresh had to move across many touchpoints and teams quickly, while still protecting visual consistency.",
    challenge:
      "Large rebrands often fail in the handoff from design to day-to-day marketing. Skyscanner needed a system that would let teams ship on-brand work globally without turning every request into a queue for the design team.",
    approach: [
      {
        title: "Package the brand for team-wide use",
        body: "Brand kits and approved visual elements made the rebrand easier to apply across internal and external assets at speed.",
        icon: brandIcon,
      },
      {
        title: "Reduce dependency on centralized designers",
        body: "The system gave marketing teams more autonomy while still keeping the guardrails needed for a consistent rollout.",
        icon: audienceIcon,
      },
      {
        title: "Use design operations to support rollout velocity",
        body: "The published story frames the win as saved time and smoother collaboration, not only a prettier visual outcome.",
        icon: workflowIcon,
      },
    ],
    results: [
      { value: "6 mo", label: "Rebrand rollout timeline" },
      { value: "100M+", label: "Monthly users on the platform" },
      { value: "Global", label: "Cross-team rollout coverage" },
      { value: "Lean", label: "Less dependence on extra design headcount" },
    ],
    resultNarrative:
      "Skyscanner works well as a portfolio placeholder because it captures the operational side of brand rollout: systems, speed, and collaboration, not only art direction.",
  },
  {
    slug: "lj-hooker-content-system",
    title: "LJ Hooker Content System Overhaul",
    client: "LJ Hooker",
    service: "Graphic Design",
    timeline: "Network-wide rebrand and rollout",
    industry: "Real Estate",
    sourceUrl: "https://www.canva.com/case-studies/lj-hooker/",
    sourceName: "Canva",
    category: "Graphic Design",
    tags: ["Reference", "Real Estate", "Templates", "Brand Consistency"],
    cardDescription:
      "A design-operations case study about scaling brand consistency and content speed across a large real-estate franchise network.",
    overview:
      "LJ Hooker is a strong graphic-design reference because it ties brand consistency to measurable production gains. The public case study shows what happens when thousands of local assets move into one repeatable, brand-safe system.",
    challenge:
      "A large franchise network was generating social posts and local materials at scale, but without enough central control or efficient creation tools. The result was slow workflows and inconsistent brand messaging across offices.",
    approach: [
      {
        title: "Centralize assets in a shared brand hub",
        body: "A larger template system gave franchisees usable starting points for social, print, signage, and other recurring content formats.",
        icon: brandIcon,
      },
      {
        title: "Design for speed at local-office level",
        body: "By shortening the creation and scheduling workflow, the system made it easier for local teams to publish more often without losing alignment.",
        icon: automationIcon,
      },
      {
        title: "Bring more production in-house",
        body: "The case study shows how stronger templates and collaboration reduced dependence on agencies while raising the volume of on-brand content.",
        icon: growthIcon,
      },
    ],
    results: [
      { value: "93%", label: "Faster content creation" },
      { value: "15x", label: "More content produced" },
      { value: "$70K+", label: "Annual savings for one franchise" },
      { value: "20K+", label: "Brand templates created" },
    ],
    resultNarrative:
      "LJ Hooker is one of the clearest references here for how strong design systems can cut production time, improve consistency, and reduce outside spend at network scale.",
  },
  {
    slug: "welcome-to-the-jungle-video-ops",
    title: "Welcome to the Jungle Video Delivery Workflow",
    client: "Welcome to the Jungle",
    service: "Video Editing",
    timeline: "Workflow automation rollout",
    industry: "Hiring Platform / Media",
    sourceUrl: "https://vimeo.com/customers/welcome-to-the-jungle/",
    sourceName: "Vimeo",
    category: "Video Editing",
    tags: ["Reference", "Video Ops", "Automation", "Publishing"],
    cardDescription:
      "A Vimeo customer spotlight on scaling high-volume employer video publishing with automation, review workflows, and cleaner delivery.",
    overview:
      "This reference case study leans toward video operations as much as editing. Welcome to the Jungle publishes large volumes of employer-brand videos, so the challenge was not only creative quality. It was getting edited work uploaded, organized, approved, and delivered fast.",
    challenge:
      "The team was producing hundreds of videos every month, but manual upload workflows, unstable platform limits, and compliance concerns were creating friction. Editors were spending too much time on publishing instead of creative work.",
    approach: [
      {
        title: "Automate the publishing chain",
        body: "The workflow connected storage, project tracking, metadata, and video delivery so finished edits could move into review and client handoff with far less manual work.",
        icon: automationIcon,
      },
      {
        title: "Keep client review clean and reusable",
        body: "Password-protected showcases and version replacement made the approval process feel more professional while keeping everything organized around the same asset.",
        icon: workflowIcon,
      },
      {
        title: "Protect creative time",
        body: "The public story is clear that the operational win mattered because it gave producers and editors more time to focus on storytelling and client experience.",
        icon: playIcon,
      },
    ],
    results: [
      { value: "700-1,000", label: "Videos uploaded per month" },
      { value: ">90%", label: "Time saved on uploads" },
      { value: "4 hrs/day", label: "Publishing time saved" },
      { value: "100%", label: "GDPR compliance target met" },
    ],
    resultNarrative:
      "Welcome to the Jungle is a good video-editing portfolio reference because it shows how editing teams scale better when delivery workflows are designed as carefully as the videos themselves.",
  },
  {
    slug: "ringier-interactive-video",
    title: "Ringier Interactive Storytelling for Brands",
    client: "Ringier",
    service: "Video Editing",
    timeline: "Interactive campaign execution",
    industry: "Media and Advertising",
    sourceUrl: "https://vimeo.com/customers/ringier",
    sourceName: "Vimeo",
    category: "Video Editing",
    tags: ["Reference", "Interactive Video", "Brand Studio", "CTR"],
    cardDescription:
      "A brand-studio case study focused on turning polished video work into measurable engagement through interactive storytelling.",
    overview:
      "Ringier's Vimeo spotlight is useful in the video-editing category because it connects creative storytelling to measurable campaign interaction. The work is not only about making videos look good. It is about making them perform.",
    challenge:
      "Traditional brand video often stops at views. Ringier needed a format that preserved creative quality while giving clients stronger evidence of engagement and campaign value.",
    approach: [
      {
        title: "Design video for participation, not passive viewing",
        body: "Interactive layers turned the video from a one-way asset into something audiences could explore and respond to directly.",
        icon: playIcon,
      },
      {
        title: "Keep storytelling strong while adding response paths",
        body: "The creative challenge was to avoid making interaction feel bolted on. The experience still had to feel editorial and branded, not like a clumsy overlay.",
        icon: brandIcon,
      },
      {
        title: "Measure the work against campaign outcomes",
        body: "The published results focus on engagement and click performance, which makes this a solid benchmark for performance-led video design.",
        icon: growthIcon,
      },
    ],
    results: [
      { value: "4.9%", label: "Click-through rate" },
      { value: "73%", label: "Engagement rate" },
      { value: "2,000+", label: "Link clicks on one video" },
      { value: "Better", label: "Client-side reporting clarity" },
    ],
    resultNarrative:
      "Ringier is a useful reference for video editing because it shows how motion, pacing, and interaction can work together to produce stronger campaign performance.",
  },
  {
    slug: "non-stop-dogwear-interactive-video",
    title: "Non-stop Dogwear Conversion Video System",
    client: "Non-stop dogwear",
    service: "Video Editing",
    timeline: "Interactive product-video rollout",
    industry: "Pet Products / Ecommerce",
    sourceUrl: "https://vimeo.com/customers/nonstop-dogwear",
    sourceName: "Vimeo",
    category: "Video Editing",
    tags: ["Reference", "Product Video", "Interactive", "Ecommerce"],
    cardDescription:
      "A video-led ecommerce case study focused on helping customers choose correctly, reduce returns, and convert better with interactive content.",
    overview:
      "Non-stop dogwear is a strong video-editing reference because the videos are doing real product work. They help shoppers understand sizing, use, and fit, which makes them part of the conversion journey instead of a decorative brand layer.",
    challenge:
      "Customers were measuring incorrectly, choosing the wrong sizes, and returning products. At the same time, international distributors needed better product training than static documents could provide.",
    approach: [
      {
        title: "Use video to explain the product visually",
        body: "Interactive product videos helped customers understand how features work and how to measure correctly before ordering.",
        icon: playIcon,
      },
      {
        title: "Build guided recommendation flows",
        body: "Quizzes and guided video experiences matched dogs and owners with more suitable products, making the shopping path more helpful and less guess-heavy.",
        icon: audienceIcon,
      },
      {
        title: "Repurpose the content for distributor training",
        body: "The same video mindset also improved partner education, giving sales staff more realistic and scalable training across markets.",
        icon: workflowIcon,
      },
    ],
    results: [
      { value: "34%", label: "Higher conversion rate" },
      { value: "100+", label: "Countries selling B2C" },
      { value: "40+", label: "Countries distributing B2B" },
      { value: "Lower", label: "Return rates after sizing help" },
    ],
    resultNarrative:
      "This is one of the clearest references for commercial video editing in ecommerce: better explanatory content improved both conversion quality and customer confidence.",
  },
  {
    slug: "national-theatre-at-home",
    title: "National Theatre at Home Streaming Library",
    client: "National Theatre at Home",
    service: "Video Editing",
    timeline: "Streaming expansion phase",
    industry: "Arts and Entertainment",
    sourceUrl: "https://vimeo.com/customers/national-theatre-at-home",
    sourceName: "Vimeo",
    category: "Video Editing",
    tags: ["Reference", "Streaming", "Content Library", "Theatre"],
    cardDescription:
      "A digital-stage case study on preserving production quality while managing a growing video library for a global audience.",
    overview:
      "National Theatre at Home is a useful reference for the video-editing category because the product is not just a stream. The organization has to present filmed productions at a standard that respects the source material while also running a lean digital content operation.",
    challenge:
      "When live audiences disappeared, the theatre needed a digital platform that could deliver a premium viewing experience, reach a broader audience, and stay manageable for a small internal team handling a growing library of productions.",
    approach: [
      {
        title: "Treat capture quality as part of the product",
        body: "For performing arts, the technical finish of the video directly affects brand perception. The digital experience had to feel worthy of the stage production behind it.",
        icon: playIcon,
      },
      {
        title: "Scale a growing library with a lean team",
        body: "The workflow needed to support curation, delivery, and content management without requiring a large streaming operation.",
        icon: workflowIcon,
      },
      {
        title: "Expand reach without flattening the experience",
        body: "The opportunity was not only to put theatre online, but to do it in a way that could attract global viewers while keeping the work premium.",
        icon: growthIcon,
      },
    ],
    results: [
      { value: "31M", label: "Minutes viewed in 2024" },
      { value: "184", label: "Countries reached" },
      { value: "5", label: "Team members managing the library" },
      { value: "Global", label: "Audience beyond physical venues" },
    ],
    resultNarrative:
      "National Theatre at Home is a strong reference for premium video delivery because it shows how content quality, library management, and audience reach can reinforce each other.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
