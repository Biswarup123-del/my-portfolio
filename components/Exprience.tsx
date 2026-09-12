"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Apdux Innovation Private Limited",
    role: "React.js Developer",
    duration: "26 July 2025 - Present",
    points: [
      "Developed responsive and mobile-first web applications using React.js, Tailwind CSS, and JavaScript.",
      "Managed state using React Hooks, Context API, and Redux.",
      "Integrated REST APIs / Axios to fetch and update data efficiently.",
      "Implemented form validation using React Hook Form and custom logic.",
      "Optimized components to reduce re-renders and improve performance.",
      "Built reusable and scalable components following best practices.",
      "Worked with Git/GitHub for version control.",
      "Improved UI/UX and fixed bugs.",
      "Implemented animations using Framer Motion.",
      "Worked with authentication systems (login, OTP, multipart uploads).",
    ],
  },
  {
    company: "Dramtix Solution Pvt Ltd",
    role: "React Developer Intern",
    duration: "March 2025 - July 2025",
    points: [
      "Built responsive UI using React.js, JavaScript, and Tailwind CSS.",
      "Created reusable components and handled API integration.",
      "Managed state using Redux.",
      "Collaborated with senior developers and fixed bugs.",
      "Participated in Agile workflows (standups, sprint planning).",
      "Worked with Formik/Yup, React Router, and localStorage.",
      "Built CRUD app with authentication.",
    ],
  },
  {
    company: "Grow Front Software Private Limited",
    role: "Software Support Executive",
    duration: "May 2024 - July 2024",
    points: [
      "Provided software support to 100+ clients.",
      "Improved customer satisfaction by 20%.",
      "Reduced resolution time by 30% with new processes.",
      "Trained new team members and improved efficiency.",
    ],
  },
];

export default function Experience() {
  return (
    <section  id="experience"
    className="py-24 bg-[#0b0f19] text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Experience
            </span>
          </h2>
        </motion.div>

        {/* ================= MOBILE UI ================= */}
       <div className="block md:hidden relative pl-10">
  {/* VERTICAL LINE */}
  <div className="absolute left-4 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-indigo-500"></div>

  {experiences.map((exp, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.1 }}
      className="relative mb-8"
    >
      {/* DOT */}
      <div className="absolute left-[-32px] top-0 w-5 h-5 bg-purple-500 rounded-full border-2 border-[#0b0f19]" />

      {/* CARD */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md">
        <h3 className="text-lg font-semibold">{exp.role}</h3>
        <p className="text-purple-400 text-sm">{exp.company}</p>
        <p className="text-xs text-gray-400 mb-3">{exp.duration}</p>

        <ul className="space-y-1 text-sm text-gray-300">
          {exp.points.slice(0, 5).map((p, idx) => (
            <li key={idx}>• {p}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  ))}
</div>

        {/* ================= DESKTOP TIMELINE ================= */}
        <div className="hidden md:block relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-indigo-500"></div>

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex items-center ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* DOT */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-[#0b0f19]" />

                {/* CARD */}
                <div className="w-1/2 px-6">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg shadow-lg hover:border-purple-400/30 transition">

                    <h3 className="text-2xl font-semibold">{exp.role}</h3>
                    <p className="text-purple-400 font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.duration}</p>

                    <ul className="space-y-2 text-gray-300 text-sm">
                      {exp.points.map((p, idx) => (
                        <li key={idx}>• {p}</li>
                      ))}
                    </ul>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}