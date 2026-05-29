"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useCallback } from "react";

export interface LightboxImage {
  src: string;
  title?: string;
  category?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const current = images[currentIndex];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft")
        onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === "ArrowRight")
        onNavigate((currentIndex + 1) % images.length);
    },
    [currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <button
          type="button"
          className="absolute right-6 top-6 z-10 text-warm-white/80 transition hover:text-warm-white"
          onClick={onClose}
          aria-label="关闭"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-warm-white/10 p-3 text-warm-white transition hover:bg-warm-white/20 md:left-8"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex - 1 + images.length) % images.length);
              }}
              aria-label="上一张"
            >
              ‹
            </button>
            <button
              type="button"
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-warm-white/10 p-3 text-warm-white transition hover:bg-warm-white/20 md:right-8"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex + 1) % images.length);
              }}
              aria-label="下一张"
            >
              ›
            </button>
          </>
        )}

        <motion.div
          className="relative mx-4 max-h-[85vh] max-w-5xl"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-[4/3] w-[min(90vw,900px)] overflow-hidden rounded-lg">
            <Image
              src={current.src}
              alt={current.title || ""}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
          {(current.title || current.category) && (
            <div className="mt-4 text-center">
              {current.category && (
                <span className="text-sm text-warm-white/60">{current.category}</span>
              )}
              {current.title && (
                <p className="mt-1 font-serif text-lg text-warm-white">{current.title}</p>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
