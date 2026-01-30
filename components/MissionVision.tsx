"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="py-20 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-serif font-bold mb-4">
            Our Mission
          </h3>
          <p>
            To proclaim the Gospel of Jesus Christ, build strong believers
            grounded in the Word, and equip saints to live victorious lives
            through faith and obedience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-serif font-bold mb-4">
            Our Vision
          </h3>
          <p>
            To be a ministry that transforms lives, families, and communities
            through the power of God, raising generations that fear the Lord
            and walk in purpose.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
