import { fetchPublications, fetchStories, fetchStory, getStoriesPaths, parseStory } from "@/app/utils";
import Template0 from "@/lib/ArticleLayouts/Template-0/ArticleLayout";
import { Metadata } from "next";

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
export async function generateMetadata({ params }: { params: { story: string; publication: string } }): Promise<Metadata> {
  const story = await fetchStory(params.story);

  return {
    title: story?.titlePrimary || "",
    description: story?.description || "",
  };
}

export default async function Story({ params }: { params: { story: string; publication: string } }) {
  const story = await fetchStory(params.story);

  const publication =
    (await fetchPublications({
      customConstraints: [
        {
          key: "Slug",
          constraint_type: "equals",
          value: params.publication,
        },
      ],
    }).then((res) => res[0])) || {};

  // Fetch the related stories
  const relatedArticles = await Promise.all(
    (story?.relatedStories || [])?.map(
      async (article) => (await fetchStories({ customConstraints: [{ key: "_id", constraint_type: "equals", value: article }] }))[0]
    )
  );

  return (
    <main className="article-main">
      <Template0
        story={story}
        sections={[
          {
            title: "Related Stories",
            articles: relatedArticles.map((article) => parseStory(article, params.publication, publication?.domain)),
            variant: "small",
          },
        ]}
      />
    </main>
  );
}
