import { useRef } from "react";
import designSvg from "../../imports/image__design_.svg";
import { motion, useInView } from "motion/react";

export default function DesignSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px 0px" });
  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-[clamp(40px,2.6vw,120px)] px-4 sm:px-8 md:px-12 lg:px-[clamp(32px,5vw,120px)] py-12 sm:py-16 md:py-20 lg:min-h-svh"
      style={{ background: "#9E56E1" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[min(100%,420px)] sm:max-w-[min(100%,480px)] lg:max-w-[560px] shrink-0 flex items-center justify-center"
      >
        <img
          src={designSvg}
          alt="UX/UI design illustration"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[700px] flex flex-col items-center lg:items-start text-center lg:text-left gap-8 md:gap-10 lg:gap-[clamp(48px,6vw,140px)]"
      >
        <h2
          className="text-[#FBF7FC] font-bold leading-none"
          style={{
            fontFamily: "Fredoka, sans-serif",
            fontSize: "clamp(40px, 10vw, 160px)",
          }}
        >
          Design
        </h2>

        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <p
            className="text-[#FBF7FC]"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "clamp(15px, 2.5vw, 26px)",
              lineHeight: 1.6,
            }}
          >
            Crafting solutions that make every interaction meaningful.
          </p>
          <p
            className="text-[#FBF7FC]"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "clamp(15px, 2.5vw, 26px)",
              lineHeight: 1.6,
            }}
          >
            Helping businesses create visually stunning and intuitive digital
            experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
