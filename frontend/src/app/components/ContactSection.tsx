import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import ContactFormImage from "../../imports/ContactFormImage/ContactFormImage";

const IMG_W = 2939.04;
const IMG_H = 2104.999;

const CONTACT = {
  email: "maria.illera01@gmail.com",
  linkedin: "https://www.linkedin.com/in/maria-i-243458393/",
  github: "https://github.com/Maria626-6",
};

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 1.881 4.267 4.373v6.368zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scale, setScale] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentInView = useInView(contentRef, { once: true, margin: "-60px 0px" });

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
      id="contact"
      ref={sectionRef}
      className="relative w-full scroll-mt-[60px] overflow-hidden flex items-center justify-center"
      style={{ background: "#FBF7FC", minHeight: Math.max(scaledH, 480) }}
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

      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, y: 40 }}
        animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center w-full px-3 sm:px-5 md:px-8 pt-6 pb-10 sm:pt-10 sm:pb-14 md:pt-16 md:pb-24"
      >
        <div className="w-full max-w-[min(100%,22rem)] sm:max-w-md md:max-w-lg lg:max-w-2xl backdrop-blur-md px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-8 lg:py-10 flex flex-col items-center -mt-6 sm:-mt-20 md:-mt-28 lg:-mt-44 mb-4 sm:mb-6 md:mb-0 lg:mb-10">
          <h2
            className="text-[#2D0340] font-bold leading-tight lg:leading-none text-center text-[clamp(18px,3.2vw,42px)] lg:text-[clamp(38px,5.5vw,80px)]"
            style={{ fontFamily: "Fredoka, sans-serif" }}
          >
            Let&apos;s work together!
          </h2>

          <p
            className="mt-3 sm:mt-4 md:mt-5 text-center text-[#2D0340]/45 text-[clamp(11px,0.85vw,14px)] lg:text-[clamp(13px,0.95vw,16px)] leading-relaxed max-w-[22rem] lg:max-w-[28rem]"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Open to freelance projects, full-time roles, and creative collaborations.
            <br />
            Feel free to reach out!
          </p>

          <div className="w-full h-px bg-[#2D0340]/15 mt-5 sm:mt-6 md:mt-8 mb-5 sm:mb-6 md:mb-8" />

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-3 sm:gap-4 w-full group"
          >
            <span className="flex items-center justify-center size-10 sm:size-11 lg:size-12 shrink-0 rounded-xl bg-[#EDE4F5] text-[#2D0340] transition-colors group-hover:bg-[#E0D0F0]">
              <MailIcon className="size-4 sm:size-5" />
            </span>
            <span className="flex flex-col min-w-0">
              <span
                className="text-[10px] sm:text-[11px] lg:text-xs font-semibold tracking-widest uppercase text-[#2D0340]/45"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Email
              </span>
              <span
                className="text-[#2D0340] text-[clamp(12px,0.9vw,15px)] lg:text-[clamp(14px,1vw,17px)] truncate group-hover:text-[#AD49E1] transition-colors"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                {CONTACT.email}
              </span>
            </span>
          </a>

          <div className="flex gap-2.5 sm:gap-3 w-full mt-5 sm:mt-6 md:mt-8">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#2D0340]/20 bg-[#FBF7FC] px-3 py-2.5 sm:py-3 text-[#2D0340] transition-all duration-200 hover:border-[#2D0340] hover:bg-[#2E073F] hover:text-[#FBF7FC]"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              <LinkedInIcon className="size-4 sm:size-[1.1rem] shrink-0" />
              <span className="text-[clamp(12px,0.85vw,14px)] lg:text-[15px] font-medium">
                LinkedIn
              </span>
            </a>

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#2D0340]/20 bg-[#FBF7FC] px-3 py-2.5 sm:py-3 text-[#2D0340] transition-all duration-200 hover:border-[#2D0340] hover:bg-[#2E073F] hover:text-[#FBF7FC]"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              <GitHubIcon className="size-4 sm:size-[1.1rem] shrink-0" />
              <span className="text-[clamp(12px,0.85vw,14px)] lg:text-[15px] font-medium">
                GitHub
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
