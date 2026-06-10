import { useRef } from "react";
import { motion, useInView } from "motion/react";
import designSvg from "../../imports/image__design_.svg";

export default function DesignSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <section
      ref={ref}
      className="w-full flex items-center justify-center gap-[clamp(40px,2.6vw,120px)] px-[clamp(32px,5vw,120px)] py-20"
      style={{ background: "#9E56E1", minHeight: "100svh" }}
    >
      {/* Design illustration — left side */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="shrink-0 flex items-center justify-center"
        style={{ width: "clamp(240px,38vw,560px)" }}
      >
        <img
          src={designSvg}
          alt="UX/UI design illustration"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Text container — right side */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-start shrink-0"
        style={{ gap: "clamp(48px,6vw,140px)", maxWidth: "clamp(280px,31.6vw,700px)" }}
      >
        <h2
          className="text-[#FBF7FC] font-bold leading-none"
          style={{
            fontFamily: "Fredoka, sans-serif",
            fontSize: "clamp(48px,8.5vw,160px)",
          }}
        >
          Design
        </h2>

        <div className="flex flex-col gap-6">
          <p
            className="text-[#FBF7FC]"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "clamp(16px,1.4vw,26px)",
              lineHeight: 1.55,
            }}
          >
            Crafting solutions that make every interaction meaningful.
          </p>
          <p
            className="text-[#FBF7FC]"
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "clamp(14px,1.2vw,22px)",
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
