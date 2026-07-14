import { en } from "./en";

/**
 * Every locale dictionary must match the shape of the English one.
 * When Thai copy arrives: create ./th.ts (`export const th: SiteContent = {...}`),
 * add it to DICTIONARIES, and add "th" to Locale.
 */
export type SiteContent = typeof en;
export type Locale = "en";

const DICTIONARIES: Record<Locale, SiteContent> = { en };

export const DEFAULT_LOCALE: Locale = "en";

export function getContent(locale: Locale = DEFAULT_LOCALE): SiteContent {
  return DICTIONARIES[locale];
}

/** Convenience export for the current single-locale phase. */
export const content = getContent();
