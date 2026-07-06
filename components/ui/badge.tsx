import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: "default" | "emerald" | "outline" }) {
  const variants = {
    default: "bg-royal-50 text-royal-700",
    emerald: "bg-emerald-50 text-emerald-600",
    outline: "border border-navy-900/15 text-ink-gray dark:border-white/15 dark:text-white/70",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
