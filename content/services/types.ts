import type { AccentSegments } from "@/components/ui/AccentText";

/**
 * Shared content shape for every /services/[slug] page.
 *
 * Add a new service page by:
 *   1. Creating content/services/<slug>.ts exporting a `ServiceContent` object.
 *   2. Registering it in content/services/registry.ts.
 * The route, metadata, and every section then render automatically via
 * ServicePageTemplate — no new components or CSS required for typical content.
 */

export type ServicePainPoint = {
  /** Short label for the icon-flanked card. Omit to render body-only. */
  title?: string;
  body: string;
};

export type ServiceSolutionPoint = {
  title: string;
  body: string;
};

export type ServicePlatformFeature = {
  title: string;
  description: string;
};

export type ServiceContent = {
  /** Must match the folder slug under app/services/[slug], e.g. "centralized-ai" */
  slug: string;

  meta: {
    title: string;
    description: string;
  };

  hero: {
    eyebrow: string;
    /** The page's single <h1>. Split so one segment can render as the accent color. */
    title: AccentSegments;
    lede: string;
  };

  problem: {
    eyebrow: string;
    heading: string;
    points: ServicePainPoint[];
  };

  solution: {
    eyebrow: string;
    heading: string;
    intro: string;
    points: ServiceSolutionPoint[];
  };

  platform: {
    eyebrow: string;
    heading: string;
    features: ServicePlatformFeature[];
  };

  supportedModels: {
    eyebrow: string;
    heading: string;
    models: string[];
  };

  cta: {
    lede: string;
    buttonLabel: string;
    href: string;
  };
};
