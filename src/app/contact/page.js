"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { content } from "../../data/content";
import { useLanguage } from "../../context/LanguageContext";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

function ContactContent() {
  const { lang, setLang } = useLanguage();
  const params = useSearchParams();

  useEffect(() => {
    const urlLang = params.get("lang");
    if (urlLang && (urlLang === "tr" || urlLang === "en")) {
      setLang(urlLang);
    }
  }, [params]);

  const t = content[lang];

  return (
    <main className="text-white min-h-screen px-6 md:px-12 lg:px-24">

      <Navbar />

      <section className="pt-32 pb-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div className="space-y-6">

          <h1 className="text-4xl font-bold text-red-500">
            {lang === "en" ? "Contact Us" : "İletişim"}
          </h1>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <p className="text-gray-300">{t.contact.address}</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <p>{t.contact.phone}</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <p>{t.contact.email}</p>
          </div>

          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=İçerenköy,+Topçu+İbrahim+Sk,+Ataşehir,+İstanbul&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4 justify-center">

          <input
            type="text"
            placeholder={lang === "en" ? "Full Name" : "Ad Soyad"}
            className="p-4 bg-white/5 border border-white/10 rounded-lg"
          />

          <input
            type="text"
            placeholder={lang === "en" ? "Phone Number" : "Telefon"}
            className="p-4 bg-white/5 border border-white/10 rounded-lg"
          />

          <input
            type="email"
            placeholder={lang === "en" ? "Email Address" : "Email"}
            className="p-4 bg-white/5 border border-white/10 rounded-lg"
          />

          <textarea
            placeholder={lang === "en" ? "Your Message" : "Mesajınız"}
            className="p-4 bg-white/5 border border-white/10 rounded-lg h-32"
          />

          <button className="bg-red-600 py-4 rounded-lg font-semibold">
            {lang === "en" ? "Send Message" : "Gönder"}
          </button>

        </div>

      </section>

      <Footer />

    </main>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}