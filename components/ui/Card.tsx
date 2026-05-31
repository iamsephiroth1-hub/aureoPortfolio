import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/src/lib/utils";

interface CardProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  hover?: boolean;
}

export default function Card({ className, hover = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-none border border-border bg-surface p-6 transition-smooth",
        hover && "hover:border-accent hover:bg-surface/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
