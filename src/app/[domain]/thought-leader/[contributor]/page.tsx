import { fetchAuthor, fetchPublications, fetchStories, fetchStory, getAuthorPaths, getStoriesPaths, parseStory } from "@/app/utils";
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
  return getAuthorPaths();
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { contributor: string; domain: string } }): Promise<Metadata> {
  const author = await fetchAuthor(params.contributor);

  return {
    title: author?.name || "Doable",
    openGraph: {
      title: author?.name || "Doable",
      type: "profile",
      url: `https://${params.domain}/thought-leader/${params.contributor}`,
      images: [
        {
          url: author?.imageUrl || "",
          alt: author?.name || "",
        },
      ],
      description: author?.about || "",
      username: author?.Slug || "",
      siteName: "Doable",
      firstName: author?.name?.split(" ")[0] || "",
      lastName: author?.name?.split(" ")[1] || "",
      locale: "en_US",
    },
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    description: author?.about || "",
    image: author.imageUrl,
    dateCreated: author?.["Created Date"] || "",
    dateModified: author?.["Modified Date"] || "",
    mainEntity: {
      "@type": author?.authorIsPersonOrOrganization === "person" ? "Person" : "Organization",
      name: author?.name || "Doable",
      alternateName: author?.Slug,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ jsonLd }) }} />
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
    </>
  );
}
