import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

// Use this route to manually revalidate the cache for specific pages or lists
export async function GET(request: NextRequest) {
  // A basic authentication mechanism to prevent unauthorized revalidation
  if (request.nextUrl.searchParams.get("secret") !== process.env.REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Revalidate all cached data
  revalidateTag("all");

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  });
}

// This route will be used by the webhook sent by the CMS to revalidate the cache
export async function POST(request: NextRequest) {
  /* 
    Tags:

    story: Revalidate all stories list
    profile: Revalidate all authors/thought-leaders list
    publication: Revalidate all publications list

    To revalidate a specific story or thought-leaders page use the slug as the tag
  */

  // Check if the request has the correct secret
  if (request.headers.get("api-key") !== process.env.WEBHOOK_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  const payload = await request.json();

  const tags = payload.tags as string[];
  const slugs = payload.slugs as string[];

  tags.forEach((tag) => {
    revalidateTag(tag);
  });

  slugs.forEach((slug) => {
    revalidateTag(slug);
  });

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  });
}
