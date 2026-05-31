import type { PropsWithChildren } from "react";
import { cn } from "@/src/lib/utils";

interface GradientTextProps extends PropsWithChildren {
  className?: string;
}

export default function GradientText({
  className,
  children,
}: GradientTextProps) {
  return (
    <span className={cn("bg-gradient-to-r from-accent via-white to-accent-dim bg-clip-text text-transparent", className)}>
      {children}
    </span>
  );
}
