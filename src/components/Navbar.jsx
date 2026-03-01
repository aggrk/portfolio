/* eslint-disable no-unused-vars */
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";

const SECTIONS = ["home", "about", "projects", "certificates", "contact"];

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let current = "home";

    for (const section of SECTIONS) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop - 100;
        if (scrollPosition >= top) current = section;
      }
    }

    // Snap to contact at page bottom
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 50
    ) {
      current = "contact";
    }

    setActiveSection(current);
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback(
    (section) => {
      document
        .getElementById(section)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    },
    [setIsMenuOpen],
  );

  const handleOutsideClick = useCallback(
    (e) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen, setIsMenuOpen],
  );

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [handleOutsideClick]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* ── Navbar bar ────────────────────────────────────── */}
      <motion.nav
        ref={navRef}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full z-50 top-0 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0d1137]/95 shadow-[0_4px_40px_rgba(229,33,101,0.08)]"
            : "bg-[#0d1137]/80"
        } backdrop-blur-xl`}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e52165]/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-[72px]">
            {/* ── Logo ── */}
            <motion.button
              onClick={() => scrollToSection("home")}
              className="relative group flex items-center gap-2 focus:outline-none"
              whileTap={{ scale: 0.97 }}
            >
              {/* Animated bracket */}
              <span className="text-[#e52165] font-mono text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300 select-none">
                &lt;
              </span>
              <span className="text-white text-lg font-semibold tracking-wide">
                Kennedy <span className="text-[#e52165]">Phinias</span>
              </span>
              <span className="text-[#e52165] font-mono text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300 select-none">
                /&gt;
              </span>
              {/* Glow on hover */}
              <span className="absolute inset-0 -z-10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#e52165]/5 blur-xl" />
            </motion.button>

            {/* ── Desktop nav links ── */}
            <ul className="hidden md:flex items-center gap-1">
              {SECTIONS.map((section) => {
                const isActive = activeSection === section;
                return (
                  <li key={section}>
                    <motion.a
                      href={`#${section}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section);
                      }}
                      aria-current={isActive ? "page" : undefined}
                      className="relative flex items-center px-4 py-2 text-sm font-medium capitalize tracking-wide focus:outline-none group"
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Background pill on active */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-[#e52165]/10 border border-[#e52165]/20"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}

                      <span
                        className={`relative z-10 transition-colors duration-300 ${
                          isActive
                            ? "text-[#e52165]"
                            : "text-white/60 group-hover:text-white"
                        }`}
                      >
                        {section}
                      </span>

                      {/* Dot indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-dot"
                          className="relative z-10 ml-1.5 w-1 h-1 rounded-full bg-[#e52165] flex-shrink-0"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                    </motion.a>
                  </li>
                );
              })}

              {/* CTA button */}
              <li className="ml-4">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="relative flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e52165]"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="absolute inset-0 bg-[#e52165] transition-all duration-300" />
                  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Hire me</span>
                  <motion.span
                    className="relative z-10 text-xs"
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.8,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </li>
            </ul>

            {/* ── Mobile hamburger ── */}
            <motion.button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-[#e52165]/40 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e52165]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.92 }}
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <motion.span
                  className="block h-px bg-white rounded-full origin-center"
                  animate={
                    isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="block h-px bg-white rounded-full"
                  animate={
                    isMenuOpen
                      ? { opacity: 0, scaleX: 0 }
                      : { opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-px bg-white rounded-full origin-center"
                  animate={
                    isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* ── Scroll progress bar ── */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
          style={{
            scaleX,
            background: "linear-gradient(90deg, #e52165, #ff6b9d)",
          }}
        />
      </motion.nav>

      {/* ── Full-screen mobile menu ────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ background: "rgba(13,17,55,0.98)" }}
          >
            {/* Subtle radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(229,33,101,0.08) 0%, transparent 70%)",
              }}
            />

            {/* Decorative corner lines */}
            <div className="absolute top-24 left-8 w-12 h-px bg-[#e52165]/20" />
            <div className="absolute top-24 left-8 w-px h-12 bg-[#e52165]/20" />
            <div className="absolute bottom-16 right-8 w-12 h-px bg-[#e52165]/20" />
            <div className="absolute bottom-16 right-8 w-px h-12 bg-[#e52165]/20 self-end" />

            {/* Nav links */}
            <ul className="flex flex-col items-center justify-center flex-1 gap-2">
              {SECTIONS.map((section, i) => {
                const isActive = activeSection === section;
                return (
                  <motion.li
                    key={section}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={`#${section}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section);
                      }}
                      className="relative flex items-center gap-3 px-8 py-3 group focus:outline-none"
                    >
                      {/* Index number */}
                      <span className="font-mono text-xs text-[#e52165]/40 w-5 text-right select-none">
                        0{i + 1}
                      </span>

                      {/* Label */}
                      <span
                        className={`text-3xl font-semibold capitalize tracking-wide transition-colors duration-300 ${
                          isActive
                            ? "text-[#e52165]"
                            : "text-white/50 group-hover:text-white"
                        }`}
                      >
                        {section}
                      </span>

                      {/* Active indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="mobile-indicator"
                          className="w-1.5 h-1.5 rounded-full bg-[#e52165] flex-shrink-0"
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            {/* Bottom contact prompt */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="pb-12 flex flex-col items-center gap-3"
            >
              <div className="h-px w-16 bg-white/10" />
              <p className="text-white/30 text-xs tracking-widest uppercase font-mono">
                Available for freelance
              </p>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
