import { COMPANY, FOOTER } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Logo area */}
        <div className="flex items-center gap-2 mb-8">
          <span className="flex flex-col gap-0.5" aria-hidden="true">
            <span className="block w-5 h-0.5 bg-accent rounded-full" />
            <span className="block w-4 h-0.5 bg-accent rounded-full" />
            <span className="block w-3 h-0.5 bg-accent rounded-full" />
          </span>
          <span className="font-bold text-lg">{COMPANY.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company info */}
          <dl className="space-y-2">
            {FOOTER.companyInfo.map((item) => (
              <div key={item.label} className="flex gap-3 text-sm">
                <dt className="shrink-0 text-sub/70 w-16">{item.label}</dt>
                <dd className="text-white/80">{item.value}</dd>
              </div>
            ))}
          </dl>

          {/* Links */}
          <div>
            <p className="font-bold text-sm text-sub/70 uppercase tracking-wider mb-4">Links</p>
            <ul className="space-y-2">
              {FOOTER.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sub-light hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-sub/15 text-center text-xs text-sub/50">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
