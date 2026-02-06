"use client";

import { useState } from "react";
import { FAQ_ITEMS, type FAQItem } from "@/data/company";

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        className="w-full flex items-center justify-between py-4 text-left group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-medium text-text-main pr-4 group-hover:text-primary transition-colors">
          {item.question}
        </span>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center text-text-sub transition-transform ${isOpen ? "rotate-45" : ""}`}
          aria-hidden="true"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 pr-10">
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
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
          よくある質問
        </h2>
        <p className="mt-3 text-center text-text-sub text-sm md:text-base">
          応募前に気になることをまとめました。
        </p>

        <div className="mt-10">
          {FAQ_ITEMS.map((item) => (
            <FAQAccordionItem key={item.question} item={item} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-text-sub">
          上記以外のご質問も、お気軽に
          <a href="#contact" className="text-accent hover:underline font-medium">
            お問い合わせ
          </a>
          ください。
        </p>
      </div>
    </section>
  );
}
