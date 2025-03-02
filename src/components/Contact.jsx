/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaTelegram,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import { BsFillCloudFill } from "react-icons/bs";

const socialVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false); // State to track form submission
  const [errors, setErrors] = useState({}); // State to track validation errors

  // Validate form fields
  const validateForm = (formData) => {
    const newErrors = {};

    // Name validation
    if (!formData.get("name")) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.get("email")) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
      newErrors.email = "Invalid email address";
    }

    // Message validation
    if (!formData.get("message")) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formData = new FormData(form);

    // Validate form
    if (!validateForm(formData)) {
      return; // Stop submission if validation fails
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true); // Show success message
        form.reset(); // Clear the form
        setErrors({}); // Clear errors
      } else {
        alert("Something went wrong. Please try again."); // Handle errors
      }
    } catch (error) {
      alert("Something went wrong. Please try again."); // Handle network errors
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0]"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-[#0d1137] mb-6"
        >
          Get in Touch
        </motion.h3>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-[#0d1137] mb-8"
        >
          Have a project in mind? I’d love to hear from you!
        </motion.p>
        <motion.a
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="mailto:kennedy.phinias@gmail.com"
          className="text-[#e52165] text-lg hover:underline font-medium mb-8 flex items-center justify-center gap-2"
        >
          <FaEnvelope className="w-6 h-6" /> {/* Email Icon */}
          kennedy.phinias@gmail.com
        </motion.a>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          {[
            { Icon: FaTelegram, href: "https://t.me/ItsKennedyK" },
            { Icon: FaTwitter, href: "https://x.com/ItsKennedyK" },
            {
              Icon: BsFillCloudFill,
              href: "https://bsky.app/profile/itskennedyk.bsky.social",
            },
            {
              Icon: FaLinkedin,
              href: "https://linkedin.com/in/kennedyphinias",
            },
            {
              Icon: FaDiscord,
              href: "https://discord.com/users/itskennedyk",
            },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              variants={socialVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0d1137] hover:text-[#e52165] transition-colors duration-300 relative"
            >
              <Icon className="w-8 h-8" />
              {/* <span className="absolute inset-0 rounded-full glow-effect"></span> */}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        {submitted ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold text-[#0d1137] mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-[#0d1137]">
              Your message has been sent successfully.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 max-w-2xl mx-auto"
            action="https://formspree.io/f/xanqrjzy"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`w-full p-3 rounded-lg border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-[#e52165]`}
                  required
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-red-500 mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={`w-full p-3 rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:border-[#e52165]`}
                  required
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-red-500 mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className={`w-full p-3 mt-6 rounded-lg border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:border-[#e52165]`}
                required
              ></textarea>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-red-500 mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>
            <button
              type="submit"
              className="mt-6 bg-[#e52165] text-white px-6 py-3 rounded-lg hover:bg-[#d11a55] transition-colors duration-300 font-semibold cursor-pointer"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </div>
    </motion.section>
  );
}
