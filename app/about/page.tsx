import React from 'react'
import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import WhoWeAre from "@/components/WhoWeAre";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import Leadership from '@/components/Leadership';
import Memories from '@/components/Memories';

export const metadata: Metadata = {
  title: "About Us",
};

function AboutPage() {
  return (
        <main className='bg-[#F9F6F0]'>
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <Leadership />
      <Memories />
    </main>
  )
}

export default AboutPage
