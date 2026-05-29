import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { images } from "@/lib/images";

const colorNotes = [
  {
    title: "最近喜欢月白",
    image: images.handbookWinterTea,
    body: `以前一直觉得：
白色就是白色。

后来买纸的时候才发现，
有些白会刺眼，
有些白会很安静。

现在更喜欢这种：
像旧纸一样的白。

晚上开暖灯的时候，
看起来会很舒服。`,
  },
  {
    title: "开始喜欢旧木头",
    image: images.aboutHeroDeskTea,
    body: `新的木头太亮了。

旧一点的颜色，
反而会让人放松。

有时候坐下来以后，
会发现：
其实是那些不太新的东西，
让空间更安静。`,
  },
  {
    title: "关于留白",
    image: images.handbookWarmAutumnDesk,
    body: `以前总想把桌子摆满。

后来开始慢慢减少东西。

现在反而会故意空出来一点位置。

有时候空着，
人会比较容易静下来。`,
  },
];

const smallColors = [
  { name: "月白", hex: "#E8E4DC", note: "像晚上开暖灯时的旧纸颜色。" },
  { name: "墨青", hex: "#3D4F4F", note: "有点像下雨天窗外的空气。" },
  { name: "茶白", hex: "#F5F0E8", note: "很像泡久一点的茶汤。" },
  { name: "松烟", hex: "#4A4A48", note: "像旧木头和阴天。" },
];

const lifeNotes = [
  {
    title: "雨天开一盏暖灯",
    body: `最近开始发现：

很多喜欢的氛围，
其实不复杂。

只是：
灯暖一点、
颜色安静一点、
东西少一点。`,
  },
  {
    title: "开始减少装饰",
    body: `以前总觉得：
房间里东西越多越丰富。

后来开始慢慢减少。

空一点以后，
反而更舒服。`,
  },
  {
    title: "为什么开始喜欢旧东西",
    body: `新的东西太“完整”。

旧一点的纸、
木头、
器物，

反而会有种：
已经陪了人很久的感觉。`,
  },
];

const collectedThings = [
  {
    title: "旧纸页",
    note: "偏黄一点，不刺眼，写字的时候会让人放慢。",
    image: images.handbookWarmAutumnNotebook,
  },
  {
    title: "茶杯和木桌",
    note: "木头颜色不要太亮，茶杯放上去才会安静。",
    image: images.ceramicsCeladonBowl,
  },
  {
    title: "暖灯角落",
    note: "灯光柔一点，桌面上的东西好像也会变温和。",
    image: images.galleryDesk,
  },
  {
    title: "窗边灰绿",
    note: "雨天看起来最舒服，像空气里带了一点水气。",
    image: images.songSpaceBambooRain,
  },
];

export default function SongAestheticPage() {
  return (
    <div className="paper-texture pb-24">
      <PageHeader
        title="宋式美学"
        subtitle="Song Aesthetic"
        description={`最近开始越来越喜欢：
旧纸的颜色、暖灯下的木头，
以及那些很安静的东西。`}
      />

      <div className="mx-auto max-w-content px-5 md:px-10 lg:px-20">
        <FadeIn>
          <section className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-display text-xs tracking-[0.24em] text-warm-gray/75">
                Color Notes
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">最近喜欢的颜色</h2>
              <p className="mt-6 text-[17px] leading-[1.9] text-ink/82">
                现在看颜色，越来越少想它“高级不高级”。更在意的是：放在桌上、纸上、灯下的时候，会不会让人觉得舒服。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card sm:col-span-2">
                <Image
                  src={images.handbookWinterTea}
                  alt="纸张、茶与暖光"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 620px"
                />
              </div>
              {smallColors.slice(0, 2).map((color) => (
                <div key={color.name} className="rounded-lg border border-divider/40 bg-warm-white p-4">
                  <span
                    className="block h-8 w-12 rounded border border-divider/30"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="mt-3 font-serif text-lg text-ink">{color.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-warm-gray">{color.note}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <div className="mt-24 space-y-20">
          {colorNotes.map((note, index) => (
            <FadeIn key={note.title} delay={index * 0.08}>
              <section
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
                  <Image
                    src={note.image}
                    alt={note.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </div>
                <div className="lg:px-8">
                  <h2 className="font-serif text-3xl text-ink">{note.title}</h2>
                  <p className="mt-6 whitespace-pre-line text-[17px] leading-[1.9] text-ink/84">
                    {note.body}
                  </p>
                </div>
              </section>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-24">
          <section className="rounded-lg bg-warm-white/75 p-7 shadow-[0_12px_34px_rgba(80,64,42,0.045)] md:p-9">
            <h2 className="text-center font-serif text-3xl text-ink">最近喜欢的颜色</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {smallColors.map((color) => (
                <div key={color.name} className="rounded-lg border border-divider/40 bg-paper/70 p-5">
                  <span
                    className="block h-7 w-12 rounded border border-divider/30"
                    style={{ backgroundColor: color.hex }}
                  />
                  <p className="mt-4 font-serif text-xl text-ink">{color.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">{color.note}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-24">
          <section>
            <div className="text-center">
              <p className="font-display text-xs tracking-[0.24em] text-warm-gray/75">
                Daily Changes
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">生活里的宋式感</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {lifeNotes.map((note) => (
                <article
                  key={note.title}
                  className="rounded-lg border border-divider/40 bg-warm-white/70 p-7"
                >
                  <h3 className="font-serif text-2xl text-ink">{note.title}</h3>
                  <p className="mt-5 whitespace-pre-line text-[15px] leading-[1.9] text-ink/80">
                    {note.body}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn className="mt-24">
          <section>
            <div className="text-center">
              <p className="font-display text-xs tracking-[0.24em] text-warm-gray/75">
                Small Collections
              </p>
              <h2 className="mt-3 font-serif text-3xl text-ink">最近收藏</h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {collectedThings.map((item) => (
                <article key={item.title} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 25vw"
                    />
                  </div>
                  <h3 className="mt-4 font-serif text-xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">{item.note}</p>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
