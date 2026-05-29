import { images } from "./images";

export interface GalleryItem {
  id: string;
  title: string;
  category: "cat" | "song" | "oriental" | "retro";
  categoryLabel: string;
  src: string;
  resolution: string;
  orientation?: "portrait" | "landscape" | "wide";
}

export const siteConfig = {
  name: "林澄",
  nameEn: "Lin Cheng",
  tagline: "收藏那些安静而温柔的事物。",
  description:
    "这里记录：猫咪、器物、手帐、东方旧梦，以及 AI 创作下慢慢形成的个人审美。",
  email: "525547499@qq.com",
  xiaohongshu: "@林澄",
};

/** 顶部主导航保留真实生活栏目，馆藏收纳视觉与审美内容。 */
export const navLinks = [
  { href: "/", label: "首页" },
  { href: "/cats", label: "猫咪" },
  { href: "/handbook", label: "手帐" },
  { href: "/ceramics", label: "器物" },
  { href: "/song-aesthetic", label: "宋式美学" },
  { href: "/ai-lab", label: "AI灵感手记" },
  { href: "/gallery", label: "壁纸收藏" },
  { href: "/about", label: "关于" },
];

export const primaryNav = navLinks.slice(0, 4);
export const moreNav = navLinks.slice(4, -1);
export const aboutNav = navLinks[navLinks.length - 1];

export const todayInspiration = {
  quote: "今天喜欢雨后的竹影与暖灯",
  image: images.homeTodayInspiration,
  caption: "2024.11 · 竹影 · 暖灯",
};

export const homeCategories = [
  {
    href: "/ai-lab",
    title: "AI灵感手记",
    subtitle: "AI Lab",
    description: "情绪与审美的视觉探索",
    image: images.homeCategoryAi,
  },
  {
    href: "/cats",
    title: "猫咪宇宙",
    subtitle: "Cats Universe",
    description: "吉卜力风与暖灯下的猫咪日常",
    image: images.homeCategoryCats,
  },
  {
    href: "/song-aesthetic",
    title: "宋式美学",
    subtitle: "Song Aesthetic",
    description: "月白、墨青与东方留白",
    image: images.homeCategorySong,
  },
  {
    href: "/handbook",
    title: "手帐小记",
    subtitle: "Handbook Lab",
    description: "贴纸、纸张与生活记录",
    image: images.homeCategoryHandbook,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "cat-9333",
    title: "暖光窗边",
    category: "cat",
    categoryLabel: "猫咪壁纸",
    src: "/images/wallpapers/cats/IMG_9333.PNG",
    resolution: "904×1740",
    orientation: "portrait",
  },
  {
    id: "cat-9334",
    title: "午后小憩",
    category: "cat",
    categoryLabel: "猫咪壁纸",
    src: "/images/wallpapers/cats/IMG_9334.PNG",
    resolution: "941×1672",
    orientation: "portrait",
  },
  {
    id: "cat-9336",
    title: "暖灯木地板",
    category: "cat",
    categoryLabel: "猫咪壁纸",
    src: "/images/wallpapers/cats/IMG_9336.PNG",
    resolution: "941×1672",
    orientation: "portrait",
  },
  {
    id: "cat-9338",
    title: "窗前安睡",
    category: "cat",
    categoryLabel: "猫咪壁纸",
    src: "/images/wallpapers/cats/IMG_9338.PNG",
    resolution: "941×1672",
    orientation: "portrait",
  },
  {
    id: "cat-9341",
    title: "椅上日光",
    category: "cat",
    categoryLabel: "猫咪壁纸",
    src: "/images/wallpapers/cats/IMG_9341.PNG",
    resolution: "852×1846",
    orientation: "portrait",
  },
  {
    id: "cat-9366",
    title: "猫咪与黄昏",
    category: "cat",
    categoryLabel: "猫咪壁纸",
    src: "/images/wallpapers/cats/IMG_9366.PNG",
    resolution: "853×1844",
    orientation: "portrait",
  },
  {
    id: "cat-9367",
    title: "暖色午睡",
    category: "cat",
    categoryLabel: "猫咪壁纸",
    src: "/images/wallpapers/cats/IMG_9367.PNG",
    resolution: "853×1844",
    orientation: "portrait",
  },
  {
    id: "cat-9368",
    title: "静静晒太阳",
    category: "cat",
    categoryLabel: "猫咪壁纸",
    src: "/images/wallpapers/cats/IMG_9368.PNG",
    resolution: "853×1844",
    orientation: "portrait",
  },
  {
    id: "cat-9370",
    title: "猫咪慢时光",
    category: "cat",
    categoryLabel: "猫咪壁纸",
    src: "/images/wallpapers/cats/IMG_9370.PNG",
    resolution: "823×1912",
    orientation: "portrait",
  },
  {
    id: "song-9263",
    title: "雨后茶室",
    category: "song",
    categoryLabel: "宋式壁纸",
    src: "/images/wallpapers/song/IMG_9263.PNG",
    resolution: "941×1672",
    orientation: "portrait",
  },
  {
    id: "song-9264",
    title: "竹影旧院",
    category: "song",
    categoryLabel: "宋式壁纸",
    src: "/images/wallpapers/song/IMG_9264.PNG",
    resolution: "941×1672",
    orientation: "portrait",
  },
  {
    id: "song-9265",
    title: "青绿山居",
    category: "song",
    categoryLabel: "宋式壁纸",
    src: "/images/wallpapers/song/IMG_9265.PNG",
    resolution: "1448×1086",
    orientation: "landscape",
  },
  {
    id: "song-9266",
    title: "茶烟与远山",
    category: "song",
    categoryLabel: "宋式壁纸",
    src: "/images/wallpapers/song/IMG_9266.PNG",
    resolution: "1448×1086",
    orientation: "landscape",
  },
  {
    id: "song-9321",
    title: "庭院暮色",
    category: "song",
    categoryLabel: "宋式壁纸",
    src: "/images/wallpapers/song/IMG_9321.PNG",
    resolution: "1448×1086",
    orientation: "landscape",
  },
  {
    id: "song-9322",
    title: "水岸暖灯",
    category: "song",
    categoryLabel: "宋式壁纸",
    src: "/images/wallpapers/song/IMG_9322.PNG",
    resolution: "1672×941",
    orientation: "wide",
  },
  {
    id: "song-9323",
    title: "月下江南",
    category: "song",
    categoryLabel: "宋式壁纸",
    src: "/images/wallpapers/song/IMG_9323.PNG",
    resolution: "1672×941",
    orientation: "wide",
  },
  {
    id: "song-9324",
    title: "竹林晨雾",
    category: "song",
    categoryLabel: "宋式壁纸",
    src: "/images/wallpapers/song/IMG_9324.PNG",
    resolution: "1672×941",
    orientation: "wide",
  },
  {
    id: "song-9325",
    title: "旧梦山水",
    category: "song",
    categoryLabel: "宋式壁纸",
    src: "/images/wallpapers/song/IMG_9325.PNG",
    resolution: "1672×941",
    orientation: "wide",
  },
  {
    id: "song-9326",
    title: "灯火归舟",
    category: "song",
    categoryLabel: "宋式壁纸",
    src: "/images/wallpapers/song/IMG_9326.PNG",
    resolution: "1672×941",
    orientation: "wide",
  },
];

export const songColors = [
  { name: "月白", hex: "#E8E4DC", poem: "月色入户，欣然起行" },
  { name: "墨青", hex: "#3D4F4F", poem: "远山如黛，近水含烟" },
  { name: "松烟", hex: "#4A4A48", poem: "松间明月，照见初心" },
  { name: "茶白", hex: "#F5F0E8", poem: "茶烟一缕，静观浮沉" },
];

export const catWallpapers = galleryItems.filter((g) => g.category === "cat");
export const catDiaries = [
  {
    date: "2024-11-15",
    mood: "慵懒",
    text: "它趴在阳光里，像一块融化的奶油。世界慢了下来，我也慢了下来。",
    images: [images.catDiaryLazy],
  },
  {
    date: "2024-11-08",
    mood: "好奇",
    text: "窗外有鸟，它的尾巴摇成了问号。",
    images: [images.catDiaryCurious],
  },
];

export const aiLabCases = [
  {
    id: "1",
    title: "雨夜茶室",
    before: images.aiCaseRainTeaBefore,
    after: images.aiCaseRainTeaAfter,
    date: "2024-11-10",
    note: "调整光影层次，增加雨夜氛围与暖灯对比",
  },
];

export const aiTimeline = [
  {
    date: "2026-5-25｜灵感出现",
    title: "《想做一张“猫咪替人下班”的图》",
    thumb: images.galleryRainWindow,
    detail: `最近总觉得：

猫比人更懂休息。

于是开始想做一张：

“猫已经躺平了，人类却还在加班”的画面。

最开始其实只有一句话：

“猫咪该休息了，人类怎么还在加班。”`,
  },
  {
    date: "2026-5-25｜第一次尝试",
    title: "《第一版太像普通宠物照》",
    thumb: images.galleryGhibliAfternoon,
    detail: `第一次生成时：

AI更像是在“拍猫”。

画面虽然可爱，
但没有情绪。

后来发现：

问题不是“猫不够好看”，
而是提示词太像：

一只猫
可爱猫咪
宠物摄影

这种词只会生成：

“宠物照片”。`,
  },
  {
    date: "2026-5-25｜开始加入情绪词",
    title: "《AI开始理解“疲惫感”》",
    thumb: images.catDiaryLazy,
    detail: `后来开始修改提示词：

加入：

午后
慵懒
暖色灯光
安静
柔和空气感

AI第一次开始出现：

“陪伴感”。`,
  },
  {
    date: "2026-5-25｜调整构图",
    title: "《猫窝太抢画面》",
    thumb: images.catDiaryCurious,
    detail: `这一版的问题是：

猫窝颜色太亮。

视觉重心被分散。

于是降低了：

饱和度
对比度
玩具感

开始往：

“生活感”

调整。`,
  },
  {
    date: "2026-5-25｜最终完成",
    title: "《终于有了想要的呼吸感》",
    thumb: images.catObserveGaze,
    detail: `最后一版终于像：

真正会陪人下班的猫。

我发现：

AI不是在“画物体”。

而是在理解：

情绪。`,
  },
];
