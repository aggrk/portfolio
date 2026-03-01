/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FaTelegram, FaLinkedin, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillCloudFill } from "react-icons/bs";

const socials = [
  { Icon: FiGithub, href: "https://github.com/aggrk", label: "GitHub" },
  {
    Icon: FaLinkedin,
    href: "https://linkedin.com/in/kennedyphinias",
    label: "LinkedIn",
  },
  { Icon: FaXTwitter, href: "https://x.com/ItsKennedyK", label: "Twitter" },
  { Icon: FaTelegram, href: "https://t.me/ItsKennedyK", label: "Telegram" },
  {
    Icon: FaDiscord,
    href: "https://discord.com/users/itskennedyk",
    label: "Discord",
  },
  {
    Icon: BsFillCloudFill,
    href: "https://bsky.app/profile/itskennedyk.bsky.social",
    label: "Bluesky",
  },
];

const navLinks = ["home", "about", "projects", "certificates", "contact"];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative bg-[#080c2a] border-t border-white/5 overflow-hidden">
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(229,33,101,0.4), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand + tagline */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <button
              onClick={scrollToTop}
              className="font-mono text-white/80 hover:text-white tracking-[0.15em] text-sm transition-colors duration-300"
            >
              &lt;Kennedy Phinias /&gt;
            </button>
            <p className="font-light text-white/25 text-xs tracking-wide">
              Building things for the web & mobile.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          >
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="font-mono text-xs text-white/25 hover:text-[#e52165] capitalize tracking-wider transition-colors duration-300"
              >
                {link}
              </button>
            ))}
          </motion.nav>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2"
          >
            {socials.map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/5 text-white/25 hover:text-[#e52165] hover:border-[#e52165]/25 transition-all duration-300 text-sm"
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs text-white/15 tracking-wider">
            © {new Date().getFullYear()} Kennedy Phinias. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/15 tracking-wider">
            Built with React & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
