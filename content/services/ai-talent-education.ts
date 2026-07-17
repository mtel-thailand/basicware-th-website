import type { ServiceContent } from "./types";

export const aiTalentEducation: ServiceContent = {
  slug: "ai-talent-education",

  meta: {
    title: "AI Talent Education — Certified AI Training",
    description:
      "Certified AI training for marketers, engineers, HR and executives — online and in-person across Hong Kong, Macao and Southeast Asia, co-certified with Pearson.",
  },

  hero: {
    chip: "NEW COHORT · ENROLLING",
    title: {
      pre: "",
      accent: "AI Talent Development",
      post: " & Certification",
    },
    lede: "Certified AI training for marketers, engineers, HR and executives. Online and in-person programs across Hong Kong, Macao and Southeast Asia, with Pearson co-certification.",
    ctaLabel: "Talk to Our Team",
    terminal: [
      { text: "$ enroll --track marketing", tone: "base" },
      { text: "  ✓ curriculum: role-specific labs", tone: "success" },
      { text: "  ✓ delivery: online + in-person", tone: "success" },
      { text: "  ✓ co-cert: Pearson × TikTok", tone: "success" },
      { text: "● recognized across APAC + beyond", tone: "accent" },
      { text: "  50,000 learners · 30+ countries", tone: "dim" },
    ],
  },

  problem: {
    eyebrow: "The problem",
    heading: "You bought the tools but nobody's using them efficiently.",
    points: [
      {
        title: "Tools without people",
        body: "Most organizations have invested in AI tools but haven't invested in their people.",
      },
      {
        title: "Low adoption, high resistance",
        body: "The result is underutilized technology, low adoption, and a workforce that treats AI as a risk rather than an advantage.",
      },
      {
        title: "The gap keeps widening",
        body: "Without structured training, the gap between what AI can do and what your team actually does widens.",
      },
    ],
  },

  solution: {
    eyebrow: "The solution",
    heading: "A talent pipeline for the AI era.",
    intro:
      "An AI talent development system covering the Asia-Pacific region, in partnership with BytePlus (ByteDance) and Pearson.",
    points: [
      {
        icon: "globe",
        title: "Regional Training Network",
        body: "Cooperating with universities and local governments in Hong Kong, Macao and Southeast Asia, we provide online and offline training programs to build standardized pathways for AI talent development and continuously supply skilled professionals to the industry.",
      },
      {
        icon: "shield",
        title: "Globally Recognized Certification",
        body: "Earn AI credentials co-certified by TikTok and Pearson — recognized by enterprises and governments across APAC and beyond, giving your team a portable, verifiable qualification that employers trust.",
      },
      {
        icon: "sliders",
        title: "Role-Specific Curriculum",
        body: "No generic AI theory. Marketers, engineers, HR, executives, and operations teams each follow a dedicated track built around real workflows — so training converts directly into on-the-job capability.",
      },
    ],
  },

  platform: {
    eyebrow: "Platform spec",
    heading: "Capabilities",
    features: [
      {
        title: "Online Courses for Distributed Teams",
        description: "Flexible and self-paced AI skill training accessible from anywhere.",
      },
      {
        title: "Offline Courses",
        description:
          "In-person AI training delivered through regional education partners with structured assessments, group workshops, and real-world case studies.",
      },
      {
        title: "AI Engineer Certification",
        description:
          "Earn a globally recognized AI engineering certification co-certified by TikTok and Pearson — acknowledged by enterprises and governments across the APAC region and beyond.",
      },
      {
        title: "Curriculum Built for Professionals",
        description:
          "Role-specific learning tracks for marketers, engineers, HR professionals, executives, and operations teams.",
      },
    ],
  },

  caseStudies: {
    eyebrow: "Results",
    heading: "Proof, not promises.",
    items: [
      {
        clientName: "Kotler",
        industry: "Marketing",
        headline:
          "AI FIRST — launched by Kotler Impact, ByteDance, and Basicware, delivering accessible AI education for everyone in the AI economy.",
        challenge:
          "Despite widespread recognition that AI literacy is becoming an essential workforce competency, there was no globally scaled, institutionally credible programme that could deliver practical AI education beyond the tech sector. Kotler Impact — a world-leading marketing and business transformation organisation — identified a critical gap: executives, marketers, educators, and non-technical professionals across emerging and developed markets lacked accessible, high-quality AI upskilling pathways aligned to real business contexts.",
        solution:
          "Basicware partnered with Kotler Impact and ByteDance (parent of TikTok) to co-launch \"AI FIRST\" — a global AI education and digital transformation initiative. Basicware contributed its proprietary AI education curriculum, platform infrastructure, and localisation capabilities, enabling the programme to deploy practical, business-contextualised AI training across 30+ countries.",
        quote:
          "AI is no longer an optional skill – it is a fundamental requirement for the future workforce and global progress. AI FIRST is built on the belief that AI education should not be limited to technical experts.",
        quoteSpeaker: "Sadia Kibria, President and Global CEO, Kotler Impact & World Marketing Summit Group",
        results: [
          { value: 3, label: "Global strategic partners" },
          { value: 50000, grouped: true, label: "Learners globally" },
          { value: 30, suffix: "+", label: "Countries in programme rollout" },
        ],
      },
    ],
  },

  faqs: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        question: "What is AI talent development and why does it matter?",
        answer:
          "AI talent development is structured training that turns your existing workforce into confident, skilled AI users. Most organizations have invested in AI tools but not in their people. The result is underutilized technology, low adoption, and teams that treat AI as a risk rather than an advantage. A structured talent development program closes the gap between what AI can do and what your team actually does with it.",
      },
      {
        question: "Who are these AI training programs designed for?",
        answer:
          "The curriculum is built for working professionals, with role-specific learning tracks for marketers applying AI to content, campaigns, and audience insights; engineers building and deploying AI-powered systems; HR professionals using AI for recruitment, people operations, and workforce planning; executives on AI strategy, governance, and organizational adoption; and operations teams automating and optimizing day-to-day workflows.",
      },
      {
        question: "What is the AI Engineer Certification and who recognizes it?",
        answer:
          "The AI Engineer Certification is a globally recognized credential co-certified by TikTok and Pearson. It is acknowledged by enterprises and governments across the APAC region and beyond, giving certified professionals a portable, verifiable qualification that signals job-ready AI engineering skills to employers.",
      },
      {
        question: "Are the AI courses available online, in person, or both?",
        answer:
          "Both. Online courses are flexible and self-paced, designed for distributed teams who need to learn from anywhere. Offline courses are delivered in person through regional education partners and include structured assessments, group workshops, and real-world case studies. Many organizations combine the two — online foundations followed by in-person applied workshops.",
      },
      {
        question: "Which regions do the training programs cover?",
        answer:
          "Programs are delivered across Southeast Asia, in cooperation with universities and local governments throughout the region. This regional network creates standardized pathways for AI talent development across the Asia-Pacific and a continuous supply of skilled AI professionals to industry.",
      },
      {
        question: "How does AI training improve AI adoption inside a company?",
        answer:
          "Training converts AI investment into actual usage. When employees understand what AI tools can do in their specific role and have practiced with real workflows and case studies, adoption rises, resistance drops, and the technology starts producing measurable returns. Structured training also creates internal AI champions who spread capability across teams.",
      },
      {
        question: "Can enterprises train entire teams or departments?",
        answer:
          "Yes. The program is designed to scale from individual learners to organization-wide talent development. Role-specific tracks mean marketing, engineering, HR, executive, and operations teams can each follow a relevant pathway, while online delivery supports distributed teams and in-person workshops serve co-located groups.",
      },
      {
        question: "Do universities and governments participate in these programs?",
        answer:
          "Yes. The programs are run in cooperation with universities and local governments across Southeast Asia. These partnerships establish standardized regional pathways for AI talent development and ensure the certification aligns with both academic standards and government workforce priorities.",
      },
      {
        question: "How do I enroll in an AI training program or certification?",
        answer:
          "Individuals can start with flexible, self-paced online courses, while organizations can arrange role-based training tracks or in-person programs through regional education partners. Contact the team to match your goals — individual certification, team upskilling, or enterprise-wide AI talent development with the right learning pathway.",
      },
    ],
  },

  cta: {
    lede: "Stop letting your AI investment go underused. Equip your team with the skills to turn AI from a risk into a real advantage through certified training.",
    buttonLabel: "Talk to Our Team",
    href: "/contact",
  },
};
