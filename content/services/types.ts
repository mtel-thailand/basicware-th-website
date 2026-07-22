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

/** Icon keys rendered by ServiceSolution — see ICONS in that file for the glyph set. */
export type ServiceSolutionIcon =
  | "hub"
  | "switch"
  | "shield"
  | "chart"
  | "sliders"
  | "handoff"
  | "trend"
  | "bolt"
  | "globe";

export type ServiceSolutionPoint = {
  title: string;
  body: string;
  /** Defaults to "hub" when omitted. */
  icon?: ServiceSolutionIcon;
};

export type ServiceTerminalLine = {
  text: string;
  /** Terminal syntax-highlight tone — see ServiceHero.module.css for the palette. */
  tone?: "base" | "dim" | "comment" | "accent" | "success";
};

export type ServicePlatformFeature = {
  title: string;
  description: string;
};

/** Icon keys rendered by ServicePartner's capability grid — see ICON_PATHS in that file. */
export type ServicePartnerCapabilityIcon =
  | "code"
  | "integration"
  | "platform"
  | "cloud"
  | "design"
  | "testing";

export type ServicePartnerCapability = ServicePlatformFeature & {
  icon: ServicePartnerCapabilityIcon;
};

export type ServiceCaseStudyResult = {
  /** Animated count-up target, e.g. 63200 for "63,200" or 40 for "40x". */
  value: number;
  prefix?: string;
  suffix?: string;
  /** Group thousands with commas, e.g. 63200 -> "63,200". */
  grouped?: boolean;
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
  /** Path under /public, e.g. "/images/models/gemini.png". Omit for a text-only card. */
  logo?: string;
};

export type ServiceContent = {
  /** Must match the folder slug under app/services/[slug], e.g. "centralized-ai" */
  slug: string;

  meta: {
    title: string;
    description: string;
  };

  hero: {
    /** Status pill above the title, e.g. "BASICROUTER · NOW LIVE". */
    chip: string;
    /** The page's single <h1>. Split so one segment can render as the accent color. */
    title: AccentSegments;
    lede: string;
    ctaLabel: string;
    /** Animated lines in the hero's terminal-window visual, typed in one at a time. */
    terminal: ServiceTerminalLine[];
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
    /** Visible section heading — segments rendered via AccentText. */
    heading: AccentSegments;
    /** The AI platform side of the partnership, e.g. OpenClaw. */
    counterpart: { name: string; role: string };
    /** The partner's name, e.g. "Mtel (Thailand)". */
    name: string;
    /** The partner's role in the partnership, e.g. "Enterprise Implementation Partner". */
    role: string;
    /** Path under /public, e.g. "/images/partners/mtel.png". Omit to render name-only. */
    logo?: string;
    /** External site to link out to — omit to render no link. */
    href?: string;
    body: string;
    /** Role-based digital employee roles to visualize as pills flowing from the partnership. */
    roles: string[];
    capabilitiesHeading: string;
    capabilities: ServicePartnerCapability[];
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
