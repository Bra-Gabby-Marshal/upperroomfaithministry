import Image from "next/image";
import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import ChurchOverview from "@/components/ChurchOverview";
import AboutPreview from "@/components/AboutPreview";
import EventsPreview from "@/components/EventsPreview";

export const metadata: Metadata = {
  title: "URFM | Home",
};

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ChurchOverview />
      <AboutPreview />
      <EventsPreview />
    </main>
  );
}
