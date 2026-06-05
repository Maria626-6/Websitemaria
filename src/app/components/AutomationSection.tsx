import automationSvg from "../../imports/data___automation_image.svg";

export default function AutomationSection() {
  return (
    <section
      className="w-full flex items-center justify-center gap-[clamp(40px,2.6vw,120px)] px-[clamp(32px,5vw,120px)] py-20"
      style={{ background: "#FBF7FC", minHeight: "100svh" }}
    >
      {/* Text container — left side */}
      <div
        className="flex flex-col justify-center items-start shrink-0"
        style={{ gap: "clamp(48px,6vw,140px)", maxWidth: "clamp(280px,31.6vw,700px)" }}
      >
        <h2
          className="font-bold leading-none text-[#2D0340]"
          style={{
            fontFamily: "Fredoka, sans-serif",
            fontSize: "clamp(48px,8.5vw,160px)",
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
      </div>

      {/* Automation image — right side */}
      <div className="flex-1 flex items-center justify-center min-w-0 max-w-[50%]">
        <img
          src={automationSvg}
          alt="Data and automation illustration"
          className="w-full h-auto object-contain pl-[clamp(24px,3vw,64px)]"
        />
      </div>
    </section>
  );
}
