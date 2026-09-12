"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Handshake, Send } from "lucide-react";

export default function AboutHero() {
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.project) {
      alert("Please fill all fields");
      return;
    }

    const message = `Hello Biswarup,

        Name: ${formData.name}
        Email: ${formData.email}

        Project Details:
        ${formData.project}`;

    window.open(
      `https://wa.me/6290043481?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setFormData({
      name: "",
      email: "",
      project: "",
    });

    setOpenModal(false);
  };

  return (
    <>
      <section

        id="home" 
        className="py-24 bg-gradient-to-b from-white to-[#f5f3ff] px-6 overflow-hidden"  
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"> 
          {/* RIGHT CONTENT */}  
          <motion.div 

             initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 text-left"    
          >
            <p className="text-[#4f46e5] font-semibold mb-4">
              Turning Ideas Into Reality 
           </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-3">
              Hi, I’m{" "}
              <span className="text-purple-600">
                Biswarup Nayak
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React & Next.js Developer",
                  2000,
                  "Building Modern UI/UX",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-6">
              I build modern, responsive and user-friendly web
              applications with clean design and smooth user
              experience. Focused on performance, UI quality,
              and real-world solutions.
            </p>

            <button
              onClick={() => setOpenModal(true)}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition"
            >
              Hire Me
            </button>
          </motion.div>

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center relative order-2"
          >
            <div className="absolute w-[320px] h-[320px] bg-gradient-to-r from-[#3b82f6] to-[#9333ea] blur-3xl opacity-30 rounded-full"></div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[400px] h-[400px] rounded-full border-4 border-dashed border-[#4f46e5]/40"
            />

            <div className="relative w-[360px] h-[360px] mt-5 rounded-full p-[6px] bg-gradient-to-r from-[#3b82f6] to-[#9333ea] shadow-2xl">
              <img
                src="img2.png"
                className="w-full h-full rounded-full object-cover"
                alt="profile"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {openModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
            >
              <button
                onClick={() => setOpenModal(false)}
                className="absolute right-5 top-4 text-xl text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                <Handshake className="w-8 h-8 text-purple-600" />
                Let's Work Together
              </h2>

              <p className="text-gray-500 mb-6">
                Tell me about your project and I'll contact you soon.
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 text-black px-4 py-3 outline-none focus:ring-2 focus:ring-purple-300"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 text-black px-4 py-3 outline-none focus:ring-2 focus:ring-purple-300"
                />

                <textarea
                  rows={5}
                  placeholder="Project Details..."
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      project: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-gray-200 text-black px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-purple-300"
                />
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setOpenModal(false)}
                  className="flex-1 rounded-xl border border-gray-300  text-gray-700 py-3 font-medium hover:bg-gray-100 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  className="flex-1 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 py-3 text-white font-semibold hover:scale-105 transition flex items-center justify-center gap-2"
                >

                  Send
                  <Send size={18} />
                </button>
              </div>

              <p className="mt-4 text-center text-sm text-gray-500">
                ⚡ Usually responds within 24 hours
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}