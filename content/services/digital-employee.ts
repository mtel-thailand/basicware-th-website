import type { ServiceContent } from "./types";

export const digitalEmployee: ServiceContent = {
  slug: "digital-employee",

  meta: {
    title: "Digital Employee — AI Digital Employees",
    description:
      "Deploy autonomous AI employees for support, sales, HR, finance and marketing. Configured to your workflows, secured for enterprise, live in days.",
  },

  hero: {
    chip: "OPENCLAW · NOW HIRING",
    title: {
      pre: "",
      accent: "AI Digital Employees",
      post: " That Work Inside Your Existing Tools — Autonomous, 24/7, Enterprise-Ready",
    },
    lede: "Deploy autonomous AI employees for support, sales, HR, finance and marketing. Configured to your workflows, secured for enterprise, live in days.",
    ctaLabel: "Talk to Our Team",
    terminal: [
      { text: "$ openclaw deploy --role support", tone: "base" },
      { text: "  ✓ workflows synced (47 rules)", tone: "success" },
      { text: "  ✓ tone + escalation configured", tone: "success" },
      { text: "  ✓ channels: email · chat · social", tone: "success" },
      { text: "● agent on shift — 24/7", tone: "accent" },
      { text: "$ openclaw scale --to 50", tone: "base" },
      { text: "  → full department, zero hiring lag", tone: "dim" },
    ],
  },

  problem: {
    eyebrow: "The problem",
    heading: "Your best people are doing your worst work.",
    points: [
      {
        title: "Repetitive work eats capacity",
        body: "Your top staff keep doing repetitive, low-value tasks and handling the same support tickets, approvals, and reports.",
      },
      {
        title: "Backlog and burnout",
        body: "Limited headcount causes backlog and burnout.",
      },
      {
        title: "Competitors never stop",
        body: "Meanwhile, competitors are deploying AI workers that never sleep and never slow down.",
      },
    ],
  },

  solution: {
    eyebrow: "The solution",
    heading: "Double your workforce with AI digital employees.",
    intro:
      "With OpenClaw, we deploy AI digital employees that operate within your existing tools — no rip-and-replace.",
    points: [
      {
        icon: "sliders",
        title: "Configured to Your Workflows",
        body: "Each agent is configured to your workflows, tone, and escalation rules, then activated to run autonomously around the clock.",
      },
      {
        icon: "handoff",
        title: "Full-Context Handoff",
        body: "They handle repetitive, low-value tasks across all departments and hand off to your team with full context intact when needed.",
      },
      {
        icon: "trend",
        title: "Department-Level Productivity",
        body: "The productivity of a full department without the hiring timeline — scale up or down in days.",
      },
    ],
    tags: {
      heading: "Roles available",
      items: ["Brand Marketing", "Customer Support", "Sales Assistant", "HR", "Finance"],
    },
  },

  platform: {
    eyebrow: "Platform spec",
    heading: "Capabilities",
    features: [
      {
        title: "Ready on Day One",
        description:
          "Pre-built configurations for the most common roles and workflows, so your first AI employee is working in days, not months.",
      },
      {
        title: "Works Where Your Customers Are",
        description:
          "Connects natively to email, chat, social, and messaging channels — one AI employee, every touchpoint.",
      },
      {
        title: "Scale Your Team in One Click",
        description:
          "Deploy one AI employee or fifty from a single cloud dashboard, and scale up or down as your workload changes.",
      },
      {
        title: "One Bill, Full Visibility",
        description:
          "Unified billing plus a live monitoring view of what every AI employee is doing, what it costs, and what it's delivering.",
      },
    ],
  },

  partner: {
    eyebrow: "Strategic partnership",
    name: "Mtel (Thailand)",
    logo: "/images/partners/mtel.png",
    href: "https://www.mtel.co.th",
    body: "Through the partnership between Mtel (Thailand) and Enterprise-Grade Digital Employee powered by OpenClaw, enterprises can deploy role-based AI Digital Employees that work alongside teams to accelerate productivity, increase operational agility, and unlock new levels of efficiency.",
    capabilitiesHeading: "Mtel (Thailand) Capabilities",
    capabilities: [
      {
        title: "Custom Software Development",
        description: "Design and build tailored business applications and AI-enabled workflows.",
      },
      {
        title: "System Integration",
        description: "Connect Digital Employees with enterprise systems, data sources, and operational processes.",
      },
      {
        title: "Enterprise Platforms",
        description: "Enable scalable digital operations through enterprise application ecosystems.",
      },
      {
        title: "Cloud & Infrastructure",
        description: "Build secure, resilient, and scalable environments for AI deployment.",
      },
      {
        title: "UX/UI Design",
        description: "Create intuitive employee and customer experiences across digital touchpoints.",
      },
      {
        title: "Testing Service",
        description: "Ensure performance, quality, reliability, and enterprise readiness.",
      },
    ],
  },

  caseStudies: {
    eyebrow: "Results",
    heading: "Proof, not promises.",
    items: [
      {
        clientName: "State-owned Enterprise",
        industry: "Consumer Goods",
        headline:
          "50+ AI digital twins deployed across one enterprise — routine work automated, strategic capacity unlocked.",
        challenge:
          "A large state-owned enterprise with over 50 core staff was under pressure to accelerate digital transformation and improve operational efficiency across all business functions. Employees spent a significant portion of their working hours on repetitive, low-value tasks — drafting documents, processing routine queries, preparing reports — leaving limited capacity for strategic work. The organisation needed a scalable AI solution that could be customised to each employee's specific role and workflow, without disrupting existing systems or requiring deep technical expertise from staff.",
        solution:
          "Basicware delivered an end-to-end AI digital twin workforce programme for 50+ core employees. Each staff member received a bespoke AI digital clone — trained on their individual role context, internal knowledge base, and communication style — capable of handling routine tasks, generating work-ready documents, and responding to standard queries autonomously. Basicware managed the full implementation lifecycle: system integration, twin calibration, employee onboarding, iterative optimisation, and measurable outcome validation.",
        quote:
          "Basicware supported us through every single phase of the project. Beyond solution development, we also got comprehensive support for system integration, meticulous optimization and final result implementation.",
        quoteSpeaker: "Chief Digital Officer",
        results: [
          { value: 50, label: "Core staff with AI digital twins built" },
          { value: 40, suffix: "%", label: "Overall workforce efficiency uplift" },
          { value: 60, suffix: "%", label: "Reduction in repetitive task workload" },
        ],
      },
    ],
  },

  faqs: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions",
    items: [
      {
        question: "What is an AI digital employee?",
        answer:
          "An AI digital employee is an autonomous AI agent that performs a defined business role such as customer support, sales assistance, HR, finance, or marketing inside your existing tools. Unlike a simple chatbot, each digital employee is configured to your workflows, brand tone, and escalation rules, then runs 24/7, handing off to your human team with full context when needed.",
      },
      {
        question: "How are AI digital employees different from chatbots or automation scripts?",
        answer:
          "Chatbots answer questions; automation scripts follow rigid rules. AI digital employees own end-to-end tasks the way a staff member would, such as following up leads, screening resumes, verifying financial documents, closing monthly books and making context-aware decisions within the rules you set. They work across email, chat, social, and messaging channels, and escalate to humans with complete context instead of dropping the conversation.",
      },
      {
        question: "What roles can AI digital employees handle?",
        answer:
          "OpenClaw digital employees are available in pre-built roles across departments: Customer Support with 24/7 multilingual responses and smart human handoff; Sales Assistant for lead follow-up, meeting scheduling, and quote generation; Brand Marketing for content scheduling, social media monitoring, and campaign reporting; HR for resume screening, onboarding, and employee records management; and Finance for document verification, monthly closing, and tax filing support. Each role comes with pre-built configurations, so your first AI employee can be working in days rather than months.",
      },
      {
        question: "Do AI digital employees work with our existing software?",
        answer:
          "Yes. AI digital employees operate inside your existing tools rather than replacing them. They connect natively to email, chat, social, and messaging channels, and can be integrated with your enterprise systems, data sources, and operational processes so one AI employee covers every customer touchpoint without changing your stack.",
      },
      {
        question: "How long does it take to deploy an AI digital employee?",
        answer:
          "Days, not months. Pre-built configurations for the most common roles and workflows mean your first AI employee can be live within days of kickoff. Scaling is equally fast — you can deploy one AI employee or fifty from a single cloud dashboard and adjust capacity as your workload changes.",
      },
      {
        question: "Are AI digital employees secure enough for enterprise use?",
        answer:
          "Yes. Our digital employees are built for enterprise deployment, with configurable escalation rules, permission boundaries, and secure integration into enterprise infrastructure. Through implementation partners like Mtel (Thailand), enterprises get end-to-end services covering system integration, secure cloud infrastructure, and testing to ensure performance, reliability, and enterprise readiness.",
      },
      {
        question: "How do we monitor what AI digital employees are doing and what they cost?",
        answer:
          "Everything runs through a single cloud dashboard with unified billing and a live monitoring view. You can see what each AI employee is working on, what it costs, and what results it's delivering — full visibility across your entire digital workforce on one bill.",
      },
      {
        question: "Will AI digital employees replace our human team?",
        answer:
          "No — they're designed to work alongside your team. Digital employees take over the repetitive, low-value tasks that cause backlog and burnout, freeing your top staff for higher-value work. When a task needs human judgment, the AI hands it off with full context intact, so nothing gets lost in the transition.",
      },
      {
        question: "Can we scale AI digital employees up or down as our needs change?",
        answer:
          "Yes. Unlike hiring, scaling a digital workforce takes one click. Deploy additional AI employees during peak season or new campaigns, then scale back down when workload drops. You get the productivity of a full department without the hiring timeline.",
      },
      {
        question: "What does the Mtel (Thailand) partnership provide?",
        answer:
          "Mtel (Thailand) is OpenClaw's enterprise implementation partner, delivering end-to-end deployment services: custom software development, system integration with enterprise data sources, enterprise platform enablement, secure cloud and infrastructure setup, UX/UI design, and testing services. Together, the partnership lets enterprises deploy role-based AI digital employees that are fully integrated, secure, and production-ready.",
      },
      {
        question: "Which industries and company sizes benefit most from AI digital employees?",
        answer:
          "Any organization with repetitive, high-volume work benefits — from growing businesses drowning in support tickets to enterprises running multi-department operations. Common use cases include e-commerce customer support, B2B sales follow-up, high-volume recruitment screening, and finance operations. Because deployment scales from one AI employee to fifty, the platform fits both lean teams and enterprise rollouts.",
      },
      {
        question: "How do we get started with AI digital employees?",
        answer:
          "Getting started takes three steps: choose the roles you need, have each AI employee configured to your workflows, tone, and escalation rules, and activate them from the cloud dashboard. With pre-built role configurations and enterprise implementation support available through Mtel (Thailand), most organizations have their first digital employee working within days.",
      },
    ],
  },

  cta: {
    lede: "Let's free your best people from repetitive work with AI digital employees that run autonomously within your existing tools — scale a full department in days, not months.",
    buttonLabel: "Talk to Our Team",
    href: "/contact",
  },
};
