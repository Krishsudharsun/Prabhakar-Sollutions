"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";
import { mainNav, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy-900/[0.06] bg-white dark:border-white/[0.06] dark:bg-navy-900"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container flex h-18 items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-ink dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-sm text-white dark:bg-white dark:text-navy-900">
            S
          </span>
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-ink-gray transition-colors hover:text-ink dark:text-white/60 dark:hover:text-white",
                pathname === item.href && "text-ink dark:text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {mounted && (
            <button
              aria-label="Toggle dark mode"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-gray transition-colors hover:bg-navy-900/5 dark:text-white/70 dark:hover:bg-white/10"
            >
              {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          <Button asChild size="sm">
            <Link href="/apply">
              Book a discovery call <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center text-ink lg:hidden dark:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy-900/[0.06] bg-white lg:hidden dark:border-white/[0.06] dark:bg-navy-900"
          >
            <div className="container flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink hover:bg-navy-900/5 dark:text-white dark:hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link href="/apply">Book a discovery call</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
