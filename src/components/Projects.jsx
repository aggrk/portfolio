import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaReact, FaRust } from "react-icons/fa";
import { SiNextdotjs, SiExpress } from "react-icons/si";

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "Natours API",
    description:
      "Production-grade RESTful API for tour management and booking. JWT auth, role-based access control, advanced filtering, pagination, and geospatial queries.",
    image: "/images/natours-api.png",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "https://documenter.getpostman.com/view/40148474/2sAYX2PQGQ",
    github: "#",
    icon: <SiExpress />,
    iconColor: "text-gray-300",
    live: true,
    featured: true,
  },
  {
    id: 2,
    title: "Printforge",
    description:
      "Community platform for 3D printing enthusiasts. Browse, share, and download print-ready models with a responsive UI built for speed and discoverability.",
    image: "/images/printforge.png",
    tags: ["Next.js", "Tailwind"],
    link: "https://printforge-aggr.vercel.app/",
    github: "https://github.com/aggrk/printforge",
    icon: <SiNextdotjs />,
    iconColor: "text-white",
    live: true,
    featured: true,
  },
  {
    id: 3,
    title: "Rust API",
    description:
      "Lightweight REST API in Rust. Memory-safe, fast, structured error handling, minimal overhead.",
    image: "/images/rust.png",
    tags: ["Rust"],
    link: "https://github.com/aggrk/niperamani_rust_api",
    github: "https://github.com/aggrk/niperamani_rust_api",
    icon: <FaRust />,
    iconColor: "text-orange-400",
    live: false,
    featured: false,
  },
  {
    id: 4,
    title: "Todo App",
    description:
      "CLI task manager in Rust with persistent local storage and a clean minimal interface.",
    image: "/images/rust.png",
    tags: ["Rust"],
    link: "https://github.com/aggrk/rust_todo",
    github: "https://github.com/aggrk/rust_todo",
    icon: <FaRust />,
    iconColor: "text-orange-400",
    live: false,
    featured: false,
  },
  {
    id: 5,
    title: "Natours Frontend",
    description:
      "Tour booking UI with React Query, interactive maps, booking flows, and a protected admin dashboard.",
    image: "/images/natours.jpg",
    tags: ["React", "Tailwind", "React Query"],
    link: "https://github.com/aggrk/natours-frontend",
    github: "https://github.com/aggrk/natours-frontend",
    icon: <FaReact />,
    iconColor: "text-cyan-400",
    live: false,
    featured: false,
  },
  {
    id: 6,
    title: "React Quizzical",
    description:
      "Trivia app with real-time scoring, instant answer validation, and multiple question categories.",
    image: "/images/quiz.png",
    tags: ["React", "CSS"],
    link: "https://react-quiz-aggr.netlify.app/",
    github: "#",
    icon: <FaReact />,
    iconColor: "text-cyan-400",
    live: true,
    featured: false,
  },
  {
    id: 7,
    title: "Ecommerce API",
    description:
      "E-commerce backend with product catalog, cart sessions, order processing, and JWT auth.",
    image: "/images/shop-api.png",
    tags: ["Node.js", "Express", "JWT"],
    link: "https://github.com/aggrk/ecommerce-api",
    github: "https://github.com/aggrk/ecommerce-api",
    icon: <SiExpress />,
    iconColor: "text-gray-300",
    live: false,
    featured: false,
  },
];

const featured = projects.filter((p) => p.featured);
const rest = projects.filter((p) => !p.featured);

// ─── Featured card (large) ────────────────────────────────────────────────────

function FeaturedCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden border border-white/8 hover:border-white/16 transition-colors duration-300"
    >
      {/* Image — full bleed top half */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-[#080b24]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-50 group-hover:opacity-65 group-hover:scale-[1.03] transition-all duration-700"
        />
        {/* Number stamp */}
        <span className="absolute top-4 left-5 font-mono text-[11px] text-white/25 tracking-[0.2em]">
          {String(project.id).padStart(2, "0")}
        </span>
        {/* Live badge */}
        {project.live && (
          <span className="absolute top-4 right-5 font-mono text-[10px] text-[#e52165]/80 tracking-widest uppercase border border-[#e52165]/20 px-2 py-0.5">
            Live
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-6 bg-[#0d1137]">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold text-white leading-snug group-hover:text-[#e52165] transition-colors duration-200">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0 pt-0.5">
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors duration-150"
                aria-label={`${project.title} on GitHub`}
              >
                <FiGithub size={15} />
              </a>
            )}
            {project.live && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-[#e52165] transition-colors duration-150"
                aria-label={`${project.title} live site`}
              >
                <FiExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        <p className="text-white/40 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags — plain text, no pills */}
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] text-white/25 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Row item (compact list) ──────────────────────────────────────────────────

function ProjectRow({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-5 border-b border-white/5 hover:border-white/10 transition-colors duration-200"
    >
      {/* Number */}
      <span className="font-mono text-[11px] text-white/20 tracking-widest w-6 tabular-nums">
        {String(project.id).padStart(2, "0")}
      </span>

      {/* Title + description */}
      <div className="min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <span className={`${project.iconColor} flex-shrink-0`} aria-hidden="true">
            {project.icon}
          </span>
          <h4 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-200 truncate">
            {project.title}
          </h4>
          {/* Tags inline */}
          <div className="hidden sm:flex gap-2 flex-shrink-0">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] text-white/20 uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className="text-white/30 text-xs leading-relaxed line-clamp-1">
          {project.description}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 hover:text-white transition-colors duration-150"
            aria-label={`${project.title} on GitHub`}
          >
            <FiGithub size={14} />
          </a>
        )}
        {project.live ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 hover:text-[#e52165] transition-colors duration-150"
            aria-label={`${project.title} live site`}
          >
            <FiExternalLink size={14} />
          </a>
        ) : (
          <span className="font-mono text-[10px] text-white/15 uppercase tracking-wider">
            src
          </span>
        )}
      </div>
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0d1137] py-28"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Selected work
          </motion.h2>

          <motion.a
            href="https://github.com/aggrk"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200 self-start sm:self-auto flex-shrink-0 group"
          >
            <FiGithub size={14} />
            <span className="group-hover:underline underline-offset-4">
              All repositories
            </span>
          </motion.a>
        </div>

        {/* ── Featured: 2-column asymmetric ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 mb-16">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* ── Rest: flat list ── */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <span className="font-mono text-[11px] text-white/20 tracking-[0.25em] uppercase">
              More projects
            </span>
          </div>
          {rest.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </section>
  );
}