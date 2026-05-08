import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaTelegram, FaDiscord, FaEnvelope } from "react-icons/fa";
import { BsFillCloudFill } from "react-icons/bs";

// ─── Data ─────────────────────────────────────────────────────────────────────

const socials = [
  { Icon: FaEnvelope,       href: "mailto:kennedy.phinias@gmail.com",          label: "Email"    },
  { Icon: FaTelegram,       href: "https://t.me/ItsKennedyK",                  label: "Telegram" },
  { Icon: FaDiscord,        href: "https://discord.com/users/itskennedyk",      label: "Discord"  },
  { Icon: BsFillCloudFill,  href: "https://bsky.app/profile/itskennedyk.bsky.social", label: "Bluesky" },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fieldClass = (hasError) =>
  `w-full bg-transparent border-b ${
    hasError ? "border-red-500/50" : "border-white/10"
  } focus:border-[#e52165]/60 text-white/80 placeholder:text-white/20 py-3 text-sm font-light outline-none transition-colors duration-200`;

function FieldError({ message }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-1.5 text-xs text-red-400/70 font-mono"
    >
      {message}
    </motion.p>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Contact() {
  const [submitted, setSubmitted]   = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors]         = useState({});

  const validate = (formData) => {
    const e = {};
    if (!formData.get("name"))    e.name    = "Name is required";
    if (!formData.get("email"))   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.get("email")))
                                  e.email   = "Invalid email address";
    if (!formData.get("message")) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form     = e.target;
    const formData = new FormData(form);
    if (!validate(formData)) return;

    setIsSubmitting(true);
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
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
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
        >
          Get in touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/35 font-light text-sm max-w-sm mb-16"
        >
          Have a project in mind or just want to say hi? My inbox is always open.
        </motion.p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-10"
          >
            {/* Email */}
            <div>
              <p className="font-mono text-[11px] text-white/20 tracking-[0.2em] uppercase mb-3">
                Email
              </p>
              <a
                href="mailto:kennedy.phinias@gmail.com"
                className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
              >
                kennedy.phinias@gmail.com
              </a>
            </div>

            {/* Availability */}
            <div>
              <p className="font-mono text-[11px] text-white/20 tracking-[0.2em] uppercase mb-3">
                Status
              </p>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-white/55 text-sm">
                  Available for freelance &amp; full-time
                </span>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="font-mono text-[11px] text-white/20 tracking-[0.2em] uppercase mb-4">
                Elsewhere
              </p>
              <div className="flex items-center gap-4">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-white/25 hover:text-white transition-colors duration-200 text-lg"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-4 py-16 border-t border-white/5"
                >
                  <span className="font-mono text-[11px] text-emerald-400/70 tracking-[0.2em] uppercase">
                    Sent
                  </span>
                  <p className="text-white/70 text-base font-light leading-relaxed max-w-xs">
                    Thanks for reaching out — I&apos;ll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="self-start font-mono text-[11px] text-white/20 hover:text-white/50 tracking-wider transition-colors duration-200 mt-2"
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
                  className="space-y-8"
                  noValidate
                >
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={fieldClass(errors.name)}
                      />
                      {errors.name && <FieldError message={errors.name} />}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={fieldClass(errors.email)}
                      />
                      {errors.email && <FieldError message={errors.email} />}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={5}
                      className={`${fieldClass(errors.message)} resize-none`}
                    />
                    {errors.message && <FieldError message={errors.message} />}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-3 px-6 py-2.5 bg-[#e52165] hover:bg-[#c91a55] text-white text-sm font-semibold transition-colors duration-200 disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e52165] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1137]"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border border-white/30 border-t-white rounded-full animate-spin" />
                        Sending
                      </>
                    ) : (
                      "Send message →"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </section>
  );
}