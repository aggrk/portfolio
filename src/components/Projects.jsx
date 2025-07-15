/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

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
    icon: <SiExpress className="text-gray-600" />,
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
    icon: <SiNextdotjs className="text-black dark:text-white" />,
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
    icon: <FaReact className="text-cyan-500" />,
  },
  {
    id: 4,
    title: "Natours Frontend",
    description:
      "Interactive tour booking platform with authentication, maps, and admin dashboard (currently in development).",
    image: "/images/natours.jpg",
    tags: ["React", "Tailwind", "React Query"],
    link: "https://natours-aggr.netlify.app",
    github: "#",
    icon: <FaReact className="text-cyan-500" />,
  },
  {
    id: 5,
    title: "UsePopcorn App",
    description:
      "Movie search and rating application with watched list functionality (desktop only, mobile coming soon).",
    image: "/images/popcorn.png",
    tags: ["React", "CSS", "OMDb API"],
    link: "https://movie-search-aggr.netlify.app/",
    github: "#",
    icon: <FaReact className="text-cyan-500" />,
  },
  {
    id: 6,
    title: "React Quizzical",
    description:
      "Interactive quiz application with score tracking and answer validation features.",
    image: "/images/quiz.png",
    tags: ["React", "CSS"],
    link: "https://react-quiz-aggr.netlify.app/",
    github: "#",
    icon: <FaReact className="text-cyan-500" />,
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
    icon: <SiExpress className="text-gray-600 dark:text-gray-200" />,
  },
];

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -10,
    boxShadow:
      "0 20px 25px -5px rgba(229, 33, 101, 0.1), 0 10px 10px -5px rgba(229, 33, 101, 0.04)",
    transition: { duration: 0.3 },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-24 bg-gradient-to-br from-[#0d1137] via-[#1a1f4e] to-[#2a2f6e] text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#e52165] opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#0dd3ff] opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-[#e52165] mb-4">
            My Work
          </h2>
          <motion.h3 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Featured Projects
          </motion.h3>
          <div className="w-20 h-1 bg-gradient-to-r from-[#e52165] to-[#0dd3ff] mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ staggerChildren: 0.1 }}
              className="bg-[#1a1f4e] rounded-xl overflow-hidden border border-[#2a2f6e] shadow-2xl flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0d1137] to-transparent opacity-80"></div> */}
                {/* <div className="absolute top-4 right-4 flex gap-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#0d1137] p-2 rounded-full text-white"
                    >
                      <FiGithub className="text-lg" />
                    </motion.a>
                  )}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#0d1137] p-2 rounded-full text-white"
                    >
                      <FiExternalLink className="text-lg" />
                    </motion.a>
                  )}
                </div> */}
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{project.icon}</div>
                  <h4 className="text-xl font-bold text-white">
                    {project.title}
                  </h4>
                </div>

                <p className="text-gray-300 mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={tagVariants}
                      className="bg-[#0d1137] text-[#e52165] px-3 py-1 rounded-full text-xs font-medium border border-[#2a2f6e]"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Project Link */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className={`inline-flex items-center font-medium ${
                    project.link.startsWith("https")
                      ? "text-[#e52165] hover:text-[#d11a55]"
                      : "text-gray-500 cursor-not-allowed"
                  }`}
                >
                  {project.link.startsWith("https") ? (
                    <>
                      View Project <FiExternalLink className="ml-2" />
                    </>
                  ) : (
                    "Coming Soon"
                  )}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/aggrk"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#e52165] to-[#9c1a4a] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <FiGithub className="mr-2" /> View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
