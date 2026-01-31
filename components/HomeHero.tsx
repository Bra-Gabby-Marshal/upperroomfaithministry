"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/banner-imgs/home-hero-7.jpg",
  "/banner-imgs/home-hero-1.jpg",
  "/banner-imgs/home-hero-2.jpg",
  "/banner-imgs/home-hero-3.jpg",
  "/banner-imgs/home-hero-4.jpg",
  "/banner-imgs/home-hero-5.jpg",
  "/banner-imgs/home-hero-6.jpg",
];

export default function HomeHero() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  // Auto slide effect
  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section
      className="relative h-[85vh] min-h-[520px] max-h-[900px] overflow-hidden"
      aria-label="Home hero section"
    >
      {/* Background Image Slider */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`Upper Room Faith Ministry banner ${index + 1}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/50 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{
              opacity: shouldReduceMotion ? 1 : 0,
              y: shouldReduceMotion ? 0 : 32,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Welcome to <br className="hidden sm:block" />
              <span className="text-[var(--color-accent)]">
                Upper Room Faith Ministry
              </span>
            </h1>

            <p className="text-white/90 text-lg sm:text-xl mb-8 leading-relaxed">
              A place of worship, faith, prayer, and transformation. Experience
              God’s presence and power with us.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="bg-black/70 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="border border-white/80 text-white px-6 py-3 rounded-lg hover:bg-black/50 transition"
              >
                Visit Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
