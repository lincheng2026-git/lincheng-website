import { NextResponse } from "next/server";
import { checkNotionDatabase, databaseIds, notionToken } from "@/lib/notion";

export const dynamic = "force-dynamic";

export async function GET() {
  const [home, cats, objects] = await Promise.all([
    checkNotionDatabase(databaseIds.home),
    checkNotionDatabase(databaseIds.cats),
    checkNotionDatabase(databaseIds.objects),
  ]);

  return NextResponse.json({
    tokenConfigured: Boolean(notionToken),
    databases: {
      home,
      cats,
      objects,
    },
  });
}
