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
    <section id="contact" className="bg-bg-section py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary whitespace-pre-line">
          {CTA.heading}
        </h2>
        <p className="mt-3 text-center text-text-sub text-sm md:text-base whitespace-pre-line max-w-md mx-auto">
          {CTA.subHeading}
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-lg font-bold text-text-main mb-1">
              Webフォームで問い合わせ
            </h3>
            <p className="text-xs text-text-sub mb-6">
              24時間受付。2営業日以内にご連絡します。
            </p>

            {formState === "sent" ? (
              <div className="text-center py-8">
                <div className="text-accent text-4xl mb-3" aria-hidden="true">&#10003;</div>
                <p className="font-bold text-text-main">送信しました</p>
                <p className="text-sm text-text-sub mt-2">
                  ※これはデモ送信です。本番環境ではフォームサービスに接続してください。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-text-main mb-1">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    placeholder="堀内 太郎"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-text-main mb-1">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-text-main mb-1">
                    メッセージ
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-y"
                    placeholder="気になっていること、聞きたいことなど自由にご記入ください。「まだ応募は決めていないが話を聞きたい」でもOKです。"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-light text-white font-bold py-3 rounded-lg transition-colors"
                >
                  送信する
                </button>
              </form>
            )}
          </div>

          {/* Other contact methods */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-base font-bold text-text-main">
                メールで直接問い合わせ
              </h3>
              <p className="text-xs text-text-sub mt-1">
                直接メールを送りたい方はこちら。
              </p>
              <a
                href={`mailto:${COMPANY.contactEmail}`}
                className="mt-3 inline-block text-accent hover:underline text-sm font-medium break-all"
              >
                {COMPANY.contactEmail}
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-base font-bold text-text-main">
                電話で問い合わせ
              </h3>
              <p className="text-xs text-text-sub mt-1">
                平日 9:00〜17:00（担当：採用窓口）
              </p>
              <a
                href={`tel:${COMPANY.contactPhone.replace(/-/g, "")}`}
                className="mt-3 inline-block text-accent hover:underline text-lg font-bold"
              >
                {COMPANY.contactPhone}
              </a>
            </div>

            <div className="bg-primary-dark/5 rounded-xl p-6 border border-primary/10">
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
