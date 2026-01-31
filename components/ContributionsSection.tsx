"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PaymentMethod = "Bank" | "Mobile Money";

const SectionHeading = ({ title }: { title: string }) => (
  <h3
    className="relative inline-block text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-8
      after:absolute after:left-0 after:-bottom-2
      after:h-1.5 after:w-20 after:rounded-full
      after:bg-[var(--color-accent)]"
  >
    {title}
  </h3>
);

export default function ContributionsSection() {
  const [activeMethod, setActiveMethod] = useState<PaymentMethod | null>(null);

  const toggleMethod = (method: PaymentMethod) => {
    setActiveMethod(activeMethod === method ? null : method);
  };

  return (
    <section className="py-20 bg-[var(--color-light)]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10">
        {/* Left Image (2/5 on md+) */}
        <div className="md:w-2/5 flex justify-center items-start">
          <img
            src="/contributions.png" 
            alt="Contributions"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Accordion (3/5 on md+) */}
        <div className="md:w-3/5 flex flex-col gap-4">
            <SectionHeading title="Tithe, Offerings & Other Contributions" />
            <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
              Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver - 2 Corinthians 9:7.
            </p>
          {/* Bank Method */}
          <div className="border rounded-xl overflow-hidden shadow-sm">
            <button
              className="w-full text-left px-6 py-4 bg-white flex justify-between items-center font-semibold text-[var(--color-dark)] hover:bg-gray-50 transition"
              onClick={() => toggleMethod("Bank")}
            >
              Bank
              <span
                className={`transform transition-transform ${
                  activeMethod === "Bank" ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <AnimatePresence>
              {activeMethod === "Bank" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 py-4 bg-gray-50 text-[var(--color-dark)] text-sm"
                >
                  <p><span className="font-bold">Bank Name:</span> Ga South Rural Bank</p>
                  <p><span className="font-bold">Account Name:</span> Upper Room Faith Ministry</p>
                  <p><span className="font-bold">Account Number:</span> 1030300201441443</p>
                  <p><span className="font-bold">Branch:</span> Amasaman</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Money Method */}
          <div className="border rounded-xl overflow-hidden shadow-sm">
            <button
              className="w-full text-left px-6 py-4 bg-white flex justify-between items-center font-semibold text-[var(--color-dark)] hover:bg-gray-50 transition"
              onClick={() => toggleMethod("Mobile Money")}
            >
              Mobile Money
              <span
                className={`transform transition-transform ${
                  activeMethod === "Mobile Money" ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <AnimatePresence>
              {activeMethod === "Mobile Money" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 py-4 bg-gray-50 text-[var(--color-dark)] text-sm"
                >
                  <p><span className="font-bold">Provider:</span> MTN Mobile Money</p>
                  <p><span className="font-bold">Number:</span> +233 540 268 901</p>
                  <p><span className="font-bold">Name:</span> Upper Room Faith Ministry</p>
                  <p><span className="font-bold">Reference:</span> Use your name and payment type (eg. Tithe, Offertory etc)</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
