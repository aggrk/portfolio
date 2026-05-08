import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaRust,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
} from "react-icons/si";

// ─── Data ─────────────────────────────────────────────────────────────────────

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML",              icon: <FaHtml5 />,      color: "text-orange-400" },
      { name: "CSS",               icon: <FaCss3Alt />,    color: "text-blue-400"   },
      { name: "Tailwind CSS",      icon: <SiTailwindcss />,color: "text-cyan-400"   },
      { name: "React.js",          icon: <FaReact />,      color: "text-cyan-300"   },
      { name: "Next.js",           icon: <SiNextdotjs />,  color: "text-white"      },
      { name: "React Native",      icon: <FaReact />,      color: "text-cyan-300"   },
      { name: "Redux",             icon: <SiRedux />,      color: "text-purple-400" },
      { name: "React Query",       icon: <FaReact />,      color: "text-red-400"    },
      { name: "React Hook Form",   icon: <FaReact />,      color: "text-cyan-300"   },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js",  icon: <FaNodeJs />,   color: "text-green-400"  },
      { name: "Express",  icon: <SiExpress />,  color: "text-gray-300"   },
      { name: "Rust",     icon: <FaRust />,     color: "text-orange-400" },
      { name: "PHP",      icon: <FaPhp />,      color: "text-indigo-400" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MySQL",    icon: <FaDatabase />, color: "text-blue-300"   },
      { name: "MongoDB",  icon: <SiMongodb />,  color: "text-green-500"  },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0d1137] py-28"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/5" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-14"
        >
          About me
        </motion.h2>

        {/* Bio — two column on large screens */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0 mb-20"
        >
          {/* Left — bio */}
          <div className="pr-0 lg:pr-14 pb-10 lg:pb-0 space-y-5">
            <p className="text-white/55 text-base leading-relaxed font-light">
              I&apos;m a developer driven by the desire to be useful, do
              what&apos;s meaningful, and{" "}
              <span className="text-white/90 font-normal">make things happen.</span>{" "}
              With a strong foundation in coding, I&apos;ve honed my skills in
              building interactive and functional applications.
            </p>
            <p className="text-white/55 text-base leading-relaxed font-light">
              My mission is to create solutions that solve real-life problems,
              leveraging technology to make a difference. Every project I work
              on is a step toward becoming a{" "}
              <span className="text-white/90 font-normal">highly skilled developer</span>{" "}
              — pushing boundaries and embracing challenges.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block bg-white/5" />

          {/* Right — quick facts */}
          <div className="pl-0 lg:pl-14 pt-10 lg:pt-0 border-t border-white/5 lg:border-0">
            <dl className="space-y-6">
              {[
                { term: "Based in",   detail: "Tanzania"              },
                { term: "Focus",      detail: "Full-Stack & Mobile"   },
                { term: "Status",     detail: "Open to freelance"     },
                { term: "Languages",  detail: "JS, Rust, PHP"         },
              ].map(({ term, detail }) => (
                <div key={term} className="flex items-start justify-between gap-6 pb-6 border-b border-white/5 last:border-0 last:pb-0">
                  <dt className="font-mono text-[11px] text-white/25 uppercase tracking-wider flex-shrink-0 pt-0.5">
                    {term}
                  </dt>
                  <dd className="text-sm text-white/70 text-right">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-2.5 bg-[#e52165] hover:bg-[#c91a55] text-white text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e52165] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1137]"
            >
              Let&apos;s build together →
            </motion.a>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Skills header */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-xs text-[#e52165]/70 tracking-[0.3em] uppercase">
              Tech Stack
            </span>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          {/* Categories */}
          <div className="space-y-10">
            {skillCategories.map((category, catIdx) => (
              <div
                key={category.label}
                className="grid grid-cols-[80px_1px_1fr] gap-0"
              >
                {/* Category label */}
                <div className="pr-6 pt-1">
                  <span className="font-mono text-[11px] text-white/20 uppercase tracking-wider">
                    {category.label}
                  </span>
                </div>

                {/* Vertical rule */}
                <div className="bg-white/5" />

                {/* Skills — flat list, no pill cards */}
                <div className="pl-6 flex flex-wrap gap-x-6 gap-y-4">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIdx * 0.05 + i * 0.04 }}
                      className="group flex items-center gap-2 cursor-default"
                    >
                      <span
                        className={`text-base ${skill.color} opacity-60 group-hover:opacity-100 transition-opacity duration-200`}
                        aria-hidden="true"
                      >
                        {skill.icon}
                      </span>
                      <span className="text-sm text-white/35 group-hover:text-white/75 transition-colors duration-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </section>
  );
}