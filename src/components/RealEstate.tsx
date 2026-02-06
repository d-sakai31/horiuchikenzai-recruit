import { REAL_ESTATE } from "@/data/company";

export default function RealEstate() {
  return (
    <section id="realestate" className="bg-primary text-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          {REAL_ESTATE.heading}
        </h2>
        <p className="mt-2 text-center text-white/70 text-sm md:text-base">
          {REAL_ESTATE.subHeading}
        </p>
        <p className="mt-8 text-base leading-relaxed text-white/90 text-center max-w-2xl mx-auto">
          {REAL_ESTATE.description}
        </p>

        <ul className="mt-10 space-y-4 max-w-xl mx-auto">
          {REAL_ESTATE.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="shrink-0 mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center" aria-hidden="true">
                <svg className="w-3 h-3 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-sm leading-relaxed text-white/90">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
