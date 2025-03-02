/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Natours API",
    description:
      "The Natours API is a RESTful API designed for managing and booking tours. It provides endpoints for retrieving, creating, updating, and deleting tours, as well as user authentication and authorization. The API supports secure user authentication with JWT.",
    image: "/images/natours-api.png",
    tags: ["Node.js", "Express", "mongoDB"],
    link: "https://documenter.getpostman.com/view/40148474/2sAYX2PQGQ",
  },
  {
    id: 2,
    title: "UsePopcorn App",
    description:
      "The UsePopcorn App is a movie search application designed to help users search for movies, rate them, and add them to a watched list. I created this app to practice and improve my React skills. The application is currently not mobile responsive, and I plan to add more features.",
    image: "/images/popcorn.png",
    tags: ["React", "CSS"],
    link: "https://movie-search-aggr.netlify.app/",
  },
  {
    id: 3,
    title: "React Quizzical",
    description:
      "The React Quizzical App is an application that displays questions for users to answer. It provides a score and highlights the correct answers for any questions the user got wrong. I created this application to practice my React skills.",
    image: "/images/quiz.png",
    tags: ["React", "CSS"],
    link: "https://react-quiz-aggr.netlify.app/",
  },
  {
    id: 4,
    title: "Ecommerce API",
    description:
      "The E-commerce API is a RESTful API designed to allow users to browse and order products. It provides endpoints for viewing products, placing orders, adding and removing items from the cart, user authentication (login and signup), and enabling admins and sellers to manage products by adding or deleting them.",
    image: "/images/shop-api.png",
    tags: ["Node.js", "Express"],
    link: "#",
  },
  {
    id: 5,
    title: "Ecommerce Frontend",
    description:
      "The E-commerce Frontend is a responsive web application that allows users to browse products, add items to the cart, place orders, and manage their profiles. It includes authentication, product search and filtering, a wishlist, order tracking, and a seamless checkout process. Admins and sellers can manage inventory, orders, and users efficiently.",
    image: "/images/shop.jpg",
    tags: ["React.js", "Tailwind"],
    link: "#",
  },
  {
    id: 6,
    title: "Natours",
    description:
      "The Natours Frontend is a responsive tour booking web application that allows users to explore available tours, view detailed tour information, book tours, and manage their accounts. It features authentication, interactive maps, user reviews, and a smooth booking experience. Admins can manage tours, bookings, and users through a dedicated dashboard.",
    image: "/images/natours.jpg",
    tags: ["React.js", "Tailwind"],
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
          Projects
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
                {project.link.startsWith("https")
                  ? "Learn More →"
                  : "Coming Soon"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
