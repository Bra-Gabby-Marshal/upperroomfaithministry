"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function MinistryCard({ title, description, image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative h-56">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-3">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
