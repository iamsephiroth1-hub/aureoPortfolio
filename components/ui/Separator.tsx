import { cn } from "@/src/lib/utils";

interface SeparatorProps {
  className?: string;
}

export default function Separator({ className }: SeparatorProps) {
  return <div className={cn("h-px w-full bg-border/70", className)} aria-hidden="true" />;
}
