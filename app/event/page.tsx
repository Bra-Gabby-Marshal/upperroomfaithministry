import React from 'react'
import type { Metadata } from "next";
import { main } from 'framer-motion/client';
import EventsHero from '@/components/EventsHero';

export const metadata: Metadata = {
  title: "Events",
};
function EventPage() {
  return (
    <main>
      <EventsHero />
    </main>
  )
}

export default EventPage
