/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress } from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Natours API",
    description:
      "RESTful API for managing and booking tours with secure JWT authentication, CRUD operations, and advanced querying capabilities.",
    image: "/images/natours-api.png",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "https://documenter.getpostman.com/view/40148474/2sAYX2PQGQ",
    github: "#",
    icon: <SiExpress />,
    iconColor: "text-gray-300",
    featured: true,
  },
  {
    id: 2,
    title: "Printforge",
    description:
      "Next.js platform for 3D printing enthusiasts featuring responsive design, modern UI, and seamless user experience.",
    image: "/images/printforge.png",
    tags: ["Next.js", "Tailwind"],
    link: "https://printforge-aggr.vercel.app/",
    github: "#",
    icon: <SiNextdotjs />,
    iconColor: "text-white",
    featured: true,
  },
  {
    id: 3,
    title: "Ardhi Digital",
    description:
      "Professional environmental tech company website with smooth animations, service showcases, and responsive design.",
    image: "/images/ardhi.png",
    tags: ["React", "Tailwind"],
    link: "https://mazingira-aggr.netlify.app",
    github: "#",
    icon: <FaReact />,
    iconColor: "text-cyan-400",
    featured: false,
  },
  {
    id: 4,
    title: "Natours Frontend",
    description:
      "Interactive tour booking platform with authentication, maps, and admin dashboard.",
    image: "/images/natours.jpg",
    tags: ["React", "Tailwind", "React Query"],
    link: "https://natours-aggr.netlify.app",
    github: "#",
    icon: <FaReact />,
    iconColor: "text-cyan-400",
    featured: false,
  },
  {
    id: 5,
    title: "UsePopcorn App",
    description:
      "Movie search and rating application with watched list functionality.",
    image: "/images/popcorn.png",
    tags: ["React", "CSS", "OMDb API"],
    link: "https://movie-search-aggr.netlify.app/",
    github: "#",
    icon: <FaReact />,
    iconColor: "text-cyan-400",
    featured: false,
  },
  {
    id: 6,
    title: "React Quizzical",
    description:
      "Interactive quiz application with score tracking and answer validation.",
    image: "/images/quiz.png",
    tags: ["React", "CSS"],
    link: "https://react-quiz-aggr.netlify.app/",
    github: "#",
    icon: <FaReact />,
    iconColor: "text-cyan-400",
    featured: false,
  },
  {
    id: 7,
    title: "Ecommerce API",
    description:
      "Full-featured e-commerce backend with product management, cart functionality, and user authentication.",
    image: "/images/shop-api.png",
    tags: ["Node.js", "Express", "JWT"],
    link: "https://github.com/aggrk/ecommerce-api",
    github: "#",
    icon: <SiExpress />,
    iconColor: "text-gray-300",
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  const isLive = project.link.startsWith("https");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col border border-white/5 hover:border-[#e52165]/25 bg-white/[0.02] hover:bg-white/[0.04] rounded-xl overflow-hidden transition-all duration-400"
      style={{
        transition: "border-color 0.3s, background 0.3s, box-shadow 0.3s",
      }}
      whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(229,33,101,0.1)" }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#0d1137]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e2e] via-[#0a0e2e]/40 to-transparent" />

        {/* Top-right action buttons — appear on hover */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0d1137]/90 border border-white/10 text-white/70 hover:text-white hover:border-white/30 transition-all duration-200 backdrop-blur-sm"
              aria-label="GitHub"
            >
              <FiGithub size={14} />
            </a>
          )}
          {isLive && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e52165]/90 border border-[#e52165] text-white hover:bg-[#e52165] transition-all duration-200 backdrop-blur-sm"
              aria-label="Live site"
            >
              <FiExternalLink size={14} />
            </a>
          )}
        </div>

        {/* Index number */}
        <div className="absolute bottom-3 left-4">
          <span className="font-mono text-xs text-white/20 tracking-widest">
            0{project.id}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title row */}
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-xl ${project.iconColor} flex-shrink-0`}>
            {project.icon}
          </span>
          <h4 className="text-base font-semibold text-white group-hover:text-[#e52165] transition-colors duration-300 leading-tight">
            {project.title}
          </h4>
        </div>

        {/* Description */}
        <p className="text-white/45 text-sm leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-xs font-mono text-[#e52165]/80 border border-[#e52165]/15 bg-[#e52165]/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer link */}
        <div className="pt-4 border-t border-white/5">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            className={`inline-flex items-center gap-2 text-xs font-mono tracking-wide transition-colors duration-200 ${
              isLive
                ? "text-[#e52165]/70 hover:text-[#e52165]"
                : "text-white/20 cursor-not-allowed pointer-events-none"
            }`}
          >
            {isLive ? (
              <>
                View Project <FiExternalLink size={12} />
              </>
            ) : (
              "Coming Soon"
            )}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0d1137] py-28 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-[#e52165] opacity-[0.06] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-[#e52165] opacity-[0.04] blur-3xl pointer-events-none" />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-xs text-[#e52165]/70 tracking-[0.3em] uppercase">
            03 / Projects
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
            Featured <span className="text-[#e52165]">Work</span>
          </motion.h2>

          <motion.a
            href="https://github.com/aggrk"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-[#e52165]/40 text-white/60 hover:text-white text-sm font-medium transition-all duration-300 self-start sm:self-auto flex-shrink-0"
          >
            <FiGithub size={15} />
            View all on GitHub
          </motion.a>
        </div>

        {/* ── Projects grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
