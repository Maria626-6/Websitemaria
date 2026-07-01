import { useRef, useState, useEffect, type FormEvent } from "react";
import { motion, useInView } from "motion/react";
import ContactFormImage from "../../imports/ContactFormImage/ContactFormImage";

const IMG_W = 2939.04;
const IMG_H = 2104.999;

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "-60px 0px" });
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / IMG_W);
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scaledH = IMG_H * scale;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("bot-field")) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };
    console.log("Payload del mensaje", payload);
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Form submission failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full scroll-mt-[60px] overflow-hidden flex items-center justify-center"
      style={{ background: "#FBF7FC", minHeight: Math.max(scaledH, 600) }}
    >
      {/* Decorative image frame */}
      <div
        className="absolute mt-4 top-0 left-0 pointer-events-none"
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
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg backdrop-blur-md px-8 py-10 flex flex-col gap-6 -mt-40 mb-10"
        >
          {/* Honeypot — spam trap, hidden from users */}
          <div className="hidden" aria-hidden="true">
            <label>
              Don&apos;t fill this out:
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <h2
            className="text-[#2D0340] font-bold leading-none text-center mx-[0px] mt-[0px] mb-[31px]"
            style={{ fontFamily: "Fredoka, sans-serif", fontSize: "clamp(38px,5.5vw,80px)" }}
          >
            Let&apos;s work together!
          </h2>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-name"
              className="text-xs font-semibold tracking-widest uppercase text-[#2D0340]/60"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="w-full rounded-xl border border-[#2D0340]/20 bg-transparent px-4 py-3 text-[#2D0340] placeholder-[#2D0340]/30 outline-none focus:border-[#AD49E1] transition-colors duration-200"
              style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(14px,1vw,16px)" }}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-email"
              className="text-xs font-semibold tracking-widest uppercase text-[#2D0340]/60"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-[#2D0340]/20 bg-transparent text-[#2D0340] placeholder-[#2D0340]/30 outline-none focus:border-[#AD49E1] transition-colors duration-200 px-[16px] py-[12px]"
              style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(14px,1vw,16px)" }}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-message"
              className="text-xs font-semibold tracking-widest uppercase text-[#2D0340]/60"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full rounded-xl border border-[#2D0340]/20 bg-transparent text-[#2D0340] placeholder-[#2D0340]/30 outline-none focus:border-[#AD49E1] transition-colors duration-200 resize-none px-[16px] py-[0px]"
              style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(14px,1vw,16px)" }}
            />
          </div>

          {status === "success" && (
            <p
              className="text-center text-[#2D0340]"
              style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(14px,1vw,16px)" }}
              role="status"
            >
              Thank you! Your message has been sent.
            </p>
          )}

          {status === "error" && (
            <p
              className="text-center text-red-600"
              style={{ fontFamily: "Nunito, sans-serif", fontSize: "clamp(14px,1vw,16px)" }}
              role="alert"
            >
              Something went wrong. Please try again.
            </p>
          )}

          <div className="flex justify-end mx-[0px] mt-[4px] mb-[0px]">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-8 py-2.5 rounded-full border-2 border-[#2d0340] bg-[#fbf7fc] text-[#2d0340] font-medium transition-all duration-200 hover:bg-[#2E073F] hover:text-[#fbf7fc] hover:border-[#2E073F] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "Fredoka, sans-serif", fontSize: "clamp(14px,1vw,18px)" }}
            >
              {status === "submitting" ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
