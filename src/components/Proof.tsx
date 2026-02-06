import { PROOF_CARDS } from "@/data/company";

export default function Proof() {
  return (
    <section id="proof" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
          数字で見る堀内建材
        </h2>
        <p className="mt-3 text-center text-text-sub text-sm md:text-base">
          地域密着で積み重ねてきた、施工実績と信頼。
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROOF_CARDS.map((card) => (
            <div
              key={card.label}
              className="bg-bg-warm border border-gray-200 rounded-xl p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-accent leading-none">
                {card.number}
              </div>
              <div className="mt-1 text-sm text-text-sub font-medium">
                {card.unit}
              </div>
              <div className="mt-3 text-base font-bold text-text-main">
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
