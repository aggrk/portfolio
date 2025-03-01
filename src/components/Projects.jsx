/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "A brief description of your project...",
    image: "https://via.placeholder.com/400x200",
    tags: ["React", "Tailwind CSS", "Node.js"],
    link: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description: "A brief description of your project...",
    image: "https://via.placeholder.com/400x200",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    link: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A brief description of your project...",
    image: "https://via.placeholder.com/400x200",
    tags: ["React Native", "Expo", "Firebase"],
    link: "#",
  },
];

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-br from-[#0d1137] to-[#1a1f4e] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-center mb-12"
        >
          Projects 🚀
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-[#e52165] mb-3">
                {project.title}
              </h4>
              <p className="text-[#0d1137] text-base mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#e52165] text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="mt-auto inline-block text-[#e52165] hover:underline font-medium"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
