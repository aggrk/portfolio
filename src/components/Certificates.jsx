import { motion } from "framer-motion";
import { EyeIcon, GraduationCap, BadgeCheck } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "The Ultimate React Course",
    issuer: "Udemy",
    date: "Aug 2024",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-1151e7f0-4309-4cae-822e-84c476725b80.jpg?v=1724833817000",
  },
  {
    id: 2,
    title: "Advanced React",
    issuer: "Scrimba",
    date: "Nov 2023",
    link: "https://scrimba.com/certificate-cert2uNje7fs9VX2aBa4jCcnSYdV56c7MhVv9Au",
  },
  {
    id: 3,
    title: "Node.js, Express & MongoDB",
    issuer: "Udemy",
    date: "Feb 2025",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-3e23cca0-955c-4d94-bc04-4019a628f2cb.jpg?v=1740114392000",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    issuer: "Scrimba",
    date: "June 2025",
    link: "https://scrimba.com/certificate-cert2uNje7fs9VX2aBa4jCcm7BGxF9smfLj6uPa",
  },
  {
    id: 5,
    title: "Node.js",
    issuer: "Scrimba",
    date: "July 2025",
    link: "https://scrimba.com/certificate-cert22z7m4z2fNYQdJbZYmk9xHmTDZMeRcjA7jrryYDMFfZS",
  },
  {
    id: 6,
    title: "Express.js",
    issuer: "Scrimba",
    date: "July 2025",
    link: "https://scrimba.com/certificate-cert22z7m4z2fNYQdJbZYmkACDW3ToFjJr2CQGjhZosCkeJ1",
  },
];

// Group by issuer for a subtle visual distinction
const issuerColor = {
  Udemy: "text-orange-400 border-orange-400/20 bg-orange-400/5",
  Scrimba: "text-emerald-400 border-emerald-400/20 bg-emerald-400/5",
};

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative bg-[#080c2a] py-28 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(229,33,101,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e52165]/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-xs text-[#e52165]/70 tracking-[0.3em] uppercase">
            04 / Certificates
          </span>
          <div className="h-px w-14 bg-[#e52165]/20" />
        </motion.div>

        {/* ── Heading ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            My <span className="text-[#e52165]">Credentials</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/30 text-sm font-mono tracking-wide self-start sm:self-auto"
          >
            {certificates.length} certificates earned
          </motion.p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 50px rgba(229,33,101,0.1)",
              }}
              className="group relative flex flex-col p-6 border border-white/5 hover:border-[#e52165]/25 bg-white/[0.02] hover:bg-white/[0.04] rounded-xl transition-all duration-300"
            >
              {/* Top row: issuer badge + verified */}
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border ${
                    issuerColor[cert.issuer] ??
                    "text-white/40 border-white/10 bg-white/5"
                  }`}
                >
                  <GraduationCap size={11} />
                  {cert.issuer}
                </span>
                <span className="flex items-center gap-1 text-emerald-400 text-xs font-mono">
                  <BadgeCheck size={13} />
                  Verified
                </span>
              </div>

              {/* Certificate number */}
              <span className="font-mono text-[11px] text-white/15 tracking-widest mb-2">
                0{cert.id}
              </span>

              {/* Title */}
              <h3 className="text-base font-semibold text-white/90 group-hover:text-white leading-snug mb-3 transition-colors duration-300 flex-1">
                {cert.title}
              </h3>

              {/* Date */}
              <p className="text-xs font-mono text-white/25 tracking-wider mb-5">
                Issued {cert.date}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/5 mb-5" />

              {/* View button */}
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#e52165]/70 hover:text-[#e52165] transition-colors duration-200 group/btn"
              >
                <EyeIcon size={14} />
                View Certificate
                <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 text-xs">
                  →
                </span>
              </motion.a>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-[#e52165]/0 via-[#e52165]/40 to-[#e52165]/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
