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
  // Problem/Solution/Platform are always sections 01/02/03. The remaining
  // sections are optional per service, so their numbers shift to match
  // whichever of Partner/Models/Cases/FAQ this content actually supplies.
  let n = 3;
  const partnerNumber = content.partner ? ++n : undefined;
  const modelsNumber = content.supportedModels ? ++n : undefined;
  const casesNumber = content.caseStudies ? ++n : undefined;
  const faqsNumber = content.faqs ? ++n : undefined;

  return (
    <>
      <ServiceHero content={content.hero} />
      <ServiceProblem content={content.problem} />
      <ServiceSolution content={content.solution} />
      <ServicePlatform content={content.platform} />
      {content.partner && (
        <ServicePartner content={content.partner} sectionNumber={partnerNumber!} />
      )}
      {content.supportedModels && (
        <ServiceSupportedModels content={content.supportedModels} sectionNumber={modelsNumber!} />
      )}
      {content.caseStudies && (
        <ServiceCaseStudies content={content.caseStudies} sectionNumber={casesNumber!} />
      )}
      {content.faqs && <ServiceFaqs content={content.faqs} sectionNumber={faqsNumber!} />}
      <ServiceCta content={content.cta} />
    </>
  );
}
