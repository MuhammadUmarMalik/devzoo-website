import type { ReactNode } from "react";

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  service: string;
  timeline: string;
  industry: string;
  liveUrl?: string;
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

export const caseStudies: CaseStudy[] = [
  {
    slug: "powerschool",
    title: "PowerSchool — K-12 Education Platform",
    client: "PowerSchool",
    service: "Web Development",
    timeline: "16 Weeks",
    industry: "K-12 Education Technology",
    liveUrl: "https://www.powerschool.com",
    category: "Web Development",
    tags: ["EdTech", "SaaS Platform", "Multi-Product", "AI Integration", "Enterprise"],
    cardDescription:
      "A unified web platform for the world's leading K-12 education technology company — serving 60M+ students across 70,000 school organizations in 140+ countries.",
    overview:
      "PowerSchool isn't one product — it's fifteen. Student information systems, learning management, AI tutoring tools, financial operations, talent management, parent communications. The website's job was to make all of that feel coherent, not overwhelming, to a visitor who might be a superintendent, a classroom teacher, an IT director, or a school CFO. We built a platform that lets each of them find exactly what they need without wading through everything that's meant for someone else.",
    challenge:
      "Most enterprise SaaS websites pick one user and design for them. PowerSchool can't do that. A superintendent evaluating the platform has completely different questions than a curriculum director or a payroll manager. The product line spans seven solution categories and more than fifteen individual tools — each with its own buyers, its own value story, and its own compliance requirements. The previous site buried products in a flat list. Visitors couldn't tell which tools were connected, which were standalone, or which ones applied to their role. We needed to build an architecture that made the entire ecosystem feel like one integrated platform — without making any single buyer feel like they were in the wrong place.",
    approach: [
      {
        title: "Role-based navigation architecture",
        body: "We restructured the entire site around how buyers actually think — by their role and their problem, not by product name. Superintendents, principals, teachers, IT directors, and CFOs each get a path that surfaces the tools relevant to them and frames value in their language. The product catalogue becomes a destination, not the entry point.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <path d="M3 9h18M9 21V9m6 12V9M3 3h18v18H3z" />
          </svg>
        ),
      },
      {
        title: "Connected product storytelling",
        body: "PowerSchool's biggest differentiator is integration — data flows between SIS, LMS, analytics, and communications without exports or manual syncs. We built product pages that show these connections explicitly: how attendance data in the SIS feeds the MTSS platform, how assessment results in Performance Matters appear in student analytics. The story isn't 'here are our products,' it's 'here is how your district runs on one platform.'",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <circle cx="5" cy="12" r="2" />
            <circle cx="19" cy="5" r="2" />
            <circle cx="19" cy="19" r="2" />
            <path d="M7 12h4m4-5-4 4m4 4-4-4" />
          </svg>
        ),
      },
      {
        title: "AI-forward positioning (PowerBuddy)",
        body: "PowerBuddy is embedded across five product areas — assessments, career planning, data analysis, parent engagement, and learning delivery. The challenge was presenting AI as practical and already working, not as a roadmap promise. We built a dedicated AI layer in the navigation and product pages that shows exactly which workflows PowerBuddy touches, with specifics on what it does inside each tool.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4Z" />
            <path d="M9 12h6M12 9v6" />
          </svg>
        ),
      },
      {
        title: "Trust and compliance content layer",
        body: "K-12 districts handle student data under FERPA, COPPA, and state-level privacy laws. IT directors and data privacy officers evaluate vendors specifically on this. We built a dedicated security and compliance section surfacing PowerSchool's ISO 27001 certification, COPPA Safe Harbor status, and data handling practices — not buried in a legal footer, but built into the evaluation flow where procurement teams actually look.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        ),
      },
      {
        title: "Data ecosystem and analytics hub",
        body: "Connected Intelligence — PowerSchool's data-as-a-service layer — is the product that ties everything together for district leaders making strategic decisions. We built it its own hub page showing how data flows from individual tools into unified dashboards, how the Snowflake integration works for districts with existing data infrastructure, and how AI-readiness is built into the architecture from the ground up.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <path d="M3 3v18h18" />
            <path d="m7 16 4-4 4 4 4-7" />
          </svg>
        ),
      },
    ],
    results: [
      { value: "60M+", label: "Students on the platform" },
      { value: "70K", label: "School organizations served" },
      { value: "140+", label: "Countries reached" },
      { value: "15+", label: "Integrated product areas" },
    ],
    resultNarrative:
      "PowerSchool now operates at a scale that makes it the default infrastructure for K-12 education across the English-speaking world and well beyond. The unified platform approach — one login, one data layer, connected tools across administration, instruction, and family engagement — is what separates it from point solutions. The website now makes that case clearly to every type of buyer who lands on it.",
  },
  {
    slug: "field-engineer",
    title: "Field Engineer — Global Engineering Marketplace",
    client: "Field Engineer",
    service: "Web Development",
    timeline: "12 Weeks",
    industry: "B2B Marketplace / Freelance Engineering",
    liveUrl: "https://www.fieldengineer.com",
    category: "Web Development",
    tags: ["Marketplace", "Web App", "UI/UX", "API Integration", "Mobile-Ready"],
    cardDescription:
      "A global B2B marketplace connecting 75,000+ vetted engineers with businesses across 200+ countries.",
    heroImage:
      "https://cdn.prod.website-files.com/5b6df8bb681f89ec20b48f37/5bad00b3f68e8b74d9581a4e_business-homepage-feature-01-screenshot%403x.png",
    screenshots: [
      {
        src: "https://cdn.prod.website-files.com/5b6df8bb681f89ec20b48f37/5bad00b3f68e8b74d9581a4e_business-homepage-feature-01-screenshot%403x.png",
        caption: "Business dashboard — post jobs and review applicants",
      },
      {
        src: "https://cdn.prod.website-files.com/5b6df8bb681f89ec20b48f37/5b6df8bb681f897f2bb48f5b_business-homepage-feature-02-screenshot.png",
        caption: "Engineer profiles — filter by rating, location, and experience",
      },
      {
        src: "https://cdn.prod.website-files.com/5b6df8bb681f89ec20b48f37/5bad02360f58648fb1c4e7ad_business-homepage-feature-03-screenshot%403x.png",
        caption: "Real-time tracking — map view and calendar for active projects",
      },
      {
        src: "https://cdn.prod.website-files.com/5b6df8bb681f89ec20b48f37/5b6df8bb681f896aadb48f5d_business-homepage-feature-04-screenshot.png",
        caption: "Payment flow — engineers submit hours, businesses approve",
      },
    ],
    overview:
      "Field Engineer needed a platform that could do two very different jobs at once: convince businesses to trust it with their engineering workforce, and give freelance engineers a clean, fast way to find and manage work. We built a two-sided marketplace that handles job posting, algorithmic matching, real-time tracking, and payment — without overwhelming either side.",
    challenge:
      "Most freelance platforms are built for one type of user. Field Engineer serves two — businesses managing multi-location engineering teams, and engineers looking for contract work across 200+ countries. The challenge was building a single platform that felt purpose-built for both. On top of that, the platform needed to support real-time location tracking, API integrations with existing enterprise software, and native mobile apps for iOS and Android. Every layer had to be fast, scalable, and dead simple to use.",
    approach: [
      {
        title: "Two-sided architecture",
        body: "We designed completely separate flows for businesses and engineers — same platform, two distinct experiences. Businesses get a project management dashboard with map-based tracking and a calendar view. Engineers get a job search interface with filters for location, rate, and experience level. Neither side ever feels like they're using a tool built for someone else.",
        screenshot: "https://cdn.prod.website-files.com/5b6df8bb681f89ec20b48f37/5bad00b3f68e8b74d9581a4e_business-homepage-feature-01-screenshot%403x.png",
        screenshotAlt: "Business dashboard showing job posting interface",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
      {
        title: "Algorithmic job matching",
        body: "Job posts don't sit in a feed waiting to be found. The platform actively surfaces relevant engineers based on certifications, location, experience level, and availability. We built the matching layer to cut the time from job post to assignment — businesses find the right person faster, and engineers stop scrolling through irrelevant listings.",
        screenshot: "https://cdn.prod.website-files.com/5b6df8bb681f89ec20b48f37/5b6df8bb681f897f2bb48f5b_business-homepage-feature-02-screenshot.png",
        screenshotAlt: "Engineer profile cards with rating and location filters",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
          </svg>
        ),
      },
      {
        title: "Real-time project dashboard",
        body: "Once an engineer is assigned, businesses can track their location on a live map, monitor task completion status, and view all active projects through a unified calendar. We built this to replace the back-and-forth that most field service teams deal with — phone calls, email threads, spreadsheets — with a single dashboard that tells you exactly what's happening.",
        screenshot: "https://cdn.prod.website-files.com/5b6df8bb681f89ec20b48f37/5bad02360f58648fb1c4e7ad_business-homepage-feature-03-screenshot%403x.png",
        screenshotAlt: "Real-time map tracking and calendar dashboard",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        ),
      },
      {
        title: "Enterprise API integrations",
        body: "Large clients don't want another tool sitting outside their existing workflow. We built a full API layer covering job management, fund management, real-time tracking, work approvals, and assignments — so Field Engineer slots directly into the software businesses are already using. No manual data entry, no double systems.",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <path d="M8 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" />
            <path d="M16 6l2-2m0 0 2 2m-2-2v10" />
            <rect x="10" y="2" width="8" height="8" rx="1" />
          </svg>
        ),
      },
      {
        title: "Mobile apps for both sides",
        body: "Field engineers don't work at desks. We built native iOS and Android apps that let engineers log hours, submit work, and communicate with clients from any job site. Businesses get the same real-time visibility they have on desktop — in their pocket. The apps mirror the web platform's logic without the bloat.",
        screenshot: "https://cdn.prod.website-files.com/5b6df8bb681f89ec20b48f37/5b6df8bb681f896aadb48f5d_business-homepage-feature-04-screenshot.png",
        screenshotAlt: "Mobile app payment approval and hours submission flow",
        icon: (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <path d="M12 18h.01" />
          </svg>
        ),
      },
    ],
    results: [
      { value: "75,000+", label: "Vetted engineers on platform" },
      { value: "200+", label: "Countries served" },
      { value: "30%", label: "Cost saving vs traditional hiring" },
      { value: "24/7", label: "Dedicated support uptime" },
    ],
    resultNarrative:
      "Field Engineer now operates at a scale most platforms never reach — 75,000 engineers across 200+ countries, with a zero-hidden-fees model that's helped businesses cut engineering hiring costs by 30% compared to traditional staffing. The platform handles the full lifecycle from job post to payment, with no friction in between.",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
