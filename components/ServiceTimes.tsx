"use client";

import { motion } from "framer-motion";

export default function ServiceTimes() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-serif font-bold mb-10"
        >
          Service Times
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            { day: "Sunday Service", time: "8:00 AM – 11:00 AM" },
            { day: "Midweek Service", time: "Wednesday – 6:00 PM" },
            { day: "Prayer Meeting", time: "Friday – 6:00 PM" },
          ].map((service, i) => (
            <motion.div
              key={service.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="font-semibold mb-2">{service.day}</h3>
              <p>{service.time}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
