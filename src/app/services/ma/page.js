"use client";

import Navbar from "../../../components/Navbar";
import { useEffect, useState } from "react";

export default function MA() {

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="text-white min-h-screen px-6 md:px-12 lg:px-24 relative">

      <div className="mouse-glow" style={{ left: mouse.x, top: mouse.y }} />

      <Navbar />

      <section className="max-w-7xl mx-auto pt-40 pb-24 grid md:grid-cols-2 gap-16 relative z-10">

        {/* SOL */}
        <div>

          <h1 className="text-3xl md:text-5xl font-bold mb-10 text-red-500">
            Mergers & Acquisitions (M&A) Advisory
          </h1>

          <p className="text-gray-300 leading-relaxed mb-6">
            Comprehensive advisory services covering target identification, valuation, deal structuring, negotiation support,
            due diligence coordination and transaction execution.
          </p>

          <h3 className="text-xl font-semibold text-white mt-10 mb-4">
            Key Stages
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li>• Strategic assessment</li>
            <li>• Target identification</li>
            <li>• Financial analysis and valuation</li>
            <li>• Deal structuring</li>
            <li>• Negotiation and due diligence coordination</li>
            <li>• Transaction execution</li>
          </ul>

        </div>

        {/* SAĞ */}
        <div>
          <div className="sticky top-32 overflow-hidden rounded-2xl group">
            <img
              src="/services/ma.jpg"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
            />
          </div>
        </div>

      </section>

    </main>
  );
}