import { NextResponse } from "next/server";
import {
  checkNotionDatabase,
  databaseIds,
  getCatsDailyFromNotion,
  getHomeFeaturedFromNotion,
  getObjectsCollectionFromNotion,
  getSiteModulesFromNotion,
  notionToken,
} from "@/lib/notion";

export const dynamic = "force-dynamic";

export async function GET() {
  const [home, cats, objects, siteModules, parsedHome, parsedCats, parsedObjects, handbookModules, ceramicsModules] = await Promise.all([
    checkNotionDatabase(databaseIds.home),
    checkNotionDatabase(databaseIds.cats),
    checkNotionDatabase(databaseIds.objects),
    checkNotionDatabase(databaseIds.siteModules),
    getHomeFeaturedFromNotion(),
    getCatsDailyFromNotion(),
    getObjectsCollectionFromNotion(),
    getSiteModulesFromNotion("手帐小记"),
    getSiteModulesFromNotion("东方器物"),
  ]);

  return NextResponse.json({
    tokenConfigured: Boolean(notionToken),
    databases: {
      home,
      cats,
      objects,
      siteModules,
    },
    usableItems: {
      home: parsedHome.length,
      cats: parsedCats.length,
      objects: parsedObjects.length,
      handbookModules: handbookModules.length,
      ceramicsModules: ceramicsModules.length,
    },
  });
}
