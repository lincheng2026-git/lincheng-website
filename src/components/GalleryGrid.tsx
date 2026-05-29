"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox, LightboxImage } from "./Lightbox";
import { GalleryItem } from "@/lib/data";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  items: GalleryItem[];
  columns?: 2 | 3;
}

export function GalleryGrid({ items, columns = 3 }: GalleryGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxImages: LightboxImage[] = items.map((item) => ({
    src: item.src,
    title: item.title,
    category: item.categoryLabel,
  }));

  return (
    <>
      <div
        className={
          columns === 3
            ? "columns-2 gap-4 md:columns-3"
            : "columns-2 gap-4"
        }
      >
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg"
            onClick={() => setLightboxIndex(i)}
          >
            <div
              className={cn(
                "relative w-full",
                item.orientation === "wide"
                  ? "aspect-[16/9]"
                  : item.orientation === "landscape"
                    ? "aspect-[4/3]"
                    : "aspect-[3/4]"
              )}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-ink/0 p-3 transition-colors duration-200 group-hover:bg-ink/40">
                <span className="translate-y-2 font-serif text-sm text-warm-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.categoryLabel}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
