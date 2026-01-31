"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative h-[85vh] min-h-[520px]">
      <Image
        src="/images/home-hero.jpg"
        alt="Upper Room Faith Ministry"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Welcome to Upper Room Faith Ministry
            </h1>

            <p className="text-white/90 mb-8">
              A place of worship, faith, prayer, and transformation.
              Come experience God’s presence and power.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="bg-[var(--color-accent)] text-[var(--urfm-color-dark)] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Learn More
              </Link>

              <Link
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
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
