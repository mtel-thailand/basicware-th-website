import type { Metadata } from "next";
import GrowthLoopTechnical from "@/components/sandbox/growth-loop-technical/GrowthLoopTechnical";

export const metadata: Metadata = {
  title: "Sandbox — Technical Growth Loop",
  description:
    "A technical visualization direction for Basicware's AI Marketing Growth Services loop.",
  robots: { index: false, follow: false },
};

export default function GrowthLoopTechnicalPage() {
  return <GrowthLoopTechnical />;
}
