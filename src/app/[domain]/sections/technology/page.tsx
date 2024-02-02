import Layout from "@/lib/Layouts/SectionsLayout";
import { fetchPublications, fetchStories, getDomainPaths, parseStory } from "@/app/utils";

export async function generateStaticParams() {
  return getDomainPaths();
}

// Update this function to change the metadata of the page
export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "Technology Stories",
    description: "Doable is a B2B thought leadership platform for trade news and insights across every industry. We offer our readers and viewers breaking news and insights from the top minds in technology, wellness, finance, and beyond.",
    openGraph: {
      type: "website",
      url: `https://${params.domain}`,
      siteName: "Doable",
      title: "Doable",
      images: ["/images/doable-og-image.png"],
      locale: "en_US",
      description: "Doable is a B2B thought leadership platform for trade news and insights across every industry. We offer our readers and viewers breaking news and insights from the top minds in technology, wellness, finance, and beyond.",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@doablehq',
    }
  };
}

export default async function Technology({ params: { } }: { params: { domain: string } }) {
  /* Render default page for now, if the domain is alldoable.com */

  const featuredStories = await fetchStories({
    customConstraints: [
      {
        key: "primaryParentSectionAsText",
        constraint_type: "equals",
        value: "Technology",
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
            title: "Technology Stories",
            articles: featuredStoriesWithParentPublication.map((story) => parseStory(story, story?.publication?.Slug || "")),
            variant: "small",
          },
        ]}
      />
    </main>
  );
}