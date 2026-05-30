import { CatsPageClient, type CatNote } from "@/components/CatsPageClient";
import { getCatsDailyFromNotion } from "@/lib/notion";

export const metadata = { title: "猫咪宇宙" };
export const dynamic = "force-dynamic";

const fallbackCatNotes: CatNote[] = [
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

const fallbackImages = [
  "/images/wallpapers/cats/IMG_9336.PNG",
  "/images/wallpapers/cats/IMG_9341.PNG",
  "/images/wallpapers/cats/IMG_9366.PNG",
  "/images/wallpapers/cats/IMG_9338.PNG",
  "/images/wallpapers/cats/IMG_9367.PNG",
  "/images/wallpapers/cats/IMG_9368.PNG",
  "/images/wallpapers/cats/IMG_9370.PNG",
  "/images/slots/home-category-cats.jpg",
];

export default async function CatsPage() {
  const notionNotes = await getCatsDailyFromNotion();
  const notes = notionNotes.length
    ? notionNotes.map((note, index): CatNote => ({
        cat: note.cat,
        title: note.title,
        date: note.date,
        image: note.image || fallbackImages[index % fallbackImages.length],
        body: note.summary,
      }))
    : fallbackCatNotes;

  return <CatsPageClient notes={notes} />;
}
