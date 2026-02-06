"use client";

import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sub/30">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 h-14">
        <a href="#" className="flex items-center gap-2">
          <span className="flex flex-col gap-0.5" aria-hidden="true">
            <span className="block w-5 h-0.5 bg-accent rounded-full" />
            <span className="block w-4 h-0.5 bg-accent rounded-full" />
            <span className="block w-3 h-0.5 bg-accent rounded-full" />
          </span>
          <span className="font-bold text-primary text-sm md:text-base">
            {COMPANY.nameShort}
            <span className="text-xs text-text-sub ml-1 hidden sm:inline">
              採用情報
            </span>
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
            話を聞く
          </a>
        </nav>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            className="bg-accent hover:bg-accent-light text-primary-dark text-xs font-bold px-4 py-1.5 rounded-full transition-colors"
          >
            話を聞く
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-text-sub hover:text-primary"
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

      {/* Mobile menu */}
      {isOpen && (
        <nav className="lg:hidden border-t border-sub/20 bg-white" aria-label="モバイルナビゲーション">
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
      )}
    </header>
  );
}
