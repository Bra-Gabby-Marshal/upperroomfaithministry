import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white mt-24">
      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-14 md:grid-cols-3">
        {/* About Us */}
        <div>
          <h4
            className="relative inline-block text-xl font-serif font-bold mb-6 text-[var(--color-accent)]
  after:absolute after:left-0 after:-bottom-2
  after:h-[3px] after:w-10
  after:bg-[var(--color-accent)]
  after:rounded-full"
          >
            About Us
          </h4>
          <p className="leading-relaxed text-white">
            Upper Room Faith Ministry is a Christ-centered church committed to
            teaching the Word, building faith, and transforming lives through
            the power of the Holy Spirit.
          </p>
        </div>

        {/* Locate Us */}
        <div>
          <h4
            className="relative inline-block text-xl font-serif font-bold mb-6 text-[var(--color-accent)]
  after:absolute after:left-0 after:-bottom-2
  after:h-[3px] after:w-10
  after:bg-[var(--color-accent)]
  after:rounded-full"
          >
            Locate Us
          </h4>
          <p className="leading-relaxed text-white">
            Accra, Ghana <br />
            <span className="text-white/90">(Sowutuom - Omanjor)</span>
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h4
            className="relative inline-block text-xl font-serif font-bold mb-6 text-[var(--color-accent)]
  after:absolute after:left-0 after:-bottom-2
  after:h-[3px] after:w-10
  after:bg-[var(--color-accent)]
  after:rounded-full"
          >
            Contact Us
          </h4>
          <ul className="space-y-3 text-white">
            <li>📞 +233 54 026 8901</li>
            <li>✉️ urpchurch1@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/25">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* Copyright */}
          <p className="text-sm text-white/90 text-center sm:text-left">
            © {new Date().getFullYear()} Upper Room Faith Ministry. All rights
            reserved.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <Link
              href="https://web.facebook.com/profile.php?id=61582293510070"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="bg-white/15 p-3 rounded-full text-white hover:bg-[var(--color-accent)] transition-all"
            >
              <Facebook size={18} />
            </Link>

            <Link
              href="https://www.tiktok.com/@upperroomfaithministry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="bg-white/15 p-3 rounded-full text-white hover:bg-[var(--color-accent)] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M21 8.5a6.7 6.7 0 01-4.4-1.5v7.4a6.2 6.2 0 11-5.2-6.1v3.3a2.9 2.9 0 102.1 2.8V2h3a6.7 6.7 0 004.5 6.5z" />
              </svg>
            </Link>

            <Link
              href="https://youtube.com/@upperroomfaithministry?si=hQoE4xrDWa0xEKCO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="bg-white/15 p-3 rounded-full text-white hover:bg-[var(--color-accent)] transition-all"
            >
              <Youtube size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
