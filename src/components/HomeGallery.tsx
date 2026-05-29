"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox, LightboxImage } from "./Lightbox";
import { GalleryItem } from "@/lib/data";
import { FadeIn } from "./FadeIn";

export function HomeGallery({ items }: { items: GalleryItem[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxImages: LightboxImage[] = items.map((item) => ({
    src: item.src,
    title: item.title,
    category: item.categoryLabel,
  }));

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.08}>
            <button
              type="button"
              className="group relative aspect-square w-full overflow-hidden rounded-lg"
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-200 group-hover:bg-ink/50">
                <span className="font-serif text-sm text-warm-white opacity-0 transition-opacity group-hover:opacity-100">
                  {item.categoryLabel}
                </span>
              </div>
            </button>
          </FadeIn>
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
