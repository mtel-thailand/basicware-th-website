import ServiceHero from "./ServiceHero";
import ServiceProblem from "./ServiceProblem";
import ServiceSolution from "./ServiceSolution";
import ServicePlatform from "./ServicePlatform";
import ServiceSupportedModels from "./ServiceSupportedModels";
import ServiceCta from "./ServiceCta";
import type { ServiceContent } from "@/content/services/types";

/**
 * Renders a full /services/[slug] page body from a ServiceContent object:
 * Hero → Problem → Solution → Platform → Supported models → CTA.
 *
 * Callers (app/services/[slug]/page.tsx) wrap this in Header/<main>/Footer —
 * this component owns only the section content, not page chrome.
 */
export default function ServicePageTemplate({
  content,
}: {
  content: ServiceContent;
}) {
  return (
    <>
      <ServiceHero content={content.hero} />
      <ServiceProblem content={content.problem} />
      <ServiceSolution content={content.solution} />
      <ServicePlatform content={content.platform} />
      <ServiceSupportedModels content={content.supportedModels} />
      <ServiceCta content={content.cta} />
    </>
  );
}
