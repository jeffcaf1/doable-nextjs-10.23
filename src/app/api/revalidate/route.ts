import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: NextRequest) {
  revalidateTag("publication");
  revalidateTag("story");
  console.log("revalidated", "publication", "story");
  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    cache: "no-store",
  });
}
