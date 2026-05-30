import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/lib/data";
import { images } from "@/lib/images";
import { getHomeFeaturedFromNotion } from "@/lib/notion";

export const dynamic = "force-dynamic";

const momentCollected = {
  image: images.songSpaceBambooRain,
  body: `最近开始越来越喜欢：

雨后的空气、
旧纸的颜色、
以及暖灯落在木头上的光。

有些画面其实并不复杂。

只是刚好，
让人想安静一会儿。`,
  date: "2024 · 冬日记录",
};

const emotionEntries = {
  featured: {
    href: "/cats",
    eyebrow: "Cats Universe",
    title: "猫咪宇宙",
    description: "午后的光线、暖色地板，和总比人类更懂休息的猫。",
    action: "进入日常 →",
    image: images.homeCategoryCats,
  },
  secondary: [
    {
      href: "/handbook",
      eyebrow: "Handbook Lab",
      title: "手帐小记",
      description: "待办、饮食、花销和那些普通小日子的整理。",
      action: "进入手帐 →",
      image: images.handbookWarmAutumnDesk,
    },
    {
      href: "/ceramics",
      eyebrow: "Ceramics",
      title: "东方器物",
      description: "茶具、瓷器与慢慢搭起来的茶生活空间。",
      action: "进入器物 →",
      image: images.ceramicsCeladonBowl,
    },
    {
      href: "/song-aesthetic",
      eyebrow: "Song Aesthetic",
      title: "宋式美学",
      description: "我开始越来越喜欢，留白与旧纸的颜色。",
      action: "进入美学 →",
      image: images.galleryTeaRoom,
    },
  ],
};

const recentNotes = [
  {
    tag: "生活片段",
    title: "雨后的竹影",
    body: `窗外的雨停了。

竹影落在纸上。

今天只写下了一句话：

“世界很安静。”`,
    date: "2024.11.18",
  },
  {
    tag: "创作思考",
    title: "AI开始理解情绪的时候",
    body: `后来发现：

提示词里最重要的，
不是物体。

而是空气、光线，
和那些说不清的停顿。`,
    date: "2024.11.12",
  },
  {
    tag: "猫咪日常",
    title: "猫咪在窗边睡着了",
    body: `它眯着眼睛晒太阳。

这一刻，
时间好像真的慢了下来。`,
    date: "2024.11.05",
  },
];

const selectedWorks = [
  {
    category: "猫咪壁纸",
    title: "窗边的暖灯",
    description: "吉卜力风的光影里，猫咪安静地坐着。",
    image: images.journalCatWindowCover,
  },
  {
    category: "宋式美学",
    title: "雨夜茶室",
    description: "竹影、灯火与旧院的安静时刻。",
    image: images.galleryTeaRoom,
  },
  {
    category: "AI视觉",
    title: "茶与留白",
    description: "纸张、茶棕与米白之间的温柔层次。",
    image: images.handbookWinterTea,
  },
  {
    category: "东方场景",
    title: "竹林晨雾",
    description: "像一段被雾气慢慢藏起来的旧梦。",
    image: images.aiTimelineBamboo,
  },
];

const selectedWorkImages = [
  images.journalCatWindowCover,
  images.galleryTeaRoom,
  images.handbookWinterTea,
  images.aiTimelineBamboo,
];

export default async function HomePage() {
  const notionHomeFeatured = await getHomeFeaturedFromNotion();
  const notionRecentNotes = notionHomeFeatured.filter((item) => item.module === "最近记录");
  const notionSelectedWorks = notionHomeFeatured.filter((item) => item.module === "精选作品");
  const homeRecentNotes = notionRecentNotes.length
    ? notionRecentNotes.map((item) => ({
        tag: item.source || "生活记录",
        title: item.title,
        body: item.summary,
        date: item.date,
      }))
    : recentNotes;
  const homeSelectedWorks = notionSelectedWorks.length
    ? notionSelectedWorks.map((item, index) => ({
        category: item.source || "精选",
        title: item.title,
        description: item.summary,
        image: item.image || selectedWorkImages[index % selectedWorkImages.length],
      }))
    : selectedWorks;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-beige">
          <Image
            src={images.homeHero}
            alt=""
            fill
            priority
            className="object-cover brightness-[0.62] saturate-[0.85]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(44,36,22,0.1),rgba(20,16,10,0.52)),linear-gradient(to_bottom,rgba(20,16,10,0.28),rgba(20,16,10,0.58))]" />
        <div className="relative z-10 mx-auto max-w-[520px] -translate-y-5 px-5 text-center text-[#FFF8EA] drop-shadow-[0_3px_18px_rgba(0,0,0,0.65)]">
          <FadeIn delay={0.2}>
            <p className="font-serif text-xs tracking-[0.42em] text-[#FFF8EA]/82 md:text-sm">
              {siteConfig.nameEn}
            </p>
            <h1 className="mt-5 font-serif text-5xl font-normal text-[#FFF8EA] md:text-[62px]">
              {siteConfig.name}
            </h1>
            <p className="mt-10 font-fangsong text-lg leading-loose tracking-[0.12em] text-[#FFF8EA] md:text-[22px]">
              {siteConfig.tagline}
            </p>
            <p className="mx-auto mt-6 max-w-[520px] text-sm leading-8 text-[#FFF8EA]/88 md:text-base md:leading-9">
              猫咪、器物、手帐、东方旧梦，
              <br />
              以及 AI 创作下慢慢形成的个人审美。
            </p>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-6">
              <Link
                href="/gallery"
                className="rounded bg-tea px-6 py-2.5 text-xs tracking-[0.12em] text-warm-white shadow-card transition duration-200 hover:brightness-110"
              >
                进入馆藏
              </Link>
              <Link
                href="/cats"
                className="rounded border border-warm-white/70 bg-transparent px-6 py-2.5 text-xs tracking-[0.12em] text-warm-white transition duration-200 hover:bg-warm-white/10 hover:brightness-110"
              >
                看看白白和斑斑
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow text-warm-white/70">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* Moments collected */}
      <section className="px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center">
              <p className="font-display text-xs tracking-[0.28em] text-warm-gray/75">
                Moments Collected
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">片刻收藏</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-12 grid items-center gap-10 md:grid-cols-[1.08fr_0.92fr] md:gap-14">
              <div className="group relative overflow-hidden rounded-lg shadow-card">
                <div className="relative aspect-[16/10] md:aspect-[5/3]">
                  <Image
                    src={momentCollected.image}
                    alt="雨后竹影与暖灯"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
                    sizes="(max-width: 768px) 100vw, 560px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ink/12 via-transparent to-warm-white/5" />
                </div>
              </div>

              <div className="md:pr-4">
                <p className="whitespace-pre-line font-fangsong text-[18px] leading-[2] text-ink/86 md:text-xl">
                  {momentCollected.body}
                </p>
                <p className="mt-8 text-sm tracking-[0.12em] text-tea/65">
                  {momentCollected.date}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Category entries */}
      <section className="bg-warm-white px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-content">
          <FadeIn>
            <h2 className="text-center font-serif text-3xl text-ink">情绪入口</h2>
          </FadeIn>

          <div className="mt-14 space-y-8">
            <FadeIn delay={0.05}>
              <Link
                href={emotionEntries.featured.href}
                className="group relative block min-h-[360px] overflow-hidden rounded-lg shadow-card md:min-h-[460px]"
              >
                <Image
                  src={emotionEntries.featured.image}
                  alt={emotionEntries.featured.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.025] group-hover:brightness-105"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/65 via-ink/24 to-transparent" />
                <div className="absolute inset-0 rounded-lg border border-warm-white/15" />
                <div className="absolute bottom-0 left-0 max-w-2xl p-7 text-warm-white md:p-10">
                  <p className="font-display text-xs tracking-[0.28em] text-warm-white/75">
                    {emotionEntries.featured.eyebrow}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl leading-tight md:text-5xl">
                    {emotionEntries.featured.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-warm-white/88 md:text-base">
                    {emotionEntries.featured.description}
                  </p>
                  <span className="mt-6 inline-block text-sm tracking-wide text-warm-white/90">
                    {emotionEntries.featured.action}
                  </span>
                </div>
              </Link>
            </FadeIn>

            <div className="grid gap-6 md:grid-cols-3">
              {emotionEntries.secondary.map((entry, i) => (
                <FadeIn key={entry.href} delay={0.12 + i * 0.08}>
                  <Link
                    href={entry.href}
                    className="group relative block min-h-[300px] overflow-hidden rounded-lg shadow-card md:min-h-[340px]"
                  >
                    <Image
                      src={entry.image}
                      alt={entry.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-ink/68 via-ink/26 to-transparent" />
                    <div className="absolute inset-0 rounded-lg border border-warm-white/15" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-warm-white">
                      <p className="font-display text-[11px] tracking-[0.24em] text-warm-white/72">
                        {entry.eyebrow}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl leading-tight">{entry.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-warm-white/86">
                        {entry.description}
                      </p>
                      <span className="mt-5 inline-block text-sm tracking-wide text-warm-white/90">
                        {entry.action}
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.25}>
              <p className="mx-auto max-w-xl whitespace-pre-line pt-8 text-center font-fangsong text-base leading-loose text-tea/70 md:text-lg">
                {`有些画面不是被创作出来的。
它们只是刚好，被慢慢想起来。`}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Recent notes */}
      <section className="px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-content">
          <FadeIn>
            <div className="text-center">
              <p className="font-display text-xs tracking-[0.28em] text-warm-gray/75">
                Recent Notes
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">最近记录</h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {homeRecentNotes.map((note, i) => (
              <FadeIn key={note.title} delay={i * 0.08}>
                <article className="h-full rounded-lg border border-divider/45 bg-warm-white/80 p-7 shadow-[0_10px_30px_rgba(80,64,42,0.04)]">
                  <p className="text-xs tracking-[0.18em] text-tea/70">{note.tag}</p>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-ink">
                    {note.title}
                  </h3>
                  <p className="mt-5 whitespace-pre-line text-[15px] leading-[1.9] text-ink/78">
                    {note.body}
                  </p>
                  <p className="mt-8 text-xs tracking-[0.12em] text-warm-gray">
                    {note.date}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured works */}
      <section className="bg-warm-white px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-content">
          <FadeIn>
            <div className="text-center">
              <p className="font-display text-xs tracking-[0.28em] text-warm-gray/75">
                Selected Works
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">精选作品</h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {homeSelectedWorks.map((work, i) => (
              <FadeIn key={work.title} delay={i * 0.08}>
                <article className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/18 via-transparent to-transparent" />
                  </div>
                  <div className="pt-5">
                    <p className="text-xs tracking-[0.16em] text-tea/70">{work.category}</p>
                    <h3 className="mt-2 font-serif text-xl text-ink">{work.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                      {work.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
