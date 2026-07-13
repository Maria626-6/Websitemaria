export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#fbf7fc]/90 backdrop-blur-sm">
      {/* Logo */}
      <a href="#" className="flex items-center gap-3">
        {/* Logo mark */}
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="42" height="42" rx="12" fill="#2d0340" />

          {/* Stylised M — brush-stroke feel with open base */}
          <path
            d="M8 30 L8 14 L21 24 L34 14 L34 30"
            stroke="#d369b8"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* 4-point sparkle — handcrafted accent, top-right */}
          <path
            d="M33 8 L34.1 10.9 L37 12 L34.1 13.1 L33 16 L31.9 13.1 L29 12 L31.9 10.9 Z"
            fill="#d369b8"
          />

          {/* Tiny dot accent — bottom left, balances the composition */}
          <circle cx="9" cy="33" r="1.6" fill="#9e56e1" />
        </svg>

        {/* Wordmark */}
        <span
          className="text-[#2d0340] font-semibold tracking-tight"
          style={{ fontFamily: "Fredoka, sans-serif", fontSize: "18px" }}
        >
          Maria Illera
        </span>
      </a>

      {/* Links */}
      <div className="flex items-center gap-8">
       
        <a
          href="#our-work"
          className="text-[#2d0340] text-base font-medium transition-opacity hover:opacity-70"
          style={{ fontFamily: "Fredoka, sans-serif" }}
        >
          Our Work
        </a>

        <a
          href="#contact"
          className="px-6 py-2 rounded-full border-2 border-[#2d0340] bg-[#fbf7fc] text-[#2d0340] text-base font-medium transition-all duration-200 hover:bg-[#2E073F] hover:text-[#fbf7fc] hover:border-[#2E073F]"
          style={{ fontFamily: "Fredoka, sans-serif" }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
