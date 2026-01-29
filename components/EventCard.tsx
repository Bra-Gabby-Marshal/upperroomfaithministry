"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

type Props = {
  title: string;
  date: string;
  location: string;
  image: string;
};

export default function EventCard({ title, date, location, image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="relative h-52">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-serif font-bold mb-3">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm mb-2">
          <Calendar size={16} />
          <span>{date}</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>
    </motion.div>
  );
}
