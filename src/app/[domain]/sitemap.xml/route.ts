import { NextRequest } from "next/server";
import { getAuthorPaths, getPublicationsPaths, getStoriesPaths } from "../../utils";
import { NextApiRequest } from "next";

// Add the static pages paths here
const staticPages = ["publications", "about"];

function generateSiteMap(
  host: string,
  publications: { publication: string }[],
  stories: { publication: string; story: string }[],
  authors: { contributor: string }[]
) {
  const root = `https://` + host;

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${root}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     ${staticPages
       .map((path) => {
         return `
              <url>
                  <loc>${root}/${path}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
              </url>
      `;
       })
       .join("")}
     
     ${publications
       .map(({ publication }) => {
         return `
            <url>
                <loc>${root}/${publication}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
     `;
       })
       .join("")}
        ${stories
          .map(({ publication, story }) => {
            return `
                <url>
                    <loc>${root}/${publication}/${story}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                </url>
            `;
          })
          .join("")}
        ${authors
          .map(({ contributor }) => {
            return `
                <url>
                    <loc>${root}/thought-leader/${contributor}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                </url>
            `;
          })
          .join("")}
   </urlset>
 `;
}

export async function GET(request: NextRequest, { params: { domain } }: { params: { domain: string } }) {
  // We generate the XML sitemap with the stories and publications data

  const sitemap = generateSiteMap(domain, await getPublicationsPaths(domain), await getStoriesPaths(domain), await getAuthorPaths(domain));

  return new Response(sitemap, {
    headers: {
      "content-type": "text/xml;charset=UTF-8",
    },
  });
}
