import { TRACKS } from "@/data/company";

interface TrackCardProps {
  heading: string;
  subHeading: string;
  points: readonly { title: string; description: string }[];
  note?: string;
  variant: "mid" | "new";
}

function TrackCard({ heading, subHeading, points, note, variant }: TrackCardProps) {
  const borderColor = variant === "mid" ? "border-accent" : "border-primary-light";
  const badgeColor = variant === "mid" ? "bg-accent" : "bg-primary-light";

  return (
    <div className={`bg-white rounded-xl border-2 ${borderColor} overflow-hidden`}>
      <div className={`${badgeColor} ${variant === "mid" ? "text-primary-dark" : "text-white"} px-6 py-4`}>
        <h3 className="text-xl font-bold">{heading}</h3>
        <p className={`text-sm mt-1 ${variant === "mid" ? "text-primary-dark/70" : "text-white/80"}`}>{subHeading}</p>
      </div>
      <div className="p-6 space-y-5">
        {points.map((point) => (
          <div key={point.title}>
            <h4 className="text-base font-bold text-text-main">
              {point.title}
            </h4>
            <p className="mt-1 text-sm text-text-sub leading-relaxed">
              {point.description}
            </p>
          </div>
        ))}
        {note && (
          <p className="text-xs text-text-sub border-t border-gray-200 pt-4 mt-4">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Tracks() {
  return (
    <section id="tracks" className="bg-bg-warm py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
          あなたに合った入り口
        </h2>
        <p className="mt-3 text-center text-text-sub text-sm md:text-base">
          中途も新卒も、それぞれの強みを活かせるポジションがあります。
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            className="inline-block bg-accent hover:bg-accent-light text-primary-dark font-bold px-8 py-3 rounded-lg transition-colors"
          >
            自分に合うポジションを相談する
          </a>
        </div>
      </div>
    </section>
  );
}
