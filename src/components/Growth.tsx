
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

        {/* Content */}
        <div className="mt-12">
          <div className="space-y-6">
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
