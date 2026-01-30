"use client";

import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-serif font-bold mb-6"
        >
          Who We Are
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          Upper Room Faith Ministry is a Christ-centered church devoted to the
          teaching of God’s Word, prayer, and the demonstration of the Holy
          Spirit’s power. We exist to raise believers who walk in faith, love,
          and spiritual maturity.
        </motion.p>
      </div>
    </section>
  );
}
