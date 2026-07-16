import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CtaSection from "@/components/sections/CtaSection";
import AboutBrandStory from "@/components/sections/about/AboutBrandStory";
import AboutCoreConcept from "@/components/sections/about/AboutCoreConcept";
import AboutRole from "@/components/sections/about/AboutRole";
import AboutValues from "@/components/sections/about/AboutValues";
import { content } from "@/content";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: `About Us — ${content.nav.brand}`,
  description: aboutContent.brandStory.paragraphs[0],
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutBrandStory />
        <AboutCoreConcept />
        <AboutRole />
        <AboutValues />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
