import { CULTURE } from "@/data/company";

export default function Culture() {
  return (
    <section id="culture" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="section-label">Culture</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {CULTURE.heading}
          </h2>
          <div className="accent-line" aria-hidden="true" />
          <p className="mt-4 text-text-sub text-sm md:text-base">
            {CULTURE.subHeading}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={CULTURE.image}
              alt="チームの雰囲気（後日差し替え）"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-accent/15 rounded-xl -z-10" aria-hidden="true" />
          </div>

          {/* Points */}
          <div className="space-y-8">
            {CULTURE.points.map((point, i) => (
              <div key={point.title}>
                <div className="flex items-baseline gap-3">
                  <span className="text-primary/30 font-extrabold text-2xl leading-none" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-text-main">
                    {point.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-text-sub leading-relaxed pl-11">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SNS links */}
        <div className="mt-16 text-center">
          <p className="text-sm text-text-sub mb-4">
            日常の様子は SNS でも発信しています
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/horiuchi_kenzai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-gray-200 rounded-full px-5 py-2.5 hover:border-primary hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@horiuchi-kenzai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-gray-200 rounded-full px-5 py-2.5 hover:border-primary hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
