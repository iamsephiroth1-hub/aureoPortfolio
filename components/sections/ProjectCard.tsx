"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Link from "@/components/ui/Link";
import type { Project } from "@/src/types";

type Direction = -1 | 1;

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [isHovering, setIsHovering] = useState(false);
  const [imgError, setImgError] = useState(false);
  const autoAdvanceRef = useRef<NodeJS.Timeout>();
  const hoverResetRef = useRef<NodeJS.Timeout>();

  const images = project.images || [];
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!isHovering && hasMultipleImages && !imgError) {
      autoAdvanceRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setDirection(1);
      }, 3000);
    }

    return () => {
      if (autoAdvanceRef.current) {
        clearInterval(autoAdvanceRef.current);
      }
    };
  }, [isHovering, hasMultipleImages, images.length, imgError]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (autoAdvanceRef.current) {
      clearInterval(autoAdvanceRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (hoverResetRef.current) {
      clearTimeout(hoverResetRef.current);
    }
    hoverResetRef.current = setTimeout(() => {
      setCurrentIndex(0);
    }, 5000);
  };

  return (
    <Card hover className="flex h-full flex-col">
      {/* Image Carousel Section */}
      <div
        className="group relative mb-4 aspect-video overflow-hidden rounded-t-xl bg-surface border border-white/10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!imgError && images.length > 0 ? (
          <>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction > 0 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -20 : 20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`${project.title} - slide ${currentIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  onError={() => setImgError(true)}
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Image Count Badge */}
            {hasMultipleImages && (
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs font-mono px-2 py-0.5 rounded-full">
                {currentIndex + 1} / {images.length}
              </div>
            )}

            {/* Arrow Buttons */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-white rounded-full p-1.5 transition-all duration-200"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/50 hover:bg-black/80 backdrop-blur-sm text-white rounded-full p-1.5 transition-all duration-200"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* Dot Indicators */}
            {hasMultipleImages && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-accent w-4 h-1.5"
                        : "bg-white/30 w-1.5 h-1.5"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface border border-white/10">
            <p className="text-xs text-text-muted">No preview available</p>
          </div>
        )}
      </div>

      {/* Project Info Section */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="heading-sm">{project.title}</h3>
          {project.featured ? (
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-accent">
              Featured
            </p>
          ) : null}
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-text-dim">
          {project.tags.length} tech
        </span>
      </div>

      <p className="body-sm flex-1 text-text-muted">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="accent">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        {project.live ? (
          <Link href={project.live} external className="text-sm">
            Live site
          </Link>
        ) : null}

        {project.github ? (
          <Link
            href={project.github}
            external
            className="text-sm text-text-muted"
          >
            GitHub
          </Link>
        ) : null}
      </div>
    </Card>
  );
}
