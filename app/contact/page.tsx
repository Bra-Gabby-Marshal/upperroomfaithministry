import React from "react";
import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactHero from "@/components/ContactHero";

export const metadata: Metadata = {
  title: "Contact Us | Upper Room Faith Ministry",
};

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

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Content */}
      <section className="bg-[#F9F6F0] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">

          {/* Service Times */}
          <div>
            <SectionHeading title="Service Times" />
            <div className="rounded-2xl border border-black/10 bg-white shadow-md overflow-hidden">
              <table className="w-full text-sm table-auto">
                <thead className="bg-[var(--color-primary)] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Service</th>
                    <th className="px-4 py-3 text-left font-semibold">Day</th>
                    <th className="px-4 py-3 text-left font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { service: "Sundays", day: "Sunday", time: "8:00 AM – 10:30 AM" },
                    { service: "Prayers", day: "Monday", time: "8:00 AM – 10:30 AM" },
                    { service: "Teachings", day: "Thursday", time: "8:00 AM – 10:30 AM" },
                  ].map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[var(--color-accent)]/10 transition-all"
                    >
                      <td className="px-4 py-3 font-medium">{item.service}</td>
                      <td className="px-4 py-3">{item.day}</td>
                      <td className="px-4 py-3">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Reach Out */}
          <div>
            <SectionHeading title="Reach Out" />
            <div className="rounded-2xl bg-white border border-black/10 shadow-md p-6 sm:p-8 flex flex-col justify-between space-y-4 sm:space-y-6">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                For prayers, counselling, partnerships, or general enquiries, we
                warmly invite you to reach out. Our leadership team is ready to
                walk with you in faith and love.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="tel:+233540268901"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg
                    bg-[var(--color-primary)] px-6 py-3 text-white font-medium
                    hover:bg-[var(--color-primary)]/90 transition-all shadow-sm"
                >
                  <Phone size={20} />
                  Call Us
                </a>

                <a
                  href="mailto:urpchurch1@gmail.com"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg
                    border border-[var(--color-primary)] px-6 py-3 font-medium
                    text-[var(--color-primary)]
                    hover:bg-[var(--color-primary)] hover:text-white transition-all shadow-sm"
                >
                  <Mail size={20} />
                  Send Email
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information - full width below */}
          <div className="lg:col-span-2">
            <SectionHeading title="Contact Information" />
            <div className="rounded-2xl border border-black/10 bg-white shadow-md overflow-hidden">
              <div className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <span
                    className="p-3 rounded-full bg-[var(--color-accent)]/20 text-[var(--color-accent)] shadow-sm"
                    aria-hidden
                  >
                    <MapPin size={20} />
                  </span>
                  <div>
                    <strong className="block text-lg font-medium">Location</strong>
                    <span className="text-gray-600">Accra, Ghana</span>
                  </div>
                </div>

                {/* Responsive Map */}
                <div className="w-full aspect-[4/3] sm:aspect-[16/9] rounded-xl overflow-hidden border border-black/10 shadow-sm">
                  <iframe
                    title="URFM Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.123456789!2d-0.186964184595!3d5.603716996092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9abc1234567%3A0x1234567890abcdef!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1690000000000!5m2!1sen!2sgh"
                    className="w-full h-full"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
