import React from 'react';
import type { Metadata } from "next";
import MinistriesHero from "@/components/MinistriesHero";
import MotionMinistryGrid from '@/components/MotionMinistryGrid';

export const metadata: Metadata = {
  title: "Ministries",
};

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

function MinistryPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <MinistriesHero />

      {/* Ministries Section */}
      <section className="py-24 bg-[#F9F6F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <SectionHeading title="Our Church Ministries" />
            <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
              Each ministry exists to nurture spiritual growth, strengthen fellowship, 
              and impact lives for Christ.
            </p>
          </div>

          {/* Motion Grid of Ministries */}
          <MotionMinistryGrid />
        </div>
      </section>

{/* Optional CTA Section */}
{/* <section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h3 className="text-2xl font-serif font-bold mb-4 text-[var(--color-primary)]">
      Want to Join a Ministry?
    </h3>
    <p className="text-gray-700 mb-6">
      Explore opportunities to serve, grow in faith, and make a difference in our church community.
    </p>
    <a
      href="https://wa.me/233540268901?text=Hello%2C%20I%20want%20to%20join%20a%20ministry."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-[var(--color-primary)]/90 transition"
    >
      Join via WhatsApp
    </a>
  </div>
</section> */}

    </main>
  );
}

export default MinistryPage;
