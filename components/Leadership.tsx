"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const leaders = [
  {
    name: "Rev. [Pastor’s Full Name]",
    role: "Founder & Lead Pastor",
    image: "/images/pastor.jpg",
    bio: "Rev. [Name] is the Founder and Lead Pastor of Upper Room Faith Ministry, called by God to raise believers grounded in faith, prayer, and the Word of God.",
  },
  {
    name: "Pastor [Name]",
    role: "Associate Pastor",
    image: "/images/associate-pastor.jpg",
    bio: "Pastor [Name] supports the vision of the ministry through teaching, mentorship, and pastoral care.",
  },
  {
    name: "Elder [Name]",
    role: "Church Elder",
    image: "/images/elder.jpg",
    bio: "Elder [Name] serves with wisdom and integrity, helping guide the church in spiritual growth and leadership.",
  },
];

export default function Leadership() {
  return (
    <section className="py-20 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-serif font-bold mb-4">
            Our Leadership
          </h2>
          <p className="max-w-2xl mx-auto">
            God-appointed servants committed to shepherding, teaching, and
            leading the church according to His will.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-72">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif font-bold mb-1">
                  {leader.name}
                </h3>
                <p className="text-[var(--color-accent)] font-semibold mb-3">
                  {leader.role}
                </p>
                <p className="text-sm">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
