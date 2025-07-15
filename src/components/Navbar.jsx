/* eslint-disable no-unused-vars */
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const linkVariants = {
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 300 },
  },
  tap: { scale: 0.95 },
};

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);

  const scrollYProgress = useSpring(scrollY, { stiffness: 100, damping: 30 });

  // Handle scroll to update active section
  const handleScroll = useCallback(() => {
    const sections = ["home", "about", "projects", "certificates", "contact"];
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Center of viewport
    let newActiveSection = "home"; // Default to first section

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const sectionTop = element.offsetTop - 100; // Offset for navbar height
        const sectionBottom = sectionTop + element.offsetHeight;

        // Check if viewport center is within section bounds
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          newActiveSection = section;
        }
      }
    }

    // Special case for "contact" at page bottom
    const contactElement = document.getElementById("contact");
    if (
      contactElement &&
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 50
    ) {
      newActiveSection = "contact";
    }

    setActiveSection(newActiveSection);
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback(
    (section) => {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMenuOpen(false);
      }
    },
    [setIsMenuOpen]
  );

  const handleOutsideClick = useCallback(
    (e) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen, setIsMenuOpen]
  );

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen, handleOutsideClick]);

  return (
    <motion.nav
      ref={navRef}
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-20 top-0 transition-all duration-300 ${
        isScrolled ? "bg-[#0d1137]/95 shadow-xl" : "bg-[#0d1137]/90"
      } backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.h1
          className="text-[#e52165] text-2xl md:text-3xl font-bold tracking-tight cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection("home")}
        >
          Kennedy Phinias
        </motion.h1>

        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#e52165] rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <motion.svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </motion.svg>
        </button>

        <ul className="hidden md:flex md:space-x-8">
          {["home", "about", "projects", "certificates", "contact"].map(
            (section) => (
              <motion.li
                key={section}
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className={`relative py-2 text-white hover:text-[#e52165] transition-colors duration-300 capitalize font-medium ${
                    activeSection === section ? "text-[#e52165]" : ""
                  }`}
                  aria-current={activeSection === section ? "page" : undefined}
                >
                  {section}
                  {activeSection === section && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#e52165]"
                      layoutId="underline"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </motion.li>
            )
          )}
        </ul>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-16 left-0 w-full bg-[#0d1137]/95 backdrop-blur-md shadow-xl overflow-hidden md:hidden z-50"
        >
          <ul className="p-4 flex flex-col items-center">
            {["home", "about", "projects", "certfificates", "contact"].map(
              (section) => (
                <motion.li
                  key={section}
                  variants={linkVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <a
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                    className={`block py-3 text-white hover:text-[#e52165] transition-colors duration-300 capitalize font-medium ${
                      activeSection === section ? "text-[#e52165]" : ""
                    }`}
                  >
                    {section}
                  </a>
                </motion.li>
              )
            )}
          </ul>
        </motion.div>
      )}

      <motion.div
        className="h-1 bg-[#e52165] absolute bottom-0 left-0"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.nav>
  );
}
