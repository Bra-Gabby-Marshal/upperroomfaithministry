import React from "react";
import type { Metadata } from "next";
import EventsHero from "@/components/EventsHero";
import EventCard from "@/components/EventCard";

export const metadata: Metadata = {
  title: "Events",
};

// Section heading component (reuse from ContactPage style)
const SectionHeading = ({ title }: { title: string }) => (
  <h3
    className="relative inline-block text-xl sm:text-2xl lg:text-3xl font-serif font-bold mb-6
      after:absolute after:left-0 after:-bottom-2
      after:h-1.5 after:w-16 after:rounded-full
      after:bg-[var(--color-accent)]"
  >
    {title}
  </h3>
);

export default function EventPage() {
  // Example events data
  const events = [
    {
      title: "2025 Cross Over",
      date: "Wednesday, December 31, 2025",
      location: "URFM Auditorium",
      image: "/events/cross-over-2025.jpeg",
    },
    {
      title: "Night of Nine Lessons & Carols",
      date: "Wednesday, December 24, 2025",
      location: "URFM Auditorium",
      image: "/events/Lesson-Carols.jpg",
    },
    {
      title: "Remember Thy God - Youth Program",
      date: "Sunday, December 14, 2025",
      location: "URFM Auditorium",
      image: "/events/2025-preaching.jpg",
    },
    {
      title: "Night of Worship & Praises - Youth Program",
      date: "Friday, December 12, 2025",
      location: "URFM Auditorium",
      image: "/events/Worship-Praises-Flyer.jpg",
    },
    {
      title: "2025 Youth Week Celebration",
      date: "Wednesday 10 Dec, Sunday 14 Dec 2025",
      location: "URFM Auditorium",
      image: "/events/youth-week-2025.png",
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <EventsHero />

      {/* Upcoming Events Section */}
      <section className="bg-[#F9F6F0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Upcoming Events" />
          <p className="text-gray-700 text-center text-lg max-w-2xl mx-auto mb-12">
            Be part of what God is doing at Upper Room Faith Ministry.
          </p>

          <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={index}
                className="rounded-2xl border border-black/10 bg-white shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <EventCard
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  image={event.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
