"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../context/LanguageContext";

export default function RootLayout({ children }) {

  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">

        <LanguageProvider>

          {/* NAVBAR */}
          <Navbar />

          {/* PROGRESS BAR */}
          {loading && (
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6 }}
              className="fixed top-0 left-0 h-[3px] bg-red-600 z-[99999]"
            />
          )}

          {/* PAGE */}
          <motion.div
            key={pathname}
            initial={{ opacity: 0, scale: 0.96, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="pt-24"
          >
            {children}
          </motion.div>

          {/* RED SWEEP */}
          {loading && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "120%" }}
              transition={{ duration: 0.8 }}
              className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-red-500/20 to-transparent z-[9998] pointer-events-none"
            />
          )}

          {/* DARK FADE */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black z-[9997] pointer-events-none"
            />
          )}

        </LanguageProvider>

      </body>
    </html>
  );
}