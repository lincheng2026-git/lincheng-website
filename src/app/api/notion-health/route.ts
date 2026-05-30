import { NextResponse } from "next/server";
import {
  checkNotionDatabase,
  databaseIds,
  getAestheticAiModulesFromNotion,
  getCatsDailyFromNotion,
  getHomeFeaturedFromNotion,
  getObjectsCollectionFromNotion,
  getSiteModulesFromNotion,
  notionToken,
} from "@/lib/notion";

export const dynamic = "force-dynamic";

export async function GET() {
  const [
    home,
    cats,
    objects,
    siteModules,
    aestheticAi,
    parsedHome,
    parsedCats,
    parsedObjects,
    handbookModules,
    ceramicsModules,
    songModules,
    aiModules,
  ] = await Promise.all([
    checkNotionDatabase(databaseIds.home),
    checkNotionDatabase(databaseIds.cats),
    checkNotionDatabase(databaseIds.objects),
    checkNotionDatabase(databaseIds.siteModules),
    checkNotionDatabase(databaseIds.aestheticAi),
    getHomeFeaturedFromNotion(),
    getCatsDailyFromNotion(),
    getObjectsCollectionFromNotion(),
    getSiteModulesFromNotion("手帐小记"),
    getSiteModulesFromNotion("东方器物"),
    getAestheticAiModulesFromNotion("宋式美学"),
    getAestheticAiModulesFromNotion("AI灵感手记"),
  ]);

  return NextResponse.json({
    tokenConfigured: Boolean(notionToken),
    databases: {
      home,
      cats,
      objects,
      siteModules,
      aestheticAi,
    },
    usableItems: {
      home: parsedHome.length,
      cats: parsedCats.length,
      objects: parsedObjects.length,
      handbookModules: handbookModules.length,
      ceramicsModules: ceramicsModules.length,
      songModules: songModules.length,
      aiModules: aiModules.length,
    },
  });
}
