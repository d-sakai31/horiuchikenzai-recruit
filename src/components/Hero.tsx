import { HERO } from "@/data/company";

export default function Hero() {
  return (
    <section
      className="relative bg-white overflow-hidden pt-14"
      aria-label="ファーストビュー"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <span className="section-label">Recruit</span>
          <h1 className="text-3xl sm:text-4xl md:text-[2.7rem] font-bold leading-tight tracking-tight text-primary whitespace-pre-line">
            {HERO.catchCopy}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-sub whitespace-pre-line max-w-lg">
            {HERO.subCopy}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="inline-block bg-accent hover:bg-accent-light text-primary-dark font-bold text-base px-8 py-3.5 rounded-full transition-colors shadow-sm"
            >
              {HERO.ctaLabel}
            </a>
            <span className="text-sm text-text-sub">
              応募前の相談だけでもOK
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-bg-pale border border-sub/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO.bgImage}
              alt="堀内建材の施工現場"
              className="w-full h-full object-cover"
            />
          </div>
          {/* SUBカラーの装飾 */}
          <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-sub/25 rounded-xl -z-10" aria-hidden="true" />
          <div className="absolute -top-3 -right-3 w-16 h-16 border-2 border-sub/50 rounded-xl -z-10" aria-hidden="true" />
        </div>
      </div>

      {/* SUBカラーの区切りライン */}
      <div className="h-px bg-gradient-to-r from-transparent via-sub to-transparent" aria-hidden="true" />
    </section>
  );
}
