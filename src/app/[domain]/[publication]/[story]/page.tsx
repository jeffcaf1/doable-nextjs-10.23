import { fetchPublications, fetchStories, fetchStory, getStoriesPaths, parseStory } from "@/app/utils";
import Template0 from "@/lib/ArticleLayouts/Template-0/ArticleLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";

/**
 * Because static paths are not revalidated, we need to set this to true.
 * This will generate the new paths on demand.
 * Because Next.js will cache everything, the API will only be called once.
 */
export const dynamicParams = true;

/**
 This function is called at build time to generate the static paths.
 Important: This function won't be called when revalidating.
*/
// export const generateStaticParams = getStoriesPaths();
export async function generateStaticParams() {
  return getStoriesPaths();
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { story: string; publication: string; domain: string } }): Promise<Metadata> {
  const story = await fetchStory(params.story);

  return {
    title: story?.titlePrimary || "",
    description: story?.description || "",
    alternates: {
      canonical: `https://${params.domain}/${params.publication}/${params.story}`,
    },
    openGraph: {
      title: story?.titlePrimary || "",
      description: story?.description || "",
      type: "article",
      url: `https://${params.domain}/${params.publication}/${params.story}`,
      images: [
        {
          url: story?.heroImageUrl || "",
          alt: story?.heroImageAltText || "",
        },
      ],
      siteName: "OutLever | News + Thought Leadership",
      publishedTime: story?.["Created Date"] || "",
      modifiedTime: story?.["Modified Date"] || "",
      locale: "en_US",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@OutLeverhq',
    }
  };
}

export default async function Story({ params }: { params: { story: string; publication: string; domain: string } }) {
  const story = await fetchStory(params.story);

  const currentPublication = await fetchPublications({
    customConstraints: [
      {
        key: "Slug",
        constraint_type: "equals",
        value: params.publication,
      },
    ],
  });

  if (currentPublication[0]?.domain !== params.domain) {
    return notFound();
  }

  // Fetch the related stories
  const relatedArticles = await Promise.all(
    (story?.relatedStories || [])?.map(
      async (article) => (await fetchStories({ customConstraints: [{ key: "_id", constraint_type: "equals", value: article }] }))[0]
    )
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: story?.titlePrimary || "",
    image: [story?.heroImageUrl || ""],
    isAccessibleForFree: true,
    datePublished: story?.["Created Date"] || "",
    dateModified: story?.["Modified Date"] || "",
    author: [
      {
        "@type": story?.authorIsPersonOrOrganization === "person" ? "Person" : "Organization",
        name: story?.authorName || "",
        url: `https://${params.domain}/thought-leader/${story?.authorProfileSlug || ""}`,
      },
    ],
    description: story?.description || "",
    articleSection: story?.parentPublicationTitle || "",
    publisher: [
      {
        "@type": "Organization",
        "name": "OutLever | News + Thought Leadership",
        "url": "https://outlever.com",
      },
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://default-OutLever.b-cdn.net/live-site-images/OutLever-og-image.png",
      "width": 660,
      "height": 1220
    }
  };

 // Await the result of Template0
 const template = await Template0({
  story,
  sections: [
    {
      title: "Related Stories",
      articles: relatedArticles.map((article) => parseStory(article, params.publication)),
      variant: "small",
    },
  ]
});

return (
  <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ jsonLd }) }} />
    <main className="article-main">
      {template} {/* Render the Template0 here */}
    </main>
  </>
);
}