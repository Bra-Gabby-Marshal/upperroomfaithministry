"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Rev. [Pastor’s Full Name]",
    role: "Founder & Lead Pastor",
    image: "/images/pastor.jpg",
  },
  {
    name: "Pastor [Name]",
    role: "Associate Pastor",
    image: "/images/associate-pastor.jpg",
  },
  {
    name: "Elder [Name]",
    role: "Church Elder",
    image: "/images/elder.jpg",
  },
  {
    name: "Deacon [Name]",
    role: "Head Deacon",
    image: "/images/deacon.jpg",
  },
  {
    name: "Mrs. [Name]",
    role: "Women’s Ministry Leader",
    image: "/images/women-leader.jpg",
  },
];

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

export default function Leadership() {
  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeading title="Our Leadership" />
          <p className="max-w-2xl mx-auto text-[var(--color-dark)]/80 leading-relaxed">
            God-appointed servants committed to shepherding, teaching, and
            leading the church according to His will.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="
                group bg-white rounded-2xl overflow-hidden
                shadow-md hover:shadow-xl
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                    filter brightness-110 contrast-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-7 text-center">
                <h3 className="text-xl font-serif font-bold mb-1 text-[var(--color-dark)]">
                  {leader.name}
                </h3>

                <p className="text-[var(--color-accent)] font-semibold tracking-wide">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
