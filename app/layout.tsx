import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "URFM",
    template: "URFM | %s",
  },
  description: "Upper Room Faith Ministry",
  icons: {
    icon: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },

    openGraph: {
    title: "Upper Room Faith Ministry",
    description: "A place of faith, prayer, and teaching in Accra, Ghana.",
    url: "https://upperroomfaithministry.vercel.app/",
    siteName: "Upper Room Faith Ministry",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Upper Room Faith Ministry",
      },
    ],
    type: "website",
  },

    twitter: {
    card: "summary_large_image",
    title: "Upper Room Faith Ministry",
    description: "A place of faith, prayer, and teaching in Accra, Ghana.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
