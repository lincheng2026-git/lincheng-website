import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { images } from "@/lib/images";
import { getObjectsCollectionFromNotion } from "@/lib/notion";

export const dynamic = "force-dynamic";

const learningItems = [
  {
    title: "青瓷",
    body: `以前总觉得青瓷太素。

后来茶具买得越来越多，
反而开始喜欢这种安安静静的颜色。

摆在茶桌上不会特别抢眼，
但会让整张桌子看起来舒服很多。`,
  },
  {
    title: "汝窑",
    body: `刚开始看不懂汝窑。

总觉得为什么大家这么喜欢。

后来见得多了，
慢慢会去看釉色、开片和那种温润感。

现在看到喜欢的，
还是会忍不住多看几眼。`,
  },
  {
    title: "景德镇瓷器",
    body: `这几年买的茶具，
很多都来自景德镇。

风格很多，
有传统的，也有年轻设计师做的新东西。

每次看都觉得还有很多没见过。`,
  },
  {
    title: "茶具搭配",
    body: `后来发现喝茶不只是选一个杯子。

茶壶、杯子、茶盘、桌布，
甚至当天的光线和天气，
都会影响坐下来喝茶时的感觉。

我现在更喜欢研究它们放在一起顺不顺眼。`,
  },
];

const fallbackInventory = [
  {
    name: "青瓷茶杯",
    type: "茶杯",
    status: "想入手",
    focus: "釉色、杯型、手感",
    note: "希望颜色不要太亮，适合日常喝茶。",
  },
  {
    name: "汝窑主人杯",
    type: "主人杯",
    status: "了解中",
    focus: "开片、釉面、杯口厚度",
    note: "先多看看，不急着买。",
  },
  {
    name: "景德镇手作小杯",
    type: "茶杯",
    status: "已关注",
    focus: "器型、手工感、价格",
    note: "想找一个适合日常使用的。",
  },
  {
    name: "茶盘 / 茶席布",
    type: "茶桌配件",
    status: "待选择",
    focus: "颜色、材质、是否好清理",
    note: "不要太复杂，日常好用更重要。",
  },
];

const choosingNotes = [
  {
    title: "颜色",
    body: `不是越特别越好。

更重要的是：
放在家里的光线下，看起来舒服。`,
  },
  {
    title: "手感",
    body: `杯子拿起来的重量、杯口厚度，
都会影响日常使用。`,
  },
  {
    title: "搭配",
    body: `单个器物好看不够。

还要看它和桌子、茶盘、其他杯子放在一起是否协调。`,
  },
  {
    title: "日常好用",
    body: `太娇贵、太难清理的器物，
可能反而不会经常使用。

我更想找的是：
好看，但也真的愿意每天用的东西。`,
  },
];

const teaSpace = [
  {
    title: "一盏暖灯",
    note: "下班以后开一盏小灯，泡茶的时候会舒服一点。",
    image: images.aboutHeroDeskTea,
  },
  {
    title: "顺手的杯子",
    note: "比起只适合拍照的杯子，更想找每天都会拿起来的。",
    image: images.ceramicsCeladonBowl,
  },
  {
    title: "旧一点的桌布",
    note: "颜色不要太抢，茶杯和书放上去会自然一点。",
    image: images.handbookWinterTea,
  },
  {
    title: "书和小器物",
    note: "东西不用多，放在桌上的最好都是顺手会用的。",
    image: images.ceramicsLotusCup,
  },
];

export const metadata = { title: "东方器物" };

export default async function CeramicsPage() {
  const notionObjects = await getObjectsCollectionFromNotion();
  const inventory = notionObjects.length ? notionObjects : fallbackInventory;

  return (
    <div className="paper-texture pb-24">
      <PageHeader
        title="东方器物"
        subtitle="Ceramics"
        description="收集喜欢的茶具，记录喝茶这件小事。"
      />

      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-20">
        <FadeIn>
          <section>
            <div className="relative aspect-[16/7] min-h-[280px] overflow-hidden rounded-lg shadow-card">
              <Image
                src={images.handbookWinterTea}
                alt="茶桌、茶杯与暖光"
                fill
                priority
                className="object-cover brightness-[1.04] saturate-[0.92]"
                sizes="1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/28 via-ink/8 to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-xl p-7 text-warm-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] md:p-9">
                <p className="font-display text-xs tracking-[0.24em] text-warm-white/85">
                  Tea Life
                </p>
                <h2 className="mt-3 font-serif text-3xl md:text-4xl">日常茶桌</h2>
                <p className="mt-4 text-sm leading-relaxed text-warm-white/88 md:text-base">
                  下班回家泡一壶茶的时候，桌上大概就是这个样子。
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-20">
          <section>
            <div className="text-center">
              <p className="font-display text-xs tracking-[0.24em] text-warm-gray/75">
                Daily Notes
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">慢慢喜欢上的器物</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {learningItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-divider/45 bg-warm-white/80 p-6 shadow-[0_12px_34px_rgba(80,64,42,0.04)]"
                >
                  <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                  <p className="mt-5 whitespace-pre-line text-[15px] leading-[1.85] text-ink/80">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-24">
          <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
              <Image
                src={images.handbookWinterTea}
                alt="简单茶桌记录"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.24em] text-warm-gray/75">
                Tea Table
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">茶桌记录</h2>
              <p className="mt-6 whitespace-pre-line text-[17px] leading-[1.9] text-ink/84">
                {`今天只是随手泡了一壶茶。

一只浅色茶杯，
一块旧一点的桌布，
旁边放了一本书。

没有特意布置。

喝完以后才发现，
这个角落最近用得越来越多。`}
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-24">
          <section>
            <div className="text-center">
              <p className="font-display text-xs tracking-[0.24em] text-warm-gray/75">
                List
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">想买和在用的清单</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {inventory.map((item) => (
                <article
                  key={item.name}
                  className="rounded-lg border border-divider/45 bg-warm-white/75 p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="font-serif text-2xl text-ink">{item.name}</h3>
                    <span className="rounded bg-tag px-3 py-1 text-xs text-tea">{item.status}</span>
                  </div>
                  <dl className="mt-5 space-y-3 text-sm leading-relaxed text-ink/78">
                    <div>
                      <dt className="inline text-warm-gray">类型：</dt>
                      <dd className="inline">{item.type}</dd>
                    </div>
                    <div>
                      <dt className="inline text-warm-gray">关注点：</dt>
                      <dd className="inline">{item.focus}</dd>
                    </div>
                    <div>
                      <dt className="inline text-warm-gray">备注：</dt>
                      <dd className="inline">{item.note}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-24">
          <section className="rounded-lg bg-warm-white/70 p-7 shadow-[0_12px_34px_rgba(80,64,42,0.04)] md:p-9">
            <div className="text-center">
              <p className="font-display text-xs tracking-[0.24em] text-warm-gray/75">
                Before Buying
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">买前会想的事</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {choosingNotes.map((item, index) => (
                <article key={item.title} className="rounded-lg border border-divider/40 bg-paper/70 p-5">
                  <p className="text-xs text-tea/70">0{index + 1}</p>
                  <h3 className="mt-2 font-serif text-xl text-ink">{item.title}</h3>
                  <p className="mt-4 whitespace-pre-line text-sm leading-[1.85] text-ink/78">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-24">
          <section>
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
              <div>
                <p className="font-display text-xs tracking-[0.24em] text-warm-gray/75">
                  Tea Corner
                </p>
                <h2 className="mt-3 font-serif text-3xl text-ink">常待的喝茶角落</h2>
                <p className="mt-6 whitespace-pre-line text-[17px] leading-[1.9] text-ink/84">
                  {`不一定要有很大的茶室。

一个小桌面、
一盏灯、
一只顺手的杯子，
就够我周末下午待一会儿。`}
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {teaSpace.map((item) => (
                  <article key={item.title}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 320px"
                      />
                    </div>
                    <h3 className="mt-4 font-serif text-xl text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-warm-gray">{item.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <p className="mx-auto mt-24 max-w-xl whitespace-pre-line text-center font-fangsong text-lg leading-loose text-tea/65">
            {`喜欢的杯子，最后还是要拿起来用。

泡茶、倒水、放回桌上，
时间久了才知道它合不合适。`}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
