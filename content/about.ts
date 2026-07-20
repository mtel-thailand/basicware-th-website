/**
 * Copy for the /about page — kept separate from content/en.ts (owned by
 * another workstream) so this page can ship without touching the shared
 * dictionary. Mirrors the { pre, accent, post } segment shape used across
 * the site for headings with a blue accent word.
 */
import type { AccentSegments } from "@/components/ui/AccentText";

export const aboutContent = {
  brandStory: {
    eyebrow: "Our story",
    title: { pre: "Brand ", accent: "story", post: "" } satisfies AccentSegments,
    paragraphs: [
      "Basicware AI partners with world-class top AI large model (LLM) developers through commercial research and application, focusing on being an AI business co-creation partner for global clients and building a bridge between clients and business value with an enterprise community mindset.",
      "We focus on AI technology implementation, abandon superficial technical concepts, integrate cutting-edge AI technologies into clients' entire business processes with the world's latest top AI technologies and agile iteration capabilities, solve pain points such as difficult technology landing, weak business transformation and blocked cross-border expansion, and move forward side by side with clients as partners.",
      "The brand adheres to the core propositions of client success, global cutting-edge tech confidence, and global symbiosis. Embracing the world's latest cutting-edge AI technologies and facing the global market, we help enterprises break geographical and industry barriers, optimize business processes and explore growth space. In the future, we will continue to take AI as the bond to jointly build a business ecosystem and expand global markets with global clients, unlocking unlimited corporate potential.",
    ],
  },

  coreConcept: {
    eyebrow: "Brand core concept",
    title: {
      pre: "Brand core ",
      accent: "concept",
      post: "",
    } satisfies AccentSegments,
    tagline: "AI Business Co-Creation",
    detail:
      "Basicware AI partners with world-class top AI large model (LLM) developers through commercial research and application, to jointly build an AI business co-creation partner that forms an enterprise community with global clients.",
    description:
      "Relying on the world's latest cutting-edge AI technologies, we regard every client as a fellow entrepreneurial buddy. With agile and intelligent iteration capabilities, we continuously integrate AI technologies into clients' business scenarios, co-create innovative business models, and jointly explore global markets.",
  },

  role: {
    eyebrow: "How we partner",
    title: { pre: "Our ", accent: "role", post: "" } satisfies AccentSegments,
    tagline: "AI Enabler of Enterprise Community",
    description:
      "For Basicware AI, the value of AI has never been one-way technology output, but in-depth symbiosis with clients' businesses. The future of business is never individual combat, but community collaboration featuring resource sharing, risk sharing and growth sharing.",
    points: [
      {
        number: "01",
        title: "Build a Symbiotic Community with Clients via AI",
        body: 'We always integrate into the entire business process of clients as a "partner" rather than a "supplier". From in-depth analysis of business pain points and exploration of AI application scenarios, to iterative innovation of business models and formulation of global market expansion strategies, we think and act in sync with clients.',
      },
      {
        number: "02",
        title: "Agile Iteration, Empowering Businesses Continuously with AI",
        body: 'We deeply believe that "standing still means falling behind". With our continuous adaptation, fast-changing AI and market trends, turning cutting-edge innovation into practical solutions will help enterprises optimize operations, unlock new growth opportunities, and stay competitive.',
      },
      {
        number: "03",
        title:
          "Rooted in Global Innovation, Open Unlimited Opportunities with Top Vision",
        body: "Embracing the world's latest cutting-edge AI, global technological expertise, international service vision and resource integration capabilities. We not only help clients break geographical barriers but also explore cross-border business opportunities and expand into global markets, using AI to overcome geographical limits and unlock new growth potential.",
      },
    ],
  },

  values: {
    eyebrow: "Our values",
    title: { pre: "What drives ", accent: "us", post: "" } satisfies AccentSegments,
    cards: [
      {
        title: "Customer Success",
        body: "All technological innovations and service layouts are centered on clients' business goals and oriented towards measurable business growth, realizing value symbiosis between the brand and clients.",
      },
      {
        title: "Global Tech Pride",
        body: "Based on the world's latest cutting-edge AI technologies, we deliver high-quality and highly reliable AI business solutions to the world, demonstrating the vision and strength of a global technology brand.",
      },
      {
        title: "Global Community",
        body: "Break industry and geographical barriers, connect global clients and resources, and build a business ecosystem featuring resource interconnection, joint business expansion and long-term symbiosis, enabling every member to achieve growth through collaboration.",
      },
      {
        title: "Agile & Clever",
        body: "Keep up with AI technology innovations in a lightweight and efficient manner, quickly transform cutting-edge achievements into implementable application solutions for clients, and continuously inject new vitality into businesses.",
      },
      {
        title: "Client as Buddy (CAB)",
        body: "Abandon the traditional supply-demand partnership, regard every client as an equal entrepreneurial partner, share opportunities and risks, and move forward side by side on the road of global market expansion.",
      },
    ],
  },
};

export type AboutContent = typeof aboutContent;
