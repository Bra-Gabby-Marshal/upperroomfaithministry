"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/memories/1.jpg",
  "/memories/2.jpg",
  "/memories/3.jpg",
  "/memories/4.jpg",
  "/memories/5.jpg",
  "/memories/6.jpg",
  "/memories/7.jpg",
  "/memories/8.jpg",
  "/memories/9.jpg",
  "/memories/10.jpg",
];

function Memories() {
  return (
    <section className="py-28 bg-[var(--color-cream)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Our Early Memories
          </h3>
          <p className="max-w-2xl mx-auto text-[var(--color-dark)]/80">
            Like pages from a sacred album — moments where faith, sacrifice, and
            love shaped our beginning.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative w-full h-[300px] sm:h-[320px] lg:h-[350px]">
                <Image
                  src={src}
                  alt={`Memory ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Memories;
