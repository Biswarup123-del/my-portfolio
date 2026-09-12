import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/10 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-600/20 blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Top Section */}
        <div className="flex flex-col items-center text-center">

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-wide"
          >
            Biswarup Nayak
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm md:text-base mt-3 max-w-xl leading-relaxed"
          >
            Crafting modern, scalable and high-performance web applications
            with a strong focus on user experience and clean UI design.
          </motion.p>

          {/* Gradient Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ delay: 0.5 }}
            className="h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mt-6 rounded-full"
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-10">
          {[
            {
              icon: <FaLinkedinIn size={18} />,
              link: "https://linkedin.com",
            },
            {
              icon: <FaFacebookF size={18} />,
              link: "https://facebook.com",
            },
            {
              icon: <FaTwitter size={18} />,
              link: "https://twitter.com",
            },
            {
              icon: <FaWhatsapp size={18} />,
              link: "https://wa.me/6290043481",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md shadow-lg"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs md:text-sm text-gray-500">
            © {new Date().getFullYear()} Biswarup Nayak • Built with passion 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}