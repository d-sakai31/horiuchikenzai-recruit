import { TRACKS } from "@/data/company";

interface TrackCardProps {
  heading: string;
  subHeading: string;
  points: readonly { title: string; description: string }[];
  note?: string;
  variant: "mid" | "new";
}

function TrackCard({ heading, subHeading, points, note, variant }: TrackCardProps) {
  const isMid = variant === "mid";

  return (
    <div className="bg-white rounded-2xl border border-sub/30 overflow-hidden hover:shadow-md transition-shadow">
      <div className={`${isMid ? "bg-accent" : "bg-primary"} ${isMid ? "text-primary-dark" : "text-white"} px-6 py-5`}>
        <h3 className="text-lg font-bold">{heading}</h3>
        <p className={`text-sm mt-1 ${isMid ? "text-primary-dark/60" : "text-sub-light"}`}>{subHeading}</p>
      </div>
      <div className="p-6 space-y-5">
        {points.map((point) => (
          <div key={point.title}>
            <h4 className="text-base font-bold text-primary flex items-start gap-2">
              <span className={`w-1.5 h-5 ${isMid ? "bg-accent" : "bg-sub"} rounded-full shrink-0 mt-0.5`} aria-hidden="true" />
              {point.title}
            </h4>
            <p className="mt-1 text-sm text-text-sub leading-relaxed pl-4">
              {point.description}
            </p>
          </div>
        ))}
        {note && (
          <p className="text-xs text-text-sub border-t border-sub/20 pt-4 mt-4">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Tracks() {
  return (
    <section id="tracks" className="bg-bg-pale/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="section-label">Careers</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            {TRACKS.heading}
          </h2>
          <div className="accent-line" aria-hidden="true" />
          <p className="mt-4 text-text-sub text-sm md:text-base">
            {TRACKS.subHeading}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TrackCard
            heading={TRACKS.midCareer.heading}
            subHeading={TRACKS.midCareer.subHeading}
            points={TRACKS.midCareer.points}
            note={TRACKS.midCareer.note}
            variant="mid"
          />
          <TrackCard
            heading={TRACKS.newGrad.heading}
            subHeading={TRACKS.newGrad.subHeading}
            points={TRACKS.newGrad.points}
            note={TRACKS.newGrad.note}
            variant="new"
          />
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-block bg-accent hover:bg-accent-light text-primary-dark font-bold text-lg px-10 py-4 rounded-full transition-colors"
          >
            {TRACKS.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
