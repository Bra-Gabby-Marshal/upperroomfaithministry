"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif font-bold mb-4">
            Who We Are
          </h2>
          <p className="mb-6">
            Upper Room Faith Ministry is committed to raising believers
            who walk in faith, holiness, and the power of the Holy Spirit.
          </p>
          <Link
            href="/about"
            className="text-[var(--color-accent)] font-semibold hover:underline"
          >
            Read More →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8"
        >
          <h4 className="font-semibold mb-2">Our Focus</h4>
          <ul className="space-y-2">
            <li>• Teaching the Word</li>
            <li>• Prayer & Worship</li>
            <li>• Discipleship</li>
            <li>• Community Impact</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
