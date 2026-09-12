"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-[#0f172a] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Me
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Crafting modern web experiences with clean design,
              performance and real-world usability.
            </p>
          </div>
        </AnimatedSection>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT SIDE ================= */}
          <AnimatedSection>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                show: { transition: { staggerChildren: 0.25 } }
              }}
              className="relative space-y-8"
            >

              {/* GLOW */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 blur-3xl"></div>

              {/* LINE */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 top-2 w-[2px] bg-gradient-to-b from-purple-500 to-indigo-500"
              />

              <div className="pl-6 space-y-6">

                {/* INTRO */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="text-gray-300 leading-relaxed"
                >
                  I'm <span className="text-white font-semibold">Biswarup Nayak</span>, a passionate
                  frontend developer focused on building modern, responsive
                  and user-friendly web applications.
                </motion.p>

                {/* EXPERIENCE */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="text-gray-300 leading-relaxed"
                >
                  With strong experience in React, Next.js and UI/UX design,
                  I transform ideas into high-quality digital products that
                  are both visually appealing and performance-driven.
                </motion.p>

                {/* MISSION */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="text-gray-300 leading-relaxed"
                >
                  My goal is to create seamless user experiences and scalable
                  applications that solve real-world problems efficiently.
                </motion.p>

                {/* SKILLS */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="pt-4"
                >
                  <h4 className="text-lg font-semibold mb-4 text-white">
                    Core Skills
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "React",
                      "Next.js",
                      "JavaScript",
                      "Tailwind CSS",
                      "state management",
                      "responsive design",
                      "UI/UX",
                      "Axios",
                      "API Integration",


                      "performance optimization",
                      "SEO optimization",
                       "Figma to Code",
                       
                      "AI integration",
                      "Real time AI integration",
                      "AI response handling",

                    
                      "OpenAI API integration",
                      "Gemini API integration",
                      
                      
                      "version control (Git)",
                      "problem-solving",
                      "collaboration",
                      "client handling"
                    ].map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </AnimatedSection>

          {/* ================= RIGHT SIDE ================= */}
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >

              {/* CARD */}
              <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500">
                <div className="bg-[#111827] rounded-2xl p-8 space-y-6">

                  <h3 className="text-2xl font-bold">Quick Info</h3>

                  {[
                    ["Name :", "Biswarup Nayak"],
                    ["Email :", "nayakbiswarup481@gmail.com"],
                    ["Location :","India"],
                    [
                      "Professional Experience :",
                      "2 Years Combined Experience"
                    ]
                  ].map(([label, value], i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className="flex justify-between border-b border-white/10 pb-2"
                    >
                      <span className="text-gray-400 text-[12px] md:text-[16px]">{label}</span>
                      <span className="text-white text-[14px] md:text-[16px] ">{value}</span>
                    </motion.div>
                  ))}

                </div>
              </div>

              {/* EXPERIENCE CARD */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h4 className="text-lg font-semibold mb-2">
                  What I Do
                </h4>
                <p className="text-gray-400 text-sm leading-6">
                  Frontend Developer with hands-on experience in building scalable and responsive web applications using modern technologies like React and Next.js. I focus on creating pixel-perfect user interfaces from Figma designs, ensuring clean UI/UX and performance optimization. I also have experience integrating REST APIs and working on real-world projects that require dynamic data handling and efficient state management.

                </p>
              </motion.div>

            </motion.div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}