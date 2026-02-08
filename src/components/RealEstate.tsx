
import { REAL_ESTATE } from "@/data/company";

export default function RealEstate() {

  return (
    <section
     
      id="realestate"
      className="bg-bg-pale/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 relative overflow-hidden">
        {/* Background watermark */}
        <span className="bg-text top-0 right-0 text-right" aria-hidden="true">SUMAITE</span>

        {/* Header */}
        <div className="relative z-10">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-dark">Real Estate</span>
          <h2 className="mt-2 text-display-sm text-primary">
            {REAL_ESTATE.heading}
          </h2>
          <p className="mt-2 text-text-sub text-sm md:text-base">
            {REAL_ESTATE.subHeading}
          </p>
        </div>

        {/* Panoramic photo */}
        <div className="relative z-10 mt-10 rounded-2xl overflow-hidden aspect-video md:aspect-[21/9]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/realestate.jpg"
            alt="SUMAITE不動産（後日差し替え）"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Description + Points: 2-column below */}
        <div className="relative z-10 mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6">
          <p className="text-sm md:text-base leading-relaxed text-text-sub">
            {REAL_ESTATE.description}
          </p>
          <ul className="space-y-4">
            {REAL_ESTATE.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-text-main">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
