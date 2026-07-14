"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface CarouselImage {
  src: string;
  alt: string;
}

/**
 * Self-advancing photo carousel. Crossfades to the next image every
 * `intervalMs` with no user interaction required. Pauses automatically for
 * people with prefers-reduced-motion set, showing the first image only.
 */
export function AutoCarousel({
  images,
  intervalMs = 4000,
  className = "",
  imgClassName = "",
}: {
  images: CarouselImage[];
  intervalMs?: number;
  className?: string;
  imgClassName?: string;
}) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion || images.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), intervalMs);
    return () => clearInterval(id);
  }, [reducedMotion, images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="sync">
        <motion.div
          key={images[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className={`object-cover ${imgClassName}`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {images.map((img, i) => (
            <span
              key={img.src}
              className="h-1.5 w-1.5 rounded-full transition-colors"
              style={{ background: i === index ? "#B8935A" : "rgba(255,255,255,0.5)" }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
