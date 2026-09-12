"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Home, User, Briefcase, Zap, Clock,Award, Trophy, type LucideIcon } from "lucide-react";


export default function Navbar() {
  const [active, setActive] = useState<string>("home");

  type menuItems={
    name:string,
    icon:LucideIcon
  }

  const menuItems: menuItems[] =  [
    { name: "home", icon: Home },
    { name: "about", icon: User },
    { name: "projects", icon: Briefcase },
    { name: "skills", icon: Zap },
    { name: "contact", icon: Clock },
     { name: "experience", icon: Award },
    { name: "achievements", icon: Trophy }

  ];

  return (
    <>
      {/* TOP NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="bg-[#0f172a]/80 backdrop-blur-2xl border-b border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO */}
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white cursor-pointer"
            >
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </motion.h1>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-8 relative">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name}`}
                  onClick={() => setActive(item.name)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative text-gray-300 hover:text-white transition capitalize"
                >
                  {item.name}

                  {active === item.name && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE BOTTOM NAV */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[350px]">
        <ul className="flex gap-4 px-8 py-4 rounded-2xl bg-black/60 backdrop-blur-lg border border-white/10 shadow-lg text-white">

          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.name}
                onClick={() => setActive(item.name)}
                className="flex flex-col items-center size-10 cursor-pointer"
              >
                <a href={`#${item.name}`} className="flex flex-col items-center">
                  <Icon
                    size={24}
                    className={`transition ${
                      active === item.name
                        ? "text-blue-400"
                        : "text-gray-400"
                    }`}
                  />
                  <span className="text-[8px] sm:text-xs mt-1 capitalize">
                    {item.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}