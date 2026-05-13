"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { content } from "../../data/content";
import { useLanguage } from "../../context/LanguageContext";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense, useState } from "react";

function ContactContent() {

  const { lang, setLang } = useLanguage();
  const params = useSearchParams();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  useEffect(() => {

    const urlLang = params.get("lang");

    if (urlLang && (urlLang === "tr" || urlLang === "en")) {
      setLang(urlLang);
    }

  }, [params]);

  const t = content[lang];

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await fetch("https://formsubmit.co/ajax/info@symicapital.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          message: form.message,
          _subject:
            lang === "en"
              ? "New Contact Form Message"
              : "Yeni İletişim Formu Mesajı"
        })
      });

      if (response.ok) {

        alert(
          lang === "en"
            ? "Message sent successfully."
            : "Mesaj başarıyla gönderildi."
        );

        setForm({
          name: "",
          phone: "",
          email: "",
          message: ""
        });

      } else {

        alert(
          lang === "en"
            ? "An error occurred."
            : "Bir hata oluştu."
        );

      }

    } catch (error) {

      alert(
        lang === "en"
          ? "An error occurred."
          : "Bir hata oluştu."
      );

    }

    setLoading(false);

  };

  return (
    <main className="text-white min-h-screen px-6 md:px-12 lg:px-24 overflow-hidden">

      <Navbar />

      <section className="pt-64 md:pt-48 pb-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start scroll-mt-32">

        {/* LEFT */}
        <div className="space-y-6">

          <h1 className="text-5xl font-bold text-red-500 mb-10">
            {lang === "en" ? "Contact Us" : "İletişim"}
          </h1>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            <p className="text-gray-300 leading-8">
              {t.contact.address}
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            <p className="text-lg">
              0551 101 77 33
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
            <p className="text-lg">
              info@symicapital.com
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps?q=İçerenköy,+Topçu+İbrahim+Sk,+Ataşehir,+İstanbul&output=embed"
              width="100%"
              height="340"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>

        {/* RIGHT */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md mt-[86px]">

          <h2 className="text-3xl font-bold text-red-500 mb-8">
            {lang === "en" ? "Get In Touch" : "Bize Ulaşın"}
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >

            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder={lang === "en" ? "Full Name" : "Ad Soyad"}
              className="p-5 bg-[#1B3358] border border-white/10 rounded-xl outline-none focus:border-red-500 transition"
            />

            <input
              type="text"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder={lang === "en" ? "Phone Number" : "Telefon"}
              className="p-5 bg-[#1B3358] border border-white/10 rounded-xl outline-none focus:border-red-500 transition"
            />

            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder={lang === "en" ? "Email Address" : "Email"}
              className="p-5 bg-[#1B3358] border border-white/10 rounded-xl outline-none focus:border-red-500 transition"
            />

            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder={lang === "en" ? "Your Message" : "Mesajınız"}
              className="p-5 bg-[#1B3358] border border-white/10 rounded-xl h-40 outline-none focus:border-red-500 transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 transition py-5 rounded-xl font-semibold text-lg shadow-lg shadow-red-600/20 disabled:opacity-50"
            >
              {loading
                ? (lang === "en" ? "Sending..." : "Gönderiliyor...")
                : (lang === "en" ? "Send Message" : "Gönder")}
            </button>

          </form>

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