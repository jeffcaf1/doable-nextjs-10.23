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
    "/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  const hostname = req.headers.get("host")!.replace(".localhost:54321", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  const searchParams = req.nextUrl.searchParams.toString();

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

  // if hostname is root domain (localhost:3000, doable.com, www.doable.com) rewrite to / or /path
  if (hostname === "localhost:54321" || hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN || hostname === `www.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    return NextResponse.rewrite(new URL(path === "/" ? "" : path, req.url));
  }

  // if the path starts with /images then rewrite to /_static/images
  if (path.startsWith("/images")) {
    return NextResponse.rewrite(
      new URL(
        `${path}`,
        process.env.NODE_ENV === "development" ? `http://${process.env.NEXT_PUBLIC_ROOT_DOMAIN_DEV}` : `https://${process.env.NEXT_PUBLIC_ROOT_DOMAIN_DEV}`
      )
    );
  }

  // rewrite everything else to `/[publication]/[story] dynamic route
  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
}

// myblog.blog.com => xdoable.com/myblog.blog.com
// myblog.blog.com/story => xdoable.com/myblog.blog.com/story  -- xdable.com/serivice-transformer/story
// myblog.blog.com/images/logo.svg => xdoable.com/images/logo.svg

// publisher.xdoable.com => *.xdoable.com  => server
//
