"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aboutNav, primaryNav, moreNav, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const isHomeTop = pathname === "/" && !scrolled;
  const isImageTop = !scrolled && (pathname === "/" || pathname === "/about");
  const isCollectionActive = moreNav.some((link) => pathname.startsWith(link.href));

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "group relative text-sm tracking-wide transition-colors duration-200",
        isImageTop
          ? "text-warm-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] hover:text-warm-white"
          : isActive(href)
            ? "text-ink"
            : "text-warm-gray hover:text-ink"
      )}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-1 left-0 h-px transition-all duration-200",
          isImageTop ? "bg-warm-white/80" : "bg-tea",
          isActive(href) ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-out",
          scrolled
            ? "border-b border-divider/60 bg-cream/95 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-content items-center justify-between px-5 md:px-10 lg:px-20">
          <Link
            href="/"
            className={cn(
              "font-serif text-xl transition-transform duration-200 hover:-translate-y-0.5",
              isImageTop
                ? "text-warm-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
                : "text-ink"
            )}
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
            {primaryNav.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
            <div className="relative">
              <button
                type="button"
                className={cn(
                  "group relative text-sm transition",
                  isImageTop
                    ? "text-warm-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] hover:text-warm-white"
                    : isCollectionActive
                      ? "text-ink"
                      : "text-warm-gray hover:text-ink"
                )}
                onClick={() => setMoreOpen(!moreOpen)}
              >
                馆藏
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px transition-all duration-200",
                    isImageTop ? "bg-warm-white/80" : "bg-tea",
                    isCollectionActive ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 top-full mt-3 min-w-[180px] rounded-lg border border-divider/50 bg-cream p-3 shadow-card"
                  >
                    {moreNav.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block rounded px-3 py-2 text-sm text-warm-gray transition hover:bg-tag hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <NavLink href={aboutNav.href} label={aboutNav.label} />
          </nav>

          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="打开菜单"
          >
            <span className={cn("block h-px w-6", isImageTop ? "bg-warm-white" : "bg-ink")} />
            <span className={cn("block h-px w-6", isImageTop ? "bg-warm-white" : "bg-ink")} />
            <span className={cn("block h-px w-5", isImageTop ? "bg-warm-white" : "bg-ink")} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-ink/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(320px,85vw)] flex-col bg-[#3D3428] lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                type="button"
                className="self-end p-6 text-warm-white/70"
                onClick={() => setMobileOpen(false)}
                aria-label="关闭菜单"
              >
                ✕
              </button>
              <div className="flex flex-1 flex-col items-center justify-center gap-0">
                {primaryNav.concat(moreNav, aboutNav).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-full border-b border-warm-white/10 py-5 text-center font-serif text-lg tracking-[0.2em] text-warm-white transition hover:text-beige"
                    style={{ writingMode: "horizontal-tb" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
