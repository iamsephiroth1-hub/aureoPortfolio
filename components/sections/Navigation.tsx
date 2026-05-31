"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Link from "@/components/ui/Link";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/src/data/metadata";
import { cn } from "@/src/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a
            href="#hero"
            className="font-display text-sm font-semibold tracking-[0.24em] text-text-primary uppercase"
          >
            {siteConfig.initials}
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-smooth hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <Link
              href={`mailto:${siteConfig.email}`}
              className="text-sm"
            >
              Email
            </Link>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            {isOpen ? "Close" : "Menu"}
          </Button>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "grid gap-3 overflow-hidden border-t border-border/60 pb-4 md:hidden",
            isOpen ? "pt-4" : "max-h-0 border-transparent pb-0 pt-0"
          )}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-smooth hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Link
            href={`mailto:${siteConfig.email}`}
            className="text-sm"
          >
            Email
          </Link>
        </div>
      </Container>
    </header>
  );
}
