import Link from "next/link";
import { Linkedin, Facebook, Github, Music2 } from "lucide-react";
import { footerLinks, socialLinks, site } from "@/lib/data";

const ICONS: Record<string, any> = {
  linkedin: Linkedin,
  facebook: Facebook,
  github: Github,
  tiktok: Music2,
};

export function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-beige-100/10">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-ink dark:text-beige-100">
            <span className="text-gold-500">A.</span> {site.shortName}
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/60 dark:text-beige-100/60">
            {site.title}. Bridging Islamic scholarship, education, research and technology from Lagos, Nigeria.
          </p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {socialLinks.map((s) => {
              const Icon = ICONS[s.icon];
              return (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="rounded-full border border-ink/10 p-2 text-ink/60 hover:border-gold-500 hover:text-gold-600 dark:border-beige-100/10 dark:text-beige-100/60"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">Quick Links</p>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-ink/70 hover:text-emerald-800 dark:text-beige-100/70 dark:hover:text-gold-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">Stay Updated</p>
          <p className="mt-4 text-sm text-ink/70 dark:text-beige-100/70">
            Notes on education, research and Islamic scholarship, occasionally.
          </p>
          <form className="mt-4 flex gap-2" action="#" method="post">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full min-w-0 rounded-full border border-ink/15 bg-transparent px-4 py-2 text-sm outline-none dark:border-beige-100/15"
            />
            <button className="shrink-0 rounded-full bg-emerald-900 px-4 py-2 text-sm text-beige-100 hover:bg-emerald-800">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-ink/10 dark:border-beige-100/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-ink/50 dark:text-beige-100/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
