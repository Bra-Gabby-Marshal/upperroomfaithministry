"use client";

import { motion, Variants } from "framer-motion";
import { Target, Eye, BookOpen } from "lucide-react";

/* =====================
   Animation Variants
===================== */
const containerVariants: Variants = {
  hidden: { opacity: 1 }, // 👈 must not be empty
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const cardsWrapperVariants: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* =====================
   Types
===================== */
type InfoCard = {
  title: string;
  text: string;
  icon: React.ElementType;
};

/* =====================
   Component
===================== */
export default function ChurchOverviewLeftImage() {
  const infoCards: InfoCard[] = [
    {
      title: "Theme of the Year - 2026",
      text: "Year of Device Speed",
      icon: Target,
    },
    {
      title: "Vision 2026",
      text:
        "To raise a generation anchored in prayer, love, and service, impacting communities through the Word of God.",
      icon: Eye,
    },
    {
      title: "Resources",
      text:
        "Sermons, devotionals, prayer guides, teaching materials, and outreach resources to support spiritual growth.",
      icon: BookOpen,
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-cream)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Shared scroll trigger */}
        <motion.div
          className="flex flex-col md:flex-row gap-14 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left: Image */}
          <motion.div className="flex-1" variants={imageVariants}>
            <img
              src="/home-page-bie.png"
              alt="Senior Pastor"
              className="w-full h-full object-cover rounded-2xl
                brightness-110 contrast-105 saturate-110
                shadow-xl transition duration-300
                hover:brightness-115"
            />
          </motion.div>

          {/* Right: Cards */}
          <motion.div
            className="flex-1 grid grid-cols-1 gap-6 auto-rows-fr"
            variants={cardsWrapperVariants}
          >
            {infoCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  variants={cardVariants}
                  className="h-full"
                >
                  <div
                    className="h-full bg-white rounded-xl p-6
                      shadow-sm hover:shadow-lg
                      transition-all duration-300
                      flex flex-col justify-between"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-11 h-11 rounded-full
                        bg-[var(--color-accent)]
                        flex items-center justify-center shrink-0"
                      >
                        <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>

                      <h4 className="text-lg font-serif font-bold text-[var(--color-dark)]">
                        {card.title}
                      </h4>
                    </div>

                    {/* Body */}
                    <p className="text-sm leading-relaxed text-[var(--color-dark)]">
                      {card.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
