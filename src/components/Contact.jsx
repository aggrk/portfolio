/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTelegram, FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsFillCloudFill } from "react-icons/bs";
import { Send, CheckCircle } from "lucide-react";

const socials = [
  {
    Icon: FaEnvelope,
    href: "mailto:kennedy.phinias@gmail.com",
    label: "Email",
  },
  {
    Icon: FaLinkedin,
    href: "https://linkedin.com/in/kennedyphinias",
    label: "LinkedIn",
  },
  { Icon: FaXTwitter, href: "https://x.com/ItsKennedyK", label: "Twitter" },
  { Icon: FaTelegram, href: "https://t.me/ItsKennedyK", label: "Telegram" },
  {
    Icon: FaDiscord,
    href: "https://discord.com/users/itskennedyk",
    label: "Discord",
  },
  {
    Icon: BsFillCloudFill,
    href: "https://bsky.app/profile/itskennedyk.bsky.social",
    label: "Bluesky",
  },
];

const inputClass = (hasError) =>
  `w-full bg-white/[0.03] border ${
    hasError ? "border-red-500/50" : "border-white/5"
  } hover:border-white/10 focus:border-[#e52165]/50 text-white placeholder:text-white/20 px-4 py-3 rounded-lg text-sm font-light outline-none transition-all duration-300 focus:bg-white/[0.05]`;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.get("name")) newErrors.name = "Name is required";
    if (!formData.get("email")) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.get("email")))
      newErrors.email = "Invalid email address";
    if (!formData.get("message")) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    if (!validateForm(formData)) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setErrors({});
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0d1137] py-28 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 60%, rgba(229,33,101,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e52165]/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-xs text-[#e52165]/70 tracking-[0.3em] uppercase">
            05 / Contact
          </span>
          <div className="h-px w-14 bg-[#e52165]/20" />
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
        >
          Let&apos;s <span className="text-[#e52165]">Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/40 font-light text-base max-w-md mb-16"
        >
          Have a project in mind or just want to say hi? My inbox is always
          open.
        </motion.p>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: info + socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            {/* Email */}
            <div>
              <p className="font-mono text-xs text-white/25 tracking-[0.2em] uppercase mb-3">
                Email me at
              </p>
              <a
                href="mailto:kennedy.phinias@gmail.com"
                className="group inline-flex items-center gap-2 text-white/70 hover:text-[#e52165] transition-colors duration-300 text-sm font-medium"
              >
                <FaEnvelope className="text-[#e52165] flex-shrink-0" />
                kennedy.phinias@gmail.com
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">
                  →
                </span>
              </a>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="relative mt-1 flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-60" />
              </div>
              <div>
                <p className="text-white/70 text-sm font-medium">
                  Available for work
                </p>
                <p className="text-white/30 text-xs font-light mt-0.5">
                  Open to freelance projects and full-time roles.
                </p>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="font-mono text-xs text-white/25 tracking-[0.2em] uppercase mb-4">
                Find me on
              </p>
              <div className="flex flex-wrap gap-2">
                {socials.map(({ Icon, href, label }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.06 }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#e52165]/30 hover:bg-[#e52165]/5 text-white/40 hover:text-[#e52165] transition-all duration-300 text-base"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center gap-4 h-full min-h-[320px] p-10 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-center"
                >
                  <CheckCircle
                    size={40}
                    className="text-emerald-400"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-xl font-semibold text-white">
                    Message sent!
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you as soon
                    as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 font-mono text-xs text-white/25 hover:text-white/50 tracking-wider transition-colors duration-200"
                  >
                    Send another →
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  action="https://formspree.io/f/xanqrjzy"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className={inputClass(errors.name)}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1.5 text-xs text-red-400/80 font-mono"
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
                        className={inputClass(errors.email)}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1.5 text-xs text-red-400/80 font-mono"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      className={`${inputClass(errors.message)} resize-none`}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1.5 text-xs text-red-400/80 font-mono"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group cursor-pointer w-full flex items-center justify-center gap-2.5 py-3.5 rounded-lg bg-[#e52165] hover:bg-[#c91a55] text-white font-semibold text-sm transition-colors duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={14}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
