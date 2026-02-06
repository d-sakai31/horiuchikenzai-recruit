import { HERO } from "@/data/company";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center min-h-[90vh] md:min-h-screen bg-primary-dark text-white overflow-hidden"
      aria-label="ファーストビュー"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('${HERO.bgImage}')` }}
        role="img"
        aria-label="堀内建材の施工現場"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 to-primary-dark/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight whitespace-pre-line">
          {HERO.catchCopy}
        </h1>
        <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/85 whitespace-pre-line max-w-2xl mx-auto">
          {HERO.subCopy}
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-light text-primary-dark font-bold text-base sm:text-lg px-8 py-4 rounded-lg transition-colors shadow-lg"
          >
            {HERO.ctaLabel}
          </a>
        </div>
        <div className="mt-6 text-sm text-white/60">
          応募前の相談だけでもOKです
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
