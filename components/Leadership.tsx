"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Rev. Ahiable Henry",
    role: "Founder",
    image: "/leadership/henry.jpg",
  },
  {
    name: "Mrs. Ahiable Wayo Rejoice",
    role: "Founder",
    image: "/leadership/osofo-maame1.png",
  },
  {
    name: "Ahiable Abel Kofi Bilanda",
    role: "Head Pastor",
    image: "/leadership/bilanda.png",
  },
  {
    name: "Nii Armah Donneh",
    role: "Associate Pastor",
    image: "/images/deacon.jpg",
  },
  {
    name: "Akagla Godwin",
    role: "Elder",
    image: "/images/women-leader.jpg",
  },
  {
    name: "Yevu Moses",
    role: "Deacon",
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-t-2xl">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="
                    object-cover object-center
                    transition-transform duration-500
                    group-hover:scale-105
                    filter brightness-105 contrast-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold mb-1 text-[var(--color-dark)] tracking-wide">
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
