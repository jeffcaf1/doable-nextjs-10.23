import { getPublicationsPaths, getStoriesPaths } from "../utils";

const ROOT = "https://www.xdoable.com";

function generateSiteMap(publications: { publication: string }[], stories: { publication: string; story: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${ROOT}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     <url>
       <loc>${ROOT}/publications</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
     </url>
     ${publications
       .map(({ publication }) => {
         return `
            <url>
                <loc>${ROOT}/${publication}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
     `;
       })
       .join("")}
        ${stories
          .map(({ publication, story }) => {
            return `
                <url>
                    <loc>${ROOT}/${publication}/${story}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                </url>
            `;
          })
          .join("")}
   </urlset>
 `;
}

export async function GET() {
  // We generate the XML sitemap with the stories and publications data
  const sitemap = generateSiteMap(await getPublicationsPaths(), await getStoriesPaths());

  return new Response(sitemap, {
    headers: {
      "content-type": "text/xml;charset=UTF-8",
    },
  });
}
