import type { ServiceContent } from "./types";

export const centralizedAi: ServiceContent = {
  slug: "centralized-ai",

  meta: {
    title: "Centralized AI — BasicRouter",
    description:
      "Access GPT, Claude, Gemini, Qwen, DeepSeek and more through one API. Switch models with one parameter. Enterprise security and unified billing.",
  },

  hero: {
    chip: "BASICROUTER · NOW LIVE",
    title: {
      pre: "Every model. ",
      accent: "One API.",
      post: "",
    },
    lede: "GPT, Claude, Gemini, Qwen, DeepSeek and more — behind a single integration. Switch models with one parameter. Enterprise security, one bill, zero vendor sprawl.",
    ctaLabel: "Get Access",
    terminal: [
      { text: "$ curl api.basicrouter.ai/v1/chat \\", tone: "base" },
      { text: "    -d '{ \"model\": \"gpt-5.4\", ... }'", tone: "dim" },
      { text: "  → 200 OK · 412ms", tone: "accent" },
      { text: "$ # switch models — one parameter", tone: "comment" },
      { text: "    -d '{ \"model\": \"claude-opus\", ... }'", tone: "dim" },
      { text: "  → 200 OK · 388ms", tone: "accent" },
      { text: "✓ 10+ models · one key · one bill", tone: "success" },
    ],
  },

  problem: {
    eyebrow: "The problem",
    heading: "Ten vendors. Ten contracts. Zero speed.",
    points: [
      {
        title: "Vendor sprawl",
        body: "Managing multiple AI vendors means juggling contracts, integrations, billing systems, and security reviews for every new model you want to try.",
      },
      {
        title: "Procurement lag",
        body: "When the AI landscape shifts overnight, your team is stuck waiting for procurement. Businesses lose weeks to vendor overhead instead of shipping products.",
      },
    ],
  },

  solution: {
    eyebrow: "The solution",
    heading: "Integrate once. Never reintegrate.",
    intro:
      "BasicRouter is a unified AI gateway connecting your app to 10+ top models via a single API — turning vendor overhead into a competitive edge.",
    points: [
      {
        icon: "hub",
        title: "Unified Gateway",
        body: "One API connecting your app to 10+ top models — no per-vendor integrations.",
      },
      {
        icon: "switch",
        title: "Zero-Reintegration Switching",
        body: "Switch models with one parameter. No new SDKs, no code rewrites.",
      },
      {
        icon: "shield",
        title: "Secure & Auditable",
        body: "Encrypted routing, role-based permissions, and a full audit trail on every request.",
      },
      {
        icon: "chart",
        title: "Centralized Billing",
        body: "Real-time usage and cost across your whole team — one dashboard, one invoice.",
      },
    ],
  },

  platform: {
    eyebrow: "Platform spec",
    heading: "BasicRouter.ai platform",
    features: [
      {
        title: "Unified Access Standard",
        description: "One API interface for seamless access to globally leading AI models",
      },
      {
        title: "Rich Model Selection",
        description:
          "Deep integration with Alibaba Cloud Qwen, ByteDance, Doubao, DeepSeek, and OpenAI GPT-5.4",
      },
      {
        title: "Seamless Model Switching",
        description: "Flexibly adjust underlying model configuration without code changes",
      },
      {
        title: "Unified Token & Billing Control",
        description: "One place for everything you want to monitor.",
      },
      {
        title: "Continuous Expansion & Updates",
        description: "Automatically incorporates the latest top global models to stay ahead",
      },
      {
        title: "Enterprise-Grade Security",
        description: "Complete permission control and compliance management",
      },
      {
        title: "No Collection of User Q&A Data",
        description: "Your prompts and responses are never stored or used for training.",
      },
    ],
  },

  supportedModels: {
    eyebrow: "Model coverage",
    heading: "Supported models",
    models: [
      {
        logo: "/images/models/gemini.png",
        name: "Google Gemini Series",
        description:
          "Frontier multimodal AI for text, image, video, audio — with 1M-token context and unbeatable Flash pricing.",
      },
      {
        logo: "/images/models/openai.png",
        name: "OpenAI GPT Series",
        description:
          "Flagship reasoning and the largest ecosystem — the default for complex agentic and coding tasks.",
      },
      {
        logo: "/images/models/claude.png",
        name: "Anthropic Claude Series",
        description: "Leader in real-world coding and natural long-form writing, from Haiku to Opus.",
      },
      {
        logo: "/images/models/qwen.png",
        name: "Alibaba Qwen Series",
        description: "Frontier-class reasoning in 200+ languages at a fraction of Western flagship cost.",
      },
      {
        logo: "/images/models/seedance.png",
        name: "ByteDance Seedream Series",
        description: "State-of-the-art text-to-image generation for ad creatives and social content at scale.",
      },
      {
        logo: "/images/models/doubao.png",
        name: "ByteDance Doubao Series",
        description: "Best-in-class Chinese-language AI, tuned for Douyin/TikTok and China's digital ecosystem.",
      },
      {
        logo: "/images/models/deepseek.png",
        name: "DeepSeek",
        description: "Near-frontier coding performance at some of the lowest token prices on the market.",
      },
      {
        logo: "/images/models/glm.png",
        name: "Zhipu GLM",
        description: "Open-weight models with 1M-token context, built for long-horizon autonomous coding.",
      },
      {
        logo: "/images/models/kimi.png",
        name: "Moonshot Kimi",
        description: "Coding-first open-weight leader with exceptional long-document comprehension.",
      },
      {
        logo: "/images/models/minimax.png",
        name: "MiniMax Series",
        description: "Agentic reasoning plus text, speech, and video generation at open-weight economics.",
      },
    ],
  },

  faqs: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        question: "What is BasicRouter?",
        answer:
          "BasicRouter is a unified AI gateway that gives your application access to 10+ leading AI models — through a single API. Instead of managing separate vendor contracts, integrations, and billing systems, you integrate once and switch between models with a single parameter.",
      },
      {
        question: "How does a unified AI API gateway work?",
        answer:
          "BasicRouter sits between your application and multiple AI model providers. You send requests to one standardized API interface, and BasicRouter securely routes them to the model you specify. Requests are encrypted in transit, governed by role-based permissions, and logged with a full audit trail — so you get enterprise-grade control without building it yourself.",
      },
      {
        question: "Can I switch between AI models without changing my code?",
        answer:
          "Yes. Switching models on BasicRouter requires changing only one parameter in your API request — no reintegration, no new SDKs, and no code rewrites. This lets your team test, compare, and adopt new models in minutes instead of weeks.",
      },
      {
        question: "How does BasicRouter help reduce AI costs?",
        answer:
          "BasicRouter provides a centralized billing dashboard with real-time usage and cost tracking across your entire team. You can monitor spend per model, compare cost-performance across providers, and route workloads to lower-cost models (like DeepSeek or Gemini Flash) where they fit — all from one place, with one invoice.",
      },
      {
        question: "Is BasicRouter secure enough for enterprise use?",
        answer:
          "Yes. BasicRouter is built for enterprise security and compliance, with encrypted request routing, role-based access control, complete permission management, and a full audit trail of all API activity. This means one security review covers your entire multi-model AI stack.",
      },
      {
        question: "Does BasicRouter store or train on my prompts and data?",
        answer:
          "No. BasicRouter does not collect, store, or use your prompts and responses for training. Your Q&A data passes through the gateway securely and is never retained.",
      },
      {
        question: "Who is BasicRouter for?",
        answer:
          "BasicRouter is built for engineering, product, and content teams that want to use the best AI model for each task without vendor overhead. It's especially valuable for businesses rebuilding their content engine with AI, teams running multi-model workloads, and enterprises that need centralized governance, cost visibility, and compliance across all AI usage.",
      },
      {
        question: "Can BasicRouter handle multimodal tasks like image or video generation?",
        answer:
          "Yes. Through supported models such as Google Gemini (text, image, video, and audio), ByteDance Seedream (text-to-image for ad creatives and social content), and MiniMax (text, speech, and video generation), BasicRouter supports multimodal workloads through the same unified API.",
      },
      {
        question: "How quickly can I get started with BasicRouter?",
        answer:
          "Because BasicRouter uses one standardized API interface, most teams can integrate in a fraction of the time required for a single direct vendor integration. To get started, contact our team through the \"Get Access\" page and we'll help you connect your application to every leading AI model.",
      },
    ],
  },

  cta: {
    lede: "Access every leading AI model through a single API, with enterprise-grade security and full cost visibility. Talk to our team to get started.",
    buttonLabel: "Get Access",
    href: "/contact",
  },
};
