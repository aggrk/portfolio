import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { FaTelegram, FaDiscord } from "react-icons/fa";
import { BsFillCloudFill } from "react-icons/bs";

// ─── Data ─────────────────────────────────────────────────────────────────────

const socials = [
  { Icon: FiGithub,        href: "https://github.com/aggrk",                          label: "GitHub"   },
  { Icon: FaTelegram,      href: "https://t.me/ItsKennedyK",                          label: "Telegram" },
  { Icon: FaDiscord,       href: "https://discord.com/users/itskennedyk",              label: "Discord"  },
  { Icon: BsFillCloudFill, href: "https://bsky.app/profile/itskennedyk.bsky.social",  label: "Bluesky"  },
];

const navLinks = ["home", "about", "projects", "certificates", "contact"];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative bg-[#080c2a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">

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
              className="text-white/70 hover:text-white text-sm font-semibold tracking-wide transition-colors duration-200 focus:outline-none"
            >
              Kennedy <span className="text-[#e52165]">Phinias</span>
            </button>
            <p className="font-light text-white/25 text-xs tracking-wide">
              Building things for the web &amp; mobile.
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
                className="font-mono text-xs text-white/25 hover:text-white capitalize tracking-wider transition-colors duration-200 focus:outline-none"
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
            className="flex items-center gap-4"
          >
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/25 hover:text-white transition-colors duration-200 text-base"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs text-white/15 tracking-wider">
            © {new Date().getFullYear()} Kennedy Phinias. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/15 tracking-wider">
            Built with React &amp; Framer Motion
          </p>
        </div>

      </div>
    </footer>
  );
}