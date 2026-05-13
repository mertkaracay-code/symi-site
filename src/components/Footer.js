"use client";

import { Mail, Phone } from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter
} from "react-icons/fa6";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

export default function Footer() {

  const { lang } = useLanguage();
  const ui = content.ui[lang];

  return (
    <footer className="relative w-full border-t border-white/10 bg-[#173765] overflow-hidden">

      {/* Glow */}
      <div className="absolute w-[400px] h-[400px] bg-red-600/10 blur-3xl -top-32 -left-32"></div>

      <div className="w-full px-8 md:px-16 lg:px-24 py-12 relative z-10">

        {/* 3 COLUMN */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-md hover:border-red-500/40 transition"
          >
            <div className="bg-white p-4 rounded-xl inline-block shadow-xl mb-5">
              <img src="/logo.png" className="h-16 mx-auto" />
            </div>

            <p className="text-gray-300 leading-7 text-sm">
              Strategic Financial Advisory & Growth Solutions
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-red-500/40 transition"
          >
            <h3 className="text-red-500 text-xl font-semibold mb-6">
              {lang === "tr" ? "Navigasyon" : "Navigation"}
            </h3>

            <ul className="space-y-4 text-gray-300">

              {[
                { name: ui.nav.home, link: "/#home" },
                { name: ui.nav.about, link: "/#about" },
                { name: ui.nav.services, link: "/#services" },
                { name: ui.nav.contact, link: "/contact" }
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="flex items-center gap-3 hover:text-white transition"
                  >
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    {item.name}
                  </a>
                </li>
              ))}

            </ul>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-red-500/40 transition"
          >
            <h3 className="text-red-500 text-xl font-semibold mb-6">
              {lang === "tr" ? "İletişim" : "Contact"}
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex items-center gap-4">
                <Mail className="text-red-500 w-5 h-5" />
                <span>info@symicapital.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-red-500 w-5 h-5" />
                <span>0551 101 77 33</span>
              </div>

            </div>

            {/* SOCIAL MEDIA */}
            <div className="flex gap-4 mt-8">

              <a
                href="https://www.instagram.com/symicomtr1?igsh=cGthbXFwdWF3OHRs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-500 hover:scale-110 transition duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="https://x.com/symicomtr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-500 hover:scale-110 transition duration-300"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-500 hover:scale-110 transition duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>

            </div>

          </motion.div>

        </div>

        {/* ALT */}
        <div className="w-full border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} SYMI Capital. All rights reserved.
        </div>

      </div>
    </footer>
  );
}