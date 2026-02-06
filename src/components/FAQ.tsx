"use client";

import { useState } from "react";
import { FAQ_SECTION, FAQ_ITEMS, type FAQItem } from "@/data/company";

function FAQAccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-sub/20 last:border-b-0">
      <button
        type="button"
        className="w-full flex items-center justify-between py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sub/40 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-sm md:text-base font-medium text-primary pr-4 group-hover:text-primary-light transition-colors">
          {item.question}
        </span>
        <span
          className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <svg className="w-5 h-5 text-text-sub" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pr-12">
            <p className="text-sm text-text-sub leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {

  return (
    <section
     
      id="faq"
      className="bg-bg-pale/40 py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-4">
        <div className="">
          <h2 className="text-display-sm text-primary">
            {FAQ_SECTION.heading}
          </h2>
          <p className="mt-3 text-text-sub text-sm md:text-base">
            {FAQ_SECTION.subHeading}
          </p>
        </div>

        {/* FAQ items with left accent border */}
        <div className="mt-10 border-l-2 border-accent pl-6 md:pl-8">
          {FAQ_ITEMS.map((item) => (
            <FAQAccordionItem key={item.question} item={item} />
          ))}
        </div>

        <p className="mt-8 text-sm text-text-sub">
          {FAQ_SECTION.footerText}
          <a href="#contact" className="text-primary hover:underline font-medium">
            {FAQ_SECTION.footerLinkText}
          </a>
          ください。
        </p>
      </div>
    </section>
  );
}
