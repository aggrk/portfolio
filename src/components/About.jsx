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
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss, SiExpress, SiMongodb, SiRedux } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Styled Components", icon: <FaCode /> },
  { name: "React Hook Form", icon: <FaReact /> },
  { name: "React Query", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "React Native (Expo)", icon: <FaReact /> },
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redux", icon: <SiRedux /> },
];

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-[#0d1137] mb-6"
        >
          About Me
        </motion.h3>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-[#0d1137] leading-relaxed mb-8"
        >
          I am a passionate developer driven by the desire to be useful, do
          what’s meaningful, and make things happen. With a strong foundation in
          coding, I have honed my skills in building interactive and functional
          applications. My mission is to create solutions that solve real-life
          problems, leveraging technology to make a difference. I am constantly
          learning and refining my craft, aiming to become a highly skilled
          developer and programmer. Every project I work on is a step toward
          that goal, pushing boundaries and embracing challenges. Let’s build
          something impactful together!
        </motion.p>

        <div className="mt-6">
          <h4 className="text-xl font-semibold text-[#e52165] mb-6">
            My Skills
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex items-center bg-[#0d1137] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#e52165] transition-colors duration-300"
              >
                <span className="text-2xl mr-3">{skill.icon}</span>
                <span className="text-sm font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
