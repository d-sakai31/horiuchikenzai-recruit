import { CULTURE, COMPANY } from "@/data/company";
import { InstagramIcon, YouTubeIcon } from "./SnsIcons";

export default function Culture() {
  return (
    <section id="culture" className="bg-bg-pale/60 py-20 md:py-28">
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
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-sub/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={CULTURE.image}
                alt="チームの雰囲気（後日差し替え）"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-sub/25 rounded-xl -z-10" aria-hidden="true" />
          </div>

          {/* Points */}
          <div className="space-y-8">
            {CULTURE.points.map((point, i) => (
              <div key={point.title}>
                <div className="flex items-baseline gap-3">
                  <span className="text-sub-dark font-extrabold text-2xl leading-none" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-primary">
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
            {CULTURE.snsText}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={COMPANY.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-sub/30 rounded-full px-5 py-2.5 text-text-sub hover:border-primary hover:text-primary transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
              Instagram
            </a>
            <a
              href={COMPANY.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm border border-sub/30 rounded-full px-5 py-2.5 text-text-sub hover:border-primary hover:text-primary transition-colors"
            >
              <YouTubeIcon className="w-5 h-5" />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
