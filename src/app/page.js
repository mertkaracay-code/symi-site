"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { content } from "../data/content";
import { useLanguage } from "../context/LanguageContext";
import { useRouter } from "next/navigation";

export default function Home() {

  const { lang } = useLanguage();
  const t = content[lang];
  const ui = content.ui[lang];

  const router = useRouter();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const services = [
    { key: "ma", title: t.services[0], img: "/services/ma.jpg" },
    { key: "investment", title: t.services[1], img: "/services/investment.jpg" },
    { key: "corporate", title: t.services[2], img: "/services/corporate.jpg" },
    { key: "partnership", title: t.services[3], img: "/services/partnership.jpg" },
    { key: "advisory", title: t.services[4], img: "/services/advisory.jpg" }
  ];

  return (
    <main className="text-white min-h-screen px-6 md:px-12 lg:px-24 relative overflow-hidden">

      <div className="mouse-glow" style={{ left: mouse.x, top: mouse.y }} />

      <Navbar />

      {/* HERO */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center min-h-screen pt-32 pb-20 scroll-mt-24"
      >

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          {ui.heroTop}
          <br />
          <span className="text-red-600">{ui.heroBottom}</span>
        </motion.h1>

        <p className="mt-6 text-gray-300 max-w-xl text-base md:text-lg leading-8">
          {ui.heroDesc}
        </p>

        <button
          onClick={() => router.push(`/contact?lang=${lang}`)}
          className="mt-8 px-8 py-4 border border-white rounded-full hover:bg-red-600 transition duration-300"
        >
          {lang === "en" ? "Contact Us" : "İletişime Geç"}
        </button>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 max-w-6xl mx-auto scroll-mt-24"
      >

        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-10">
          {lang === "en"
            ? "About SYMI Consulting"
            : "SYMI Consulting Hakkında"}
        </h2>

        <div className="grid md:grid-cols-2 gap-10 text-gray-300 leading-8">
          {t.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 max-w-7xl mx-auto scroll-mt-24"
      >

        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-14 text-center">
          {lang === "en" ? "Our Services" : "Hizmetlerimiz"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

          {services.map((item, i) => (
            <div
              key={i}
              onClick={() => router.push(`/services/${item.key}?lang=${lang}`)}
              className="group block cursor-pointer"
            >

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                <img
                  src={item.img}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white group-hover:text-red-500 transition leading-8">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </section>

      <Footer />

    </main>
  );
}