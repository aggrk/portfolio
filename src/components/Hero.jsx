import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaDiscord, FaTelegram } from "react-icons/fa6";

// ─── Constants ────────────────────────────────────────────────────────────────

const roles = [
  "Full-Stack Developer",
  "Mobile App Developer",
  "React Enthusiast",
  "Rustacean",
];

const socials = [
  { icon: <FiGithub />,    url: "https://github.com/aggrk",              label: "GitHub"   },
  { icon: <FiLinkedin />,  url: "https://linkedin.com/in/kennedyphinias", label: "LinkedIn" },
  { icon: <FaXTwitter />,  url: "https://x.com/ItsKennedyK",             label: "Twitter"  },
  { icon: <FaDiscord />,   url: "https://discord.com/users/itskennedyk",  label: "Discord"  },
  { icon: <FaTelegram />,  url: "https://t.me/ItsKennedyK",              label: "Telegram" },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((p) => (p + 1) % roles.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0d1137] pt-[72px] overflow-hidden"
    >
      {/* Left accent rule */}
      <div className="absolute left-6 sm:left-10 lg:left-16 top-[72px] bottom-0 w-px bg-white/[0.04]" />

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
          <span className="font-mono text-xs text-white/35 tracking-[0.2em] uppercase">
            Available for freelance
          </span>
        </motion.div>

        {/* Name */}
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="font-mono text-sm text-[#e52165]/70 tracking-[0.25em] uppercase mb-3"
          >
            Kennedy Phinias
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(48px,9vw,112px)] font-bold leading-[0.92] tracking-tight text-white"
          >
            Full-Stack
            <br />
            <span className="text-white/25">&amp;</span> Mobile
            <br />
            Developer
          </motion.h1>
        </div>

        {/* Role tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-px w-8 bg-[#e52165]/40 flex-shrink-0" />
          <div className="h-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block text-sm font-mono text-white/40 tracking-wide"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Description + CTAs side by side on larger screens */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-10 sm:gap-16 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="max-w-sm text-sm text-white/40 leading-relaxed font-light"
          >
            I turn ideas into impactful digital products — building scalable
            full-stack and mobile applications with a focus on clean code,
            modern design, and real-world impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-4 flex-shrink-0"
          >
            <motion.a
              href="#projects"
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 bg-[#e52165] hover:bg-[#c91d58] text-white text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e52165] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1137]"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 border border-white/10 hover:border-white/25 text-white/50 hover:text-white text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              Get in touch
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom strip — socials + index */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-between border-t border-white/5 pt-6"
        >
          {/* Socials */}
          <div className="flex items-center gap-1">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center text-white/25 hover:text-white transition-colors duration-200 rounded"
              >
                <span className="text-base">{s.icon}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ────────────────────────────── */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 group flex flex-col items-center gap-2 focus:outline-none"
        aria-label="Scroll to about section"
      >
        <div className="w-5 h-8 rounded-full border border-white/15 group-hover:border-white/30 flex items-start justify-center pt-1.5 transition-colors duration-200">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-[#e52165]"
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-white/20 group-hover:text-white/40 uppercase transition-colors duration-200">
          scroll
        </span>
      </motion.a>
    </section>
  );
}