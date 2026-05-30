import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { images } from "@/lib/images";
import { getSiteModulesFromNotion } from "@/lib/notion";

export const dynamic = "force-dynamic";

const habitList = ["待办", "饮食", "花销", "睡眠", "习惯打卡"];

const handbookTypes = [
  {
    title: "每日待办",
    image: images.handbookWarmAutumnNotebook,
    body: `每天还是会习惯列待办。

完成以后划掉，
会很有“今天没有白过”的感觉。`,
    marks: ["To Do", "勾选框", "工整排版"],
  },
  {
    title: "饮食记录",
    image: images.handbookWinterTea,
    body: `开始记录吃饭以后，
会发现自己的饮食真的很重复。

有时候也会顺手记：
今天哪家店很好吃。`,
    marks: ["早餐", "咖啡", "外食记录"],
  },
  {
    title: "习惯打卡",
    image: images.handbookWarmAutumnDesk,
    body: `睡眠、喝水、学习、运动。

虽然经常断掉，
但还是会重新开始。`,
    marks: ["睡眠", "喝水", "学习"],
  },
  {
    title: "财务记录",
    image: images.galleryDesk,
    body: `最近开始记账以后，
会发现很多钱真的是“不知道怎么花掉的”。

但记下来以后，
会慢慢有控制感。`,
    marks: ["月度花销", "消费记录", "预算"],
  },
];

const detailNotes = [
  {
    title: "关于字",
    body: `现在越来越喜欢：
写得工整一点。

页面不用太复杂，
整齐以后看着会舒服很多。`,
  },
  {
    title: "关于贴纸",
    body: `以前会贴很多东西。

现在反而更喜欢：
留白一点。

偶尔加一点小贴纸就够了。`,
  },
  {
    title: "关于颜色",
    body: `最近很少用特别鲜艳的颜色。

更喜欢：
米白、茶色、灰绿这种安静一点的颜色。`,
  },
  {
    title: "关于排版",
    body: `有时候只是：
把页面排整齐一点。

人也会跟着安静下来。`,
  },
];

function NotebookPreview() {
  return (
    <div className="rounded-lg border border-divider/50 bg-warm-white p-5 shadow-card">
      <div className="rounded-md bg-paper p-5">
        <div className="flex items-center justify-between border-b border-divider/40 pb-3">
          <p className="font-serif text-lg text-ink">Today</p>
          <p className="text-xs tracking-[0.16em] text-warm-gray">生活记录</p>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs tracking-[0.18em] text-tea/75">TO DO</p>
            <div className="mt-3 space-y-3 text-sm text-ink/78">
              {["整理桌面", "记录午餐", "复盘花销", "睡前阅读 20 分钟"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-sm border border-tea/60" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md bg-warm-white/80 p-4">
            <p className="text-xs tracking-[0.18em] text-tea/75">HABIT</p>
            <div className="mt-3 grid grid-cols-7 gap-1.5">
              {Array.from({ length: 28 }).map((_, index) => (
                <span
                  key={index}
                  className={`aspect-square rounded-sm border border-divider/40 ${
                    index % 4 === 0 || index % 7 === 3 ? "bg-tea/25" : "bg-paper"
                  }`}
                />
              ))}
            </div>
            <div className="mt-5 space-y-2 text-xs text-warm-gray">
              <p>饮食：咖啡 / 米饭 / 青菜</p>
              <p>花销：¥36.5</p>
              <p>睡眠：7h 20min</p>
            </div>
          </div>
        </div>
        <p className="mt-5 border-t border-divider/40 pt-4 font-fangsong text-sm leading-relaxed text-ink/70">
          今天没有做很多事，但都记下来了。划掉待办的时候，会觉得生活终于有一点点被整理好。
        </p>
      </div>
    </div>
  );
}

export default async function HandbookPage() {
  const notionModules = await getSiteModulesFromNotion("手帐小记");
  const getModule = (module: string) => notionModules.filter((item) => item.module === module);
  const pageHeader = getModule("页面标题")[0];
  const currentMethod = getModule("记录方式")[0];
  const notionHandbookTypes = getModule("我的手帐分类");
  const notionDetailNotes = getModule("最近喜欢的手帐细节");
  const xiaohongshuNotes = getModule("小红书手帐风格")[0];
  const handbookTypeItems = notionHandbookTypes.length
    ? notionHandbookTypes.map((item, index) => {
        const fallback = handbookTypes[index % handbookTypes.length];

        return {
          title: item.title,
          image: item.image || fallback.image,
          body: item.body || fallback.body,
          marks: item.tags.length ? item.tags : fallback.marks,
        };
      })
    : handbookTypes;
  const detailNoteItems = notionDetailNotes.length
    ? notionDetailNotes.map((item) => ({
        title: item.title,
        body: item.body,
      }))
    : detailNotes;
  const currentMethodTags = currentMethod?.tags.length ? currentMethod.tags : habitList;

  return (
    <div className="paper-texture pb-24">
      <PageHeader
        title={pageHeader?.title || "手帐小记"}
        subtitle={pageHeader?.eyebrow || "Handbook Lab"}
        description={pageHeader?.body || `以前总觉得手帐是“好看”。
后来发现，它其实是在帮人整理生活。`}
      />

      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-20">
        <FadeIn>
          <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <NotebookPreview />
            <div>
              <p className="font-display text-xs tracking-[0.24em] text-warm-gray/75">
                {currentMethod?.eyebrow || "Current Method"}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">
                {currentMethod?.title || "最近开始认真记录每天的生活"}
              </h2>
              <p className="mt-6 whitespace-pre-line text-[17px] leading-[1.9] text-ink/84">
                {currentMethod?.body || `以前总觉得：

手帐是用来“做漂亮”的。

后来开始记录以后，
才发现它更像：

帮人把生活一点点整理清楚。`}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {currentMethodTags.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-tag px-3 py-1 text-xs text-tea"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-[15px] leading-relaxed text-warm-gray">
                有时候只是划掉一项待办，都会觉得安心一点。
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-24">
          <section>
            <div className="text-center">
              <p className="font-display text-xs tracking-[0.24em] text-warm-gray/75">
                Daily Sections
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">我的手帐分类</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {handbookTypeItems.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-5 rounded-lg border border-divider/45 bg-warm-white/80 p-5 shadow-[0_12px_34px_rgba(80,64,42,0.045)] sm:grid-cols-[170px_1fr]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg sm:aspect-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 180px"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
                    <p className="mt-4 whitespace-pre-line text-[15px] leading-[1.85] text-ink/80">
                      {item.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.marks.map((mark) => (
                        <span key={mark} className="rounded bg-paper px-2.5 py-1 text-xs text-warm-gray">
                          {mark}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-24">
          <section className="rounded-lg bg-warm-white/70 p-7 shadow-[0_12px_34px_rgba(80,64,42,0.04)] md:p-9">
            <div className="text-center">
              <p className="font-display text-xs tracking-[0.24em] text-warm-gray/75">
                Small Details
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">最近喜欢的手帐细节</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {detailNoteItems.map((note) => (
                <article key={note.title} className="rounded-lg border border-divider/40 bg-paper/70 p-5">
                  <h3 className="font-serif text-xl text-ink">{note.title}</h3>
                  <p className="mt-4 whitespace-pre-line text-sm leading-[1.85] text-ink/78">
                    {note.body}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-24">
          <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
              <Image
                src={xiaohongshuNotes?.image || images.handbookWarmAutumnDesk}
                alt={xiaohongshuNotes?.title || "手帐桌面"}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>
            <div>
              <p className="font-display text-xs tracking-[0.24em] text-warm-gray/75">
                {xiaohongshuNotes?.eyebrow || "Xiaohongshu Notes"}
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">
                {xiaohongshuNotes?.title || "最近浏览的小红书手帐风格"}
              </h2>
              <p className="mt-6 whitespace-pre-line text-[17px] leading-[1.9] text-ink/84">
                {xiaohongshuNotes?.body || `最近很喜欢看别人记录生活的手帐。

比起特别复杂的拼贴，
更喜欢那种：

字写得很认真、
页面很干净、
但能看出来真的每天都在使用的手帐。

会感觉：
“这个人真的有在认真生活。”`}
              </p>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
