import { fetchAuthor, fetchPublications, fetchStories, fetchStory, getStoriesPaths, parseStory } from "@/app/utils";
import Layout from "@/lib/Layouts/AuthorLayout";
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

export default async function Contributor({ params }: { params: { contributor: string; domain: string } }) {
  const author = await fetchAuthor(params.contributor);

  if (!author) {
    return <div>Contributor Not found</div>;
  }

  // Fetch the related stories
  const featuredArticles = await Promise.all(
    (author?.featuredStories || [])?.map(
      async (article) => (await fetchStories({ customConstraints: [{ key: "_id", constraint_type: "equals", value: article }] }))[0]
    )
  );

  // Fetch all stories for the author
  const stories = await fetchStories({
    customConstraints: [
      {
        key: "authorProfileSlug",
        constraint_type: "equals",
        value: params.contributor,
      },
    ],
  });

  // Fetch the story's parent publication
  const featuredArticlesWithParentPublication = await Promise.all(
    featuredArticles.map(async (story) => {
      const publication = await fetchPublications({
        customConstraints: [
          {
            key: "_id",
            constraint_type: "equals",
            value: story?.parentPublication,
          },
        ],
      });

      return { ...story, parentPublicationSlug: publication[0]?.Slug };
    })
  );

  const storiesWithParentPublication = await Promise.all(
    stories.map(async (story) => {
      const publication = await fetchPublications({
        customConstraints: [
          {
            key: "_id",
            constraint_type: "equals",
            value: story?.parentPublication,
          },
        ],
      });

      return { ...story, parentPublicationSlug: publication[0]?.Slug };
    })
  );

  return (
    <main className="author-main">
      <Layout
        sections={[
          {
            title: "Featured Stories",
            articles: featuredArticlesWithParentPublication.slice(0, 3).map((story) => parseStory(story, story?.parentPublicationSlug || "")),
            variant: "large",
          },
          {
            title: "Stories",
            articles: storiesWithParentPublication.map((story) => parseStory(story, story?.parentPublicationSlug || "")),
            variant: "small",
          },
        ]}
        title={author?.name}
        description={author?.about}
        titleAndCompany={author?.titleAndCompany}
        linkedInUrl={author?.linkedInUrl}
        twitterUrl={author?.twitterUrl}
        websiteUrl={author?.website}
      />
    </main>
  );
}
