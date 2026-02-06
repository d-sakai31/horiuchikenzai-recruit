import { GROWTH } from "@/data/company";

export default function QuoteBand() {
  return (
    <div className="py-12 md:py-16">
      <p className="text-center text-primary text-2xl md:text-4xl font-bold max-w-3xl mx-auto px-4 leading-relaxed">
        &ldquo;{GROWTH.subHeading}&rdquo;
      </p>
    </div>
  );
}
