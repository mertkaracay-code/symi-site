"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/content";

export default function Navbar() {

  const { lang, setLang } = useLanguage();
  const ui = content.ui[lang];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-6 md:px-12 lg:px-24 py-4 bg-black/30 backdrop-blur-md">

      {/* LOGO (DÜZELTİLDİ) */}
      <div className="bg-white/90 px-2 py-1 rounded-md">
        <img src="/logo.png" className="h-14 md:h-16" />
      </div>

      <div className="hidden md:flex gap-10 text-sm font-semibold items-center text-red-500">

        <Link href="/#home">{ui.nav.home}</Link>
        <Link href="/#about">{ui.nav.about}</Link>
        <Link href="/#services">{ui.nav.services}</Link>
        <Link href="/contact">{ui.nav.contact}</Link>

        <button onClick={() => setLang(lang === "en" ? "tr" : "en")}>
          {lang.toUpperCase()}
        </button>

      </div>

    </nav>
  );
}