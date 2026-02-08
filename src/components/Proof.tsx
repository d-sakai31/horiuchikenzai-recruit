
import { PROOF, PROOF_CARDS } from "@/data/company";

const cardStyles = [
  "bg-accent text-primary-dark",
  "bg-white shadow-sm",
  "bg-primary text-white",
] as const;

const numberColors = ["", "", "text-accent"];
const unitColors = ["text-primary-dark/60", "text-text-sub", "text-white/60"];
const labelColors = ["text-primary-dark", "text-primary", "text-white"];
const noteColors = ["text-primary-dark/60", "text-text-sub", "text-white/60"];

export default function Proof() {

  return (
    <section
     
      id="proof"
      className="bg-white pt-16 md:pt-24 lg:pt-36 pb-12 md:pb-16 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header: left-aligned with bg watermark */}
        <div className="relative">
          <span className="bg-text top-0 left-0" aria-hidden="true">Evidence</span>
          <div className="relative z-10">
            <h2 className="text-display-sm text-primary">
              {PROOF.heading}
            </h2>
            <p className="mt-3 text-text-sub text-base max-w-lg">
              {PROOF.subHeading}
            </p>
          </div>
        </div>

        {/* Full-bleed photo */}
        <div className="mt-12 -mx-4 md:-mx-8">
          <div className="aspect-[12/5] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PROOF.image}
              alt="施工実績（後日差し替え）"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Cards: 3-column */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {PROOF_CARDS.map((card, i) => (
            <div
              key={card.label}
              className={`rounded-2xl p-6 text-center ${cardStyles[i]}`}
            >
              <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none ${numberColors[i]}`}>
                {card.number}
              </div>
              <div className="mx-auto mt-2 w-8 h-0.5 bg-accent rounded-full" aria-hidden="true" />
              <div className={`mt-2 text-sm font-medium ${unitColors[i]}`}>
                {card.unit}
              </div>
              <div className={`mt-3 text-base font-bold whitespace-pre-line ${labelColors[i]}`}>
                {card.label}
              </div>
              {card.note && (
                <p className={`mt-2 text-xs leading-relaxed ${noteColors[i]}`}>
                  {card.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
