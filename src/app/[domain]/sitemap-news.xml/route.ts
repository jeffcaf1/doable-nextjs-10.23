import { NextRequest } from "next/server";
import { fetchPublications, fetchStories, fetchStory, getAuthorPaths, getPublicationsPaths, getStoriesPaths } from "../../utils";
import { NextApiRequest } from "next";

async function generateSiteMap(host: string) {
  const root = `https://` + host;

  const stories = await fetchStories({
    start: 0,
    customConstraints: [
      {
        constraint_type: "greater than",
        key: "Modified Date",
        // Make sure the articles are not older than 2 days
        value: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
    ],
  });

  const publications = await fetchPublications();

  const getFormattedDate = (date: string) => {
    const dateObj = new Date(date);

    // Format date to YYYY-MM-DDThh:mm:ssTZD (e.g. 2021-08-24T10:00:00+01:00)
    return dateObj.toISOString().split(".")[0] + "+00:00";
  };

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
        ${stories
          .map((story) => {
            return `
                <url>
                    <loc>${root}/${publications.find(({ _id }) => _id === story.parentPublication)?.Slug}/${story.Slug}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>

                    <news:news>
                      <news:publication>
                        <news:name>${story.parentPublicationTitle}</news:name>
                        <news:language>en</news:language>
                      </news:publication>
                      <news:publication_date>${getFormattedDate(story["Created Date"])}</news:publication_date>
                      <news:title>${story.titlePrimary}</news:title>
                    </news:news>
                </url>
            `;
          })
          .join("")}
        
   </urlset>
 `;
}

export async function GET(request: NextRequest, { params: { domain } }: { params: { domain: string } }) {
  // We generate the XML sitemap with the stories and publications data

  const sitemap = await generateSiteMap(domain);

  return new Response(sitemap, {
    headers: {
      "content-type": "text/xml;charset=UTF-8",
    },
  });
}
