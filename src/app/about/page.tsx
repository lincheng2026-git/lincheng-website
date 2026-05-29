import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { FadeIn } from "@/components/FadeIn";
import { CopyButton } from "@/components/CopyButton";
import { siteConfig } from "@/lib/data";
import { images } from "@/lib/images";

export const metadata = { title: "关于" };

export default function AboutPage() {
  return (
    <div className="pb-20">
      <div className="relative h-[50vh] min-h-[320px] w-full">
        <Image
          src={images.aboutHeroDeskTea}
          alt="书桌与茶具"
          fill
          className="object-cover brightness-90"
          priority
          sizes="100vw"
        />
      </div>

      <FadeIn className="mx-auto max-w-content px-5 pt-16 text-center md:px-10 lg:px-20">
        <h1 className="font-serif text-4xl text-ink md:text-5xl">Hi，我是林澄。</h1>
      </FadeIn>

      <div className="mx-auto mt-16 max-w-content px-5 md:px-10 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <section className="mb-10 space-y-6 text-[17px] leading-[1.9] text-ink/90">
              <p>我喜欢一切安静而有温度的东西。</p>
              <p>
                猫咪睡觉时的光影、旧器物留下的痕迹、手帐里的纸张气味、东方审美里那种克制又温柔的留白……这些细小的东西，总会让我慢慢停下来。
              </p>
              <p>
                后来开始接触 AI，我发现它很像另一种表达方式。它不是替代创作，而是帮我一点点把脑海里的画面重新整理出来。
              </p>
              <p>这个网站更像是我的个人记录。</p>
              <p>
                我会把喜欢的画面、做过的内容、偶尔的灵感，还有那些说不清原因却很打动我的瞬间，慢慢放进这里。
              </p>
              <p>不一定标准，也不一定成熟。</p>
              <p>只是想认真留下自己喜欢过的东西。</p>
            </section>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-card">
              <Image
                src={images.aboutPortraitCat}
                alt="猫咪"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-2">
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-ink">喜欢什么 / 怎样的生活</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  { icon: "🐱", label: "猫咪与暖灯" },
                  { icon: "🏺", label: "器物与茶" },
                  { icon: "📔", label: "手帐与慢记录" },
                  { icon: "🎋", label: "宋式留白" },
                  { icon: "✨", label: "AI 视觉创作" },
                  { icon: "🌧", label: "雨夜与竹影" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg bg-warm-white p-6 text-center shadow-card"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="mt-3 text-sm text-warm-gray">{item.label}</p>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="mt-20 lg:col-span-2">
          <section
            id="contact"
            className="mx-auto max-w-2xl rounded-lg border border-divider/50 bg-warm-white p-8 text-center shadow-card md:p-12"
          >
            <p className="font-display text-sm tracking-[0.3em] text-warm-gray">Contact</p>
            <h2 className="mt-3 font-serif text-3xl text-ink">联系方式</h2>
            <p className="mt-4 text-sm leading-relaxed text-warm-gray">
              欢迎来到这里，也欢迎聊聊那些安静的事。
            </p>

            <div className="mt-10">
              <p className="text-sm text-warm-gray">小红书</p>
              <p className="mt-2 font-serif text-xl text-ink">{siteConfig.xiaohongshu}</p>
              <p className="mt-2 text-xs text-warm-gray">扫码关注 · 日常更新</p>
              <div className="mx-auto mt-5 w-44 overflow-hidden rounded-lg border border-divider/40 bg-white p-3 shadow-sm">
                <Image
                  src={images.xiaohongshuQr}
                  alt="小红书二维码"
                  width={320}
                  height={437}
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="mt-10 border-t border-divider/30 pt-10">
              <p className="text-sm text-warm-gray">邮箱</p>
              <CopyButton
                text={siteConfig.email}
                className="mt-2 font-serif text-xl text-tea transition hover:opacity-80"
              >
                {siteConfig.email}
              </CopyButton>
            </div>

            <div className="mt-10 border-t border-divider/30 pt-10">
              <p className="text-sm text-warm-gray">合作说明</p>
              <p className="mt-4 text-left text-[15px] leading-relaxed text-ink/85">
                接受图文创作、AI 视觉、生活方式类合作。请通过邮件联系，简述需求与期望风格，我会在安静的时候认真回复。
              </p>
            </div>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
