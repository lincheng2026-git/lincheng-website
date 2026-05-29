import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/data";

const footerLinks = navLinks.filter(
  (l) => l.href !== "/"
).slice(0, 6);

export function Footer() {
  return (
    <footer className="bg-footer-bg px-5 py-12 text-warm-gray md:px-10 lg:px-20">
      <div className="mx-auto max-w-content">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-lg text-warm-white/90">
              {siteConfig.name} {siteConfig.nameEn}
            </p>
            <p className="mt-2 text-sm text-warm-gray">{siteConfig.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-warm-white/80"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/about#contact" className="transition hover:text-warm-white/80">
              联系方式
            </Link>
          </nav>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-sm transition hover:text-warm-white/80"
              aria-label="小红书"
            >
              小红书
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm transition hover:text-warm-white/80"
              aria-label="邮件"
            >
              邮件
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-warm-white/10 pt-6 text-center text-xs text-warm-gray/80">
          © 2024 {siteConfig.name} {siteConfig.nameEn}
        </div>
      </div>
    </footer>
  );
}
