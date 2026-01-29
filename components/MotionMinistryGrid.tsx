// app/ministry/MotionMinistryGrid.tsx
"use client";

import { motion } from "framer-motion";
import MinistryCard from "@/components/MinistryCard";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function MotionMinistryGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >
      <MinistryCard title="Youth Ministry" description="Raising a generation grounded in the Word,
              empowered to live boldly for Christ." image="/images/ministry-youth.jpeg" />
      <MinistryCard title="Women’s Ministry" description="Equipping women to grow spiritually,
              build godly relationships, and serve with purpose." image="/images/ministry-women.jpeg" />
      <MinistryCard title="Men’s Ministry" description="Building strong men of faith, integrity,
              and leadership through fellowship and prayer." image="/images/ministry-men.jpeg" />
      <MinistryCard title="Children’s Ministry" description="Nurturing children in God’s Word through
              age-appropriate teaching, love, and spiritual foundation." image="/images/ministry-children.jpg" />
      <MinistryCard title="Music Ministry" description="Leading the congregation into God’s presence
              through worship, praise, and spirit-filled music." image="/images/ministry-music.jpg" />
      <MinistryCard title="Media Ministry" description="Communicating the Gospel through media,
              technology, and creative digital expressions." image="/images/ministry-media.png" />
    </motion.div>
  );
}
