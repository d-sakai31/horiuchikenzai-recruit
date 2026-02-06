import { GROWTH } from "@/data/company";

export default function Growth() {
  return (
    <section id="growth" className="bg-bg-section py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
          {GROWTH.heading}
        </h2>
        <p className="mt-3 text-center text-text-sub text-sm md:text-base max-w-lg mx-auto">
          {GROWTH.subHeading}
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* New building image */}
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-200 order-2 lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={GROWTH.image}
              alt="新社屋の外観（後日差し替え）"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Points */}
          <div className="space-y-6 order-1 lg:order-2">
            {GROWTH.points.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-xl p-5 border border-gray-200"
              >
                <h3 className="text-base font-bold text-primary leading-snug">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-text-sub leading-relaxed">
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
