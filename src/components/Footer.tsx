"use client";

import { COMPANY, FOOTER } from "@/data/company";
import { InstagramIcon, YouTubeIcon } from "./SnsIcons";

export default function Footer() {
  return (
    <footer className="bg-bg-pale border-t border-sub/30 py-14 relative">
      <div className="mx-auto max-w-6xl px-4">
        {/* Logo area */}
        <div className="flex items-center gap-3 mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt={COMPANY.name}
            className="h-14 w-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <dl className="space-y-2">
            {FOOTER.companyInfo.map((item) => (
              <div key={item.label} className="flex gap-3 text-sm">
                <dt className="shrink-0 text-text-sub w-16">{item.label}</dt>
                <dd className="text-text-main">{item.value}</dd>
              </div>
            ))}
          </dl>

          {/* Links */}
          <div>
            <p className="font-bold text-sm text-text-sub uppercase tracking-wider mb-4">Links</p>
            <ul className="space-y-2">
              {FOOTER.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-light hover:text-primary hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SNS */}
          <div>
            <p className="font-bold text-sm text-text-sub uppercase tracking-wider mb-4">Follow Us</p>
            <div className="flex items-center gap-4">
              <a
                href={COMPANY.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-light hover:text-primary transition-colors"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href={COMPANY.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-primary-light hover:text-primary transition-colors"
              >
                <YouTubeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-sub/30 text-center text-xs text-text-sub">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>

      {/* Scroll to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-4 md:right-8 top-0 -translate-y-1/2 w-10 h-10 bg-white border border-sub/30 rounded-full flex items-center justify-center text-text-sub hover:text-primary hover:border-primary transition-colors shadow-sm"
        aria-label="ページトップへ戻る"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
