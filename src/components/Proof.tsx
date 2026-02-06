import { PROOF_CARDS } from "@/data/company";

export default function Proof() {
  return (
    <section id="proof" className="bg-bg-pale py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <span className="section-label">Evidence</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            数字で見る堀内建材
          </h2>
          <div className="accent-line" aria-hidden="true" />
          <p className="mt-4 text-text-sub text-sm md:text-base">
            地域密着で積み重ねてきた、施工実績と信頼。
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROOF_CARDS.map((card) => (
            <div
              key={card.label}
              className="bg-white border border-sub/30 rounded-2xl p-6 text-center hover:shadow-md hover:border-sub transition-all"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-primary leading-none">
                {card.number}
              </div>
              <div className="mx-auto mt-2 w-8 h-0.5 bg-accent rounded-full" aria-hidden="true" />
              <div className="mt-2 text-sm text-text-sub font-medium">
                {card.unit}
              </div>
              <div className="mt-3 text-base font-bold text-primary">
                {card.label}
              </div>
              {card.note && (
                <p className="mt-2 text-xs text-text-sub leading-relaxed">
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
