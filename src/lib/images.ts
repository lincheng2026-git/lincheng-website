/**
 * 站点图片统一使用本地 /public/images，避免外链失效或国内无法访问。
 */
export const images = {
  hero: "/images/hero.jpg",
  inspiration: "/images/tea.jpg",
  cat: "/images/cat.jpg",
  cat2: "/images/cat2.jpg",
  tea: "/images/tea.jpg",
  desk: "/images/desk.jpg",
  ceramic: "/images/ceramic.jpg",
  notebook: "/images/notebook.jpg",
  abstract: "/images/abstract.jpg",
  porcelain: "/images/porcelain.jpg",
  homeHero: "/images/slots/home-hero.jpg",
  homeTodayInspiration: "/images/slots/home-today-inspiration.jpg",
  homeCategoryAi: "/images/slots/home-category-ai.jpg",
  homeCategoryCats: "/images/slots/home-category-cats.jpg",
  homeCategorySong: "/images/slots/home-category-song.jpg",
  homeCategoryHandbook: "/images/slots/home-category-handbook.jpg",
  journalRainBambooCover: "/images/slots/journal-rain-bamboo-cover.jpg",
  journalCatWindowCover: "/images/slots/journal-cat-window-cover.jpg",
  journalAiMoodCover: "/images/slots/journal-ai-mood-cover.jpg",
  journalTeaRoomCover: "/images/slots/journal-tea-room-cover.jpg",
  galleryRainWindow: "/images/slots/gallery-rain-window.jpg",
  galleryTeaRoom: "/images/slots/gallery-tea-room.jpg",
  galleryCourtyard: "/images/slots/gallery-courtyard.jpg",
  galleryDesk: "/images/slots/gallery-desk.jpg",
  galleryGhibliAfternoon: "/images/slots/gallery-ghibli-afternoon.jpg",
  galleryMoonBamboo: "/images/slots/gallery-moon-bamboo.jpg",
  catDiaryLazy: "/images/slots/cat-diary-lazy.jpg",
  catDiaryCurious: "/images/slots/cat-diary-curious.jpg",
  catObserveGaze: "/images/slots/cat-observe-gaze.jpg",
  aiCaseRainTeaBefore: "/images/slots/ai-case-rain-tea-before.jpg",
  aiCaseRainTeaAfter: "/images/slots/ai-case-rain-tea-after.jpg",
  aiTimelineRainTea: "/images/slots/ai-timeline-rain-tea.jpg",
  aiTimelineBamboo: "/images/slots/ai-timeline-bamboo.jpg",
  aiTimelineCatWindow: "/images/slots/ai-timeline-cat-window.jpg",
  aboutHeroDeskTea: "/images/slots/about-hero-desk-tea.jpg",
  aboutPortraitCat: "/images/slots/about-portrait-cat.jpg",
  xiaohongshuQr: "/images/contact/xiaohongshu-qr.jpg",
  songSpaceCourtyard: "/images/slots/song-space-courtyard.jpg",
  songSpaceBambooRain: "/images/slots/song-space-bamboo-rain.jpg",
  handbookWarmAutumnDesk: "/images/slots/handbook-warm-autumn-desk.jpg",
  handbookWarmAutumnNotebook: "/images/slots/handbook-warm-autumn-notebook.jpg",
  handbookWinterTea: "/images/slots/handbook-winter-tea.jpg",
  ceramicsCeladonBowl: "/images/slots/ceramics-celadon-bowl.jpg",
  ceramicsWhiteVase: "/images/slots/ceramics-white-vase.jpg",
  ceramicsLotusCup: "/images/slots/ceramics-lotus-cup.jpg",
} as const;

export type ImageKey = keyof typeof images;

export function img(key: ImageKey): string {
  return images[key];
}
