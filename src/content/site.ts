/**
 * All editable portfolio content lives here.
 * Leave a `url` empty ("") until you have a real link — the UI shows it as "coming soon"
 * instead of a dead link.
 */
import workWeb1 from "@/assets/work-web-1.jpg";
import workWeb2 from "@/assets/work-web-2.jpg";
import workAuto1 from "@/assets/work-auto-1.jpg";
import workAuto2 from "@/assets/work-auto-2.jpg";
import workAi1 from "@/assets/work-ai-1.jpg";
import workAi2 from "@/assets/work-ai-2.jpg";
import workBrand1 from "@/assets/work-brand-1.jpg";
import workBrand2 from "@/assets/work-brand-2.jpg";

export const site = {
  name: "Peter Agunbiade",
  role: "Digital Solutions Specialist",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export const expertise = [
  "Website Design",
  "Automation",
  "AI Creative Production",
  "Brand Design",
] as const;

export type ServiceId = "web" | "automation" | "ai" | "brand";

export const services: {
  id: ServiceId;
  index: string;
  title: string;
  short: string;
  description: string;
  items: string[];
}[] = [
  {
    id: "web",
    index: "01",
    title: "Website Design & Development",
    short: "Websites",
    description:
      "Fast, polished websites and online stores built on the platform that suits your business — designed to look sharp and convert.",
    items: [
      "Framer",
      "WordPress",
      "Wix",
      "Webflow",
      "Squarespace",
      "Figma UI/UX",
      "Elementor",
      "WooCommerce",
      "Landing pages and e-commerce websites",
      "Website redesign",
    ],
  },
  {
    id: "automation",
    index: "02",
    title: "Business Automation & AI Agents",
    short: "Automation",
    description:
      "Workflows and AI agents that take repetitive work off your plate — from capturing leads to following up, booking and reporting.",
    items: [
      "n8n",
      "Make.com",
      "Zapier",
      "OpenAI, Gemini and Claude integrations",
      "AI agents",
      "API and webhook integrations",
      "Lead generation and follow-up automation",
      "Email automation",
      "GoHighLevel integrations",
      "Vapi and Retell AI integrations",
    ],
  },
  {
    id: "ai",
    index: "03",
    title: "AI Video & Creative Production",
    short: "AI Creative",
    description:
      "Scroll-stopping video and imagery produced with modern AI tools — ads, explainers, courses and stories, edited with care.",
    items: [
      "AI promotional advertisements",
      "AI e-learning videos",
      "AI storytelling",
      "AI-generated product videos",
      "AI avatars and spokesperson videos",
      "AI image generation",
      "Voiceovers and lip-sync",
      "Video editing",
    ],
  },
  {
    id: "brand",
    index: "04",
    title: "Brand & Book Design",
    short: "Brand Design",
    description:
      "Identities, book covers and layouts that give your work a clear, confident look in print and on screen.",
    items: [
      "Book cover design",
      "Book interior layout",
      "E-book design",
      "Brand identity",
      "Graphic design",
      "Marketing materials",
      "Digital visual assets",
    ],
  },
];

export const workFilters = [
  { id: "all", label: "All" },
  { id: "web", label: "Websites" },
  { id: "automation", label: "Automation" },
  { id: "ai", label: "AI Creative" },
  { id: "brand", label: "Brand Design" },
] as const;

export type WorkFilterId = (typeof workFilters)[number]["id"];

export type Project = {
  title: string;
  category: ServiceId;
  description: string;
  tools: string[];
  image: string;
  /** Demonstration piece rather than client work. */
  concept: boolean;
  /** Leave empty until a live link or case study exists. */
  url: string;
};

export const projects: Project[] = [
  {
    title: "Architecture Studio Website",
    category: "web",
    description:
      "A calm, image-led portfolio site concept for an architecture practice, with project galleries and a mobile-first layout.",
    tools: ["Framer", "Figma"],
    image: workWeb1,
    concept: true,
    url: "",
  },
  {
    title: "Skincare E-commerce Store",
    category: "web",
    description:
      "An online store concept with a soft editorial feel, product collections and a streamlined checkout flow.",
    tools: ["WooCommerce", "Elementor"],
    image: workWeb2,
    concept: true,
    url: "",
  },
  {
    title: "Lead Capture & Follow-up Flow",
    category: "automation",
    description:
      "A workflow concept that captures form leads, enriches them, notifies the team and sends timed follow-up emails.",
    tools: ["n8n", "OpenAI", "Webhooks"],
    image: workAuto1,
    concept: true,
    url: "",
  },
  {
    title: "AI Voice Booking Agent",
    category: "automation",
    description:
      "A voice assistant concept that answers calls, handles common questions and books appointments into a calendar.",
    tools: ["Vapi", "GoHighLevel", "Make.com"],
    image: workAuto2,
    concept: true,
    url: "",
  },
  {
    title: "Fragrance Launch Film",
    category: "ai",
    description:
      "A cinematic AI-generated product advert concept with atmospheric visuals, voiceover and a short-form cut for social.",
    tools: ["AI video", "Voiceover", "Editing"],
    image: workAi1,
    concept: true,
    url: "",
  },
  {
    title: "AI Presenter Course Module",
    category: "ai",
    description:
      "An e-learning video concept led by an AI spokesperson, with lip-synced narration and on-screen visuals.",
    tools: ["AI avatars", "Lip-sync", "Editing"],
    image: workAi2,
    concept: true,
    url: "",
  },
  {
    title: "Literary Fiction Cover",
    category: "brand",
    description:
      "A geometric cover concept designed to work as a hardback and as a crisp e-book thumbnail.",
    tools: ["Book cover", "E-book"],
    image: workBrand1,
    concept: true,
    url: "",
  },
  {
    title: "Monogram Brand Identity",
    category: "brand",
    description:
      "An identity system concept — mark, colour palette and stationery — built around a single confident accent.",
    tools: ["Brand identity", "Print"],
    image: workBrand2,
    concept: true,
    url: "",
  },
];

export function filterProjects(list: Project[], filter: WorkFilterId): Project[] {
  return filter === "all" ? list : list.filter((p) => p.category === filter);
}

/** Add your profile URLs here. Empty URLs render as "coming soon". */
export const socials = [
  { label: "LinkedIn", url: "" },
  { label: "Fiverr", url: "" },
  { label: "Upwork", url: "" },
  { label: "Behance", url: "" },
  { label: "Contra", url: "" },
] as const;
