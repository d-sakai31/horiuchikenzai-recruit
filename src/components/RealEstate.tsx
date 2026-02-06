import { REAL_ESTATE } from "@/data/company";

export default function RealEstate() {
  return (
    <section id="realestate" className="bg-bg-pale/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="section-label">Real Estate</span>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold text-primary">
            {REAL_ESTATE.heading}
          </h2>
          <div className="accent-line" aria-hidden="true" />
          <p className="mt-4 text-text-sub text-sm md:text-base">
            {REAL_ESTATE.subHeading}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* 写真 */}
          <div className="rounded-2xl overflow-hidden aspect-[4/3] border border-sub/30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/placeholder/realestate.svg"
              alt="SUMAITE不動産（後日差し替え）"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* テキスト */}
          <div>
            <p className="text-base leading-relaxed text-text-sub">
              {REAL_ESTATE.description}
            </p>

            <ul className="mt-8 space-y-4">
              {REAL_ESTATE.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center" aria-hidden="true">
                    <svg className="w-3 h-3 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-text-main">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
