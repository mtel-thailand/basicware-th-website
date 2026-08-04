import type { ServiceContent } from "./types";

export const aigcMarketing: ServiceContent = {
  slug: "aigc-marketing",

  meta: {
    title: "AIGC & Marketing — AI Video Production",
    description:
      "Basicware produces AI-powered marketing content at scale — copy, video, avatars, and TikTok growth. Cut production costs 70% and boost GMV.",
  },

  hero: {
    chip: "AIGC ENGINE · LIVE",
    title: {
      pre: "",
      accent: "AI Video Production",
      post: ": Scale Production, Cut Costs, Grow on Every Platform",
    },
    lede: "Basicware produces AI-powered marketing content at scale — copy, video, avatars, and TikTok growth. Cut production costs 70% and boost GMV.",
    ctaLabel: "Let's Talk",
    terminal: [
      { text: "$ basicware render campaign_q3", tone: "base" },
      { text: "  ✓ copy ×24 · images ×36 · video ×8", tone: "success" },
      { text: "  ✓ avatars localized: TH · EN · ZH", tone: "success" },
      { text: "  ✓ human review: passed", tone: "success" },
      { text: "● publishing → tiktok · every platform", tone: "accent" },
      { text: "  elapsed: 4h 12m (was: 3 weeks)", tone: "dim" },
    ],
  },

  problem: {
    eyebrow: "The problem",
    heading: "The content treadmill is speeding up.",
    points: [
      {
        title: "Endless production pressure",
        body: "Marketing teams are under pressure to produce more and more.",
      },
      {
        title: "Slow, expensive production",
        body: "Content creation takes weeks and budgets keep climbing.",
      },
      {
        title: "Falling behind on quality",
        body: "Most brands can't produce fast enough to stay relevant — and when they do, quality is getting worse.",
      },
    ],
  },

  solution: {
    eyebrow: "The solution",
    heading: "An AI content engine, tuned for growth.",
    intro:
      "Deeply integrated with ByteDance's TikTok and VolcEngine, we use AI-generated content to produce marketing assets at scale — copy, images, short videos, and virtual livestreams.",
    featureBanner: {
      logo: "/logos/byteplus-volcengine.svg",
      poweredLabel: "Powered by",
      title: "Customer Data & Audience Insights",
    },
    points: [
      {
        icon: "sliders",
        title: "AI Content Production at Scale",
        body: "From copy and images to short videos and virtual livestreams — our AI pipeline turns weeks of production into hours, so your team ships more creative without growing headcount or budget.",
      },
      {
        icon: "bolt",
        title: "Data-Driven Growth Engine",
        body: "Our data-driven platform powers targeted advertising, audience insights, and private-domain growth to reduce costs, improve efficiency, and increase GMV across brands and e-commerce.",
      },
      {
        icon: "hub",
        title: "Native TikTok & ByteDance Integration",
        body: "Deeply integrated with TikTok and VolcEngine, we build content formats proven to perform on the platform — backed by end-to-end short-video strategy and performance optimization.",
      },
      {
        icon: "shield",
        title: "Human-in-the-Loop Quality",
        body: "AI handles the volume; your brand voice stays protected. A human review layer keeps every asset on-brand and editorial-grade — so speed never comes at the cost of quality.",
      },
    ],
  },

  platform: {
    eyebrow: "Platform spec",
    heading: "Capabilities",
    features: [
      {
        title: "Customer Data Platform",
        description:
          "Unify behavioral, transactional, and campaign data into one actionable customer view.",
      },
      {
        title: "Audience Segmentation",
        description:
          "Build targeted audience groups from customer behavior, interests, and purchase intent.",
      },
      {
        title: "Behavioral Insights",
        description:
          "Reveal engagement patterns, affinities, and signals that inform content and campaigns.",
      },
      {
        title: "Sentiment Analysis",
        description:
          "Understand how audiences feel about your brand, products, and emerging conversations.",
      },
      {
        title: "AI Copywriting",
        description: "Marketing copy, ad headlines, product descriptions, social posts.",
      },
      {
        title: "AI Image Generation",
        description: "Ad creatives and visual content, produced in hours not weeks.",
      },
      {
        title: "AI Video Production",
        description: "Automated editing, dynamic content generation.",
      },
      {
        title: "Digital Avatar Broadcast",
        description: "Virtual presenters with multi-language support.",
      },
      {
        title: "Multi-Platform Content Strategy",
        description: "Planning across every channel and platform.",
      },
      {
        title: "TikTok Growth",
        description: "End-to-end short-video strategy and performance optimization.",
      },
    ],
  },

  caseStudies: {
    eyebrow: "Results",
    heading: "Proof, not promises.",
    items: [
      {
        clientName: "MGM",
        industry: "Entertainment",
        headline: "From invisible to unmissable — 40x audience growth in a single month.",
        challenge:
          "The client was struggling to scale their digital presence in a competitive, multi-language market. Their content team was spending the majority of their time on low-impact production tasks, leaving little bandwidth for strategy. Existing tools were siloed, requiring manual handoffs between six different platforms and generating inconsistent brand output.",
        solution:
          "Basicware deployed a unified AI content and distribution platform, tailored to the client's brand voice and market. Our proprietary model blend handled ideation, creation, and channel optimisation simultaneously — across 12 languages and 6 platforms — with a human-in-the-loop review layer that kept editorial quality high without slowing output.",
        quote:
          "Basicware's AI solutions transformed our content strategy. The results in the first month alone exceeded everything we expected.",
        quoteSpeaker: "Head of Digital, MGM",
        results: [
          { value: 40, suffix: "x", label: "Audience growth" },
          { value: 63200, grouped: true, label: "New followers" },
          { value: 85, suffix: "%", label: "Less production time" },
        ],
      },
      {
        clientName: "Christie's",
        industry: "Gaming",
        challenge:
          "The client — a leading Southeast Asian online game operator spanning multiple platforms (AP/BP/PG) — faced a critical data fragmentation problem. Player behaviour was siloed across platforms and terminals, making it impossible to build a unified view of the player lifecycle. Without this, high-value player segments were invisible, personalised top-up incentives were guesswork, and incremental revenue opportunities were consistently missed.",
        solution:
          "Basicware deployed a cross-platform behavioural data unification and AI analytics system that bridged AP, BP, and PG platforms in real time. Our proprietary models constructed full lifecycle player behaviour paths, automatically identified high-value and high-risk segments, and triggered personalised top-up incentive campaigns with algorithmically optimised timing. An integrated content engine produced localised in-game messaging at scale.",
        quote:
          "The team understood our market from day one. They didn't just deliver technology — they delivered outcomes.",
        quoteSpeaker: "Director of Operations, Christie's",
        results: [
          { value: 28, suffix: "%", label: "Repeat top-up" },
          { value: 4, suffix: "M", label: "Incremental revenue" },
          { value: 66, suffix: "%", label: "Less production time" },
        ],
      },
      {
        clientName: "Bluepin",
        industry: "Hotel",
        headline: "A global campaign's worth of cinematic video — produced in one month.",
        challenge:
          "Bluepin needed a series of high-quality product promotional videos for a global marketing campaign but was constrained by long traditional production timelines and high agency costs. Existing marketing assets were insufficient to drive product visibility in international markets, and the team lacked the bandwidth and budget to produce broadcast-grade content at the volume and speed the campaign required.",
        solution:
          "Basicware deployed an end-to-end AI video production pipeline — covering scriptwriting, storyboarding, visual synthesis, voiceover, and post-production — tailored to Bluepin's brand identity and global audience. The integrated workflow compressed a project that would typically take 3–4 months into a single month, delivering a full series of cinematic-quality promotional videos ready for multi-market distribution.",
        quote:
          "Partnering with Basicware cut our marketing asset production time by 80%. Our promotional materials achieved 200% more views, and most importantly, we reduced marketing costs by 70%.",
        quoteSpeaker: "CEO of Bluepin, Gary",
        results: [
          { value: 200, suffix: "%", label: "Product exposure" },
          { value: 70, suffix: "%", label: "Lower marketing costs" },
          { value: 30, suffix: "%", label: "Less production time" },
        ],
      },
      {
        clientName: "HKBAV",
        industry: "Overseas Business Association",
        headline: "A culturally rich gala film, delivered on a deadline tradition couldn't meet.",
        challenge:
          "The Hong Kong Business Association Vietnam (HKBAV) needed a premium promotional film for their annual Gala Dinner — an event that celebrates Hong Kong's multicultural heritage and fosters cross-border business relationships. The challenge was to create a visually compelling, culturally nuanced film that honoured Hong Kong's identity while resonating with a diverse Vietnamese and international audience, all within a tight production window.",
        solution:
          "Basicware's creative and AI production team crafted a bespoke short film that wove together symbolic Hong Kong cultural motifs — from iconic cityscapes to traditional festivals — with a professional cinematographic narrative tailored for the Gala's prestige setting. AI-assisted scriptwriting, scene generation, and post-production delivered a cinematic-grade film within the event's production deadline.",
        quoteSpeaker: "Chairman, HKBAV",
        results: [
          { value: 1, label: "Bespoke promotional film produced" },
          { value: 5, label: "Cultural elements integrated" },
          { value: 30, suffix: "%", label: "Increase in event media coverage" },
        ],
      },
    ],
  },

  faqs: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        question: "What is Basicware's AI video production service?",
        answer:
          "Basicware is an AI-powered marketing content platform that produces marketing assets at scale — including ad copy, images, short videos, digital avatar broadcasts, and virtual livestreams. Deeply integrated with ByteDance's TikTok and VolcEngine, Basicware helps brands cut production costs while increasing output speed and GMV.",
      },
      {
        question: "How does AI video production reduce marketing costs?",
        answer:
          "Traditional video production requires scripting, shooting, editing, and post-production — a process that takes weeks and involves large teams. Basicware automates editing and generates dynamic video content with AI, turning weeks of work into hours. Brands using Basicware cut content production costs by up to 80% while producing significantly more assets per campaign.",
      },
      {
        question: "What types of marketing content can Basicware create with AI?",
        answer:
          "Basicware covers the full marketing content stack: AI copywriting for marketing copy, ad headlines, product descriptions, and social posts; AI image generation for ad creatives and visual content produced in hours, not weeks; AI video production with automated editing and dynamic video content generation; digital avatar broadcasts with virtual presenters supporting multiple languages; virtual livestreams for AI-driven live commerce content at scale; and multi-platform content strategy for planning and optimization across channels.",
      },
      {
        question: "What is a digital avatar broadcast and how do brands use it?",
        answer:
          "A digital avatar broadcast uses an AI-generated virtual presenter to deliver video content — product demos, announcements, livestream selling, and localized campaigns without cameras, studios, or on-screen talent. Basicware's avatars support multiple languages, so brands can localize the same campaign for different markets without reshooting anything.",
      },
      {
        question: "How does Basicware help brands grow on TikTok?",
        answer:
          "Basicware provides end-to-end TikTok growth services, from short-video content strategy to performance optimization. Because the platform is deeply integrated with ByteDance's TikTok and VolcEngine, brands benefit from data-driven targeting, audience insights, and content formats proven to perform on the platform — helping increase reach, engagement, and GMV.",
      },
      {
        question: "What is GMV and how does AI content help increase it?",
        answer:
          "Gross Merchandise Value measures the total value of goods sold through a channel — a core metric for e-commerce and social commerce brands. Basicware increases GMV by combining high-volume AI content production with data-driven advertising and audience insights, so brands can test more creatives, reach the right buyers, and convert more efficiently across platforms.",
      },
      {
        question: "Is AI-generated marketing content good enough quality for my brand?",
        answer:
          "Yes. The biggest quality problem in content marketing today is teams rushing to keep up with demand. AI production removes that bottleneck: Basicware generates on-brand copy, visuals, and video at scale, while your team focuses on strategy and creative direction. More testing volume also means you find your best-performing creative faster.",
      },
      {
        question: "Which platforms does Basicware support beyond TikTok?",
        answer:
          "While Basicware is deeply integrated with TikTok and ByteDance's VolcEngine, its multi-platform content strategy planning helps brands produce and adapt content for every major channel. The same AI pipeline can generate platform-appropriate copy, images, and video formats across your social and e-commerce presence.",
      },
      {
        question: "Who is Basicware for?",
        answer:
          "Basicware is built for marketing teams, brands, and e-commerce businesses under pressure to produce more content, faster, on tighter budgets — especially those selling on TikTok and other short-video platforms. If your team can't keep up with content demand or your production costs keep climbing, Basicware's AI content engine is designed for you.",
      },
    ],
  },

  cta: {
    lede: "Ready to scale your content without scaling your budget? See how AI-powered production and TikTok growth can work for your brand.",
    buttonLabel: "Let's Talk",
    href: "/contact",
  },
};
