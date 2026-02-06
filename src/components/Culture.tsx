
import { CULTURE, COMPANY } from "@/data/company";
import { InstagramIcon, YouTubeIcon } from "./SnsIcons";

export default function Culture() {

  return (
    <section
     
      id="culture"
      className="bg-white pt-0 pb-20 md:pb-32"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Photo with overlay header */}
        <div className="relative -mx-4 md:mx-0 md:rounded-3xl overflow-hidden aspect-[16/7]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CULTURE.image}
            alt="チームの雰囲気（後日差し替え）"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Culture</span>
            <h2 className="mt-2 text-2xl md:text-4xl font-bold text-white">
              {CULTURE.heading}
            </h2>
            <p className="mt-2 text-sm text-white/70">
              {CULTURE.subHeading}
            </p>
          </div>
        </div>

        {/* Points: 3-column open layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {CULTURE.points.map((point, i) => (
            <div key={point.title} className="group">
              <span className="text-6xl font-black text-sub/20 leading-none" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-bold text-primary group-hover:text-primary-light transition-colors">
                {point.title}
              </h3>
              <p className="mt-3 text-sm text-text-sub leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* SNS: compact inline */}
        <div className="mt-10 flex items-center gap-3">
          <span className="text-xs text-text-sub">{CULTURE.snsText}</span>
          <a
            href={COMPANY.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full bg-primary/5 hover:bg-primary/10 flex items-center justify-center text-primary-light hover:text-primary transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={COMPANY.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-9 h-9 rounded-full bg-primary/5 hover:bg-primary/10 flex items-center justify-center text-primary-light hover:text-primary transition-all"
          >
            <YouTubeIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
