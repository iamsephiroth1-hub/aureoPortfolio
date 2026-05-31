"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "@/components/ui/Link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Container>
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="font-display text-9xl font-bold tracking-tighter text-accent sm:text-[10rem]"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            404
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="heading-lg">Page not found</h1>
            <p className="body-md mx-auto max-w-sm text-text-muted">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center border border-accent bg-accent px-5 text-background transition-smooth hover:opacity-90"
            >
              ← Back to home
            </Link>
          </motion.div>

          <motion.div
            className="pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="mb-4 text-xs text-text-dim">Lost? Try these:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#hero"
                className="text-sm transition-smooth hover:text-accent"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-sm transition-smooth hover:text-accent"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm transition-smooth hover:text-accent"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-sm transition-smooth hover:text-accent"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
