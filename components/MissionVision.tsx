"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

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

export default function MissionVision() {
  const cards = [
    {
      title: "Our Mission",
      text: "To proclaim the Gospel of Jesus Christ, build strong believers grounded in the Word, and equip saints to live victorious lives through faith and obedience.",
      icon: Target,
    },
    {
      title: "Our Vision",
      text: "To be a ministry that transforms lives, families, and communities through the power of God, raising generations that fear the Lord and walk in purpose.",
      icon: Eye,
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Our Mission & Vision" />

        <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
          {/* Left Side: Text Cards */}
          <div className="flex-1 flex flex-col gap-6">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Icon + Title in-line */}
                  <motion.div className="flex items-center gap-4">
                    <motion.div
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--color-accent)]"
                      initial={{ y: -5, opacity: 0 }}
                      animate={{ y: 5, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </motion.div>

                    <motion.h4
                      className="text-xl font-serif font-bold text-[var(--color-dark)]"
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {card.title}
                    </motion.h4>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    className="text-[var(--color-dark)] leading-relaxed mt-2"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {card.text}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Image */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/osofo-maame.png"
              alt="Mission & Vision"
              className="rounded-xl hidden md:flex shadow-lg w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
