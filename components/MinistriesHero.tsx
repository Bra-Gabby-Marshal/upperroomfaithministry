import Image from "next/image";

export default function MinistriesHero() {
  return (
    <section className="relative h-[28vh] md:h-[30vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/ministry.jpg"
        alt="URFM Ministries"
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
            Our Ministries
          </h1>

          <p className="mt-3 text-base md:text-lg text-[#F9F6F0]/90 leading-relaxed">
            Serving God and people through spirit-led ministries at Upper Room
            Faith Ministry.
          </p>
        </div>
      </div>
    </section>
  );
}
