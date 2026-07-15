import type { ServiceContent } from "./types";

export const centralizedAi: ServiceContent = {
  slug: "centralized-ai",

  meta: {
    title: "Centralized AI — BasicRouter",
    description:
      "Access GPT, Claude, Gemini, Qwen, DeepSeek and more through one API. Switch models with one parameter. Enterprise security and unified billing.",
  },

  hero: {
    eyebrow: "Centralized AI",
    title: {
      pre: "",
      accent: "BasicRouter",
      post: ": The Unified AI Gateway — One API for Every Leading Model",
    },
    lede: "Access GPT, Claude, Gemini, Qwen, DeepSeek and more through one API. Switch models with one parameter. Enterprise security and unified billing.",
  },

  problem: {
    eyebrow: "The challenge",
    heading: "The problem",
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
    eyebrow: "Our approach",
    heading: "The solution",
    intro:
      "We help brands rebuild their content engine with AI, turning production pressure into a competitive edge with significantly lower costs and faster cycles using BasicRouter.",
    points: [
      {
        title: "Unified Gateway",
        body: "BasicRouter is a unified AI gateway connecting your app to 10+ top models via a single API.",
      },
      {
        title: "Zero-Reintegration Switching",
        body: "Switch models with one parameter, no reintegration.",
      },
      {
        title: "Secure & Auditable",
        body: "Requests are securely routed with encryption, role-based permissions, and a full audit trail.",
      },
      {
        title: "Centralized Billing",
        body: "A centralized billing dashboard shows real-time usage and costs across your team, so you always track your AI spend and its value.",
      },
    ],
  },

  platform: {
    eyebrow: "The platform",
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
      "Google Gemini Series",
      "GPT Series",
      "Claude Series",
      "Qwen Series",
      "Seedream Series",
      "Doubao Series",
      "DeepSeek",
      "GLM",
      "Kimi",
      "MiniMax Series",
    ],
  },

  cta: {
    lede: "Access every leading AI model through a single API, with enterprise-grade security and full cost visibility. Talk to our team to get started.",
    buttonLabel: "Get Access",
    href: "/contact",
  },
};
