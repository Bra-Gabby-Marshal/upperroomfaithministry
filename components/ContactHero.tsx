import React from "react";
import Image from "next/image";

function ContactHero() {
  return (
    <section className="relative h-[28vh] md:h-[30vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/contact-us.jpg"
        alt="Contact Us"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/70" />

      {/* Text Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <h1
            className="relative inline-block text-3xl md:text-4xl font-bold font-serif text-white mb-4
        after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2
        after:h-[3px] after:w-12 after:rounded-full
        after:bg-[var(--color-accent)]"
          >
            Contact Us
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#F9F6F0]/90 leading-relaxed">
            We’d love to hear from you. Reach out to Upper Room Faith Ministry
            and let’s connect in faith and fellowship.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
