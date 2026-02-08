
import { WORK } from "@/data/company";

export default function Work() {

  return (
    <section
     
      id="work"
      className="bg-bg-pale/40 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Header: split layout */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-12">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent-dark">Work</span>
            <h2 className="mt-2 text-display-sm text-primary">
              {WORK.heading}
            </h2>
          </div>
          <p className="text-text-sub text-sm md:text-base max-w-xs md:max-w-sm md:text-right md:pb-1 whitespace-pre-line">
            {WORK.subHeading}
          </p>
        </div>

        {/* Project cards: unified 2-column grid */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {WORK.projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl p-6 border border-sub/30 hover:border-sub hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                <span className="w-1.5 h-5 bg-accent rounded-full shrink-0" aria-hidden="true" />
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-text-sub leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Daily schedule + Work scene photo: 2-column */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-primary">
              {WORK.dailySchedule.title}
            </h3>
            <p className="mt-1 text-sm text-text-sub">
              {WORK.dailySchedule.note}
            </p>
            <div className="mt-6 md:mt-8 relative pl-6 md:pl-8 border-l-2 border-sub/30 space-y-6 md:space-y-8">
              {WORK.dailySchedule.items.map((item) => (
                <div key={item.time} className="relative">
                  <span className="absolute -left-[calc(0.5rem+1px)] top-0.5 w-3 h-3 rounded-full bg-accent border-2 border-white" aria-hidden="true" />
                  <span className="text-base font-bold text-primary tabular-nums">{item.time}</span>
                  <p className="text-base text-text-sub mt-0.5">{item.task}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work scene photo */}
          <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-bg-pale border border-sub/30 lg:sticky lg:top-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/work.jpg"
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
