"use client";

import { motion } from "framer-motion";

const values = [
  "Faith & Obedience",
  "Prayer & Worship",
  "Love & Unity",
  "Integrity & Excellence",
  "Service to Humanity",
];

export default function CoreValues() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif font-bold mb-12">
          Our Core Values
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <p className="font-semibold">{value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
