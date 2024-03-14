import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

// Use this route to manually revalidate the cache for specific pages or lists
export async function GET(request: NextRequest) {
  // A basic authentication mechanism to prevent unauthorized revalidation
  if (request.nextUrl.searchParams.get("secret") !== process.env.REVALIDATE_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Revalidate all publications, stories, and profiles list
  revalidateTag("publications");
  revalidateTag("stories");
  revalidateTag("profiles");

  // If query includes a slug, revalidate the specific page
  const slug = request.nextUrl.searchParams.get("slug");
  if (slug) {
    revalidateTag(slug);
  }

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
    cache: "no-store",
  });
}

// This route will be used by the webhook sent by the CMS to revalidate the cache
export async function POST(request: NextRequest) {
  /* 
    Tags:

    stories: Revalidate all stories list
    profiles: Revalidate all authors/thought-leaders list
    publications: Revalidate all publications list

    To revalidate a specific story or thought-leaders page use the slug as the tag
  */

  // Implement webhook authentication here

  // Implement webhook logic here. The tag will be determined by the webhook payload.
  const tag = "publications";
  revalidateTag(tag);

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  });
}
