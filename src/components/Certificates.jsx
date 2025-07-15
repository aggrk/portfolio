import { motion } from "framer-motion";
import { EyeIcon, GraduationCap } from "lucide-react";

const certificateVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for smooth easing
      staggerChildren: 0.1,
    },
  },
  hover: {
    y: -12,
    scale: 1.02,
    boxShadow:
      "0 20px 25px -5px rgba(229, 33, 101, 0.15), 0 10px 10px -5px rgba(229, 33, 101, 0.05)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "The Ultimate React Course",
      issuer: "Udemy",
      date: "Aug 2024",
      verified: true,
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-1151e7f0-4309-4cae-822e-84c476725b80.jpg?v=1724833817000",
    },
    {
      id: 2,
      title: "Advanced React",
      issuer: "Scrimba",
      date: "Nov 2023",
      verified: true,
      link: "https://scrimba.com/certificate-cert2uNje7fs9VX2aBa4jCcnSYdV56c7MhVv9Au",
    },
    {
      id: 3,
      title: "Node.js, Express, and MongoDB course",
      issuer: "Udemy",
      date: "Feb 2025",
      verified: true,
      link: "https://udemy-certificate.s3.amazonaws.com/image/UC-3e23cca0-955c-4d94-bc04-4019a628f2cb.jpg?v=1740114392000",
    },
    {
      id: 4,
      title: "Tailwind CSS",
      issuer: "Scrimba",
      date: "June 2025",
      verified: true,
      link: "https://scrimba.com/certificate-cert2uNje7fs9VX2aBa4jCcm7BGxF9smfLj6uPa",
    },
    {
      id: 5,
      title: "Node.js",
      issuer: "Scrimba",
      date: "July 2025",
      verified: true,
      link: "https://scrimba.com/certificate-cert22z7m4z2fNYQdJbZYmk9xHmTDZMeRcjA7jrryYDMFfZS",
    },
    {
      id: 6,
      title: "Express.js",
      issuer: "Scrimba",
      date: "July 2025",
      verified: true,
      link: "https://scrimba.com/certificate-cert22z7m4z2fNYQdJbZYmkACDW3ToFjJr2CQGjhZosCkeJ1",
    },
  ];

  return (
    <motion.section
      id="certificates"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-16 bg-gray-50"
    >
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#e52165] opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#0dd3ff] opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#0d1137] mb-4">
            Certificates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Validate my expertise through accredited certifications.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={certificateVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Certificate Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0d1137] mb-2">
                  {cert.title}
                </h3>
                <div className="flex gap-2">
                  <span>
                    <GraduationCap className="w-6 h-6 text-[#0d1137]" />
                  </span>
                  <p className="text-gray-600 mb-1 flex items-center">
                    {cert.issuer}
                  </p>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  <span className="font-medium">Issued:</span> {cert.date}
                </p>

                {/* Footer (Button + Badge) */}
                <div className="flex items-center justify-between">
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.06, x: 2 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="px-6 py-2 bg-[#e52165] text-white rounded-lg hover:bg-[#c31151] transition-colors flex items-center font-semibold text-sm"
                  >
                    <span className="pr-1">
                      <EyeIcon className="w-5 h-5" />
                    </span>
                    View
                  </motion.a>
                  {cert.verified && (
                    <motion.span
                      variants={tagVariants}
                      className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full flex items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Verified
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
