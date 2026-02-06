import { GROWTH } from "@/data/company";

export default function Growth() {
  return (
    <section id="growth" className="bg-bg-section py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="section-label">Growth</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {GROWTH.heading}
          </h2>
          <div className="accent-line" aria-hidden="true" />
          <p className="mt-4 text-text-sub text-sm md:text-base max-w-lg mx-auto">
            {GROWTH.subHeading}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* New building image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100 order-2 lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={GROWTH.image}
              alt="新社屋の外観（後日差し替え）"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute -top-2 -left-2 w-14 h-14 border-2 border-accent/30 rounded-xl -z-10" aria-hidden="true" />
          </div>

          {/* Points */}
          <div className="space-y-5 order-1 lg:order-2">
            {GROWTH.points.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-2xl p-5 border border-gray-200"
              >
                <h3 className="text-base font-bold text-primary leading-snug flex items-start gap-2">
                  <span className="w-1.5 h-5 bg-accent rounded-full shrink-0 mt-0.5" aria-hidden="true" />
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-text-sub leading-relaxed pl-4">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
