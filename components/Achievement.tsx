
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAward,
  FaTimes,
  FaExternalLinkAlt,
} from "react-icons/fa";

const achievements = [
  {
    title: "Professional Excellence Achievement",
    subtitle: "Dedication & Exceptional Performance",
    year: "2025",
    image: "/background-removed-background-removed.png",
    description:
      "Recognized by Apdux Innovation Pvt. Ltd. for dedication, hard work and valuable contribution to the team.",
  },
  {
    title: "Cricket Performance Award",
    subtitle: "Outstanding Batting & Bowling Performance",
    year: "2026",
    image:
      "/WhatsApp Image 2026-05-25 at 11.16.10 AM (1).png",
    description:
      "Recognized for outstanding batting, bowling, teamwork and all-round performance during the tournament.",
  },
];

export default function Achievement() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#080d19] py-20 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-3xl font-bold md:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400">
            A few milestones and recognitions from my professional and
            personal journey.
          </p>
        </motion.div>

        {/* ================= ACHIEVEMENT CARDS ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
            >

              {/* ================= IMAGE ================= */}
              <div
                onClick={() => setSelectedImage(item.image)}
                className="relative h-56 cursor-pointer overflow-hidden bg-black"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {/* Year */}
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  {item.year}
                </span>

                {/* View Icon */}
                <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                  <FaExternalLinkAlt className="text-xs text-white" />
                </div>

                {/* Bottom Label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/20 backdrop-blur-md">
                    <FaAward className="text-sm text-cyan-400" />
                  </div>

                  <span className="text-xs font-medium text-white/90">
                    Achievement {index + 1}
                  </span>
                </div>
              </div>

              {/* ================= CONTENT ================= */}
              <div className="p-5">

                {/* Subtitle */}
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-purple-400">
                  {item.subtitle}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold leading-tight transition duration-300 group-hover:text-cyan-400">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>

                {/* Bottom */}
                <div className="mt-5 flex items-center gap-2">
                  <span className="h-1 w-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />

                  <span className="text-[10px] uppercase tracking-widest text-gray-600">
                    Recognition
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* ================= IMAGE MODAL ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close preview"
            >
              <FaTimes />
            </button>

            {/* Preview Image */}
            <motion.img
              initial={{
                scale: 0.85,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              src={selectedImage}
              alt="Achievement Preview"
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-4xl rounded-xl object-contain shadow-2xl"
            />

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

