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
    // ダミー送信 — 本番では Formspree 等に差し替え
    setFormState("sent");
  };

  return (
    <section id="contact" className="bg-bg-pale py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <span className="section-label">Contact</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary whitespace-pre-line">
            {CTA.heading}
          </h2>
          <div className="accent-line" aria-hidden="true" />
          <p className="mt-4 text-text-sub text-sm md:text-base whitespace-pre-line max-w-md mx-auto">
            {CTA.subHeading}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-sub/30">
            <h3 className="text-lg font-bold text-primary mb-1">
              Webフォームで問い合わせ
            </h3>
            <p className="text-xs text-text-sub mb-6">
              24時間受付。2営業日以内にご連絡します。
            </p>

            {formState === "sent" ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-sub text-primary flex items-center justify-center mx-auto mb-3 text-xl font-bold">&#10003;</div>
                <p className="font-bold text-primary">送信しました</p>
                <p className="text-sm text-text-sub mt-2">
                  ※これはデモ送信です。本番環境ではフォームサービスに接続してください。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-primary mb-1">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white border border-sub/40 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sub/40 focus:border-sub"
                    placeholder="堀内 太郎"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-primary mb-1">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
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

          {/* Other contact methods */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-sub/30">
              <h3 className="text-base font-bold text-primary">
                メールで直接問い合わせ
              </h3>
              <p className="text-xs text-text-sub mt-1">
                直接メールを送りたい方はこちら。
              </p>
              <a
                href={`mailto:${COMPANY.contactEmail}`}
                className="mt-3 inline-block text-primary-light hover:text-primary hover:underline text-sm font-medium break-all"
              >
                {COMPANY.contactEmail}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-sub/30">
              <h3 className="text-base font-bold text-primary">
                電話で問い合わせ
              </h3>
              <p className="text-xs text-text-sub mt-1">
                平日 9:00〜17:00（担当：採用窓口）
              </p>
              <a
                href={`tel:${COMPANY.contactPhone.replace(/-/g, "")}`}
                className="mt-3 inline-block text-primary hover:underline text-lg font-bold"
              >
                {COMPANY.contactPhone}
              </a>
            </div>

            <div className="rounded-2xl p-6 bg-white border-2 border-accent/40">
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
