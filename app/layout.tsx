import type { Metadata } from "next";
import {
  Saira,
  Outfit,
  JetBrains_Mono,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { content } from "@/content";
import SmoothScroll from "@/components/motion/SmoothScroll";
import CursorTrail from "@/components/motion/CursorTrail";
import ScrollProgress from "@/components/motion/ScrollProgress";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${saira.variable} ${outfit.variable} ${jetbrains.variable} ${jakarta.variable}`}
    >
      <body>
        <SmoothScroll />
        <CursorTrail />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
