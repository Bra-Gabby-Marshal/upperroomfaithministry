import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[45vh] min-h-[320px]">
      <Image
        src="/about-hero.jpeg"
        alt="About Upper Room Faith Ministry"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      {/* Text Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div className="max-w-2xl">
          <h1
            className="relative inline-block text-3xl md:text-4xl font-bold font-serif text-white mb-4
        after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2
        after:h-[3px] after:w-12 after:rounded-full
        after:bg-[var(--color-accent)]"
          >
            About Us
          </h1>

          <p className="mt-3 text-base md:text-lg text-[#F9F6F0]/90 leading-relaxed">
            A people called to worship, grow in faith, and impact generations.
          </p>
        </div>
      </div>
    </section>
  );
}
