import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import AigcProduction from "@/components/sections/AigcProduction";
import GrowthLoop from "@/components/sections/GrowthLoop";
import AiWorkers from "@/components/sections/AiWorkers";
import ModelGateway from "@/components/sections/ModelGateway";
import Education from "@/components/sections/Education";
import Partnership from "@/components/sections/Partnership";
import GlobalReach from "@/components/sections/GlobalReach";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AigcProduction />
        <GrowthLoop />
        <AiWorkers />
        <ModelGateway />
        <Education />
        <Partnership />
        <GlobalReach />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
