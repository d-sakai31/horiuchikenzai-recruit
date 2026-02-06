import { HERO } from "@/data/company";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="ファーストビュー"
    >
      {/* フルスクリーンに近いヒーロー画像 */}
      <div className="relative w-full h-screen min-h-[600px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO.bgImage}
          alt="堀内建材の施工現場"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* 下部グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        {/* 左側の読みやすさ用オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />

        {/* テキスト — 画像の上に直接配置 */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full pb-16 md:pb-24 px-4">
            <div className="mx-auto max-w-6xl">
              <span className="section-label">Recruit</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-tight tracking-tight text-primary whitespace-pre-line max-w-2xl">
                {HERO.catchCopy}
              </h1>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-text-sub whitespace-pre-line max-w-lg">
                {HERO.subCopy}
              </p>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  href="#contact"
                  className="inline-block bg-accent hover:bg-accent-light text-primary-dark font-bold text-lg md:text-xl px-10 py-4 rounded-full transition-colors shadow-md"
                >
                  {HERO.ctaLabel}
                </a>
                <span className="text-sm text-text-sub">
                  {HERO.ctaSubText}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg className="w-6 h-6 text-text-sub/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
