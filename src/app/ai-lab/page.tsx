import { PageHeader } from "@/components/PageHeader";
import { AiLabPageClient } from "@/components/AiLabPageClient";
import { aiLabCases, aiTimeline } from "@/lib/data";
import { getAestheticAiModulesFromNotion } from "@/lib/notion";

export const dynamic = "force-dynamic";

const fallbackNote = `后来慢慢发现：

AI并不真正理解“猫”。

它理解的是：

光线、空气、情绪、
以及人想留住的那种温度。

当提示词从：

“画一只猫”

变成：

“午后、暖灯、慵懒、陪伴感”

画面才终于开始有了呼吸。`;

export default async function AiLabPage() {
  const notionModules = await getAestheticAiModulesFromNotion("AI灵感手记");
  const getModule = (module: string) => notionModules.filter((item) => item.module === module);
  const pageHeader = getModule("页面标题")[0];
  const beforeAfterIntro = getModule("BeforeAfter说明")[0];
  const timelineIntro = getModule("时间轴说明")[0];
  const note = getModule("创作小记")[0];
  const notionCases = getModule("BeforeAfter");
  const notionTimeline = getModule("创作时间轴");

  const cases = notionCases.length
    ? notionCases.map((item, index) => {
        const fallback = aiLabCases[index % aiLabCases.length];

        return {
          id: `${item.title}-${index}`,
          title: item.title,
          before: item.image || fallback.before,
          after: item.image2 || fallback.after,
          date: item.date || fallback.date,
          note: item.body || fallback.note,
        };
      })
    : aiLabCases;

  const timeline = notionTimeline.length
    ? notionTimeline.map((item) => ({
        date: item.date || item.eyebrow,
        title: item.title,
        detail: item.body,
      }))
    : aiTimeline;

  return (
    <div className="pb-20">
      <PageHeader
        title={pageHeader?.title || "AI灵感手记"}
        subtitle={pageHeader?.eyebrow || "AI Lab"}
        description={pageHeader?.body || "记录 AI 创作成长与个人风格形成轨迹"}
      />

      <AiLabPageClient
        cases={cases}
        timeline={timeline}
        beforeAfterTitle={beforeAfterIntro?.title || "Before / After"}
        beforeAfterDescription={beforeAfterIntro?.body || "拖动滑块对比初稿与成品"}
        timelineTitle={timelineIntro?.title || "创作时间轴"}
        noteTitle={note?.title || "创作小记"}
        noteBody={note?.body || fallbackNote}
      />
    </div>
  );
}
