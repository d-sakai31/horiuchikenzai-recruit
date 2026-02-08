"use client";

import { useState } from "react";
import { CTA, COMPANY } from "@/data/company";

export default function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "sent">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sent");
  };

  return (
    <section
     
      id="contact"
      className="bg-white pt-16 md:pt-20 lg:pt-28 pb-16 md:pb-24 lg:pb-36"
    >
      <div className="mx-auto max-w-4xl px-4">
        {/* Header: display centered */}
        <div className="text-center">
          <h2 className="text-display text-primary whitespace-pre-line">
            {CTA.heading}
          </h2>
          <p className="mt-4 text-text-sub text-base whitespace-pre-line max-w-md mx-auto">
            {CTA.subHeading}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form: accent top border */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-t-4 border-accent">
            <h3 className="text-lg font-bold text-primary mb-1">
              Webフォームで問い合わせ
            </h3>
            <p className="text-sm text-text-sub mb-6">
              24時間受付。2営業日以内にご連絡します。
            </p>

            {formState === "sent" ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-sub text-primary flex items-center justify-center mx-auto mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-bold text-primary">送信しました</p>
                <p className="text-sm text-text-sub mt-2">
                  ※これはデモ送信です。本番環境ではフォームサービスに接続してください。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-primary mb-1">
                    お名前 <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    aria-required="true"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-sub/40 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sub/40 focus:border-sub"
                    placeholder="堀内 太郎"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-primary mb-1">
                    メールアドレス <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-sub/40 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sub/40 focus:border-sub"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-primary mb-1">
                    メッセージ
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white border border-sub/40 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sub/40 focus:border-sub resize-y"
                    placeholder="気になっていること、聞きたいことなど自由にご記入ください。「まだ応募は決めていないが話を聞きたい」でもOKです。"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-primary-dark font-bold py-3 rounded-full transition-colors"
                >
                  送信する
                </button>
              </form>
            )}
          </div>

          {/* Contact methods: flat list */}
          <div className="space-y-0">
            {/* Email */}
            <div className="flex items-start gap-4 py-5 border-b border-sub/20">
              <span className="w-10 h-10 rounded-lg bg-sub/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-primary text-sm">メールで直接問い合わせ</h3>
                <p className="text-sm text-text-sub mt-0.5">直接メールを送りたい方はこちら。</p>
                <a
                  href={`mailto:${COMPANY.contactEmail}`}
                  className="text-primary-light hover:text-primary hover:underline text-sm mt-1 inline-block break-all"
                >
                  {COMPANY.contactEmail}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 py-5 border-b border-sub/20">
              <span className="w-10 h-10 rounded-lg bg-sub/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-primary text-sm">電話で問い合わせ</h3>
                <p className="text-sm text-text-sub mt-0.5">平日 9:00〜17:00（担当：採用窓口）</p>
                <a
                  href={`tel:${COMPANY.contactPhone.replace(/-/g, "")}`}
                  className="text-primary hover:underline text-lg font-bold mt-1 inline-block"
                >
                  {COMPANY.contactPhone}
                </a>
              </div>
            </div>

            {/* Pre-application consultation */}
            <div className="mt-6 rounded-xl p-6 bg-accent/10 border border-accent/30">
              <h3 className="text-base font-bold text-primary">
                「応募前相談」も歓迎です
              </h3>
              <p className="text-sm text-text-sub mt-2 leading-relaxed">
                「まだ転職するか決まっていない」「自分に合うかわからない」——そんな段階でも構いません。会社の雰囲気や仕事内容について、気軽にお話しできる場を用意しています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
