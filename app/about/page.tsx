import React from 'react'
import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import WhoWeAre from "@/components/WhoWeAre";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import Leadership from '@/components/Leadership';

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
    </main>
  )
}

export default AboutPage
