"use client";

import { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";

const cats = [
  {
    name: "蛋白｜白白",
    image: "/images/cats/profiles/baibai-profile.png",
  },
  {
    name: "斑斑",
    image: "/images/cats/profiles/banban-profile.png",
  },
];

const tabs = [
  { key: "all", label: "全部记录" },
  { key: "baibai", label: "白白" },
  { key: "banban", label: "斑斑" },
  { key: "together", label: "两只猫" },
] as const;

const catNotes = [
  {
    cat: "baibai",
    title: "白白又把门打开了",
    date: "2026.03.12",
    image: "/images/wallpapers/cats/IMG_9336.PNG",
    body: `本来已经把门关好了。

过了一会儿，
它已经从里面探出半个脑袋。

最气人的是，
还会一脸无辜地看人。

现在每天都像在和它玩“防开门游戏”。`,
  },
  {
    cat: "banban",
    title: "斑斑又开始叫了",
    date: "2026.03.09",
    image: "/images/wallpapers/cats/IMG_9341.PNG",
    body: `只要家里太安静，
它就会开始找人。

有时候只是想确认：
“你们还在不在。”

一边叫，
一边跟在人后面转。`,
  },
  {
    cat: "together",
    title: "两只猫又开始打架了",
    date: "2026.03.02",
    image: "/images/wallpapers/cats/IMG_9366.PNG",
    body: `白白先去招惹斑斑。

结果两只猫在客厅追了半天。

打了几下以后，
又各自装没事。

过十分钟甚至还能一起晒太阳。`,
  },
  {
    cat: "baibai",
    title: "白白高冷不了多久",
    date: "2026.02.18",
    image: "/images/wallpapers/cats/IMG_9338.PNG",
    body: `平时一副：
“不要碰我”的样子。

结果半夜又自己跑过来，
安静趴在人旁边。

猫真的很擅长假装不在意。`,
  },
  {
    cat: "banban",
    title: "斑斑永远慢半拍",
    date: "2026.02.07",
    image: "/images/wallpapers/cats/IMG_9367.PNG",
    body: `白白已经跑了。

它还在原地观察发生了什么。

有时候会觉得，
它脑子里可能永远慢半秒。

但也因为这样，
特别憨。`,
  },
  {
    cat: "baibai",
    title: "白白最喜欢藏起来",
    date: "2026.01.29",
    image: "/images/wallpapers/cats/IMG_9368.PNG",
    body: `最近又开发了新的藏身点。

找了半天，
最后发现它蹲在窗帘后面。

而且还会偷偷观察人找它的样子。

感觉它真的很喜欢玩“消失”。`,
  },
  {
    cat: "banban",
    title: "斑斑今天又霸占位置了",
    date: "2026.01.16",
    image: "/images/wallpapers/cats/IMG_9370.PNG",
    body: `刚起身倒杯水。

回来以后，
位置已经被它占了。

而且完全没有要让开的意思。`,
  },
  {
    cat: "together",
    title: "它们性格真的完全不同",
    date: "2026.01.03",
    image: "/images/slots/home-category-cats.jpg",
    body: `白白像：
脑子特别灵活的小孩。

斑斑像：
热情但有点憨的小跟班。

一个天天研究怎么搞事情，
一个天天研究怎么跟着人。

每天都很热闹。`,
  },
];

export default function CatsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]["key"]>("all");
  const notes = tab === "all" ? catNotes : catNotes.filter((note) => note.cat === tab);

  return (
    <div className="pb-24">
      <PageHeader
        title="猫咪宇宙"
        subtitle="Cats Universe"
        description="记录它的日常、习惯、小脾气，和那些让人心软的瞬间。"
      />

      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-20">
        <FadeIn>
          <section className="rounded-lg border border-divider/45 bg-warm-white/75 p-5 shadow-[0_16px_45px_rgba(80,64,42,0.05)] md:p-8">
            <div className="text-center">
              <p className="font-serif text-2xl text-ink">猫咪档案</p>
              <p className="mt-2 text-sm text-warm-gray">两只猫，两个性格，像慢慢贴进生活里的手帐页。</p>
            </div>

            <div className="mt-8 grid gap-7">
              {cats.map((cat) => (
                <article
                  key={cat.name}
                  className="overflow-hidden rounded-lg border border-divider/35 bg-paper p-2 shadow-[0_12px_30px_rgba(80,64,42,0.055)] md:p-3"
                >
                  <div className="relative aspect-[3/2] overflow-hidden rounded-md">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 1100px"
                      priority={cat.name.includes("白白")}
                    />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        <div className="mt-14 flex justify-center gap-7 overflow-x-auto border-b border-divider/50 pb-6">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`relative shrink-0 text-sm transition ${
                tab === t.key ? "text-ink" : "text-warm-gray hover:text-ink"
              }`}
            >
              {t.label}
              {tab === t.key && (
                <span className="absolute -bottom-2 left-0 h-px w-full bg-tea" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {notes.map((note, i) => (
            <FadeIn key={note.title} delay={(i % 4) * 0.06}>
              <article className="overflow-hidden rounded-lg border border-divider/45 bg-warm-white shadow-[0_12px_34px_rgba(80,64,42,0.045)]">
                <div className="relative aspect-[4/3] overflow-hidden bg-tag/30">
                  <Image
                    src={note.image}
                    alt={note.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between gap-4 text-xs text-warm-gray">
                    <time>{note.date}</time>
                    <span className="rounded bg-tag px-2.5 py-1 text-tea">
                      {note.cat === "baibai" ? "白白" : note.cat === "banban" ? "斑斑" : "两只猫"}
                    </span>
                  </div>
                  <h2 className="mt-4 font-serif text-2xl text-ink">{note.title}</h2>
                  <p className="mt-5 whitespace-pre-line text-[15px] leading-[1.9] text-ink/82">
                    {note.body}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mx-auto mt-20 max-w-lg whitespace-pre-line text-center font-fangsong text-lg leading-loose text-tea/65">
            {`它只是安静地生活着，
我只是认真地记录着。`}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
