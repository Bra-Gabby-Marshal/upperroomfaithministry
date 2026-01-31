import Image from "next/image";
import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import ServiceTimes from "@/components/ServiceTimes";
import AboutPreview from "@/components/AboutPreview";
import MinistryCard from "@/components/MinistryCard";
import EventsPreview from "@/components/EventsPreview";

export const metadata: Metadata = {
  title: "URFM | Home",
};

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ServiceTimes />
      <AboutPreview />
      <MinistryCard />
      <EventsPreview />
    </main>
  );
}
