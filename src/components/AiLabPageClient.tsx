"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { BeforeAfter } from "@/components/BeforeAfter";

type AiCase = {
  id: string;
  title: string;
  before: string;
  after: string;
  date: string;
  note: string;
};

type TimelineNode = {
  date: string;
  title: string;
  detail: string;
};

interface AiLabPageClientProps {
  cases: AiCase[];
  timeline: TimelineNode[];
  beforeAfterTitle: string;
  beforeAfterDescription: string;
  timelineTitle: string;
  noteTitle: string;
  noteBody: string;
}

export function AiLabPageClient({
  cases,
  timeline,
  beforeAfterTitle,
  beforeAfterDescription,
  timelineTitle,
  noteTitle,
  noteBody,
}: AiLabPageClientProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-content px-5 md:px-10 lg:px-20">
      <FadeIn>
        <h2 className="font-serif text-2xl text-ink">{beforeAfterTitle}</h2>
        <p className="mt-2 text-sm text-warm-gray">{beforeAfterDescription}</p>
      </FadeIn>

      <div className="mt-10 space-y-16">
        {cases.map((item) => (
          <FadeIn key={item.id}>
            <BeforeAfter before={item.before} after={item.after} />
            <p className="mt-4 text-sm text-warm-gray">
              {item.date} · {item.note}
            </p>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-24">
        <h2 className="font-serif text-2xl text-ink">{timelineTitle}</h2>
        <div className="mt-10 space-y-4">
          {timeline.map((node, i) => (
            <div
              key={`${node.date}-${node.title}`}
              className="overflow-hidden rounded-lg border border-divider/40 bg-warm-white"
            >
              <button
                type="button"
                className="flex w-full items-center gap-4 p-4 text-left transition hover:bg-tag/30"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-divider/60 bg-paper shadow-[inset_0_0_0_6px_rgba(245,240,232,0.9)]">
                  <span className="font-serif text-xl text-tea">{i + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-warm-gray">{node.date}</p>
                  <p className="font-serif text-ink">{node.title}</p>
                </div>
                <span className="text-warm-gray">{expanded === i ? "-" : "+"}</span>
              </button>
              {expanded === i && (
                <div className="whitespace-pre-line border-t border-divider/30 px-4 pb-4 pt-2 text-sm leading-relaxed text-warm-gray">
                  {node.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="mt-24 rounded-lg bg-tag/50 p-8">
        <h3 className="font-serif text-xl text-ink">{noteTitle}</h3>
        <p className="mt-4 whitespace-pre-line text-[17px] leading-[1.9] text-ink/85">
          {noteBody}
        </p>
      </FadeIn>
    </div>
  );
}
