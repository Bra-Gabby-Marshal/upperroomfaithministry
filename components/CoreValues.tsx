"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  HandHeart,
  Heart,
  Award,
  UserCheck,
} from "lucide-react";

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

const values = [
  { label: "Faith & Obedience", icon: ShieldCheck },
  { label: "Prayer & Worship", icon: HandHeart },
  { label: "Love & Unity", icon: Heart },
  { label: "Integrity & Excellence", icon: Award },
  { label: "Service to Humanity", icon: UserCheck },
];

export default function CoreValues() {
  return (
    <section className="py-20 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <SectionHeading title="Our Core Values" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-5">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center gap-4
                  hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[var(--color-primary)]" />
                </div>

                {/* Label */}
                <p className="font-semibold text-lg text-[var(--color-dark)]">
                  {value.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
