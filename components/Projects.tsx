"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chatbot Assistant",
    description:
      "AI-powered chatbot assistant with real-time conversational support.",
    tech: ["Next.js", "JavaScript", "Gemini API", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    demo: "https://apduxthink.apdux.online/",
  },
  {
    title: "CheckRates Loan Application",
    description:
      "Modern loan application platform with a smooth and responsive user experience.",
    tech: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
    demo: "https://checkrates.apdux.online/",
  },
  {
    title: "Company Website & SEO Optimization",
    description:
      "Company website built with modern frontend technologies and optimized for SEO and performance.",
    tech: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "SEO"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    demo: "https://apdux.com/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-[#070b14] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="group relative"
            >

              {/* CARD */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">

                {/* IMAGE */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.7 }}
                />

                {/* DARK GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 p-6 pr-32 z-10">

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    {project.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-white/10 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* DEMO BUTTON */}
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute z-30 bottom-6 right-6 px-5 py-2 text-sm font-medium rounded-full bg-white text-black shadow-lg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-indigo-500 group-hover:text-white cursor-pointer"
                >
                  Watch Demo →
                </motion.a>

              </div>

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}