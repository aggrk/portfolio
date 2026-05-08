import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

// ─── Data ─────────────────────────────────────────────────────────────────────

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
    date: "Jun 2025",
    link: "https://scrimba.com/certificate-cert2uNje7fs9VX2aBa4jCcm7BGxF9smfLj6uPa",
  },
  {
    id: 5,
    title: "Node.js",
    issuer: "Scrimba",
    date: "Jul 2025",
    link: "https://scrimba.com/certificate-cert22z7m4z2fNYQdJbZYmk9xHmTDZMeRcjA7jrryYDMFfZS",
  },
  {
    id: 6,
    title: "Express.js",
    issuer: "Scrimba",
    date: "Jul 2025",
    link: "https://scrimba.com/certificate-cert22z7m4z2fNYQdJbZYmkACDW3ToFjJr2CQGjhZosCkeJ1",
  },
];

// ─── Row ──────────────────────────────────────────────────────────────────────

function CertRow({ cert, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-[32px_1fr_auto] sm:grid-cols-[32px_1fr_120px_80px_auto] items-start sm:items-center gap-4 sm:gap-6 py-5 border-b border-white/5 hover:border-white/10 transition-colors duration-200"
    >
      {/* Index */}
      <span className="font-mono text-[11px] text-white/20 tabular-nums pt-0.5">
        {String(cert.id).padStart(2, "0")}
      </span>

      {/* Title + meta on mobile */}
      <div className="min-w-0">
        <h3 className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-200 leading-snug mb-1">
          {cert.title}
        </h3>
        {/* Issuer + date — shown inline below title on mobile, hidden on sm+ */}
        <div className="flex items-center gap-2 sm:hidden">
          <span className="font-mono text-[10px] text-white/25 uppercase tracking-wider">
            {cert.issuer}
          </span>
          <span className="text-white/10 text-[10px]">·</span>
          <span className="font-mono text-[10px] text-white/20 tracking-wide">
            {cert.date}
          </span>
        </div>
      </div>

      {/* Issuer — desktop only */}
      <span className="hidden sm:block font-mono text-[11px] text-white/25 uppercase tracking-wider">
        {cert.issuer}
      </span>

      {/* Date — desktop only */}
      <span className="hidden sm:block font-mono text-[11px] text-white/20 tracking-wide">
        {cert.date}
      </span>

      {/* Link */}
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${cert.title} certificate`}
        className="text-white/20 hover:text-[#e52165] transition-colors duration-150 justify-self-end pt-0.5"
      >
        <FiExternalLink size={14} />
      </a>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative bg-[#080c2a] py-28"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Credentials
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-[11px] text-white/20 tracking-[0.2em] uppercase self-start sm:self-auto"
          >
            {certificates.length} earned
          </motion.p>
        </div>

        {/* Table header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-[32px_1fr_auto] sm:grid-cols-[32px_1fr_120px_80px_auto] gap-4 sm:gap-6 pb-3 border-b border-white/8"
        >
          <span className="font-mono text-[10px] text-white/15 uppercase tracking-wider">#</span>
          <span className="font-mono text-[10px] text-white/15 uppercase tracking-wider">Course</span>
          <span className="hidden sm:block font-mono text-[10px] text-white/15 uppercase tracking-wider">Issuer</span>
          <span className="hidden sm:block font-mono text-[10px] text-white/15 uppercase tracking-wider">Date</span>
          <span className="font-mono text-[10px] text-white/15 uppercase tracking-wider justify-self-end">Link</span>
        </motion.div>

        {/* Rows */}
        <div>
          {certificates.map((cert, i) => (
            <CertRow key={cert.id} cert={cert} index={i} />
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </section>
  );
}