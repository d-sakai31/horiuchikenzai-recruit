"use client";

import { useState, useEffect } from "react";
import { COMPANY } from "@/data/company";

const NAV_ITEMS = [
  { label: "実績", href: "#proof" },
  { label: "仕事内容", href: "#work" },
  { label: "チーム", href: "#culture" },
  { label: "成長環境", href: "#growth" },
  { label: "不動産事業", href: "#realestate" },
  { label: "募集対象", href: "#tracks" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sub/30 transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className={`mx-auto max-w-6xl flex items-center justify-between px-4 transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}>
        <a href="#" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt={COMPANY.nameShort}
            className="h-8 md:h-10 w-auto"
          />
          <span className="text-xs text-text-sub hidden sm:inline">
            有限会社堀内建材　採用情報
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5" aria-label="メインナビゲーション">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-sub hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-light text-primary-dark text-sm font-bold px-5 py-2 rounded-full transition-colors"
          >
            お問い合わせ
          </a>
        </nav>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-light text-primary-dark text-sm font-bold px-4 py-1.5 rounded-full transition-colors"
          >
            お問い合わせ
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-sub hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sub/40 rounded-lg"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu: slide animation */}
      <nav
        className={`lg:hidden border-t border-sub/20 bg-white overflow-hidden transition-[max-height] duration-300 ease-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        aria-label="モバイルナビゲーション"
      >
        <ul className="py-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm text-text-sub hover:bg-bg-pale hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
