"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Animated Image */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative w-full h-[330px] md:h-[380px] rounded-lg overflow-hidden"
          >
            <Image
              src="/who-we-are.jpg"
              alt="Upper Room Faith Ministry"
              fill
              className="object-cover object-top"
            />
          </motion.div>

          {/* Right: Text */}
          <div className="text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-serif font-bold mb-6"
            >
              Who We Are
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-gray-700 leading-relaxed"
            >
              Upper Room Faith Ministry is a Christ-centered church devoted to
              the teaching of God’s Word, prayer, and the demonstration of the
              Holy Spirit’s power. We exist to raise believers who walk in
              faith, love, and spiritual maturity.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
