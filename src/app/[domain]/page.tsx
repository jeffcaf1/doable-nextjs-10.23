import Layout from "@/lib/Layouts/HomepageLayout";
import { fetchPublications, fetchStories, getDomainPaths, getPublicationsPaths, getStoriesPaths, parsePublication, parseStory } from "../utils";

export async function generateStaticParams() {
  return getDomainPaths();
}

export default async function Home({ params: { domain } }: { params: { domain: string } }) {
  /* Render default homepage for now, if the domain is alldoable.com */

  // Fetch the top 3 publications
  const featuredPublications = await fetchPublications({
    customConstraints: [
      {
        key: "isFeaturedTop3",
        constraint_type: "equals",
        value: "true",
      },
      {
        key: "domain",
        constraint_type: "equals",
        value: domain,
      },
    ],
  });

  const featuredStories = await fetchStories({
    customConstraints: [
      {
        key: "featuredOnHomepage",
        constraint_type: "equals",
        value: "true",
      },
    ],
  });

  const featuredStoriesWithParentPublication = await Promise.all(
    featuredStories.map(async (story) => {
      const publication = await fetchPublications({
        customConstraints: [
          {
            key: "_id",
            constraint_type: "equals",
            value: story.parentPublication,
          },
        ],
      });

      return {
        ...story,
        publication: publication[0],
      };
    })
  );

  return (
    <main className="homepage-main">
      <Layout
        sections={[
          {
            title: "Featured Publications",
            articles: featuredPublications.map(parsePublication),
            variant: "small",
          },
          {
            title: "Featured Stories",
            articles: featuredStoriesWithParentPublication.map((story) => parseStory(story, story?.publication?.Slug || "")),
            variant: "small",
          },
        ]}
      />
    </main>
  );
}
