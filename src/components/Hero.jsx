/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { FaReact, FaJs } from "react-icons/fa";
import { FaXTwitter, FaDiscord, FaTelegram } from "react-icons/fa6";
import { SiNextdotjs, SiExpress } from "react-icons/si";

const roles = [
  "Full-Stack Developer",
  "Mobile App Developer",
  "React Enthusiast",
  "Rustacean",
];

const socials = [
  { icon: <FiGithub />, url: "https://github.com/aggrk", label: "GitHub" },
  {
    icon: <FiLinkedin />,
    url: "https://linkedin.com/in/kennedyphinias",
    label: "LinkedIn",
  },
  { icon: <FaXTwitter />, url: "https://x.com/ItsKennedyK", label: "Twitter" },
  {
    icon: <FaDiscord />,
    url: "https://discord.com/users/itskennedyk",
    label: "Discord",
  },
  { icon: <FaTelegram />, url: "https://t.me/ItsKennedyK", label: "Telegram" },
];

const floatingIcons = [
  {
    Icon: FaReact,
    color: "text-cyan-400",
    style: "top-[22%] left-[6%]",
    delay: 0,
  },
  {
    Icon: SiNextdotjs,
    color: "text-white",
    style: "bottom-[30%] right-[6%]",
    delay: 2,
  },
  {
    Icon: FaJs,
    color: "text-yellow-400",
    style: "top-[35%] right-[14%]",
    delay: 4,
  },
  {
    Icon: SiExpress,
    color: "text-gray-300",
    style: "bottom-[22%] left-[12%]",
    delay: 3,
  },
];

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const fullText = "Kennedy Phinias";

  // Typing effect
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        setTypingComplete(true);
        clearInterval(t);
      }
    }, 90);
    return () => clearInterval(t);
  }, []);

  // Role rotation
  useEffect(() => {
    const t = setInterval(
      () => setRoleIndex((p) => (p + 1) % roles.length),
      3000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d1137] pt-[72px]"
    >
      {/* ── Background layers ──────────────────────────── */}

      {/* Deep radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(229,33,101,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-t from-[#0d1137] to-transparent" />

      {/* ── Floating tech icons ─────────────────────────── */}
      {floatingIcons.map(({ Icon, color, style, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute opacity-[0.12] ${style}`}
          animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon className={`text-5xl lg:text-6xl ${color}`} />
        </motion.div>
      ))}

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 flex flex-col items-center text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#e52165]/25 bg-[#e52165]/8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs font-mono text-white/60 tracking-widest uppercase">
            Available for freelance
          </span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-sm text-[#e52165]/80 tracking-[0.25em] uppercase mb-4"
        >
          Hi there, I&apos;m
        </motion.p>

        {/* Name with typing effect */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-2"
        >
          <span className="text-white">{typedText}</span>
          {!typingComplete && (
            <span className="text-[#e52165] animate-pulse ml-1">|</span>
          )}
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="h-12 flex items-center justify-center mt-4 mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/70"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="w-16 h-px bg-gradient-to-r from-transparent via-[#e52165] to-transparent mb-8"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl text-base sm:text-lg text-white/50 leading-relaxed font-light mb-10"
        >
          I turn ideas into impactful digital products — building scalable
          full-stack and mobile applications with a focus on clean code, modern
          design, and real-world impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {/* Primary */}
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative group px-7 py-3 rounded-full font-semibold text-white overflow-hidden"
          >
            <span
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, #e52165, #9c1a4a)",
              }}
            />
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </span>
          </motion.a>

          {/* Secondary */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-7 py-3 rounded-full font-semibold text-white/70 hover:text-white border border-white/10 hover:border-[#e52165]/40 hover:bg-[#e52165]/5 transition-all duration-300"
          >
            Get in touch
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center gap-1 pb-20 sm:pb-0"
        >
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -4, scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="relative group w-10 h-10 flex items-center justify-center rounded-lg text-white/30 hover:text-[#e52165] transition-colors duration-300"
            >
              <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-[#e52165]/8 transition-colors duration-300" />
              <span className="relative text-xl">{s.icon}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ────────────────────────────── */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 group flex flex-col items-center gap-1"
        aria-label="Scroll to about section"
      >
        {/* Mouse icon */}
        <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-[#e52165]/60 flex items-start justify-center pt-1.5 transition-colors duration-300">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-[#e52165]"
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="font-mono text-[10px] tracking-widest text-white/20 group-hover:text-white/40 uppercase transition-colors duration-300">
          scroll
        </span>
      </motion.a>

      {/* ── Corner decorations ──────────────────────────── */}
      <div className="absolute top-24 left-6 w-10 h-px bg-[#e52165]/20 pointer-events-none" />
      <div className="absolute top-24 left-6 w-px h-10 bg-[#e52165]/20 pointer-events-none" />
      <div className="absolute bottom-24 right-6 w-10 h-px bg-[#e52165]/20 pointer-events-none" />
      <div className="absolute bottom-24 right-6 w-px h-10 bg-[#e52165]/20 pointer-events-none" />
    </section>
  );
}
