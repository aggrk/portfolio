/**
 * Navbar component
 *
 * Font: Add to your index.html or global CSS —
 *   @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap');
 *   then set: font-family: 'DM Sans', sans-serif;
 */

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useReducer, useCallback, useRef } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────

const SECTIONS = ["home", "about", "projects", "certificates", "contact"];

const NAV_SPRING = { type: "spring", stiffness: 380, damping: 32 };

// ─── State ────────────────────────────────────────────────────────────────────

const initialNavState = { activeSection: "home", isScrolled: false };

function navReducer(state, action) {
  switch (action.type) {
    case "SCROLL_UPDATE":
      // Bail out early — avoid re-render if nothing changed
      if (
        state.activeSection === action.activeSection &&
        state.isScrolled === action.isScrolled
      ) {
        return state;
      }
      return {
        activeSection: action.activeSection,
        isScrolled: action.isScrolled,
      };
    default:
      return state;
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [{ activeSection, isScrolled }, dispatch] = useReducer(
    navReducer,
    initialNavState,
  );

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const navRef = useRef(null);

  // ── Scroll tracking ──────────────────────────────────────────────────────

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let nextSection = "home";

    for (const section of SECTIONS) {
      const el = document.getElementById(section);
      if (el && scrollPosition >= el.offsetTop - 100) {
        nextSection = section;
      }
    }

    const atBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 50;

    dispatch({
      type: "SCROLL_UPDATE",
      activeSection: atBottom ? "contact" : nextSection,
      isScrolled: window.scrollY > 50,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // ── Navigation ───────────────────────────────────────────────────────────

  const scrollToSection = useCallback(
    (section) => {
      document
        .getElementById(section)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    },
    [setIsMenuOpen],
  );

  // ── Outside click ────────────────────────────────────────────────────────

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

  // ── Body scroll lock ─────────────────────────────────────────────────────

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Navbar ──────────────────────────────────────────── */}
      <motion.nav
        ref={navRef}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-xl ${
          isScrolled
            ? "bg-[#0d1137]/95 shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-[#0d1137]/80"
        }`}
      >
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-[#e52165]/40" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center h-[72px]">

            {/* ── Logo ── */}
            <motion.button
              onClick={() => scrollToSection("home")}
              className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e52165] rounded"
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-white text-lg font-semibold tracking-wide">
                Kennedy <span className="text-[#e52165]">Phinias</span>
              </span>
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
                      className="relative flex items-center px-4 py-2 text-sm font-medium capitalize tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e52165] rounded-full group"
                      whileTap={{ scale: 0.95 }}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-[#e52165]/10 border border-[#e52165]/25"
                          transition={NAV_SPRING}
                        />
                      )}

                      <span
                        className={`relative z-10 transition-colors duration-200 ${
                          isActive
                            ? "text-[#e52165]"
                            : "text-white/55 group-hover:text-white"
                        }`}
                      >
                        {section}
                      </span>

                      {isActive && (
                        <motion.span
                          layoutId="nav-dot"
                          className="relative z-10 ml-1.5 w-1 h-1 rounded-full bg-[#e52165] flex-shrink-0"
                          transition={NAV_SPRING}
                        />
                      )}
                    </motion.a>
                  </li>
                );
              })}

              {/* CTA */}
              <li className="ml-4">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-[#e52165] hover:bg-[#c91d58] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e52165] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1137]"
                >
                  Hire me →
                </a>
              </li>
            </ul>

            {/* ── Mobile hamburger ── */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-[#e52165]/40 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e52165]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.92 }}
            >
              <div className="w-5 flex flex-col gap-[5px]">
                <motion.span
                  className="block h-px bg-white rounded-full origin-center"
                  animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  className="block h-px bg-white rounded-full"
                  animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-px bg-white rounded-full origin-center"
                  animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e52165] origin-left"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* ── Mobile menu ─────────────────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col bg-[#0d1137]"
          >
            <ul className="flex flex-col items-center justify-center flex-1 gap-1">
              {SECTIONS.map((section, i) => {
                const isActive = activeSection === section;
                return (
                  <motion.li
                    key={section}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={`#${section}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section);
                      }}
                      className="flex items-center gap-3 px-8 py-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e52165] rounded"
                    >
                      <span className="font-mono text-xs text-[#e52165]/35 w-5 text-right select-none tabular-nums">
                        0{i + 1}
                      </span>

                      <span
                        className={`text-3xl font-semibold capitalize tracking-wide transition-colors duration-200 ${
                          isActive
                            ? "text-[#e52165]"
                            : "text-white/45 group-hover:text-white"
                        }`}
                      >
                        {section}
                      </span>

                      {isActive && (
                        <motion.span
                          layoutId="mobile-indicator"
                          className="w-1.5 h-1.5 rounded-full bg-[#e52165] flex-shrink-0"
                          transition={NAV_SPRING}
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            {/* Availability footer */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="pb-12 flex flex-col items-center gap-3"
              aria-label="Availability status"
            >
              <div className="h-px w-12 bg-white/10" />
              <p className="text-white/25 text-xs tracking-widest uppercase font-mono">
                Available for freelance
              </p>
              <span
                className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                aria-hidden="true"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}