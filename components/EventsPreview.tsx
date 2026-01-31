"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EventsPreview() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-10">
          Upcoming Events
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-md max-w-xl mx-auto"
        >
          <p className="mb-4">
            Stay connected and be part of what God is doing at URFM.
          </p>
          <Link
            href="/events"
            className="bg-[var(--color-accent)] text-[var(--urfm-color-dark)] px-6 py-3 rounded-lg font-semibold"
          >
            View Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
