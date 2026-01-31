"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

/* =====================
   Animation Variants
===================== */
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const SectionHeading = ({ title }: { title: string }) => (
  <h2
    className="relative inline-block text-2xl sm:text-3xl lg:text-4xl
      font-serif font-bold mb-12
      after:absolute after:left-0 after:-bottom-2
      after:h-1.5 after:w-24 after:rounded-full
      after:bg-[var(--color-accent)]"
  >
    {title}
  </h2>
);

/* =====================
   Component
===================== */
export default function AboutPreview() {
  const focusItems = [
    "Teaching the Word",
    "Prayer & Worship",
    "Discipleship",
    "Community Impact",
  ];

  return (
    <section className="py-20 bg-[var(--color-cream)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row gap-14 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left: Text + Focus Card */}
          <motion.div className="flex-1 flex flex-col gap-6" variants={textVariants}>
            {/* Who We Are */}
              <SectionHeading title="Who We Are?" />

            <p className=" text-[var(--color-dark)] leading-relaxed">
              Upper Room Faith Ministry is committed to raising believers
              who walk in faith, holiness, and the power of the Holy Spirit.
            </p>

            <Link
              href="/about"
              className="text-[var(--color-accent)] font-semibold hover:underline"
            >
              Read More →
            </Link>

            {/* Our Focus Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h4 className="font-semibold mb-4 text-[var(--color-dark)]">Our Focus</h4>
              <ul className="space-y-2 text-[var(--color-dark)] text-sm">
                {focusItems.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div className="flex-1" variants={imageVariants}>
            <img
              src="/home-page-bie.png"
              alt="About URFM"
              className="w-full h-full object-cover rounded-2xl
                brightness-110 contrast-105 saturate-110
                shadow-xl transition duration-300
                hover:brightness-115"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
