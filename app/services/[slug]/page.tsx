import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicePageTemplate from "@/components/sections/service/ServicePageTemplate";
import { getServiceContent, serviceSlugs } from "@/content/services/registry";
import { content } from "@/content";

type PageParams = { slug: string };

export function generateStaticParams(): PageParams[] {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceContent(slug);
  if (!service) return {};

  return {
    title: `${service.meta.title} — ${content.nav.brand}`,
    description: service.meta.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const service = getServiceContent(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main>
        <ServicePageTemplate content={service} />
      </main>
      <Footer />
    </>
  );
}
