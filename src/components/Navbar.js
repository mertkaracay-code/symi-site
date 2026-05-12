"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const { lang, setLang } = useLanguage();
  const ui = content.ui[lang];

  const pathname = usePathname();
  const router = useRouter();

  const [mobileMenu, setMobileMenu] = useState(false);

  // DİL DEĞİŞTİR
  const changeLanguage = (newLang) => {

    setLang(newLang);

    if (pathname.includes("/services/")) {
      router.push(`${pathname}?lang=${newLang}`);
    }

  };

  // LOGO
  const goHome = () => {

    router.push("/");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setMobileMenu(false);

  };

  // MENÜ TIKLAMA
  const handleMenuClick = (link) => {

    router.push(link);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setMobileMenu(false);

  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#020B1D]/80 backdrop-blur-xl border-b border-white/5">

      <div className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-4">

        {/* LOGO */}
        <div
          onClick={goHome}
          className="bg-white/95 px-2 py-1 rounded-xl shadow-2xl cursor-pointer hover:scale-105 transition duration-300"
        >
          <img src="/logo.png" className="h-14 md:h-16" />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-sm font-semibold items-center text-white">

          <Link
            href="/#home"
            className="hover:text-red-500 transition duration-300"
          >
            {ui.nav.home}
          </Link>

          <Link
            href="/#about"
            className="hover:text-red-500 transition duration-300"
          >
            {ui.nav.about}
          </Link>

          <Link
            href="/#services"
            className="hover:text-red-500 transition duration-300"
          >
            {ui.nav.services}
          </Link>

          <Link
            href="/contact"
            className="hover:text-red-500 transition duration-300"
          >
            {ui.nav.contact}
          </Link>

          {/* LANGUAGE */}
          <div className="flex items-center gap-2 ml-4 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">

            {/* TR */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => changeLanguage("tr")}
              className={`relative px-3 py-2 rounded-full transition-all duration-300 ${
                lang === "tr"
                  ? "bg-red-600 shadow-lg shadow-red-500/40"
                  : "hover:bg-white/10"
              }`}
            >
              <img
                src="https://flagcdn.com/w40/tr.png"
                alt="TR"
                className="w-6 h-6 rounded-full object-cover"
              />
            </motion.button>

            {/* EN */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => changeLanguage("en")}
              className={`relative px-3 py-2 rounded-full transition-all duration-300 ${
                lang === "en"
                  ? "bg-red-600 shadow-lg shadow-red-500/40"
                  : "hover:bg-white/10"
              }`}
            >
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="EN"
                className="w-6 h-6 rounded-full object-cover"
              />
            </motion.button>

          </div>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-white"
        >
          {mobileMenu ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (

        <div className="md:hidden px-6 pb-6 flex flex-col gap-6 text-white font-semibold bg-[#020B1D]/95 backdrop-blur-xl border-t border-white/5">

          <button
            onClick={() => handleMenuClick("/#home")}
            className="text-left hover:text-red-500 transition"
          >
            {ui.nav.home}
          </button>

          <button
            onClick={() => handleMenuClick("/#about")}
            className="text-left hover:text-red-500 transition"
          >
            {ui.nav.about}
          </button>

          <button
            onClick={() => handleMenuClick("/#services")}
            className="text-left hover:text-red-500 transition"
          >
            {ui.nav.services}
          </button>

          <button
            onClick={() => handleMenuClick("/contact")}
            className="text-left hover:text-red-500 transition"
          >
            {ui.nav.contact}
          </button>

          {/* MOBILE LANGUAGE */}
          <div className="flex items-center gap-3 pt-2">

            <button
              onClick={() => changeLanguage("tr")}
              className={`p-2 rounded-full ${
                lang === "tr"
                  ? "bg-red-600"
                  : "bg-white/10"
              }`}
            >
              <img
                src="https://flagcdn.com/w40/tr.png"
                className="w-6 h-6 rounded-full"
              />
            </button>

            <button
              onClick={() => changeLanguage("en")}
              className={`p-2 rounded-full ${
                lang === "en"
                  ? "bg-red-600"
                  : "bg-white/10"
              }`}
            >
              <img
                src="https://flagcdn.com/w40/us.png"
                className="w-6 h-6 rounded-full"
              />
            </button>

          </div>

        </div>

      )}

    </nav>
  );
}