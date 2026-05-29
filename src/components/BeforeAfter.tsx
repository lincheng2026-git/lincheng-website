"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfter({
  before,
  after,
  beforeLabel = "初稿",
  afterLabel = "成品",
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, x)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    updatePosition(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-lg shadow-card"
    >
      <Image src={after} alt={afterLabel} fill className="object-cover" sizes="(max-width: 1200px) 100vw" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div className="relative h-full" style={{ width: `${100 / (position / 100 || 1)}%` }}>
          <Image src={before} alt={beforeLabel} fill className="object-cover" sizes="(max-width: 1200px) 100vw" />
        </div>
      </div>
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-warm-white/90"
        style={{ left: `${position}%` }}
      >
        <div
          className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-warm-white bg-tea/90 shadow-card"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
        >
          <span className="text-warm-white text-xs">⟷</span>
        </div>
      </div>
      <span className="absolute bottom-3 left-3 rounded bg-ink/50 px-2 py-1 text-xs text-warm-white">
        {beforeLabel}
      </span>
      <span className="absolute bottom-3 right-3 rounded bg-ink/50 px-2 py-1 text-xs text-warm-white">
        {afterLabel}
      </span>
    </div>
  );
}
