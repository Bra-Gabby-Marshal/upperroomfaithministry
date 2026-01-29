import React from "react";
import type { Metadata } from "next";
import ContactHero from "@/components/ContactHero";

export const metadata: Metadata = {
  title: "Contact Us",
};

function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <ContactHero />
    </main>
  );
}

export default ContactPage;
