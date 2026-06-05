import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import ContactFormImage from "../../imports/ContactFormImage/ContactFormImage";

const IMG_W = 2939.04;
const IMG_H = 2104.999;

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px 0px" });

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / IMG_W);
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scaledH = IMG_H * scale;

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ background: "#FBF7FC", minHeight: Math.max(scaledH, 600) }}
    >
      {/* Decorative image frame */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: `${IMG_W}px`,
          height: `${IMG_H}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        <ContactFormImage className="w-full h-full" />
      </div>

      {/* Form centered on top */}
      <motion.div
        ref={formRef}
        initial={{ opacity: 0, y: 40 }}
        animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center w-full px-[5px] py-[96px] mx-[0px] my-[-28px]"
      >

        {/* Card */}
        <div
          className="w-full max-w-lg rounded-2xl border border-[#2D0340]/10 bg-white/70 backdrop-blur-md px-8 py-10 flex flex-col gap-6 mt-12"
        >
        {/* Title */}
        <h2
          className="text-[#2D0340] font-bold leading-none text-center mx-[0px] mt-[0px] mb-[31px]"
          style={{ fontFamily: "Fredoka, sans-serif", fontSize: "clamp(32px,4.5vw,72px)" }}
        >
          Let's work together!
        </h2>
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-semibold tracking-widest uppercase text-[#2D0340]/60"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full rounded-xl border border-[#2D0340]/20 bg-transparent px-4 py-3 text-[#2D0340] placeholder-[#2D0340]/30 outline-none focus:border-[#AD49E1] transition-colors duration-200"
              style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(14px,1vw,16px)" }}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-semibold tracking-widest uppercase text-[#2D0340]/60"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[#2D0340]/20 bg-transparent text-[#2D0340] placeholder-[#2D0340]/30 outline-none focus:border-[#AD49E1] transition-colors duration-200 px-[16px] py-[12px]"
              style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(14px,1vw,16px)" }}
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-semibold tracking-widest uppercase text-[#2D0340]/60"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Message
            </label>
            <textarea
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full rounded-xl border border-[#2D0340]/20 bg-transparent text-[#2D0340] placeholder-[#2D0340]/30 outline-none focus:border-[#AD49E1] transition-colors duration-200 resize-none px-[16px] py-[0px]"
              style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(14px,1vw,16px)" }}
            />
          </div>

          {/* Send button */}
          <div className="flex justify-end mx-[0px] mt-[4px] mb-[0px]">
            <button
              type="submit"
              className="px-8 py-2.5 rounded-full border-2 border-[#2d0340] bg-[#fbf7fc] text-[#2d0340] font-medium transition-all duration-200 hover:bg-[#2E073F] hover:text-[#fbf7fc] hover:border-[#2E073F]"
              style={{ fontFamily: "Fredoka, sans-serif", fontSize: "clamp(14px,1vw,18px)" }}
            >
              Send
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
