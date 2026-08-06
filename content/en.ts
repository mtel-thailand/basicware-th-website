/**
 * English site copy — the single source of truth for every user-facing string.
 *
 * To add a language: copy this file (e.g. th.ts), translate the VALUES only,
 * keep the keys identical, then register it in ./index.ts.
 *
 * Headings with a blue accent word are split into { pre, accent, post } so
 * translations can place the accent anywhere in the sentence.
 */
export const en = {
  meta: {
    title: "Basicware Thailand — Accelerate your business growth with AI",
    description:
      "One AI ecosystem to reinvent how your business works. AI content production, marketing growth loops, AI workers, and education — built for Thailand, powered by world-leading technology partners.",
  },

  nav: {
    brand: "Basicware",
    home: { label: "Home", href: "/" },
    servicesLabel: "Services",
    services: [
      { label: "Centralized AI", href: "/services/centralized-ai" },
      { label: "AIGC & Marketing", href: "/services/aigc-marketing" },
      { label: "Digital Employee", href: "/services/digital-employee" },
      { label: "AI Talent Education", href: "/services/ai-talent-education" },
    ],
    about: { label: "About Us", href: "/about" },
    lang: "EN",
    cta: "Get in touch",
  },

  hero: {
    chip: "Basicware Thailand",
    /* Rendered word-by-word: line1, then "gr🌼wth" (glyph replaces the o), then tail */
    headlineLine1: ["Accelerate", "your", "business"],
    growthPre: "gr",
    growthPost: "wth",
    headlineTail: ["with", "AI"],
  },

  aigc: {
    eyebrow: "AIGC Content Production",
    speedTitle: "Create with the quality of",
    partnerAvailable: "Available through",
    partnerPromise: "Built for enterprise creative production",
    title: {
      pre: "Transform your marketing with ",
      accent: "AI‑generated content",
      post: " that grows revenue.",
    },
    prompt:
      "Generate a premium Nature-Tech campaign from a dandelion concept.\nCreate copywriting, a 1:1 image, a short video concept, and a dandelion digital avatar broadcast.",
    model: "Seedance 2.5",
    generateLabel: "Generate",
    quote:
      "“Like dandelion seeds carried by the wind, every message can travel further when guided by intelligence”",
    quoteCaption:
      "Transform a single idea into adaptive content across every digital channel.",
    cards: [
      { key: "copywriting", label: "Copywriting" },
      { key: "image", label: "Image generation" },
      { key: "avatar", label: "Digital avatar broadcast" },
      { key: "video", label: "Video production" },
    ],
  },

  growthLoop: {
    eyebrow: "AI Marketing Growth Services",
    title: {
      pre: "A growth ",
      accent: "loop",
      post: " with consumer",
    },
    titleTail: "intelligence analytics",
    partnerLabel: "Powered By",
    steps: [
      { number: "01", title: "Plan", caption: "Map content to every platform and goal" },
      { number: "02", title: "Produce", caption: "Create short-form assets, ready to publish" },
      { number: "03", title: "Measure", caption: "See how every asset performed" },
      { number: "04", title: "Learn", caption: "Understand what worked, and why" },
      { number: "05", title: "Scale", caption: "Reinvest the wins into the next cycle" },
    ],
    lede: "AI plans, produces, measures, learns, and scales your short-video content in one closed loop, turning every cycle into measurable growth for brands and e-commerce.",
    indicator: "Continuous optimization loop",
  },

  aiWorkers: {
    eyebrow: "Enterprise-Grade Digital Employee",
    title: {
      pre: "Role-based AI workers, powered by ",
      accent: "OpenClaws",
      post: " and Employee Cluster Management.",
    },
    candidates: [
      {
        name: "Kanya Sethaputra",
        role: "Senior Marketing Manager",
        location: "Bangkok, Thailand",
        match: "95% Match",
      },
      {
        name: "Pim Ratanakosin",
        role: "Senior Marketing Manager",
        location: "Bangkok, Thailand",
        match: "75% Match",
      },
      {
        name: "Areeya Chotisiri",
        role: "Digital Marketing Specialist",
        location: "Chiang Mai, Thailand",
        match: "50% Match",
      },
      {
        name: "Krit Bunnag",
        role: "Brand Strategy Director",
        location: "Phuket, Thailand",
        match: "40% Match",
      },
    ],
    /* Match-report card revealed when the top candidate is clicked */
    resumeMatch: {
      cardTitle: "Resume Match by AI Assistant",
      viewHint: "View match report",
      backLabel: "Back to shortlist",
      score: 95,
      scoreTotal: "/100",
      overallLabel: "Overall Match",
      overallVerdict: "Strong Match",
      criteriaTitle: "Criteria Summary",
      criteria: <{ label: string; value: string; tone: "green" | "yellow" | "red" }[]>[
        { label: "Experience", value: "80/100", tone: "green" },
        { label: "Skill", value: "97/100", tone: "green" },
        { label: "Education", value: "50/100", tone: "yellow" },
      ],
      riskTitle: "Risk Assessment",
      risks: <{ label: string; value: string; tone: "green" | "yellow" | "red" }[]>[
        { label: "Green: Highlights", value: "4", tone: "green" },
        { label: "Yellow: Validation items", value: "2", tone: "yellow" },
        { label: "Red: High-risk items", value: "1", tone: "red" },
      ],
    },
    /* Five-step campaign pipeline looping in the Marketing Assistant panel */
    marketingFlow: {
      steps: [
        { name: "CDP", caption: "Unify & segment" },
        { name: "DataFinder", caption: "Find intent" },
        { name: "AIGC", caption: "Generate creative" },
        { name: "GMP", caption: "Deliver campaign" },
        { name: "A/B Test", caption: "Optimize" },
      ],
      results: <
        {
          label: string;
          value: string;
          tone: "blue" | "green";
          badge?: string;
          caption?: string;
        }[]
      >[
        { label: "Variant A", value: "3.1%", tone: "blue" },
        { label: "Variant B", value: "4.7%", tone: "green", badge: "Win" },
        { label: "Sales Growth", value: "+24%", tone: "blue", caption: "vs. control" },
      ],
    },
    /* Storyboard-to-video demo looping in the Product Video panel */
    videoFlow: {
      fileName: "final_cut.mp4",
      generating: "Generating video…",
      duration: "00:15",
      shots: [
        { title: "Product Hero" },
        { title: "Texture Macro" },
        { title: "Application" },
        { title: "Skin Glow Result" },
        { title: "Lifestyle Moment" },
        { title: "Packshot + CTA" },
      ],
    },
    /* Spreadsheet-drop-to-dashboard demo looping in the Financial Analysis panel */
    financeFlow: {
      dropTitle: "Drop your spreadsheet",
      dropHint: "Excel or Google Sheets",
      /* file[0] is picked from the tray and dropped; file[1] sits in the tray */
      files: <{ name: string; meta: string; kind: "excel" | "sheets" }[]>[
        { name: "sales_q2_2026.xlsx", meta: "12,480 rows", kind: "excel" },
        { name: "P&L — FY2026", meta: "Google Sheets", kind: "sheets" },
      ],
      /* Loading checklist steps shown while the file is analysed */
      steps: ["Parsing sheet", "Detecting 14 columns", "Computing KPIs"],
      title: "Q2 Financial Overview",
      period: "Q2 2026",
      badge: "Auto-generated",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      /* Monthly revenue in ฿M — drives the trend chart; last = Revenue KPI */
      revenue: [12.4, 14.1, 13.2, 16.8, 19.5, 24.8],
      /* Each KPI carries a 6-month series for its sparkline */
      kpis: [
        { label: "Revenue", value: "฿24.8M", delta: "+18.2%", series: [12.4, 14.1, 13.2, 16.8, 19.5, 24.8] },
        { label: "Gross Profit", value: "฿16.2M", delta: "+12.0%", series: [8.1, 9.2, 8.8, 11.0, 12.8, 16.2] },
        { label: "Net Margin", value: "31.4%", delta: "+4.2 pts", series: [27, 28, 27.5, 29, 30.2, 31.4] },
        { label: "Cash Flow", value: "฿8.9M", delta: "+22.0%", series: [4.2, 5.0, 4.6, 6.1, 7.2, 8.9] },
      ],
      trendTitle: "Revenue by month",
      trendUnit: "฿M",
      heatTitle: "Margin by region",
      regions: ["Bangkok", "Chiang Mai", "Phuket", "Khon Kaen"],
      /* Margin heat 0–1 per region × month, mapped onto a single blue ramp */
      heatValues: [
        [0.55, 0.62, 0.58, 0.72, 0.85, 1.0],
        [0.3, 0.34, 0.42, 0.4, 0.52, 0.6],
        [0.42, 0.38, 0.5, 0.62, 0.7, 0.82],
        [0.18, 0.24, 0.2, 0.32, 0.38, 0.45],
      ],
    },
    /* CMS planner demo looping in the Content Management panel */
    contentFlow: {
      windowTitle: "Content Planner",
      windowBadge: "Grouped by campaign",
      scheduledLabel: "Scheduling…",
      readyLabel: "Ready",
      viewHint: "View assets",
      backLabel: "Back to campaigns",
      assetsBadge: "Ready to use",
      campaigns: <
        {
          name: string;
          month: string;
          day: string;
          time: string;
          channels: string[];
          assets: { title: string; kind: string; locale: string }[];
        }[]
      >[
        {
          name: "Songkran Splash Campaign",
          month: "APR",
          day: "11",
          time: "09:00",
          channels: ["TikTok", "Instagram", "Facebook"],
          assets: [
            { title: "Hero Film", kind: "Video 9:16", locale: "TH" },
            { title: "Product Card", kind: "Image 1:1", locale: "EN" },
            { title: "How-to Clip", kind: "Video 1:1", locale: "TH" },
            { title: "Caption Pack", kind: "Copy ×12", locale: "TH / EN" },
            { title: "Story Teaser", kind: "Image 9:16", locale: "EN" },
            { title: "CTA Banner", kind: "Banner 16:9", locale: "TH" },
          ],
        },
        {
          name: "Mid-Year Mega Sale",
          month: "JUN",
          day: "25",
          time: "18:00",
          channels: ["Shopee", "Instagram"],
          assets: [
            { title: "Hero Film", kind: "Video 9:16", locale: "TH" },
            { title: "Product Card", kind: "Image 1:1", locale: "EN" },
            { title: "How-to Clip", kind: "Video 1:1", locale: "TH" },
            { title: "Caption Pack", kind: "Copy ×12", locale: "TH / EN" },
            { title: "Story Teaser", kind: "Image 9:16", locale: "EN" },
            { title: "CTA Banner", kind: "Banner 16:9", locale: "TH" },
          ],
        },
        {
          name: "Glow Serum Launch",
          month: "JUL",
          day: "18",
          time: "12:00",
          channels: ["TikTok", "YouTube"],
          assets: [
            { title: "Hero Film", kind: "Video 9:16", locale: "TH" },
            { title: "Product Card", kind: "Image 1:1", locale: "EN" },
            { title: "How-to Clip", kind: "Video 1:1", locale: "TH" },
            { title: "Caption Pack", kind: "Copy ×12", locale: "TH / EN" },
            { title: "Story Teaser", kind: "Image 9:16", locale: "EN" },
            { title: "CTA Banner", kind: "Banner 16:9", locale: "TH" },
          ],
        },
      ],
    },
    panels: <
      {
        eyebrow: string;
        title: string;
        statLabel: string;
        /** Text stat for panels without an animated number (e.g. "From days to hour") */
        statText?: string;
      }[]
    >[
      {
        eyebrow: "Hiring Assistant",
        title: "Resume screening to interview-ready shortlist.",
        statLabel: "Reduction in repetitive workload",
      },
      {
        eyebrow: "Marketing Assistant",
        title: "Smart Audience Insights by ByteDance's Volcano Engine",
        statLabel: "Audience growth",
      },
      {
        eyebrow: "Product Video",
        title: "Product specs to ready-to-publish videos.",
        statLabel: "Production time cut",
      },
      {
        eyebrow: "Financial Analysis",
        title: "Raw sales data to executive-ready insight.",
        statText: "From days to hour",
        statLabel: "Analysis and reporting time saved",
      },
      {
        eyebrow: "Content Management",
        title: "Content batches to localized CMS-ready files.",
        statLabel: "Exposure with multi-cultural elements integrated",
      },
    ],
  },

  modelGateway: {
    eyebrow: "Centralized AI & Token Control",
    title: { pre: "One gateway to ", accent: "top AI models", post: "" },
    routerName: "BasicRouter",
  },

  education: {
    eyebrow: "AI Talent Education & Certification",
    title: { pre: "Build ", accent: "AI capability", post: " across\nyour organization" },
    lede: "Education programs combine structured online learning, regional offline instruction, and globally recognized certification.",
    certificates: [
      {
        src: "/images/education/cert-ai-associate.png",
        alt: "BytePlus Academy — BytePlus AI Associate certification badge",
      },
      {
        src: "/images/education/cert-cloud-essentials.png",
        alt: "BytePlus Academy — BytePlus Cloud Essentials certification badge",
      },
    ],
  },

  partnership: {
    eyebrow: "Strategic Partnership",
    title: {
      pre: "Powered by ",
      accent: "exclusive,",
      post: "\nworld-leading technology partners",
    },
    partners: [
      {
        key: "byteplus",
        role: "AI Infrastructure Partner",
        copy: "Cloud services, intelligent analytics, and scalable AI technology for production-ready solutions.",
      },
      {
        key: "mtel",
        role: "Joint Venture Partner",
        copy: "AI Workflow Automation Partner. We audit, build, and operate AI systems that deliver measurable operational impact.",
      },
    ],
  },

  globalReach: {
    eyebrow: "Where We Operate",
    title: {
      pre: "Thailand as the local launch point for\n",
      accent: "regional AI growth.",
      post: "",
    },
    lede: "From Hong Kong headquarters to regional teams across Southeast Asia and beyond, we operate close to the markets we serve.",
    mapAlt: "Map of Asia highlighting the markets Basicware operates in",
    locations: {
      hongkong: { name: "Hong Kong", role: "Headquarters" },
      indonesia: { name: "Indonesia", role: "Regional Development" },
      vietnam: { name: "Vietnam", role: "Partner Management" },
      malaysia: { name: "Malaysia", role: "Market Expansion" },
      japan: { name: "Japan", role: "Enterprise Partnerships" },
      nanjing: { name: "Nanjing", role: "China Operations" },
      cambodia: { name: "Cambodia", role: "Emerging Markets" },
      // TODO: confirm final copy for the Thailand role
      thailand: { name: "Thailand", role: "Local Launch Point" },
    },
  },

  cta: {
    eyebrow: "Next step",
    title: { pre: "Let’s leverage your ", accent: "business", post: " with AI" },
    lede: "Be one of enterprises and public sectors who are always one step ahead.",
    button: "Get in touch",
    email: "hello@basicware.th.ai",
  },

  contact: {
    eyebrow: "Get In Touch",
    title: {
      pre: "Ready to Accelerate Your Business Growth with ",
      accent: "AI",
      post: "?",
    },
    lede: "Transform how your business creates content, scales marketing, deploys digital employees, controls AI costs, and builds AI-ready talent. One integrated ecosystem, built to drive real growth.",
    email: "hello@basicware.th.ai",
    form: {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      company: "Company",
      phone: "Phone number",
      serviceLabel: "Service you’re interested in",
      servicePlaceholder: "Select a service",
      services: [
        "Centralized AI",
        "AIGC & Marketing",
        "Digital Employee",
        "AI Talent Education",
        "Other",
      ],
      goalLabel: "Your goal",
      goalOptional: "(optional)",
      submit: "Send message",
      success: "Thanks — we’ll be in touch shortly.",
    },
  },

  footer: {
    tagline: {
      pre: "One ecosystem to reinvent\nhow your ",
      accent: "business works.",
      post: "",
    },
    about:
      "We partner with the world’s top AI model developers, working side by side with clients to turn AI into real impact and business growth.",
    learnMore: "Learn more",
    cta: "Get in touch",
    solutionsTitle: "Solutions",
    solutions: [
      { label: "Model Gateway & Token Control", href: "/services/centralized-ai" },
      { label: "AI Content & Marketing Growth", href: "/services/aigc-marketing" },
      { label: "Digital Workforce", href: "/services/digital-employee" },
      { label: "AI Talent Development", href: "/services/ai-talent-education" },
    ],
    contactTitle: "Contact",
    email: "hello@basicware.th.ai",
    phone: "(+66) 951 905 163",
    copyright: "© 2026 Basicware Thailand. All rights reserved.",
  },
};
