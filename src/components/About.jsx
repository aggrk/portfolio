/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
} from "react-icons/si";

const skillCategories = [
  {
    label: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "text-orange-400" },
      { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "React.js", icon: <FaReact />, color: "text-cyan-300" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
      { name: "Styled Components", icon: <FaCode />, color: "text-pink-400" },
      { name: "React Hook Form", icon: <FaReact />, color: "text-cyan-300" },
      { name: "React Query", icon: <FaReact />, color: "text-red-400" },
      { name: "Redux", icon: <SiRedux />, color: "text-purple-400" },
      { name: "React Native", icon: <FaReact />, color: "text-cyan-300" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
      { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
      { name: "PHP", icon: <FaPhp />, color: "text-indigo-400" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MySQL", icon: <FaDatabase />, color: "text-blue-300" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0d1137] py-28 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(229,33,101,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e52165]/30 to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-xs text-[#e52165]/70 tracking-[0.3em] uppercase">
            02 / About
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[#e52165]/20" />
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10"
        >
          Who I <span className="text-[#e52165]">am</span>
        </motion.h2>

        {/* ── Bio ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl space-y-5 mb-20"
        >
          <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
            I&apos;m a passionate developer driven by the desire to be useful,
            do what&apos;s meaningful, and{" "}
            <span className="text-white/90">make things happen.</span> With a
            strong foundation in coding, I&apos;ve honed my skills in building
            interactive and functional applications.
          </p>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed font-light">
            My mission is to create solutions that solve real-life problems,
            leveraging technology to make a difference. Every project I work on
            is a step toward becoming a{" "}
            <span className="text-white/90">highly skilled developer</span> —
            pushing boundaries and embracing challenges.
          </p>

          {/* CTA */}
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 mt-2 px-6 py-3 rounded-full bg-[#e52165] text-white text-sm font-semibold hover:bg-[#c91a55] transition-colors duration-300"
          >
            Let&apos;s build together
            <span>→</span>
          </motion.a>
        </motion.div>

        {/* ── Skills ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Skills header */}
          <div className="flex items-center gap-4">
            <h3 className="font-mono text-xs text-[#e52165]/70 tracking-[0.3em] uppercase">
              Tech Stack
            </h3>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          {/* Categorized skill groups */}
          {skillCategories.map((category, catIdx) => (
            <div key={category.label}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[11px] text-white/25 tracking-[0.2em] uppercase">
                  {category.label}
                </span>
                <div className="h-px w-8 bg-white/5" />
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIdx * 0.05 + i * 0.04,
                    }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="group flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-white/5 bg-white/[0.03] hover:border-[#e52165]/30 hover:bg-[#e52165]/5 transition-all duration-300 cursor-default"
                  >
                    <span
                      className={`text-lg ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      {skill.icon}
                    </span>
                    <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors duration-300 font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
