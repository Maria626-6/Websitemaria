import { useRef } from "react";
import automationSvg from "../../imports/data___automation_image.svg";
import { motion, useInView } from "motion/react";

export default function AutomationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px 0px" });

  return (
    <section
      ref={sectionRef}
      className="w-full flex items-center justify-center gap-[clamp(40px,2.6vw,120px)] px-[clamp(32px,5vw,120px)] py-20"
      style={{ background: "#FBF7FC", minHeight: "100svh" }}
    >
      {/* Text container — left side */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col justify-center items-start shrink-0"
        style={{ gap: "clamp(48px,6vw,140px)", maxWidth: "clamp(280px,31.6vw,700px)" }}
      >
        <h2
          className="font-bold leading-none text-[#2D0340]"
          style={{
            fontFamily: "Fredoka, sans-serif",
            fontSize: "clamp(40px,7.5vw,150px)",
          }}
        >
          Automation
        </h2>

        <p
          className="text-[#2D0340]"
          style={{
            fontFamily: "Nunito, sans-serif",
            fontSize: "clamp(16px,1.4vw,26px)",
            lineHeight: 1.6,
          }}
        >
          Providing tools and solutions that help businesses save time, make
          informed decisions, and stay ahead in a competitive landscape.
        </p>
      </motion.div>

      {/* Automation image — right side */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 flex items-center justify-center ml-26 min-w-0 max-w-[50%]"
      >
        <img
          src={automationSvg}
          alt="Data and automation illustration"
          className="w-full h-auto object-contain pl-[clamp(24px,3vw,64px)]"
        />
      </motion.div>
    </section>
  );
}
