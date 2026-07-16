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

export type ServiceCaseStudyResult = {
  value: string;
  label: string;
};

export type ServiceCaseStudy = {
  clientName: string;
  industry: string;
  /** Not every case study has a standalone headline — omit to skip. */
  headline?: string;
  challenge: string;
  solution: string;
  /** Some case studies only give a speaker/title with no quote text — omit both if neither exists. */
  quote?: string;
  quoteSpeaker?: string;
  results: ServiceCaseStudyResult[];
};

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceSupportedModel = {
  name: string;
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
    /** Optional short chip list (e.g. "Roles available") shown under the intro. */
    tags?: {
      heading: string;
      items: string[];
    };
  };

  platform: {
    eyebrow: string;
    heading: string;
    features: ServicePlatformFeature[];
  };

  /** Only Centralized AI has a model roster — omit on other service pages. */
  supportedModels?: {
    eyebrow: string;
    heading: string;
    models: ServiceSupportedModel[];
  };

  /** Implementation/strategic partner spotlight — omit when not applicable. */
  partner?: {
    eyebrow: string;
    heading: string;
    name: string;
    body: string;
    capabilitiesHeading: string;
    capabilities: ServicePlatformFeature[];
  };

  /** Omit when the page has no case studies yet. */
  caseStudies?: {
    eyebrow: string;
    heading: string;
    items: ServiceCaseStudy[];
  };

  /** Omit when the page has no FAQ content yet. */
  faqs?: {
    eyebrow: string;
    heading: string;
    items: ServiceFaqItem[];
  };

  cta: {
    lede: string;
    buttonLabel: string;
    href: string;
  };
};
