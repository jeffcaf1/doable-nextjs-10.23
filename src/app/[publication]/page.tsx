import Template0 from "@/lib/ArticleLayouts/Template-0/ArticleLayout";
import Layout from "@/lib/Layouts/PublicationLayout";
import { Metadata } from "next";
import { headers } from "next/headers";
import { fetchPublications, fetchStories, getPublicationsPaths, parsePublication, parseStory } from "../utils";

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

export async function generateStaticParams() {
  const publications = await getPublicationsPaths();

  // All the stories can also be accessed via the publication route if the domain a custom domain and for the story's publication
  const stories = (await fetchStories()).map((story) => ({ publication: story.Slug }));

  return [...publications, ...stories];
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { publication: string } }): Promise<Metadata> {
  // This route will be a publication if the publication is not same as the current publication domain
  const publications = await fetchPublications({
    customConstraints: [
      {
        key: "Slug",
        constraint_type: "equals",
        value: params.publication,
      },
    ],
  });

  // This route will be a story if the story's publication is same as the current publication domain
  const story = await fetchStories({
    customConstraints: [
      {
        key: "Slug",
        constraint_type: "equals",
        value: params.publication,
      },
    ],
  });

  const currentPublication = publications[0];
  const currentStory = story[0];

  const isStory = !!currentStory;

  return {
    title: isStory ? currentStory?.titlePrimary || "" : currentPublication?.primaryTitle || "",
    description: isStory ? currentStory?.description || "" : currentPublication?.about || "",
  };
}

export default async function Publication({ params }: { params: { publication: string } }) {
  // Current domain
  const domain = headers().get("host")?.split(":")[0];

  // Check if the current route is a story
  const currentStory = await fetchStories({
    customConstraints: [
      {
        key: "Slug",
        constraint_type: "equals",
        value: params.publication,
      },
    ],
  }).then((res) => res[0]);

  const isStory = !!currentStory;

  // Render the story if the current route is a story
  if (isStory) {
    // Fetch the related stories
    const relatedArticles = await Promise.all(
      (currentStory?.relatedStories || [])?.map(
        async (article) => (await fetchStories({ customConstraints: [{ key: "_id", constraint_type: "equals", value: article }] }))[0]
      )
    );

    return (
      <main className="article-main">
        <Template0
          story={currentStory}
          sections={[
            {
              title: "Related Stories",
              articles: relatedArticles.map((article) => parseStory(article, params.publication, domain!)),
              variant: "small",
            },
          ]}
        />
      </main>
    );
  }

  // If the current route is not a story, then it is a publication

  // Fetch the current publication
  const currentPublication = await fetchPublications({
    customConstraints: [
      {
        key: "Slug",
        constraint_type: "equals",
        value: params.publication,
      },
    ],
  }).then((res) => res[0]);

  if (!currentPublication) {
    return <h1>Publication not found</h1>;
  }

  // Fetch all stories for the current publication
  const stories = await fetchStories({
    customConstraints: [
      {
        key: "parentPublication",
        constraint_type: "equals",
        value: currentPublication?._id,
      },
    ],
  });

  // Fetch all related publications for the current publication
  const relatedPublications = (
    await Promise.all(
      (currentPublication?.relatedPublications || [])?.map(
        async (publication) => (await fetchPublications({ customConstraints: [{ key: "_id", constraint_type: "equals", value: publication }] }))[0]
      )
    )
  ).filter((publication) => !!publication);

  return (
    <main className="page-main">
      <Layout
        sections={[
          {
            title: "Featured Stories",
            articles: stories.slice(0, 3).map((story) => parseStory(story, currentPublication?.Slug || "", currentPublication?.domain)),
            variant: "large",
          },
          {
            title: "All Stories",
            articles: stories.map((story) => parseStory(story, currentPublication?.Slug || "", currentPublication?.domain)),
            variant: "small",
          },
          {
            title: "Related Publications",
            articles: relatedPublications.map((publication) => parsePublication(publication)),
            variant: "small",
          },
        ]}
        title={currentPublication?.primaryTitle}
        description={currentPublication?.about}
      />
    </main>
  );
}
