import Layout from "@/lib/Layouts/HomepageLayout";
import { fetchPublications, fetchStories, getDomainPaths, getPublicationsPaths, getStoriesPaths, parsePublication, parseStory } from "../utils";

export async function generateStaticParams() {
  return getDomainPaths();
}

// Update this function to change the metadata of the page
export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
   title: "OutLever | News + Thought Leadership",
   description: "OutLever is a news platform for thought leadership, trends, and industry insights. We offer stories from top minds in technology, wellness, finance, and beyond.",
   alternates: {
    canonical: `https://${params.domain}`,
  },
   openGraph: {
      type: "website",
      url: `https://${params.domain}`,
      siteName: "OutLever News | Insights Amplified",
      title: "OutLever News | Insights Amplified",
      images: ["https://default-OutLever.b-cdn.net/live-site-images/OutLever-og-image.png"],
      locale: "en_US",
      description: "OutLever is a news platform for thought leadership, trends, and industry insights. We offer stories from top minds in technology, wellness, finance, and beyond.",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@OutLeverhq',
    }
  };
}

export default async function Home({ params: { domain } }: { params: { domain: string } }) {
  /* Render default homepage for now, if the domain is outlever.com */

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
            articles: featuredPublications.slice().reverse().map(parsePublication),
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
