import NextLink from "next/link";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/src/lib/utils";

type LinkProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  }
>;

export default function Link({
  href,
  external = false,
  className,
  children,
  ...props
}: LinkProps) {
  const sharedClassName = cn(
    "inline-flex items-center gap-2 text-accent transition-smooth hover:opacity-80 focus-ring",
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className={sharedClassName}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      href={href}
      className={sharedClassName}
      {...props}
    >
      {children}
    </NextLink>
  );
}
