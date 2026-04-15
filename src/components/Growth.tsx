
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

        {/* 新社屋 写真ギャラリー */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:h-[28rem]">
          <figure className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-primary/5 h-64 md:h-auto">
            <img
              src={GROWTH.buildingPhotos[0].src}
              alt={GROWTH.buildingPhotos[0].alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <figcaption className="absolute bottom-3 left-3 bg-white/85 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-primary">
              {GROWTH.buildingPhotos[0].caption}
            </figcaption>
          </figure>
          {GROWTH.buildingPhotos.slice(1).map((photo) => (
            <figure
              key={photo.src}
              className="relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-primary/5 h-44 md:h-auto"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-2 left-2 bg-white/85 backdrop-blur px-2.5 py-0.5 rounded-md text-xs font-bold text-primary">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
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
