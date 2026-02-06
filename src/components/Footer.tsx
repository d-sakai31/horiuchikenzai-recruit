import { COMPANY, FOOTER } from "@/data/company";
import { InstagramIcon, YouTubeIcon } from "./SnsIcons";

export default function Footer() {
  return (
    <footer className="bg-bg-pale border-t border-sub/30 py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Logo area */}
        <div className="flex items-center gap-2 mb-8">
          <span className="flex flex-col gap-0.5" aria-hidden="true">
            <span className="block w-5 h-0.5 bg-accent rounded-full" />
            <span className="block w-4 h-0.5 bg-accent rounded-full" />
            <span className="block w-3 h-0.5 bg-accent rounded-full" />
          </span>
          <span className="font-bold text-lg text-primary">{COMPANY.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <dl className="space-y-2">
            {FOOTER.companyInfo.map((item) => (
              <div key={item.label} className="flex gap-3 text-sm">
                <dt className="shrink-0 text-text-sub w-16">{item.label}</dt>
                <dd className="text-text-main">{item.value}</dd>
              </div>
            ))}
          </dl>

          {/* Links */}
          <div>
            <p className="font-bold text-sm text-text-sub uppercase tracking-wider mb-4">Links</p>
            <ul className="space-y-2">
              {FOOTER.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-light hover:text-primary hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SNS */}
          <div>
            <p className="font-bold text-sm text-text-sub uppercase tracking-wider mb-4">Follow Us</p>
            <div className="flex items-center gap-4">
              <a
                href={COMPANY.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-light hover:text-primary transition-colors"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href={COMPANY.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-primary-light hover:text-primary transition-colors"
              >
                <YouTubeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-sub/30 text-center text-xs text-text-sub">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
