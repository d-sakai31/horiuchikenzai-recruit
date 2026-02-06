
import { TRACKS } from "@/data/company";

interface TrackCardProps {
  heading: string;
  subHeading: string;
  points: readonly { title: string; description: string }[];
  note?: string;
  accentColor: string;
}

function TrackCard({ heading, subHeading, points, note, accentColor }: TrackCardProps) {
  return (
    <div className="bg-white rounded-xl border border-sub/30 overflow-hidden shadow-sm">
      <div className={`${accentColor} px-8 py-5`}>
        <h3 className="text-xl font-bold text-white">{heading}</h3>
        <p className="text-sm text-white/70 mt-1">{subHeading}</p>
      </div>
      <div className="p-8 space-y-6">
        {points.map((point, i) => (
          <div key={point.title} className="flex items-start gap-4">
            <span className="text-2xl font-black text-sub/30 leading-none shrink-0 w-8" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h4 className="font-bold text-primary">{point.title}</h4>
              <p className="mt-1 text-sm text-text-sub leading-relaxed">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {note && (
        <p className="text-xs text-text-sub border-t border-sub/20 px-8 py-4">
          {note}
        </p>
      )}
    </div>
  );
}

export default function Tracks() {

  return (
    <section
     
      id="tracks"
      className="bg-white py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-display text-primary">{TRACKS.heading}</h2>
          <p className="mt-4 text-text-sub text-base max-w-md mx-auto">
            {TRACKS.subHeading}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="">
            <TrackCard
              heading={TRACKS.midCareer.heading}
              subHeading={TRACKS.midCareer.subHeading}
              points={TRACKS.midCareer.points}
              note={TRACKS.midCareer.note}
              accentColor="bg-accent-dark"
            />
          </div>
          <div className="">
            <TrackCard
              heading={TRACKS.newGrad.heading}
              subHeading={TRACKS.newGrad.subHeading}
              points={TRACKS.newGrad.points}
              note={TRACKS.newGrad.note}
              accentColor="bg-primary"
            />
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary-dark font-bold text-lg px-10 py-4 rounded-full transition-all group hover:scale-[1.02]"
          >
            {TRACKS.ctaLabel}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
