"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Ministries", href: "/ministry" },
  { name: "Events", href: "/event" },
  { name: "Contact Us", href: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const renderLink = (link: typeof navLinks[0], mobile = false) => {
    const active = isActive(link.href);
    const baseClasses = `px-4 py-2 rounded-full transition-all duration-200 ${
      mobile ? "text-center w-full" : ""
    }`;
    const activeClasses = "bg-[var(--color-cream)] !text-[var(--color-primary)] shadow-sm";
    const hoverClasses = "hover:text-[var(--color-accent)]";

    return (
      <li key={link.name}>
        <Link
          href={link.href}
          onClick={() => mobile && setIsOpen(false)}
          className={`${baseClasses} ${active ? activeClasses : hoverClasses}`}
          aria-current={active ? "page" : undefined}
        >
          {link.name}
        </Link>
      </li>
    );
  };

  return (
    <nav className="bg-[var(--color-primary)] text-[var(--color-cream)] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/urfm-logo-name.png"
              alt="URFM Church Logo"
              width={260}
              height={48}
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 font-sans text-lg lg:ml-auto">
            {navLinks.map((link) => renderLink(link))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden ml-3 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              className="w-8 h-8 text-[var(--color-cream)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? "max-h-96 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"}`}
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent" />

        <ul className="bg-[var(--color-primary)] text-[var(--color-cream)] flex flex-col items-center space-y-4 py-6">
          {navLinks.map((link) => renderLink(link, true))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
