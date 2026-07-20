import { useRef } from "react";
import { motion, useInView } from "motion/react";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  accent: string;
  href?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Commerce Pulse",
    category: "Automation",
    description:
      "A fragmented storefront ran reporting across three tools. Hand-crafted a live analytics dashboard that unifies sales, inventory risk, and channel mix — giving operators a single pulse on revenue in under a second.",
    tags: ["Data", "Vite", "Netlify Functions"],
    accent: "#AD49E1",
    href: "https://imaginative-pony-7763ea.netlify.app",
  },
  {
    id: 2,
    title: "InvoiceFlow",
    category: "Automation",
    description:
      "Manual invoicing drained hours from a growing services team. Built a draft→sent→paid automation pipeline with live tax totals and dispatch logs — cutting invoice turnaround by an estimated 70%.",
    tags: ["Process", "API", "Automation"],
    accent: "#9E56E1",
    href: "https://comfy-crisp-528616.netlify.app",
  },
  {
    id: 3,
    title: "Onboardly",
    category: "Design & Development",
    description:
      "SaaS teams were losing users in a 14-day setup maze. Crafted a guided multi-step onboarding experience with goals, integrations, and a success checklist — compressing time-to-value to under 48 hours.",
    tags: ["UX", "Product Design", "Vite"],
    accent: "#7C3AED",
    href: "https://startling-salmiakki-7df9d8.netlify.app",
  },
  {
    id: 4,
    title: "SignalCRM",
    category: "Automation",
    description:
      "Sales reps spent evenings triaging cold leads by hand. Delivered a smart CRM layer that auto-tags leads, estimates churn risk, and surfaces next-best actions — reclaiming ~15 hours per week per rep.",
    tags: ["AI", "CRM", "Automation"],
    accent: "#6D28D9",
    href: "https://symphonious-starship-8c9bbb.netlify.app",
  },
  {
    id: 5,
    title: "Brand Identity System",
    category: "Design",
    description:
      "A comprehensive visual identity for a fintech startup — logo, typography, color palette, and component library delivered in 3 weeks.",
    tags: ["Branding", "UI Design", "Figma"],
    accent: "#AD49E1",
  },
  {
    id: 6,
    title: "Mobile Banking App",
    category: "Design & Development",
    description:
      "End-to-end UX redesign of a banking app resulting in a 40% increase in daily active users and a 4.8-star App Store rating.",
    tags: ["Mobile", "UX Research", "Prototyping"],
    accent: "#7C3AED",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  const isLink = Boolean(project.href);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col justify-between rounded-2xl border border-[#2D0340]/10 bg-white/60 backdrop-blur-sm p-8 overflow-hidden ${
        isLink ? "cursor-pointer hover:border-[#2D0340]/25 transition-colors" : "cursor-default"
      }`}
      style={{ minHeight: 260 }}
    >
      {isLink ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10"
          aria-label={`Open live demo: ${project.title}`}
        />
      ) : null}

      <div className="relative z-0 flex h-full flex-col justify-between pointer-events-none">
        <div
          className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl transition-all duration-500 group-hover:w-2"
          style={{ background: project.accent }}
        />

        <div className="flex items-start justify-between gap-4 pl-4">
          <div>
            <span
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: project.accent, fontFamily: "Nunito, sans-serif" }}
            >
              {project.category}
            </span>
            <h3
              className="mt-1 text-[#2D0340]"
              style={{ fontFamily: "Fredoka, sans-serif", fontSize: "clamp(20px,1.6vw,28px)" }}
            >
              {project.title}
            </h3>
          </div>

          <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#2D0340]/20 mt-1 group-hover:border-[#AD49E1]/50 transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 13L13 3M13 3H6M13 3V10"
                stroke="#2D0340"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <p
          className="mt-4 pl-4 text-[#2D0340]/70"
          style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(13px,1vw,16px)", lineHeight: 1.65 }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6 pl-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: `${project.accent}18`,
                color: project.accent,
                fontFamily: "Nunito, sans-serif",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function OurWorkSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px 0px" });

  return (
    <section
      id="our-work"
      className="w-full scroll-mt-[60px] px-[clamp(32px,6vw,120px)] py-24"
      style={{ background: "#F2E2FE" }}
    >
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 32 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <h2
          className="text-[#2D0340] font-bold leading-none"
          style={{ fontFamily: "Fredoka, sans-serif", fontSize: "clamp(48px,8.5vw,120px)" }}
        >
          Our Work
        </h2>
        <p
          className="mt-4 text-[#2D0340]/60 max-w-xl mx-auto"
          style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(14px,1.2vw,20px)", lineHeight: 1.6 }}
        >
          Real problems. Hand-crafted solutions. Measurable wins.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
