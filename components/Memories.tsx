"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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

const SectionHeading = ({ title }: { title: string }) => (
  <h3
    className="relative inline-block text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-12
      after:absolute after:left-0 after:-bottom-2
      after:h-1.5 after:w-24 after:rounded-full
      after:bg-[var(--color-accent)]"
  >
    {title}
  </h3>
);

function Memories() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <SectionHeading title="Our Leadership" />
          <p className="max-w-2xl mx-auto text-[var(--color-dark)]/80 leading-relaxed">
            Like pages from a sacred album — moments where faith, sacrifice, and love shaped our beginning.
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
              className="rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setOpen(true);
              }}
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

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={currentIndex}
      />
    </section>
  );
}

export default Memories;
