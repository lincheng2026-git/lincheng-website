"use client";

import { useState } from "react";
import { GalleryGrid } from "./GalleryGrid";
import { galleryItems, GalleryItem } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "全部" },
  { key: "cat", label: "猫咪壁纸" },
  { key: "song", label: "宋式壁纸" },
] as const;

const sorts = [
  { key: "latest", label: "最新" },
  { key: "random", label: "随机" },
] as const;

export function GalleryPageClient() {
  const [category, setCategory] = useState<string>("all");
  const [sort, setSort] = useState<string>("latest");

  let items: GalleryItem[] = [...galleryItems];
  if (category !== "all") {
    items = items.filter((i) => i.category === category);
  }
  if (sort === "random") {
    items = [...items].sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setCategory(c.key)}
              className={cn(
                "shrink-0 text-sm transition",
                category === c.key ? "text-ink underline decoration-tea underline-offset-4" : "text-warm-gray hover:text-ink"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          {sorts.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setSort(s.key)}
              className={cn(
                "text-sm",
                sort === s.key ? "text-tea" : "text-warm-gray hover:text-ink"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <GalleryGrid items={items} columns={3} />
      </div>
    </>
  );
}
