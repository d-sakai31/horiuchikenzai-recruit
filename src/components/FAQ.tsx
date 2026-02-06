"use client";

import { useState } from "react";
import { FAQ_ITEMS, type FAQItem } from "@/data/company";

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-sub/20 last:border-b-0">
      <button
        type="button"
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-medium text-primary pr-4 group-hover:text-primary-light transition-colors">
          {item.question}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            isOpen ? "bg-primary text-white rotate-45" : "bg-sub/30 text-primary"
          }`}
          aria-hidden="true"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-5 pr-12">
          <p className="text-sm text-text-sub leading-relaxed">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4">
        <div className="text-center">
          <span className="section-label">FAQ</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            よくある質問
          </h2>
          <div className="accent-line" aria-hidden="true" />
          <p className="mt-4 text-text-sub text-sm md:text-base">
            応募前に気になることをまとめました。
          </p>
        </div>

        <div className="mt-10 bg-bg-pale rounded-2xl border border-sub/30 px-6">
          {FAQ_ITEMS.map((item) => (
            <FAQAccordionItem key={item.question} item={item} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-sub">
          上記以外のご質問も、お気軽に
          <a href="#contact" className="text-primary hover:underline font-medium">
            お問い合わせ
          </a>
          ください。
        </p>
      </div>
    </section>
  );
}
