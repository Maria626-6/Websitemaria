import { useRef } from "react";
import { motion, useInView } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Brand Identity System",
    category: "Design",
    description:
      "A comprehensive visual identity for a fintech startup — logo, typography, color palette, and component library delivered in 3 weeks.",
    tags: ["Branding", "UI Design", "Figma"],
    accent: "#AD49E1",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    category: "Automation",
    description:
      "Real-time analytics dashboard that consolidates sales, inventory, and customer data into a single automated reporting pipeline.",
    tags: ["Data", "React", "Automation"],
    accent: "#9E56E1",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Design & Development",
    description:
      "End-to-end UX redesign of a banking app resulting in a 40% increase in daily active users and a 4.8-star App Store rating.",
    tags: ["Mobile", "UX Research", "Prototyping"],
    accent: "#7C3AED",
  },
  {
    id: 4,
    title: "Workflow Automation Suite",
    category: "Automation",
    description:
      "Custom no-code automation tools that reduced manual data entry by 80% for a logistics company handling 10 000+ daily orders.",
    tags: ["Process", "Integration", "API"],
    accent: "#6D28D9",
  },
  {
    id: 5,
    title: "SaaS Onboarding Experience",
    category: "Design",
    description:
      "Redesigned the full onboarding flow for a SaaS platform, cutting time-to-value from 14 days to under 48 hours.",
    tags: ["UX", "Product Design", "A/B Testing"],
    accent: "#AD49E1",
  },
  {
    id: 6,
    title: "AI-Powered CRM Integration",
    category: "Automation",
    description:
      "Built a smart CRM layer that auto-tags leads, predicts churn, and surfaces next-best-action recommendations — saving 15 hours per week per sales rep.",
    tags: ["AI", "CRM", "Automation"],
    accent: "#7C3AED",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col justify-between rounded-2xl border border-[#2D0340]/10 bg-white/60 backdrop-blur-sm p-8 overflow-hidden cursor-default"
      style={{ minHeight: 260 }}
    >
      {/* Accent bar */}
      <div
        className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl transition-all duration-500 group-hover:w-2"
        style={{ background: project.accent }}
      />

      {/* Top row */}
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

        {/* Arrow icon */}
        <motion.div
          className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#2D0340]/20 mt-1"
          whileHover={{ scale: 1.1, borderColor: project.accent }}
          transition={{ duration: 0.2 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 13L13 3M13 3H6M13 3V10" stroke="#2D0340" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      {/* Description */}
      <p
        className="mt-4 pl-4 text-[#2D0340]/70"
        style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(13px,1vw,16px)", lineHeight: 1.65 }}
      >
        {project.description}
      </p>

      {/* Tags */}
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
    </motion.div>
  );
}

export default function OurWorkSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px 0px" });

  return (
    <section
      className="w-full px-[clamp(32px,6vw,120px)] py-24"
      style={{ background: "#F2E2FE" }}
    >
      {/* Heading */}
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
          A selection of projects that reflect our commitment to craft and impact.
        </p>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
