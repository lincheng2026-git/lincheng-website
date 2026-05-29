import { NextResponse } from "next/server";
import {
  checkNotionDatabase,
  databaseIds,
  getCatsDailyFromNotion,
  getHomeFeaturedFromNotion,
  getObjectsCollectionFromNotion,
  notionToken,
} from "@/lib/notion";

export const dynamic = "force-dynamic";

export async function GET() {
  const [home, cats, objects, parsedHome, parsedCats, parsedObjects] = await Promise.all([
    checkNotionDatabase(databaseIds.home),
    checkNotionDatabase(databaseIds.cats),
    checkNotionDatabase(databaseIds.objects),
    getHomeFeaturedFromNotion(),
    getCatsDailyFromNotion(),
    getObjectsCollectionFromNotion(),
  ]);

  return NextResponse.json({
    tokenConfigured: Boolean(notionToken),
    databases: {
      home,
      cats,
      objects,
    },
    usableItems: {
      home: parsedHome.length,
      cats: parsedCats.length,
      objects: parsedObjects.length,
    },
  });
}
