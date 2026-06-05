export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#fbf7fc]/90 backdrop-blur-sm">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#2d0340]">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 16 L10 4 L16 16" stroke="#d369b8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.5 11.5 H13.5" stroke="#d369b8" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <span
          className="text-[#2d0340] text-xl font-semibold tracking-tight"
          style={{ fontFamily: "Fredoka, sans-serif" }}
        >
          Nexus
        </span>
      </a>

      {/* Links */}
      <div className="flex items-center gap-8">
        <a
          href="#"
          className="text-[#2d0340] text-base font-medium transition-opacity hover:opacity-70"
          style={{ fontFamily: "Fredoka, sans-serif" }}
        >
          Our Work
        </a>

        <a
          href="#"
          className="px-6 py-2 rounded-full border-2 border-[#2d0340] bg-[#fbf7fc] text-[#2d0340] text-base font-medium transition-all duration-200 hover:bg-[#2E073F] hover:text-[#fbf7fc] hover:border-[#2E073F]"
          style={{ fontFamily: "Fredoka, sans-serif" }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
