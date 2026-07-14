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
    links: [
      { label: "Home", href: "#top", hasChevron: false },
      { label: "Solutions", href: "#solutions", hasChevron: true },
      { label: "About", href: "#about", hasChevron: false },
    ],
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
    title: {
      pre: "Transform your marketing with ",
      accent: "AI‑generated content",
      post: " that grows revenue.",
    },
    prompt:
      "Generate a premium Nature-Tech campaign from a dandelion concept.\nCreate copywriting, a 1:1 image, a short video concept, and a dandelion digital avatar broadcast.",
    model: "GPT-4o",
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
    title: { pre: "A growth ", accent: "loop", post: " that runs on autopilot" },
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
        name: "Thanakorn Wongchai",
        role: "Senior Marketing Manager",
        location: "Bangkok, Thailand",
        match: "95% Match",
      },
      {
        name: "Thanakorn Wongchai",
        role: "Senior Marketing Manager",
        location: "Bangkok, Thailand",
        match: "75% Match",
      },
      {
        name: "Siriporn Chaiyasit",
        role: "Digital Marketing Specialist",
        location: "Chiang Mai, Thailand",
        match: "50% Match",
      },
      {
        name: "Natthapong Suwan",
        role: "Brand Strategy Director",
        location: "Phuket, Thailand",
        match: "40% Match",
      },
    ],
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
        title: "Smart Audience Insights by BytePlus",
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
      "Model Gateway & Token Control",
      "AI Content & Marketing Growth",
      "Digital Workforce",
      "AI Talent Development",
    ],
    contactTitle: "Contact",
    email: "hello@basicware.th.ai",
    phone: "(+66) 951 905 163",
    copyright: "© 2026 Basicware Thailand. All rights reserved.",
  },
};
