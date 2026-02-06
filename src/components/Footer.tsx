import { COMPANY, FOOTER } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company info */}
          <div>
            <p className="font-bold text-lg">{COMPANY.name}</p>
            <dl className="mt-4 space-y-2">
              {FOOTER.companyInfo.map((item) => (
                <div key={item.label} className="flex gap-2 text-sm">
                  <dt className="shrink-0 text-white/60 w-20">{item.label}</dt>
                  <dd className="text-white/90">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Links */}
          <div>
            <p className="font-bold text-base">リンク</p>
            <ul className="mt-4 space-y-2">
              {FOOTER.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
