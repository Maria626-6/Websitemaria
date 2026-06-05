import svgPaths from "../../imports/Hero-2/svg-c0uz91zrbc";
import Component1 from "../../imports/Component1/Component1";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-[#fbf7fc] overflow-hidden"
      style={{
        aspectRatio: "4649 / 2091",
        minHeight: 320,
        maxHeight: 720,
      }}
    >

      {/*
        ── Text content (Frame 12) ────────────────────────────────────────────
        Left-aligned, vertically centered.
        Pink rectangle behind "Empowering businesses" only.
      */}
      <div
        className="absolute z-10"
        style={{
          left: "5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "41%",
        }}
      >
        <div className="relative">
          <p
            className="relative bg-[#FBF7FC] text-[#2d0340] max-w-[420px] px-[4px] py-[0px] ml-[36px] mr-[0px] mt-[74px] mb-[0px]"
            style={{
              fontFamily: "Fredoka, sans-serif",
              fontSize: "clamp(14px, 2.3vw, 44px)",
              lineHeight: 1.38,
            }}
          >
          {/* Pink highlight — only behind the first line */}
          <div
            className="absolute bg-[#d369b8] opacity-25 rounded-xs mx-[16px] my-[0px] px-[2px] py-[0px]"
            style={{
              left: "-4%",
              top: "0.04em",
              width: "67%",
              height: "1.15em",
            }}
          />
            <strong className="font-semibold">
              Empowering businesses
            </strong>
            {" with hand-crafted tech solutions that drive innovation, efficiency, and growth."}
          </p>
        </div>
      </div>

      {/*
        ── Component1: hand + Vector 46 as a single unit ─────────────────────
        Positioned using the exact Figma frame percentages.
        Component1 is 1630.5 × 921.5 px in Figma, placed at (3189, 1033)
        within the 4649 × 2091 hero frame.
        The inset values inside Component1 keep the hand image and forearm
        lines perfectly aligned at any rendered size.
      */}
      <div
        className="absolute"
        style={{
          left: "68.6%",
          top: "49.4%",
          width: "35.1%",
          height: "44.1%",
        }}
      >
        <Component1 className="relative w-full h-full" />
      </div>
      {/*
        ── Purple sweeping line (Vector) ──────────────────────────────────────
        SVG viewBox: 0 0 2785.37 1399.18  (≈ 2:1 ratio)
        Path starts at bottom-right (2776, 1395) → pencil-tip side
        Path ends at left-center (143, 345) → left tail
        Rotated -12.17 deg around its own center.

        Sized at 82 % of hero width so the loop fills the left ~75 % of the
        hero, with the starting point landing near the pencil tip on the right.
        Shifted left -4 % and up -22 % (in hero-height units) so the loop
        arcs above the top edge – matching the Figma screenshot.
      */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "7.6%",
          top: "22.8%",
          width: "59.6%",
          transform: "rotate(-12.17deg)",
          transformOrigin: "50% 50%",
        }}
      >
        <svg
          viewBox="0 0 2785.37 1399.18"
          fill="none"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d={svgPaths.p1a174c00}
            opacity="0.426966"
            stroke="#A252D4"
            strokeWidth="15.05"
          />
        </svg>
      </div>
    </section>
  );
}