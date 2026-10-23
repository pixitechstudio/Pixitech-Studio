import { Globe, Code2, Server, Layers, AppWindow, Bot, ShoppingBag, Brain, Filter, Database, Mail, UserCheck } from "lucide-react";

export const SITE = {
  name: "Pixitech Studio",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pixitechstudio.com",
  email: "hello@pixitechstudio.com",
  phone: "+92 309 5054872",
  tel: "+923095054872",
  whatsapp: "https://wa.me/923095054872",
  location: "Attock, Punjab, Pakistan",
  // Replace social URLs here only
  social: {
    linkedin: "https://www.linkedin.com/in/pixitech-studio-a61a70430",
    instagram: "https://www.instagram.com/pixitechstudioo",
    facebook: "https://www.facebook.com/share/19uEJTpied/",
  },
};

export const SERVICES = [
  { slug: "wordpress-development", title: "WordPress Development", icon: Globe,
    short: "Custom WordPress business websites, landing pages, Elementor builds, redesigns and maintenance.",
    points: ["Custom business websites and landing pages", "Elementor development", "Website redesigns with responsive layouts", "Ongoing website maintenance"],
    faq: ["When is WordPress the right choice?", "WordPress suits content-driven business sites that your team wants to update on its own. For complex custom logic, a web application may fit better."] },
  { slug: "frontend-development", title: "Front-End Web Development", icon: Code2,
    short: "Modern, responsive, user-friendly interfaces built with clean HTML, CSS, JavaScript and frameworks when required.",
    points: ["Responsive, accessible interfaces", "Clean HTML, CSS and JavaScript", "React or Next.js when the project needs it", "Performance-conscious implementation"],
    faq: ["Can you build from an existing design?", "Yes. We can build from your design files or help shape the UI/UX before development starts."] },
  { slug: "backend-development", title: "Back-End Web Development", icon: Server,
    short: "Server-side functionality, API integrations, databases, authentication and secure application logic.",
    points: ["API design and third-party integrations", "Database modelling and integration", "Authentication and access control", "Technologies chosen to fit the project"],
    faq: ["Which technologies do you use?", "We select tools based on your requirements, team and budget rather than a fixed stack."] },
  { slug: "full-stack-development", title: "Full-Stack Web Development", icon: Layers,
    short: "End-to-end web solutions combining responsive front ends, back-end logic, databases and third-party services.",
    points: ["Front end and back end from one team", "Database and service integration", "Maintainable, scalable structure", "Clear handover and documentation"],
    faq: ["Is full-stack right for my project?", "It fits products that need both a user interface and custom server logic. Simple brochure sites rarely need it."] },
  { slug: "web-application-development", title: "Web Application Development", icon: AppWindow,
    short: "Custom dashboards, business applications, interactive tools, customer portals and workflow-oriented web apps.",
    points: ["Dashboards and reporting views", "Customer and staff portals", "Interactive business tools", "Workflow-oriented applications"],
    faq: ["How do we start a web app project?", "We begin with discovery: your users, workflows and priorities, then agree a scope before building."] },
  { slug: "ai-automation", title: "AI Automation and Chatbots", icon: Bot,
    short: "AI chatbots, support assistants, lead qualification, business process automation and AI integrations.",
    points: ["AI chatbots and support assistants", "Lead qualification workflows", "Business process automation", "Integrations based on your tools"],
    faq: ["Which tools can you connect?", "That depends on your systems, such as your CRM, email or database. We confirm what is feasible during discovery."] },
  { slug: "shopify-development", title: "Shopify Store Development", icon: ShoppingBag,
    short: "Professional Shopify storefronts, store setup, theme customization, product page design and conversion-focused improvements.",
    points: ["Store setup and theme customization", "Product and collection page design", "Responsive shopping experiences", "Conversion-focused improvements"],
    faq: ["Can you improve an existing store?", "Yes. We can review your current store and prioritise practical design and usability improvements."] },
];

export const HERO: { src: string | null; alt: string }[] = [
  { src: "/images/hero-mockup-1.jpg", alt: "IMC Real Estate demo website mockup by PixiTech Studio" },
  { src: "/images/hero-mockup-2.jpg", alt: "Aurelia Estates corporate website mockup by PixiTech Studio" },
  { src: "/images/hero-mockup-3.jpg", alt: "BrewAI coffee chatbot website mockup by PixiTech Studio" },
  { src: "/images/hero-mockup-4.jpg", alt: "Aurila online store mockup by PixiTech Studio" },
  { src: "/images/hero-mockup-5.jpg", alt: "five mockup by PixiTech Studio" },
  { src: "/images/hero-mockup-6.jpg", alt: "six mockup by PixiTech Studio" },
  { src: "/images/hero-mockup-7.jpg", alt: "seven mockup by PixiTech Studio" },
];

export const PROJECTS = [
  { title: "Aurelia Estates", cat: "WordPress Development", img: "/images/hero-mockup-2.jpg", url: "https://aurilarealstate.netlify.app/",
    desc: "Elegant corporate real-estate website with service sections and conversion-focused calls to action." },
  { title: "IMC Real Estate", cat: "Front-End / Web Application", img: "/images/hero-mockup-1.jpg", url: "https://imc-realestate-demo.netlify.app/",
    desc: "Premium property interface with search filters, cards and clean navigation." },
  { title: "BrewAI Coffee Chatbot", cat: "AI Chatbot / Automation", img: "/images/hero-mockup-3.jpg", url: "https://coffeechatboot.netlify.app/",
    desc: "Chatbot-assisted ordering experience with suggested questions and a support workflow." },
  { title: "Aurila Online Store", cat: "Shopify / eCommerce", img: "/images/hero-mockup-4.jpg", url: "https://aurliaecomrce.netlify.app/",
    desc: "Elegant storefront with product cards, category navigation and shopping-focused UI." },
];

// Set photo to e.g. "/images/zain-ul-hassan.jpg" once you add the file
export const TEAM: { name: string; role: string; photo: string | null; bio: string }[] = [
  { name: "Zain Ul Hassan", role: "CEO & Founder", photo: "/images/zain-ul-hassan.jpg",
    bio: "Zain Ul Hassan guides Pixitech Studio's direction, from digital solutions and product development to collaboration with clients." },
  { name: "Mansoor Hussain", role: "Director", photo: "/images/Mansoor-Hussain.jpg",
    bio: "Mansoor Hussain serves as Director of Pixitech Studio, supporting the team's growth and project delivery." },
];

export const FLOW = [
  ["Website Visitor", Globe], ["AI Chatbot", Bot], ["Intent Recognition", Brain], ["Lead Qualification", Filter],
  ["CRM or Database", Database], ["Email / Notification", Mail], ["Human Handoff", UserCheck],
] as const;

export const WHY = ["Tailored digital solutions", "Responsive, user-focused design", "Performance-conscious development", "Technical SEO best practices",
  "Scalable, maintainable code", "AI-driven business automation", "Clear communication", "Local and global clients"];

export const PROCESS = [
  ["Discovery & Requirements", "We clarify goals, users and scope so everyone starts aligned."],
  ["Planning & UI/UX Design", "Structure and design are agreed before development begins."],
  ["Development & Integration", "We build in stages and connect the services you need."],
  ["Testing & Optimization", "Devices, forms and speed are checked before launch."],
  ["Launch & Ongoing Support", "We deploy, hand over and stay available for improvements."],
];
