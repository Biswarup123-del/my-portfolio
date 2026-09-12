"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    desc: "Semantic and modern webpage structure",
    icon: FaHtml5,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "CSS3",
    desc: "Responsive and modern UI styling",
    icon: FaCss3Alt,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "JavaScript",
    desc: "Dynamic and interactive web apps",
    icon: FaJs,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "React JS",
    desc: "Building scalable frontend applications",
    icon: FaReact,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Next.js",
    desc: "Modern full-stack React framework",
    icon: SiNextdotjs,
    color: "from-gray-500 to-black",
  },
  {
    name: "Tailwind CSS",
    desc: "Fast and responsive UI development",
    icon: SiTailwindcss,
    color: "from-cyan-400 to-teal-500",
  },
  {
    name: "SEO",
    desc: "Optimized websites for better ranking",
    icon: FaHtml5,
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "Git",
    desc: "Version control and collaboration",
    icon: FaGitAlt,
    color: "from-orange-500 to-red-500",
  },
  {
    name: "GitHub",
    desc: "Project hosting and management",
    icon: FaGithub,
    color: "from-gray-500 to-gray-800",
  },
  {
    name: "Firebase",
    desc: "Authentication and backend services",
    icon: SiFirebase,
    color: "from-yellow-400 to-orange-600",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-28 bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-5 leading-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Skills
            </span>
          </h2>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-7 md:leading-8">
            Technologies and tools I use to build modern,
            scalable and visually engaging web applications.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">

          {skills.map((skill, i) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >

                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Card */}
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 md:p-6 overflow-hidden transition-all duration-300 group-hover:border-white/20">

                  {/* Number */}
                  <div className="absolute top-3 right-4 md:top-4 md:right-5 text-3xl md:text-4xl font-bold text-white/5">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl mb-5 flex items-center justify-center bg-gradient-to-r ${skill.color}`}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="text-white text-2xl md:text-3xl"
                    >
                      <Icon />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 group-hover:text-purple-400 transition">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs md:text-sm leading-6">
                    {skill.desc}
                  </p>

                  {/* Bottom Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-purple-500 to-indigo-500"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}