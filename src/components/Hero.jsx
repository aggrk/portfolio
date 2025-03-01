/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles"; // For tsParticles

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
  const fullText = "Hi, I'm Kennedy Phinias";
  const typingSpeed = 100; // Speed in milliseconds

  // Typing effect for the headline
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  // Initialize particles
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <motion.section
      id="home"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-[#0d1137] to-[#1a1f4e] pt-32 pb-20 text-center px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[80vh] relative overflow-hidden"
    >
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#e52165",
            },
            links: {
              color: "#e52165",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Content */}
      <div className="max-w-3xl mx-auto relative z-10">
        {/* Headline with typing effect */}
        <motion.h2
          variants={childVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#e52165] tracking-tight"
        >
          {typedText}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={childVariants}
          className="text-xl sm:text-2xl mt-6 text-white font-light"
        >
          Full-Stack Developer | React Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p
          variants={childVariants}
          className="mt-8 text-lg text-gray-300 max-w-xl mx-auto leading-relaxed"
        >
          I love turning ideas into impactful solutions. With a strong
          foundation in front-end and back-end development, I build scalable,
          modern, and meaningful applications. My mission is to create
          technology that solves real-world challenges, and I strive to grow
          every day as a developer and programmer.
        </motion.p>

        {/* Call-to-action button */}
        <motion.a
          variants={childVariants}
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 inline-block bg-[#e52165] text-white px-8 py-4 rounded-full hover:bg-[#d11a55] transition-colors duration-300 font-semibold relative overflow-hidden"
        >
          <span className="relative z-10">Get in Touch</span>
          <span className="absolute inset-0 bg-white opacity-10 hover:opacity-20 transition-opacity duration-300"></span>
          <span className="absolute inset-0 rounded-full glow-effect"></span>
        </motion.a>
      </div>

      {/* CSS for the glowing button */}
      <style jsx>{`
        .glow-effect {
          box-shadow: 0 0 10px 5px rgba(229, 33, 101, 0.5);
          animation: glow 2s infinite alternate;
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 10px 5px rgba(229, 33, 101, 0.5);
          }
          100% {
            box-shadow: 0 0 20px 10px rgba(229, 33, 101, 0.7);
          }
        }
      `}</style>
    </motion.section>
  );
}
