"use client";

import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { BeforeAfter } from "@/components/BeforeAfter";
import { aiLabCases, aiTimeline } from "@/lib/data";

export default function AiLabPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="pb-20">
      <PageHeader
        title="AI灵感手记"
        subtitle="AI Lab"
        description="记录 AI 创作成长与个人风格形成轨迹"
      />

      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-20">
        <FadeIn>
          <h2 className="font-serif text-2xl text-ink">Before / After</h2>
          <p className="mt-2 text-sm text-warm-gray">拖动滑块对比初稿与成品</p>
        </FadeIn>

        <div className="mt-10 space-y-16">
          {aiLabCases.map((c) => (
            <FadeIn key={c.id}>
              <BeforeAfter before={c.before} after={c.after} />
              <p className="mt-4 text-sm text-warm-gray">
                {c.date} · {c.note}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-24">
          <h2 className="font-serif text-2xl text-ink">创作时间轴</h2>
          <div className="mt-10 space-y-4">
            {aiTimeline.map((node, i) => (
              <div
                key={node.date}
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
                  <span className="text-warm-gray">{expanded === i ? "−" : "+"}</span>
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
          <h3 className="font-serif text-xl text-ink">创作小记</h3>
          <p className="mt-4 whitespace-pre-line text-[17px] leading-[1.9] text-ink/85">
            {`后来慢慢发现：

AI并不真正理解“猫”。

它理解的是：

光线、空气、情绪、
以及人想留住的那种温度。

当提示词从：

“画一只猫”

变成：

“午后、暖灯、慵懒、陪伴感”

画面才终于开始有了呼吸。`}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
