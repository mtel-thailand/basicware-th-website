import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import { content } from "@/content";

export const metadata: Metadata = {
  title: `Contact — ${content.nav.brand}`,
  description: content.contact.lede,
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
