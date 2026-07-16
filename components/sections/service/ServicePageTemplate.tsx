import ServiceHero from "./ServiceHero";
import ServiceProblem from "./ServiceProblem";
import ServiceSolution from "./ServiceSolution";
import ServicePlatform from "./ServicePlatform";
import ServicePartner from "./ServicePartner";
import ServiceSupportedModels from "./ServiceSupportedModels";
import ServiceCaseStudies from "./ServiceCaseStudies";
import ServiceFaqs from "./ServiceFaqs";
import ServiceCta from "./ServiceCta";
import type { ServiceContent } from "@/content/services/types";

/**
 * Renders a full /services/[slug] page body from a ServiceContent object:
 * Hero → Problem → Solution → Platform → [Partner] → [Supported models] →
 * [Case studies] → [FAQs] → CTA. Bracketed sections only render when the
 * content object supplies them, so each page only shows what applies to it.
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
      {content.partner && <ServicePartner content={content.partner} />}
      {content.supportedModels && <ServiceSupportedModels content={content.supportedModels} />}
      {content.caseStudies && <ServiceCaseStudies content={content.caseStudies} />}
      {content.faqs && <ServiceFaqs content={content.faqs} />}
      <ServiceCta content={content.cta} />
    </>
  );
}
