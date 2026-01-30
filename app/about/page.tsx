import React from 'react'
import type { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
// import WhoWeAre from "@/components/WhoWeAre";
// import MissionVision from "@/components/MissionVision";
// import CoreValues from "@/components/CoreValues";

export const metadata: Metadata = {
  title: "About Us",
};

function AboutPage() {
  return (
        <main>
      <AboutHero />
      {/* <WhoWeAre />
      <MissionVision />
      <CoreValues /> */}
    </main>
  )
}

export default AboutPage
