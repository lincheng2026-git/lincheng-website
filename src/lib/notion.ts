type NotionProperty = {
  type?: string;
  title?: Array<{ plain_text?: string }>;
  rich_text?: Array<{ plain_text?: string }>;
  select?: { name?: string } | null;
  multi_select?: Array<{ name?: string }>;
  date?: { start?: string } | null;
  checkbox?: boolean;
  number?: number | null;
  url?: string | null;
  files?: Array<{
    type?: "file" | "external";
    name?: string;
    file?: { url?: string };
    external?: { url?: string };
  }>;
};

type NotionPage = {
  id: string;
  properties: Record<string, NotionProperty>;
};

type NotionQueryResponse = {
  results?: NotionPage[];
};

export type NotionHomeFeatured = {
  title: string;
  module: string;
  source: string;
  summary: string;
  href: string;
  action: string;
  date: string;
  enabled: boolean;
  order: number;
  image: string;
};

export type NotionCatDaily = {
  title: string;
  cat: "baibai" | "banban" | "together";
  catLabel: string;
  category: string;
  summary: string;
  date: string;
  showOnHome: boolean;
  order: number;
  image: string;
};

export type NotionObjectItem = {
  name: string;
  type: string;
  status: string;
  focus: string;
  note: string;
  date: string;
  visible: boolean;
  order: number;
  image: string;
};

export type NotionSiteModule = {
  title: string;
  page: string;
  module: string;
  eyebrow: string;
  body: string;
  tags: string[];
  href: string;
  action: string;
  date: string;
  enabled: boolean;
  order: number;
  image: string;
};

export const notionToken = process.env.NOTION_TOKEN;

export const databaseIds = {
  home: process.env.NOTION_HOME_FEATURED_DATABASE_ID,
  cats: process.env.NOTION_CATS_DAILY_DATABASE_ID,
  objects: process.env.NOTION_OBJECTS_COLLECTION_DATABASE_ID,
  siteModules: process.env.NOTION_SITE_MODULES_DATABASE_ID,
};

function plainText(items?: Array<{ plain_text?: string }>) {
  return items?.map((item) => item.plain_text || "").join("").trim() || "";
}

function title(page: NotionPage, key: string) {
  return plainText(page.properties[key]?.title);
}

function text(page: NotionPage, key: string) {
  return plainText(page.properties[key]?.rich_text);
}

function firstText(page: NotionPage, keys: string[]) {
  for (const key of keys) {
    const value = text(page, key);

    if (value) return value;
  }

  return "";
}

function firstSelect(page: NotionPage, keys: string[]) {
  for (const key of keys) {
    const value = select(page, key);

    if (value) return value;
  }

  return "";
}

function select(page: NotionPage, key: string) {
  return page.properties[key]?.select?.name || "";
}

function multiSelect(page: NotionPage, key: string) {
  return page.properties[key]?.multi_select?.map((item) => item.name).filter(Boolean).join("、") || "";
}

function multiSelectArray(page: NotionPage, key: string) {
  return page.properties[key]?.multi_select?.flatMap((item) => (item.name ? [item.name] : [])) || [];
}

function date(page: NotionPage, key: string) {
  const value = page.properties[key]?.date?.start || "";
  return value.replaceAll("-", ".");
}

function checkbox(page: NotionPage, key: string) {
  return Boolean(page.properties[key]?.checkbox);
}

function number(page: NotionPage, key: string, fallback: number) {
  return page.properties[key]?.number ?? fallback;
}

function url(page: NotionPage, key: string) {
  return page.properties[key]?.url || "";
}

function firstUrl(page: NotionPage, keys: string[]) {
  for (const key of keys) {
    const value = url(page, key);

    if (value) return value;
  }

  return "";
}

function fileUrl(page: NotionPage, key: string) {
  const file = page.properties[key]?.files?.[0];
  const rawUrl = file?.file?.url || file?.external?.url || "";

  if (!rawUrl) return "";

  return `/api/notion-image?url=${encodeURIComponent(rawUrl)}`;
}

async function queryDatabase(databaseId?: string) {
  if (!notionToken || !databaseId) return [];

  try {
    const request = (body: Record<string, unknown>) =>
      fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${notionToken}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify(body),
        cache: "no-store",
      });

    let response = await request({
      sorts: [{ property: "排序", direction: "ascending" }],
    });

    if (!response.ok) {
      response = await request({});
    }

    if (!response.ok) return [];

    const data = (await response.json()) as NotionQueryResponse;
    return data.results || [];
  } catch {
    return [];
  }
}

export async function checkNotionDatabase(databaseId?: string) {
  if (!notionToken || !databaseId) {
    return {
      configured: Boolean(notionToken && databaseId),
      ok: false,
      count: 0,
      error: !notionToken ? "Missing NOTION_TOKEN" : "Missing database id",
    };
  }

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${notionToken}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({ page_size: 10 }),
      cache: "no-store",
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        configured: true,
        ok: false,
        count: 0,
        error: data?.message || `Notion API ${response.status}`,
      };
    }

    return {
      configured: true,
      ok: true,
      count: Array.isArray(data?.results) ? data.results.length : 0,
      error: null,
    };
  } catch (error) {
    return {
      configured: true,
      ok: false,
      count: 0,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function getHomeFeaturedFromNotion() {
  const pages = await queryDatabase(databaseIds.home);

  return pages
    .map((page, index): NotionHomeFeatured => ({
      title: title(page, "标题"),
      module: select(page, "模块"),
      source: firstSelect(page, ["来源栏目", "英文小字", "分类", "标签"]),
      summary: firstText(page, ["摘要", "卡片描述文字", "描述", "内容", "正文"]),
      href: firstUrl(page, ["链接", "跳转链接", "页面链接"]),
      action: firstText(page, ["按钮", "按钮文字", "链接文字"]),
      date: date(page, "日期"),
      enabled: checkbox(page, "是否启用"),
      order: number(page, "排序", index + 1),
      image: fileUrl(page, "图片"),
    }))
    .filter((item) => item.enabled && item.title)
    .sort((a, b) => a.order - b.order);
}

function normalizeCat(value: string): NotionCatDaily["cat"] {
  if (value.includes("白白")) return "baibai";
  if (value.includes("斑斑")) return "banban";
  return "together";
}

export async function getCatsDailyFromNotion() {
  const pages = await queryDatabase(databaseIds.cats);

  return pages
    .map((page, index): NotionCatDaily => {
      const catLabel = select(page, "猫咪") || multiSelect(page, "猫咪") || "两只猫";

      return {
        title: title(page, "标题"),
        cat: normalizeCat(catLabel),
        catLabel,
        category: select(page, "分类"),
        summary: text(page, "摘要"),
        date: date(page, "日期"),
        showOnHome: checkbox(page, "是否首页显示"),
        order: number(page, "排序", index + 1),
        image: fileUrl(page, "图片"),
      };
    })
    .filter((item) => item.title && item.summary)
    .sort((a, b) => a.order - b.order);
}

export async function getObjectsCollectionFromNotion() {
  const pages = await queryDatabase(databaseIds.objects);

  return pages
    .map((page, index): NotionObjectItem => ({
      name: title(page, "名称"),
      type: select(page, "类型"),
      status: select(page, "状态"),
      focus: multiSelect(page, "关注点"),
      note: text(page, "备注"),
      date: date(page, "日期"),
      visible: checkbox(page, "是否展示"),
      order: number(page, "排序", index + 1),
      image: fileUrl(page, "图片"),
    }))
    .filter((item) => item.visible && item.name)
    .sort((a, b) => a.order - b.order);
}

export async function getSiteModulesFromNotion(pageName: string) {
  const pages = await queryDatabase(databaseIds.siteModules);

  return pages
    .map((page, index): NotionSiteModule => ({
      title: title(page, "标题"),
      page: firstSelect(page, ["页面", "所属页面"]),
      module: firstSelect(page, ["模块", "模块名称"]),
      eyebrow: firstText(page, ["英文小字", "副标题", "小标题"]) || firstSelect(page, ["英文小字", "副标题", "小标题"]),
      body: firstText(page, ["内容", "正文", "摘要", "描述", "卡片描述文字"]),
      tags: multiSelectArray(page, "标签"),
      href: firstUrl(page, ["链接", "跳转链接", "页面链接"]),
      action: firstText(page, ["按钮", "按钮文字", "链接文字"]),
      date: date(page, "日期"),
      enabled: checkbox(page, "是否启用") || checkbox(page, "是否显示"),
      order: number(page, "排序", index + 1),
      image: fileUrl(page, "图片"),
    }))
    .filter((item) => item.enabled && item.page === pageName && item.title)
    .sort((a, b) => a.order - b.order);
}
