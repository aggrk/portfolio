/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { FaReact, FaJs } from "react-icons/fa";
import { FaXTwitter, FaDiscord, FaTelegram } from "react-icons/fa6";
import { SiNextdotjs, SiExpress } from "react-icons/si";

// Animation variants
const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [typingComplete, setTypingComplete] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const fullText = "Hi, I'm Kennedy Phinias";
  const roles = [
    "Full-Stack Developer",
    "Mobile App Developer",
    "React Enthusiast",
    "Rustacean",
  ];
  const typingSpeed = 100;

  // Typing effect for the headline
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  // Role rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <motion.section
      id="home"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-[#0d1137] via-[#1a1f4e] to-[#2a2f6e] pt-16 sm:pt-24 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen relative overflow-hidden"
    >
      {/* Floating Tech Icons - Modified to show on mobile */}
      <div className="absolute top-1/4 left-4 sm:left-8 opacity-20 animate-float">
        <FaReact className="text-3xl sm:text-5xl lg:text-6xl text-cyan-400" />
      </div>
      <div className="absolute bottom-1/3 right-4 sm:right-8 opacity-20 animate-float-delay">
        <SiNextdotjs className="text-3xl sm:text-5xl lg:text-6xl text-black dark:text-white" />
      </div>
      <div className="absolute top-1/3 right-1/5 opacity-20 animate-float-delay-2">
        <FaJs className="text-3xl sm:text-5xl lg:text-6xl text-yellow-400" />
      </div>
      <div className="absolute bottom-1/4 left-1/5 opacity-20 animate-float-delay-3">
        <SiExpress className="text-3xl sm:text-5xl lg:text-6xl text-gray-600 dark:text-gray-200" />
      </div>

      {/* Content */}
      <div className="max-w-xs sm:max-w-md lg:max-w-4xl mx-auto relative z-10 text-center">
        {/* Headline with typing effect */}
        <motion.h2
          variants={childVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e52165] via-[#0dd3ff] to-[#e52165] tracking-tight leading-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
        >
          {typedText}
          <span className={`cursor-blink ${typingComplete ? "hidden" : ""}`}>
            |
          </span>
        </motion.h2>

        {/* Animated Role Text */}
        <motion.div
          variants={childVariants}
          className="text-xl sm:text-2xl lg:text-3xl mt-4 sm:mt-6 h-10 sm:h-12"
        >
          <motion.span
            key={currentRoleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-white font-medium inline-block"
            style={{ fontSize: "clamp(1.25rem, 3vw, 1.875rem)" }}
          >
            {roles[currentRoleIndex]}
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={childVariants}
          className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xs sm:max-w-md lg:max-w-3xl mx-auto"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
        >
          I enjoy turning ideas into impactful solutions. As I continue to
          strengthen my skills in front-end and back-end development, I focus on
          building scalable and modern applications. My goal is to create
          technology that solves real-world challenges while learning and
          growing every day as a developer and programmer.
        </motion.p>

        {/* Call-to-action button */}
        <motion.div variants={childVariants} className="mt-8 sm:mt-10 lg:mt-12">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#e52165] to-[#9c1a4a] text-white hover:from-[#d11a55] hover:to-[#7e153d] transition-all duration-300 font-semibold relative overflow-hidden shadow-lg hover:shadow-xl inline-block"
            aria-label="Get in touch"
          >
            <span className="relative z-10">Get in touch</span>
            <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={childVariants}
          className="flex gap-4 sm:gap-6 mt-8 sm:mt-10 lg:mt-12 justify-center"
        >
          {[
            {
              icon: <FiGithub />,
              url: "https://github.com/aggrk",
              label: "GitHub",
            },
            {
              icon: <FiLinkedin />,
              url: "https://linkedin.com/in/kennedyphinias",
              label: "LinkedIn",
            },
            {
              icon: <FaXTwitter />,
              url: "https://x.com/ItsKennedyK",
              label: "Twitter",
            },
            {
              icon: <FaDiscord />,
              url: "https://discord.com/users/itskennedyk",
              label: "Discord",
            },
            {
              icon: <FaTelegram />,
              url: "https://t.me/ItsKennedyK",
              label: "Telegram",
            },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 hover:text-[#e52165] transition-colors duration-300"
              aria-label={`Visit my ${social.label}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Animated Arrow Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 group"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="flex flex-col items-center"
        >
          <FiArrowDown className="text-2xl sm:text-3xl text-[#e52165] group-hover:text-white transition-colors duration-300" />
          <motion.div
            className="h-6 sm:h-8 w-0.5 bg-[#e52165] group-hover:bg-white mt-1 sm:mt-2 transition-colors duration-300"
            animate={{
              height: [6, 12, 6],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.div>
      </motion.a>

      {/* CSS for animations */}
      <style jsx="true">{`
        .cursor-blink {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 6s ease-in-out infinite 2s;
        }
        .animate-float-delay-2 {
          animation: float 6s ease-in-out infinite 4s;
        }
        .animate-float-delay-3 {
          animation: float 6s ease-in-out infinite 3s;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .content-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </motion.section>
  );
}
