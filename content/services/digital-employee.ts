import type { ServiceContent } from "./types";

/** Placeholder — full Digital Employee content lands in a later task. */
export const digitalEmployee: ServiceContent = {
  slug: "digital-employee",

  meta: {
    title: "Digital Employee",
    description: "Content for this page is coming soon.",
  },

  hero: {
    eyebrow: "Services",
    title: { pre: "Digital ", accent: "Employee", post: "" },
    lede: "Content for this page is coming soon. Check back soon for the full Digital Employee service page.",
  },

  problem: {
    eyebrow: "The challenge",
    heading: "The problem",
    points: [{ body: "Content for this page is coming soon." }],
  },

  solution: {
    eyebrow: "Our approach",
    heading: "The solution",
    intro: "Content for this page is coming soon.",
    points: [
      { title: "Coming soon", body: "Content for this page is coming soon." },
    ],
  },

  platform: {
    eyebrow: "The platform",
    heading: "Platform",
    features: [
      { title: "Coming soon", description: "Content for this page is coming soon." },
    ],
  },

  supportedModels: {
    eyebrow: "Coverage",
    heading: "Supported models",
    models: ["Coming soon"],
  },

  cta: {
    lede: "Want to learn more about this service? Get in touch with our team.",
    buttonLabel: "Contact Us",
    href: "/contact",
  },
};
