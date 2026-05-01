"use client";

import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 relative overflow-hidden">

      {/* glow background */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/10 blur-3xl top-[-100px] left-[-100px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 grid md:grid-cols-3 gap-10 relative z-10">

        {/* LOGO BOX */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-red-500 transition transform hover:scale-95"
        >
          <div className="bg-white p-3 rounded-md inline-block mb-6 shadow-lg">
            <img src="/logo.png" className="h-16 mx-auto" />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Strategic Financial Advisory & Growth Solutions
          </p>
        </motion.div>

        {/* NAVIGATION BOX */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-red-500 transition transform hover:scale-95"
        >
          <h3 className="text-red-500 font-semibold mb-6 text-lg">
            Navigation
          </h3>

          <ul className="space-y-4 text-gray-300 text-sm">

            {[
              { name: "Home", link: "/#home" },
              { name: "About", link: "/#about" },
              { name: "Services", link: "/#services" },
              { name: "Contact", link: "/contact" }
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="flex items-center gap-2 hover:text-white transition group"
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-125 transition"></span>
                  {item.name}
                </a>
              </li>
            ))}

          </ul>
        </motion.div>

        {/* CONTACT BOX */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-red-500 transition transform hover:scale-95"
        >
          <h3 className="text-red-500 font-semibold mb-6 text-lg">
            Contact
          </h3>

          <div className="space-y-5 text-gray-300 text-sm">

            <div className="flex items-center gap-3 group">
              <Mail className="text-red-500 w-5 h-5 group-hover:scale-110 transition" />
              <span className="group-hover:text-white transition">
                info@symi.tr
              </span>
            </div>

            <div className="flex items-center gap-3 group">
              <Phone className="text-red-500 w-5 h-5 group-hover:scale-110 transition" />
              <span className="group-hover:text-white transition">
                0216 384 01 33
              </span>
            </div>

          </div>
        </motion.div>

      </div>

      {/* ALT */}
      <div className="text-center text-gray-500 text-sm pb-6 relative z-10">
        © {new Date().getFullYear()} SYMI Consulting. All rights reserved.
      </div>

    </footer>
  );
}