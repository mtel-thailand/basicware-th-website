import type { ServiceContent } from "./types";
import { centralizedAi } from "./centralized-ai";
import { aigcMarketing } from "./aigc-marketing";
import { digitalEmployee } from "./digital-employee";
import { aiTalentEducation } from "./ai-talent-education";

/**
 * Slug → content registry backing app/services/[slug]/page.tsx.
 * Register a new page here once its content file exists.
 */
export const services: Record<string, ServiceContent> = {
  "centralized-ai": centralizedAi,
  "aigc-marketing": aigcMarketing,
  "digital-employee": digitalEmployee,
  "ai-talent-education": aiTalentEducation,
};

export const serviceSlugs = Object.keys(services);

export function getServiceContent(slug: string): ServiceContent | undefined {
  return services[slug];
}
