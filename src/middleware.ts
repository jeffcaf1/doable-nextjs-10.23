import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_static/|images/|assets/|_vercel|[\\w-]+\\\\w+).*)",
    "/sitemap.xml",
  ],
};

// Add any sites you want to ignored by the middleware
const sitesToIgnore = ["/robots.txt"];

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (sitesToIgnore.includes(url.pathname)) {
    return NextResponse.next();
  }

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:54321)
  const hostname = req.headers
    .get("host")!
    .replace(`${process.env.NEXT_PUBLIC_ROOT_DOMAIN_DEV}`, `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)!
    .replace(`www.outlever.com`, `${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`)!;

  const searchParams = req.nextUrl.searchParams.toString();

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

  // rewrite everything else to `/[publication]/[story] dynamic route
  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
}
