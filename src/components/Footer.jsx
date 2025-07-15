/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#0d1137] to-[#1a1f4e] py-8 text-center text-white relative"
    >
      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-[#e52165] text-white rounded-full shadow-lg hover:bg-[#d11a55] transition-colors duration-300"
      >
        <FaArrowUp className="w-5 h-5" />
      </motion.button>

      {/* Copyright Text */}
      <p className="text-sm">
        © {new Date().getFullYear()} Kennedy Phinias. All rights reserved.
      </p>
    </motion.footer>
  );
}
