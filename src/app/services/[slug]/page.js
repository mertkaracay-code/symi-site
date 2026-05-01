"use client";

import { useParams, useSearchParams } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { content } from "../../../data/content";

export default function ServiceDetail() {

  const { slug } = useParams();
  const params = useSearchParams();

  // 🔥 SADECE URL
  let lang = params.get("lang");

  // fallback
  if (lang !== "tr" && lang !== "en") {
    lang = "en";
  }

  const t = content[lang];

  const keys = ["ma", "investment", "corporate", "partnership", "advisory"];
  const index = keys.indexOf(slug);

  return (
    <main className="text-white min-h-screen px-6 md:px-12 lg:px-24">

      <Navbar />

      <section className="pt-32 pb-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        <div>
          <h1 className="text-4xl font-bold text-red-500 mb-6">
            {index !== -1 ? t.services[index] : ""}
          </h1>

          <p className="text-gray-300">
            {t.servicesDetail[slug]}
          </p>
        </div>

        <img
          src={`/services/${slug}.jpg`}
          className="rounded-xl h-[400px] object-cover"
        />

      </section>

      <Footer />

    </main>
  );
}