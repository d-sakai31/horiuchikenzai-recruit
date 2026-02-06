import { WORK } from "@/data/company";

export default function Work() {
  return (
    <section id="work" className="bg-bg-section py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
          {WORK.heading}
        </h2>
        <p className="mt-3 text-center text-text-sub text-sm md:text-base max-w-xl mx-auto">
          {WORK.subHeading}
        </p>

        {/* Project types */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORK.projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-lg font-bold text-primary">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-text-sub leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Daily schedule */}
        <div className="mt-16 bg-white rounded-xl p-6 md:p-8 border border-gray-200 max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-primary text-center">
            {WORK.dailySchedule.title}
          </h3>
          <p className="mt-1 text-xs text-text-sub text-center">
            {WORK.dailySchedule.note}
          </p>
          <ol className="mt-6 space-y-4" aria-label="1日のスケジュール例">
            {WORK.dailySchedule.items.map((item) => (
              <li key={item.time} className="flex gap-4 items-start">
                <span className="shrink-0 text-sm font-bold text-accent w-14 text-right tabular-nums">
                  {item.time}
                </span>
                <span className="text-sm text-text-main leading-relaxed">
                  {item.task}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Work scene placeholder */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-xl rounded-xl overflow-hidden aspect-video bg-gray-200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/placeholder/work.svg"
              alt="施工現場の様子（後日差し替え）"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
