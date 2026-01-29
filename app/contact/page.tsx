import React from 'react'
import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Contact Us",
};

function ContactPage() {
  return (
    <section className='relative h-[20vh] w-full'>
      {/* Background Image */}
      <Image src="/contact-us.jpg" alt='contact us' fill priority className='object-cover' />
    </section>
  )
}

export default ContactPage
