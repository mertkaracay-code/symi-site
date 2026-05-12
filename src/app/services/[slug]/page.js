"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { content } from "../../../data/content";

export default function ServiceDetail() {

  const { slug } = useParams();

  const searchParams = useSearchParams();

  const [lang, setLang] = useState("en");

  useEffect(() => {

    const currentLang = searchParams.get("lang");

    if (currentLang === "tr") {
      setLang("tr");
    } else {
      setLang("en");
    }

  }, [searchParams]);

  const t = content[lang];

  const keys = [
    "ma",
    "investment",
    "corporate",
    "partnership",
    "advisory"
  ];

  const index = keys.indexOf(slug);

  return (
    <main className="text-white min-h-screen px-6 md:px-12 lg:px-24">

      <Navbar />

      <section className="pt-32 pb-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        <div>

          <h1 className="text-5xl font-bold text-red-500 mb-8 leading-tight">
            {index !== -1 ? t.services[index] : ""}
          </h1>

          <p className="text-gray-300 text-lg leading-9">
            {t.servicesDetail[slug]}
          </p>

        </div>

        <img
          src={`/services/${slug}.jpg`}
          className="rounded-2xl h-[450px] w-full object-cover border border-white/10"
        />

      </section>

      <Footer />

    </main>
  );
}