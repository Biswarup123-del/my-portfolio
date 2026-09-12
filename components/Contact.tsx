"use client";

import { motion } from "framer-motion";
import { type FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message Sent 🚀");
  };

  return (
    <section  id="contact"    className="py-28 bg-[#0f172a] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Let’s Work Together
          </h2>
          <p className="text-gray-400 text-lg">
            Have a project in mind? I’d love to hear from you.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.25 }
              }
            }}
            className="space-y-10 relative"
          >

            {/* BACKGROUND GLOW */}
            <div className="absolute -left-10 top-0 w-40 h-40 bg-purple-500/20 blur-3xl"></div>

            {/* LINE + CONTENT */}
            <div className="flex items-start gap-5">

              {/* LINE */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 0.8 }}
                className="w-[2px] bg-gradient-to-b from-purple-500 to-indigo-500 relative"
              >
                <motion.span
                  initial={{ y: 0 }}
                  animate={{ y: [0, 80, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute top-0 left-[-5px] w-3 h-3 bg-white rounded-full shadow"
                />
              </motion.div>

              {/* TEXT */}
              <div className="space-y-8">

                {/* HEADING */}
                <motion.h3
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="text-3xl md:text-4xl font-bold leading-tight"
                >
                  Let’s build something{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                      powerful
                    </span>

                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="absolute left-0 -bottom-1 h-[3px] bg-gradient-to-r from-purple-500 to-indigo-500"
                    />
                  </span>
                </motion.h3>

                {/* DESCRIPTION */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="text-gray-400 text-lg leading-7 max-w-md"
                >
                  I help brands and startups create modern, scalable and
                  visually engaging digital experiences that stand out.
                </motion.p>

                {/* CONTACT INFO */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="space-y-4 text-gray-300"
                >
                  <motion.p
                    whileHover={{ x: 10 }}
                    className="cursor-pointer flex items-center gap-3 group"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-125 transition"></span>
                    nayakbiswarup481@gmail.com
                  </motion.p>

                  <motion.p
                    whileHover={{ x: 10 }}
                    className="cursor-pointer flex items-center gap-3 group"
                  >
                    <span className="w-2 h-2 bg-indigo-400 rounded-full group-hover:scale-125 transition"></span>
                    India
                  </motion.p>
                </motion.div>

                {/* CTA */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 }
                  }}
                >
                  <motion.a
                    whileHover={{ x: 12 }}
                    className="inline-flex items-center gap-3 text-white font-medium hover:underline  group cursor-pointer"
                  >
                    Start a Project
                    <span className="w-6 h-[2px] bg-white group-hover:w-10 transition-all duration-300"></span>
                  </motion.a>
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT FORM ================= */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md"
          >

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/20 focus:border-purple-400 outline-none transition"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/20 focus:border-purple-400 outline-none transition"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            {/* MESSAGE */}
            <textarea
              rows={4}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/20 focus:border-purple-400 outline-none transition"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            {/* BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 font-semibold overflow-hidden"
            >
              <span className="relative z-10">Send Message 🚀</span>

              {/* SHINE EFFECT */}
              <motion.span
                initial={{ x: "-120%" }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            </motion.button>

          </motion.form>

        </div>
      </div>
    </section>
  );
}