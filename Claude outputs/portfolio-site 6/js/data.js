/* =========================================================
   AYUSH KUMAR: PORTFOLIO CONTENT
   -----------------------------------------------------------
   This is the ONLY file you should need to edit day-to-day.
   Everything on the site (About, Experience, Skills, Projects,
   Blog) is rendered from the plain data below.

   TO ADD / EDIT / DELETE A PROJECT:
     - Scroll to the `projects` array.
     - Copy an existing { ... } object, paste it, edit the fields.
     - `id` must be unique and URL-safe (letters, numbers, hyphens).
     - To delete a project, delete its whole { ... } object.
     - Save this file, commit, and push to GitHub. The live
       site updates automatically (see README.md).

   TO ADD / EDIT / DELETE A BLOG POST:
     - Same process, in the `blogPosts` array further down.
     - `content` is an array of paragraphs (and optional
       { heading: "..." } objects) rendered in order.

   TO EDIT ABOUT / EXPERIENCE / SKILLS:
     - Edit the `profile`, `experience`, and `skills` objects.
   ========================================================= */

const profile = {
  name: "Ayush Kumar",
  role: "Business Analyst",
  tagline: "Business analysis that turns ambiguity into shipped outcomes.",
  subtext:
    "5+ years across enterprise SaaS, SAP/ERP, and regulated programmes. Most recently, I've been running requirements, delivery, and governance on an AI product as its de facto product owner.",
  location: "Leeds / London, UK",
  email: "ayush22kumar97@gmail.com",
  phone: "+44 7425 628440",
  linkedin: "https://www.linkedin.com/in/ayush22kumar/",
  github: "https://github.com/ayush22kumar",
  photo: "assets/photo/ayush-portrait.jpg",
  about:
    "I've spent the last five years as the analyst organisations call on when a programme has no dedicated product owner, no existing governance standard, and no room for ambiguity. Most recently, I've served as de facto product owner on a GCP-based AI SaaS product, with requirements, backlog, and delivery calls running through me and reporting directly to Directors and SLT. Before that, I delivered SAP S/4HANA and ERP transformation across regulated environments (GDPR life-sciences, UK public sector, and Ofgem-governed energy) inside global, multi-country consulting teams. I build the governance artefacts that outlast the programme: a UAT framework now used organisation-wide, and an ITIL-aligned change process that still saves 500+ hours a quarter.",
  focusAreas: [
    "Enterprise SaaS & AI product delivery",
    "ERP/SAP transformation",
    "Regulated & multi-stakeholder programmes",
    "BA governance & UAT frameworks",
  ],
  metrics: [
    { num: "500+", label: "hours/quarter saved via ITIL-aligned change process" },
    { num: "200+", label: "body shops onboarded to a multi-tenant SaaS platform" },
    { num: "75%", label: "cut in requirements clarification rounds" },
    { num: "68%", label: "reduction in migration reporting scope" },
  ],
};

/* Career + education timeline, newest to oldest, rendered as a row of
   always-visible tiles (see initTimeline() in render.js) with a detail panel
   below. Each milestone can carry:
   - `secondary`: an earlier role at the same organisation (e.g. the SAP
     Basis Administrator role that preceded the SAP Business Analyst one
     at IBM), shown as a "Previously..." note on the tile and in full in
     the panel.
   - `related`: an associated project, internship, or award that sits
     alongside it (e.g. Capgemini during the B-Tech, Oxfam during the MSc,
     the IBM Gold Learner award during the IBM years). */
const timeline = [
  {
    id: "activate",
    range: "Feb 2025 – Present",
    kind: "work",
    current: true,
    title: "IT Business Analyst",
    org: "Activate Group Limited",
    detail:
      "The only Business Analyst across several concurrent programmes at Activate Group, including a GCP-based AI SaaS product with no assigned product owner, so requirements, backlog, and delivery decisions run through me directly to Directors and SLT. I initiated an ITIL-aligned change-request process, automating intake through Power Automate and Power Apps and saving 500+ hours a quarter, and scaled a multi-tenant SaaS platform to 200+ body shops UK-wide, cutting onboarding from 12 weeks to 4 with 80%+ sustained adoption. I also built the UAT framework the organisation now uses as its testing and sign-off standard, and use Claude within governed AI-usage guidelines to speed up early-stage discovery.",
  },
  {
    id: "leeds",
    range: "2023 – 2024",
    kind: "education",
    title: "MSc Business Analytics and Decision Sciences",
    org: "University of Leeds",
    detail: "Graduated with Distinction.",
    related: {
      title: "Business Analyst",
      org: "Oxfam (University of Leeds project)",
      range: "Mar 2024 – May 2024",
      detail:
        "Elicited and structured business requirements for a sustainable stock-sourcing project, and built dashboards and reports to support stakeholder decision-making.",
    },
  },
  {
    id: "ibm",
    range: "Nov 2019 – Sep 2023",
    kind: "work",
    title: "SAP Business Analyst",
    org: "IBM",
    detail:
      "Owned business analysis concurrently across multiple global client engagements at IBM, spanning GDPR life-sciences, UK public-sector, Ofgem/RIIO energy, and state-government programmes in India, inside global multi-country delivery teams. On the UK energy-sector SAP S/4HANA implementation, I authored Ofgem-aligned requirements and used SAP Signavio process mining to cut clarification rounds by 75%, and separately led root-cause analysis using DMAIC principles that cut data-quality issues 40% and lifted operational efficiency 18%. I also line managed two junior Business Analysts, coaching them through requirements elicitation until they were delivering projects independently.",
    secondary: {
      title: "SAP Basis Administrator",
      org: "IBM",
      range: "Nov 2019 – Nov 2020",
      detail:
        "Deployed automated monitoring across 120 SAP systems, cutting downtime 25%, and optimised SAP S/4HANA implementations with zero data loss during migration and a 20% improvement in system performance.",
    },
    related: {
      title: "IBM Gold Learner",
      org: "Award, 2021",
      detail:
        "Recognised for rapidly acquiring and applying new technologies to live projects, placing in the top 3% of employees globally.",
    },
  },
  {
    id: "manipal",
    range: "2015 – 2019",
    kind: "education",
    title: "B-Tech Computer Science and Engineering",
    org: "Manipal University Jaipur",
    detail:
      "Graduated with an 8.6/10 CGPA. Awarded the Dean's List & Scholarship in 2017 for academic excellence.",
    related: {
      title: "Full Stack Developer (Internship)",
      org: "Capgemini",
      range: "Jan 2019 – Apr 2019",
      detail:
        "Collaborated with developers and product owners to translate user requirements into technical specifications.",
    },
  },
];

const skills = [
  {
    group: "Product & AI-Enabled Delivery",
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 2.3 2.6 6.5 10 10.7l7.4-4.2z"/><path d="M2.6 10.2 10 14.4l7.4-4.2"/><path d="M2.6 13.9 10 18.1l7.4-4.2"/></svg>',
    items:
      "Sole-BA/de facto product ownership, GCP-based AI SaaS, AI-assisted discovery (Claude), backlog management, epics, user stories, acceptance criteria",
  },
  {
    group: "Leadership & Governance",
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 2.2 16.8 4.6v4.6c0 4.3-2.8 8-6.8 9.6-4-1.6-6.8-5.3-6.8-9.6V4.6z"/><path d="M7 10.1l2.1 2.1 4-4.3"/></svg>',
    items:
      "Cross-programme sole ownership, coaching junior BAs, UAT governance framework, ITIL-aligned process ownership, RAID and risk management",
  },
  {
    group: "Requirements & Documentation",
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6.2 2.4h5l3 3v11.8a.5.5 0 0 1-.5.5H6.2a.5.5 0 0 1-.5-.5V2.9a.5.5 0 0 1 .5-.5z"/><path d="M11.2 2.4v3.4h3.4"/><path d="M7.7 10.2h5M7.7 12.6h5M7.7 15h3.2"/></svg>',
    items:
      "Requirements elicitation, BRDs, functional specs, decision models, options papers, requirements traceability",
  },
  {
    group: "Process & Data Modelling",
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="3" width="5.5" height="4" rx="0.6"/><rect x="12" y="3" width="5.5" height="4" rx="0.6"/><rect x="7.2" y="13" width="5.5" height="4" rx="0.6"/><path d="M5.2 7v3a3 3 0 0 0 3 3M14.8 7v3a3 3 0 0 1-3 3"/></svg>',
    items: "BPMN 2.0, UML, ER and data-flow diagrams, wireframing, Figma, SAP Signavio, Celonis",
  },
  {
    group: "Solution Architecture",
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 2.3 17 6.1v7.6L10 17.5 3 13.7V6.1z"/><path d="M3 6.1 10 9.9l7-3.8M10 9.9v7.6"/></svg>',
    items: "ATAM, Domain-Driven Design (DDD), Quality Attribute Utility Trees, technical impact assessment",
  },
  {
    group: "Delivery Methods & Tools",
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4.2" y="3.4" width="11.6" height="14.4" rx="1"/><rect x="7.3" y="2" width="5.4" height="2.8" rx="0.6"/><path d="M7.4 10.6l2 2 3.6-4"/></svg>',
    items: "Agile, Scrum, Waterfall, Jira, Confluence, Azure DevOps, MS Project, SAP S/4HANA",
  },
  {
    group: "Data & Analytics",
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.6 17.4h14.8"/><path d="M5.4 17.4V11M10 17.4V4.6M14.6 17.4v-8.2"/></svg>',
    items: "SQL, Python, Power BI, Tableau, Databricks, KPI definition",
  },
  {
    group: "Regulated & Global Delivery",
    icon: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="7.6"/><path d="M2.4 10h15.2"/><path d="M10 2.4c2.4 2 3.8 4.9 3.8 7.6s-1.4 5.6-3.8 7.6c-2.4-2-3.8-4.9-3.8-7.6S7.6 4.4 10 2.4z"/></svg>',
    items: "GDPR life-sciences, UK public-sector, Ofgem/RIIO energy, insurance/fleet risk, global multi-country teams",
  },
];

/* =========================================================
   PROJECTS
   Each project needs: id, title, dates, summary, tags,
   metric (headline number), problem, approach (array),
   tools (array), outcome (array of { num, label }).
   ========================================================= */
const projects = [
  {
    id: "gcp-ai-saas-product",
    title: "Sole BA and De Facto Product Owner: GCP AI SaaS Platform",
    dates: "2025 – Present",
    summary:
      "Running requirements, backlog, and delivery for an AI SaaS product that had no product owner before this role existed.",
    tags: ["Product Ownership", "AI SaaS", "GCP", "Stakeholder Management"],
    metric: "200+ body shops onboarded, 80%+ adoption",
    context:
      "Working directly with the Delivery Manager and a small development engineering team, reporting to Directors and SLT. There was no assigned product owner, so requirements, backlog, and delivery decisions ran through this role by default.",
    problem:
      "A GCP-based AI SaaS product for vehicle-damage detection had no assigned product owner, so requirements, prioritisation, and delivery decisions had no single accountable owner. That was a real risk for scope drift and for onboarding speed among the body shops depending on the platform.",
    approach: [
      "Took ownership of discovery, use-case definition, backlog, and UAT (the full scope a product owner would normally hold), reporting directly to Directors and SLT.",
      "Ran structured discovery and end-user interviews with supplier-side users (body shops) to define onboarding flows and acceptance criteria.",
      "Used Claude (Anthropic) for early-stage discovery and requirements scoping within governed company AI-usage guidelines, freeing time for direct stakeholder work.",
      "Built and iterated user stories and acceptance criteria in Jira, keeping full requirements traceability from discovery through sign-off.",
    ],
    tools: ["BPMN 2.0", "Figma", "Jira", "GCP", "Claude (Anthropic)"],
    outcome: [
      { num: "200+", label: "body shops onboarded UK-wide" },
      { num: "12→4", label: "weeks, onboarding time (before → after)" },
      { num: "80%+", label: "of onboarded body shops actively using the platform" },
    ],
    diagram: {
      src: "assets/diagrams/product-ownership-loop.svg",
      caption: "The full ownership loop run solo across this programme, from discovery through adoption.",
    },
  },
  {
    id: "itil-change-governance",
    title: "ITIL-Aligned Change Governance Rollout",
    dates: "2025",
    summary:
      "Designed and launched a structured, automated change-request process from proposal through production.",
    tags: ["ITIL", "Process Automation", "Governance"],
    metric: "500+ hours/quarter saved",
    context:
      "Proposed and led independently as the sole BA on the initiative; secured Director-level sponsorship for the automation investment.",
    problem:
      "Change requests were handled ad hoc, with no consistent intake, prioritisation, or sign-off process. That created rework, delivery drag, and unclear accountability across concurrent workstreams.",
    approach: [
      "Proposed and secured Director-level buy-in for an ITIL-aligned change-request process, from initial intake through production release.",
      "Designed the intake and approval workflow, then automated it using Power Automate and Power Apps to remove manual handling.",
      "Rolled the process out as the organisation's standing governance model for change management.",
    ],
    tools: ["ITIL", "Power Automate", "Power Apps"],
    outcome: [{ num: "500+", label: "hours/quarter saved on manual intake and triage" }],
    diagram: {
      src: "assets/diagrams/itil-change-flow.svg",
      caption: "Change-request flow after automation. The intake step, highlighted, replaced a fully manual process.",
    },
  },
  {
    id: "ofgem-sap-s4hana",
    title: "Ofgem-Aligned SAP S/4HANA Energy Delivery",
    dates: "2020 – 2023",
    summary:
      "Authored regulatory-aligned requirements for a UK energy-sector SAP S/4HANA implementation under Ofgem/RIIO governance.",
    tags: ["SAP S/4HANA", "Regulated Delivery", "Process Mining"],
    metric: "75% fewer clarification rounds",
    context:
      "Delivered within a global, multi-country IBM consulting team, working alongside a Solution Architect and client-side regulatory stakeholders.",
    problem:
      "A UK energy-sector SAP S/4HANA implementation needed requirements that held up against Ofgem/RIIO regulatory obligations, inside a global multi-country delivery team where clarification cycles were slowing delivery.",
    approach: [
      "Authored Ofgem-aligned requirements, translating regulatory obligations directly into system and reporting specifications.",
      "Used SAP Signavio to map and standardise current-state processes ahead of design, reducing ambiguity before build began.",
      "Validated interface design through Figma prototypes ahead of build to catch issues before stakeholder review.",
    ],
    tools: ["SAP S/4HANA", "SAP Signavio", "Figma"],
    outcome: [
      { num: "75%", label: "fewer requirements clarification rounds, vs. prior engagements" },
      { num: "50%", label: "cut in stakeholder sign-off time" },
    ],
  },
  {
    id: "grocery-price-pipeline",
    title: "UK Grocery Price Intelligence Pipeline",
    dates: "2024",
    summary:
      "Defined and built a cloud-based ETL pipeline turning scraped UK grocery pricing data into a real-time retail insights dataset.",
    tags: ["Data Engineering", "ETL", "Cloud Analytics", "Requirements"],
    metric: "Automated, cloud-based pipeline",
    context: "Personal project, scoped, built, and delivered independently.",
    problem:
      "Retail price comparison across UK grocers was manual and static. There was no repeatable way to track pricing movement over time, or feed it into further analysis, without re-collecting data from scratch each time.",
    approach: [
      "Defined the data requirements first: what fields, what frequency, what quality checks a downstream analysis would actually need, before writing any extraction code.",
      "Built automated web scraping to collect pricing data on a repeatable schedule, rather than a one-off pull.",
      "Designed the ETL pipeline to clean, standardise, and load data into a cloud-based structure ready for analysis.",
      "Documented the pipeline's data model so the dataset was usable by someone other than its author, the same requirements-traceability habit I apply on client work.",
    ],
    tools: ["Python", "ETL", "Cloud Storage", "Automated Web Scraping"],
    outcome: [
      { num: "Automated", label: "repeatable data collection, replacing manual pulls" },
      { num: "Cloud-based", label: "structure ready for ongoing analysis, not a one-off extract" },
    ],
  },
  {
    id: "universal-export-sales-analysis",
    title: "Year-End Sales & Performance Analysis: Universal Export",
    dates: "2024",
    summary:
      "Cleaned and modelled a year's sales data into a Power BI dashboard answering where performance was actually being won and lost.",
    tags: ["Power BI", "Data Cleaning", "Data Visualisation"],
    metric: "Full-year performance dashboard",
    context: "Personal project, scoped, built, and delivered independently.",
    problem:
      "A year of raw sales data had no structure a stakeholder could actually read a decision from: inconsistent formatting, and no clear performance breakdown by region or product line.",
    approach: [
      "Cleaned and transformed the raw dataset, resolving inconsistent formatting and structural issues before any visualisation work started.",
      "Modelled the data to support breakdowns by region, product line, and time period rather than a single flat view.",
      "Built the Power BI report around the questions a performance review would actually ask, not just the fields available in the source data.",
    ],
    tools: ["Power BI", "Data Cleaning", "Data Transformation"],
    outcome: [{ num: "Full year", label: "of sales performance made analysable in one dashboard" }],
  },
  {
    id: "oxfam-sustainable-sourcing",
    title: "Business Analyst: Sustainable Stock-Sourcing, Oxfam",
    dates: "Mar 2024 – May 2024",
    summary:
      "Structured requirements and built stakeholder-facing dashboards for a project exploring more sustainable stock-sourcing options.",
    tags: ["Requirements Elicitation", "Stakeholder Management", "Dashboards", "Sustainability"],
    metric: "Structured requirements and decision-ready dashboards",
    context:
      "A short-term engagement with Oxfam, working directly with Oxfam stakeholders on a sustainable stock-sourcing initiative.",
    problem:
      "Oxfam wanted to move toward more sustainable stock-sourcing, but what \"sustainable\" should mean operationally, and the data needed to compare sourcing options against it, hadn't been structured into anything stakeholders could act on.",
    approach: [
      "Ran requirements elicitation directly with Oxfam stakeholders to define what a sustainable sourcing decision needed to account for, translating broad sustainability goals into concrete, comparable criteria.",
      "Structured the resulting requirements into a clear reference stakeholders could use to evaluate sourcing options consistently, rather than case by case.",
      "Built dashboards and reports that turned the underlying sourcing data into a format non-technical stakeholders could use directly, without relying on an analyst to interpret it each time.",
    ],
    tools: ["Requirements Elicitation", "Stakeholder Interviews", "Dashboards", "Reporting"],
    outcome: [
      { num: "Structured", label: "requirements for evaluating sustainable sourcing options" },
      { num: "Decision-ready", label: "dashboards and reports handed directly to Oxfam stakeholders" },
    ],
  },
];

/* =========================================================
   TESTIMONIALS
   -----------------------------------------------------------
   Real LinkedIn recommendations. To add another, copy an
   existing { quote, author } object and edit the fields.
   ========================================================= */
const testimonials = [
  {
    quote:
      "Ayush was a great addition to my team as Business Analyst, bringing a range of skills and experience to the role. His analysis was always of the highest calibre, and his documentation and presentation of materials was excellent. It was a pleasure to work with Ayush and to see him continue to develop and try new analysis techniques and styles. He worked really well with the team and our stakeholders and enabled positive and professional delivery of change.",
    author: "Simon Elliott, Head of Implementation & Change",
    linkedin: "https://www.linkedin.com/in/simon-elliott-2632aa93/",
  },
  {
    quote:
      "After working with Ayush on several projects, he has proven to be a solutions-driven individual, who excels at turning business needs into practical, strategic recommendations. I valued Ayush's strong listening skills, which built trust, clarity, and collaboration through tasks, projects and across teams.",
    author: "Maria Cabral, Project Manager",
    linkedin: "https://www.linkedin.com/in/maria-da-costa-cabral/",
  },
];

/* =========================================================
   BLOG POSTS
   Each post needs: id, title, date, tags, excerpt, content
   (an array of paragraphs and/or { heading: "..." } markers).
   These three are starter posts. Edit, replace, or delete
   them freely.
   ========================================================= */
const blogPosts = [
  {
    id: "de-facto-product-owner",
    title: "What \"de facto product owner\" actually means when you're the only BA in the room",
    date: "2026-06-12",
    tags: ["Product Ownership", "BA Career"],
    excerpt:
      "The title on your contract and the decisions you're actually making can diverge fast. Here's how I think about the gap, and how to describe it honestly.",
    content: [
      "When there's no dedicated product owner on a programme, someone still has to decide what gets built next, what gets cut, and what \"done\" means. On my current AI SaaS product, that someone has been me, and I suspect a lot of BAs reading this are in a similar position without quite having a name for it.",
      { heading: "What the role actually includes" },
      "In practice, de facto product ownership has meant three things. First, owning the backlog: not just writing tickets, but deciding priority when Directors and Engineering disagree about what matters this sprint. Second, owning acceptance criteria: defining what \"working\" means before build starts, not renegotiating it after the fact when a stakeholder is unhappy with what shipped. Third, owning the trade-off conversation: translating a scope cut into terms a non-technical Director can actually weigh, rather than presenting it as a fait accompli.",
      "None of that requires the title \"Product Owner\" on your contract. It requires having done the requirements work well enough, consistently enough, that your judgement gets trusted by default. That's the point where people stop asking \"should we check with the PO\" because there isn't one, and you're the closest thing.",
      { heading: "Where the boundary actually sits" },
      "It's worth being precise about this, especially in interviews, because vague claims get tested. I don't own commercial strategy or pricing. I don't set the product vision independently of the business I'm working for. What I own is the requirements, the backlog, and the delivery trade-offs within an agreed direction. That's a genuinely valuable scope of ownership, arguably more accountability than a lot of formally-titled BA roles carry, but claiming more than that under a \"product owner\" label does a disservice to candidates like me: a sharp interviewer will ask a follow-up question that exposes the gap.",
      { heading: "How I'd suggest framing it, if you're in the same position" },
      "Name the scope explicitly rather than leaning on the title. Say what decisions ran through you (backlog priority, acceptance criteria, scope trade-offs) and what didn't (pricing, commercial strategy, headcount). That precision reads as more credible than an inflated label, not less. Hiring managers who've done this job themselves can tell the difference immediately, and the ones who can't will find out in the first real conversation anyway.",
    ],
  },
  {
    id: "uat-framework-not-scripts",
    title: "Why every BA should own a UAT framework, not just run test scripts",
    date: "2026-05-20",
    tags: ["UAT", "Governance"],
    excerpt:
      "Running UAT for one project teaches you a process. Building the framework teaches the organisation one, and that's the higher-leverage version of the same skill.",
    content: [
      "Most BAs run UAT: write scenarios, coordinate testers, log defects, chase sign-off. That's necessary work, and doing it well matters. But it resets every time. The next project starts from a blank page, reinventing decisions that were already made and forgotten six months earlier.",
      "Building a reusable UAT framework is a different kind of contribution. It means defining, once, how test coordination works, how defects get prioritised, and what business sign-off actually requires as evidence, then making that the standard other projects inherit instead of reinventing.",
      { heading: "The three decisions that actually matter" },
      "Every UAT process, however informal, is making three decisions somewhere: who has authority to sign off, what evidence counts as \"tested,\" and how defects get triaged into blocking vs. non-blocking. Most teams make these decisions implicitly, differently, every single time, which means every new project burns a week or two just re-litigating governance before testing can even start.",
      "A framework makes those three decisions explicit and reusable. Write down who signs off (by role, not by name, so it survives personnel changes). Write down what evidence is required: screenshots, a completed test script, a specific approval email, whatever fits your organisation's risk appetite. Write down a simple severity scale for defects and who has authority to waive a non-blocking one at go-live.",
      { heading: "What made mine stick" },
      "The framework I built became the organisation's governance standard not because it was clever, but because it removed a decision every project team used to have to make from scratch. That's usually the better lever in BA work generally: look for the repeated decision nobody's written down yet, and write it down once, well, so nobody has to make it badly under time pressure again.",
      "If you're already running UAT project by project, you're most of the way there. The gap between \"I ran UAT on this project\" and \"I built the UAT standard this organisation now uses\" is usually just the discipline of writing the three decisions above down and getting one sign-off to make it official.",
    ],
  },
  {
    id: "ai-tools-discovery-without-losing-rigour",
    title: "Using AI tools for discovery without losing rigour",
    date: "2026-04-08",
    tags: ["AI", "Requirements"],
    excerpt:
      "Claude speeds up my first pass at discovery. It doesn't replace the parts of the job that actually require judgement, and knowing the difference is the whole skill.",
    content: [
      "I use Claude for early-stage discovery and requirements scoping: summarising stakeholder input, drafting a first pass at acceptance criteria, and spotting gaps in a set of raw workshop notes before I walk into the next session.",
      "What it doesn't do is decide what matters. Prioritisation, trade-off calls, and reading the room in a stakeholder workshop are still entirely human judgement calls. I think that's the right dividing line for BA work generally: use AI to compress the mechanical first pass, keep the judgement calls yours.",
      { heading: "Where it genuinely helps" },
      "The clearest win is turning messy inputs into a structured first draft fast. A 90-minute workshop produces a lot of half-formed statements, contradictions, and things people said in passing that turn out to matter. Getting an AI-generated first pass at \"here's what was said, here's what's ambiguous, here's what wasn't covered\" within minutes of the session ending means I walk into the follow-up already knowing where the gaps are, instead of spending the next day reconstructing them from notes.",
      { heading: "Where I still do it manually" },
      "Anything involving reading unstated intent, a stakeholder who agreed in the room but whose body language said otherwise, a requirement that technically satisfies what was asked but misses what was actually needed, stays entirely manual. AI tools work from what was said and written down; a lot of the highest-value BA work is catching what wasn't.",
      { heading: "The governance point that matters" },
      "Any use of AI tools on client or company data needs to sit inside whatever usage guidelines your organisation has agreed. That's not optional, and it's worth stating plainly rather than assuming it's implied. On my current programme, that means Claude is used within defined company AI-usage guidelines, not as a general-purpose tool applied to anything sensitive without thought.",
      "The practical benefit has been time, not decisions. Faster first drafts mean more time actually spent with stakeholders, not less, which, if anything, makes the human judgement part of the job more central, not less.",
    ],
  },
  {
    id: "fit-gap-analysis-regulated-environments",
    title: "A practical framework for fit-gap analysis in regulated environments",
    date: "2026-07-03",
    tags: ["Fit-Gap Analysis", "Regulated Delivery", "BPMN"],
    excerpt:
      "In GDPR, Ofgem, or public-sector delivery, a gap isn't just a missing feature. It can be a compliance exposure. Here's the structure I use to keep that distinction visible.",
    content: [
      "Fit-gap analysis in an unregulated commercial context is mostly a prioritisation exercise: here's what the new system does, here's what we need, here's the delta, let's decide what to build. In a regulated environment (GDPR life-sciences, Ofgem-governed energy, UK public sector), that same delta can carry a compliance dimension that a standard fit-gap template doesn't capture, and missing that distinction is where I've seen programmes get into real trouble.",
      { heading: "Separate \"gap\" into two categories, always" },
      "The single most useful change I've made to how I run fit-gap analysis in regulated work is splitting every identified gap into two categories from the start: operational gaps (the new system doesn't do something the business wants) and obligation gaps (the new system doesn't satisfy something a regulator, contract, or legal obligation requires). They get prioritised completely differently. An operational gap competes for backlog space on business value. An obligation gap isn't optional: it's a blocker for go-live regardless of how the business feels about its priority, and treating it as just another backlog item is how compliance exposure quietly ships to production.",
      { heading: "Map obligations before you map processes" },
      "On Ofgem-governed energy delivery, I've found it far more effective to build the regulatory obligation map first, working out what Ofgem/RIIO actually requires of this process, in plain language, before touching BPMN, and only then run process mining (SAP Signavio, in my case) against that map, rather than the other way round. Mapping current-state process first and retrofitting compliance checks afterward means you're checking compliance against what the business happens to do, not against what it's required to do, and those two things drift apart more than people expect.",
      { heading: "The technique in five steps" },
      {
        list: [
          "Document the obligation, not just the process: write down the actual regulatory or contractual requirement in one sentence before mapping anything.",
          "Map current-state process against that obligation directly, flagging any step that doesn't visibly satisfy it.",
          "Map the future-state (new system) design the same way.",
          "Classify every gap as operational or obligation before prioritising anything.",
          "Get obligation gaps signed off as blockers explicitly, in writing, from whoever owns regulatory risk, before they can be quietly reprioritised into a \"phase 2.\"",
        ],
      },
      "This isn't a heavyweight process. It adds maybe half a day of obligation-mapping up front on a typical workstream. What it buys back is not finding out three sprints later that an \"operational nice-to-have\" was actually a regulatory requirement someone had assumed was covered.",
    ],
  },
  {
    id: "raid-registers-actually-used",
    title: "RAID registers are not a compliance checkbox: how to make them actually used",
    date: "2026-03-15",
    tags: ["RAID", "Governance", "Delivery"],
    excerpt:
      "Most RAID registers are written once, presented in a steering meeting, and never opened again. Here's what changes when a Delivery Lead actually works from one.",
    content: [
      "Ask most BAs what a RAID register is for and you'll get the textbook answer: Risks, Assumptions, Issues, Dependencies. Ask them when someone last actually opened one to make a decision, and the honest answer is often \"the steering committee meeting where I presented it, and not since.\"",
      "I own the RAID register on my current post-acquisition migration, tracking it directly with the Delivery Lead, and the thing that made it a working tool rather than a compliance artefact wasn't the template. It was changing what the register was for.",
      { heading: "A register that gets used answers a question, not just lists facts" },
      "A dead RAID register is a list: risk, description, owner, status. A live one answers a question every time someone opens it: \"if this happens, what changes about what we're doing next week?\" Every risk entry I write now includes a trigger condition and a pre-agreed response, not just a severity rating. \"If supplier X hasn't confirmed data migration format by [date], we escalate to [named contact] and pause dependent workstream Y\" is something a Delivery Lead can act on immediately. \"Risk: data migration format unclear. Severity: Medium\" is something that gets nodded at in a meeting and forgotten.",
      { heading: "Review cadence beats template quality" },
      "The template matters less than most people think. What matters is whether it's reviewed on a fixed cadence with the person who can actually act on it, not just circulated. I review mine with the Delivery Lead weekly, five minutes, three questions: what's changed status, what's newly triggered, what's stale and can be closed. A register that isn't pruned of resolved items becomes noise fast, and noise is why people stop opening it.",
      { heading: "Dependencies are the category most BAs under-use" },
      "Risks and issues get attention. Dependencies quietly don't, and they're often where delivery actually breaks: a cross-team dependency nobody tracked becomes a two-week delay nobody saw coming. I've found it worth tracking dependencies with the same trigger-and-response discipline as risks, not just as a list of \"things we're waiting on.\"",
      "None of this is complicated. It's the difference between a document that exists because governance requires it, and one that a Delivery Lead actually opens before making a call, and that difference is entirely about what you put in each entry, not which tool you use to store it.",
    ],
  },
  {
    id: "web-scraping-requirements-lesson",
    title: "What building a data pipeline taught me about requirements no one writes down",
    date: "2026-02-10",
    tags: ["Requirements", "Data Engineering"],
    excerpt:
      "I built an automated scraping pipeline as a personal project and learned more about requirements discipline than about the scraping itself.",
    content: [
      "A few years ago I built an automated pipeline pulling UK grocery pricing data on a repeatable schedule. It wasn't client work, but the lesson it taught me has shown up in every requirements conversation I've had since.",
      { heading: "The requirement nobody states out loud" },
      "Everyone will tell you what data they want. Almost nobody tells you, unprompted, what happens when the source changes shape underneath you: a website redesign breaks your scraper's selectors, a field that used to always be populated starts coming back empty, a price format switches from \"£4.99\" to \"4.99\" with no warning. None of that is in the original ask. All of it determines whether the pipeline still works in three months.",
      "I learned to ask a version of this question early now, on every data-dependent requirement, professional or personal: \"what does this look like when the source changes, and who finds out first?\" It's a five-second question that surfaces a requirement most stakeholders don't think to state, because from their side the data source feels stable. They've never had to build against it.",
      { heading: "Build the check, not just the pipe" },
      "The practical fix is boring and effective: build validation into the pipeline itself, not just the extraction. A schema check that fails loudly when a field goes missing is worth more than a scraper that runs \"successfully\" while quietly returning garbage. I'd rather a pipeline stop and tell me it's broken than keep running and let bad data reach a dashboard someone trusts.",
      { heading: "Where this shows up in BA work generally" },
      "The same pattern applies well beyond data pipelines. Any requirement that depends on an external system, a third-party feed, or another team's process has an unstated version of this question sitting inside it: what's the failure mode, and does anyone find out before it causes damage? Asking it explicitly, once, up front, is cheaper than discovering the answer in production.",
    ],
  },
  {
    id: "forecasting-being-wrong-usefully",
    title: "Forecasting taught me that being wrong usefully beats being right vaguely",
    date: "2026-01-18",
    tags: ["Forecasting", "Data & Analytics"],
    excerpt:
      "A forecasting project I built independently reframed how I think about presenting uncertain numbers to stakeholders who want a single confident answer.",
    content: [
      "I once built a forecasting model on a real macroeconomic time series. The technical part, fitting a model and checking residuals, was the easy half. The harder half was learning how to present a forecast to someone who wants a single number and a promise it'll be right.",
      { heading: "A range is more honest, and more useful, than a point estimate" },
      "Stakeholders often ask for a number: \"what will it be next quarter?\" Giving them just a point estimate, without the uncertainty around it, is technically an answer and a practical disservice: it invites a decision to be made on false confidence. I now default to presenting a range with a stated confidence level, and explaining in one sentence what would have to be true for the actual number to land outside it. That one sentence does more for stakeholder trust than a tighter model would.",
      { heading: "The forecast is a starting position, not a commitment" },
      "The more useful shift was treating a forecast as the current best position, one that updates as new data arrives, rather than a commitment made once and defended forever. Framing it that way upfront, \"here's what we expect based on what we know now, and here's what would make us revise it,\" changes the conversation from \"was the forecast right\" to \"did we update it when we should have,\" which is a far more useful question for a business to be asking.",
      { heading: "Where this applies beyond forecasting specifically" },
      "The same discipline applies to any estimate a BA hands a stakeholder: delivery timelines, cost projections, adoption predictions. State the range, state the assumption that would break it, and treat it as a position to update rather than a promise to defend. It's a small change in framing that meaningfully changes how much a stakeholder trusts the next number you give them.",
    ],
  },
];
