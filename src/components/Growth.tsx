
import { GROWTH } from "@/data/company";

export default function Growth() {

  return (
    <section
     
      id="growth"
      className="bg-bg-pale/30 py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header: horizontal rule + label */}
        <div className="">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-sub-dark">Growth</span>
            <span className="flex-1 h-px bg-sub/30" aria-hidden="true" />
          </div>
          <h2 className="mt-4 text-display-sm text-primary">
            {GROWTH.heading}
          </h2>
        </div>

        {/* Content: single column with image background */}
        <div className="relative mt-12">
          {/* Background image (desktop only) */}
          <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block" aria-hidden="true">
            <div className="w-full h-full opacity-[0.08] rounded-3xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GROWTH.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile: inline image */}
          <div className="lg:hidden mb-8 rounded-2xl overflow-hidden aspect-[4/3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={GROWTH.image}
              alt="新社屋の外観（後日差し替え）"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Points: alternating indent */}
          <div className="relative z-10 space-y-6">
            {GROWTH.points.map((point, i) => (
              <div
                key={point.title}
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent-dark font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-primary">{point.title}</h3>
                    <p className="mt-2 text-sm text-text-sub leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
