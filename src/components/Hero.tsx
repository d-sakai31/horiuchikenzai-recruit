
import { HERO } from "@/data/company";

export default function Hero() {

  // キャッチコピーを行ごとに分割し、「若手が動かす」にマーカーハイライトを付与
  const lines = HERO.catchCopy.split("\n");

  return (
    <section
     
      className="relative overflow-hidden"
      aria-label="ファーストビュー"
    >
      <div className="relative w-full h-screen min-h-[600px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO.bgImage}
          alt="堀内建材の施工現場"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 via-40% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="w-full pb-20 md:pb-28 px-4">
            <div className="mx-auto max-w-6xl">
              <h1 className="text-primary max-w-3xl">
                {/* 1行目: カテゴリラベル */}
                <span className="block text-2xl md:text-4xl font-bold tracking-[0.15em] text-primary/70 mb-3">
                  {lines[0]}
                </span>
                {/* 2行目以降: メインコピー */}
                {lines.slice(1).map((line, i) => (
                  <span key={i} className="block text-display">
                    {line.includes("若手が動かす") ? (
                      <span className="relative inline-block">
                        {line}
                        <span
                          className="absolute bottom-1 left-0 w-full h-3 bg-accent/40 -z-10 rounded-sm"
                          aria-hidden="true"
                        />
                      </span>
                    ) : (
                      line
                    )}
                  </span>
                ))}
              </h1>
              <p className="mt-5 text-base md:text-lg leading-relaxed text-text-sub whitespace-pre-line max-w-2xl">
                {HERO.subCopy}
              </p>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold text-lg md:text-xl px-10 py-4 rounded-full transition-all hover:scale-[1.03] shadow-md"
                >
                  {HERO.ctaLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <span className="text-sm text-text-sub">
                  {HERO.ctaSubText}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <span className="text-[10px] tracking-[0.3em] text-text-sub/60 uppercase font-medium">Scroll</span>
          <span className="w-px h-10 bg-text-sub/20 relative overflow-hidden">
            <span className="absolute inset-x-0 top-0 h-1/2 bg-accent animate-pulse" />
          </span>
        </div>
      </div>
    </section>
  );
}
