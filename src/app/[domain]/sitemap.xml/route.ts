import { NextRequest } from "next/server";
import { getPublicationsPaths, getStoriesPaths } from "../../utils";
import { NextApiRequest } from "next";

function generateSiteMap(host: string, publications: { publication: string }[], stories: { publication: string; story: string }[]) {
  const root = `https://` + host;

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${root}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     <url>
       <loc>${root}/publications</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
     </url>
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
   </urlset>
 `;
}

export async function GET(request: NextRequest, { params: { domain } }: { params: { domain: string } }) {
  // We generate the XML sitemap with the stories and publications data
  const sitemap = generateSiteMap(domain, await getPublicationsPaths(), await getStoriesPaths());

  return new Response(sitemap, {
    headers: {
      "content-type": "text/xml;charset=UTF-8",
    },
  });
}
