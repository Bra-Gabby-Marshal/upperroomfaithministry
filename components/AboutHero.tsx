import Image from "next/image";

export default function AboutHero() {
  return (
    <section
      className="relative h-[50vh] min-h-[340px] overflow-hidden"
      aria-labelledby="about-hero-title"
    >
      {/* Background Image */}
      <Image
        src="/about-hero.jpeg"
        alt="Upper Room Faith Ministry worship service"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/70" />

      {/* Text Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <div className="max-w-2xl">
          <h1
            id="about-hero-title"
            className="relative inline-block font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5
            after:absolute after:left-1/2 after:-bottom-2 after:-translate-x-1/2
            after:h-[3px] after:w-14 after:rounded-full
            after:bg-[var(--color-accent)]"
          >
            About Us
          </h1>

          <p className="mt-4 text-base md:text-lg lg:text-xl text-[#F9F6F0]/90 leading-relaxed">
            A people called to worship, grow in faith, and impact generations.
          </p>
        </div>
      </div>
    </section>
  );
}
