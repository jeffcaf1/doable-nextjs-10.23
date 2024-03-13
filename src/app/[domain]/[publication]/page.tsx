import Layout from "@/lib/Layouts/PublicationLayout";
import { Metadata } from "next";
import { fetchPublications, fetchStories, getPublicationsPaths, parsePublication, parseStory } from "../../utils";
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

export async function generateStaticParams() {
  return getPublicationsPaths();
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { publication: string; domain: string } }): Promise<Metadata> {
  const publications = await fetchPublications({
    customConstraints: [
      {
        key: "Slug",
        constraint_type: "equals",
        value: params.publication,
      },
      {
        key: "domain",
        constraint_type: "equals",
        value: params.domain,
      },
    ],
  });

  const currentPublication = publications[0];

  return {
    title: currentPublication?.primaryTitle || "",
    description: currentPublication?.about || "",
    openGraph: {
      title: currentPublication?.primaryTitle || "",
      description: currentPublication?.about || "",
      type: "website",
      url: `https://${params.domain}/${params.publication}`,
      images: [
        {
          url: currentPublication?.heroImageUrl || "",
          // alt: currentPublication?.heroImageAltText || "",
        },
      ],
      siteName: "Doable",
      locale: "en_US",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@doablehq',
    }
  };
}

export default async function Publication({ params }: { params: { publication: string; domain: string } }) {
  // Fetch the current publication
  const currentPublication = await fetchPublications({
    customConstraints: [
      {
        key: "Slug",
        constraint_type: "equals",
        value: params.publication,
      },
      {
        key: "domain",
        constraint_type: "equals",
        value: params.domain,
      },
    ],
  }).then((res) => res[0]);

  if (!currentPublication) {
    // Show 404 page
    notFound();
  }
  
   // Extract the featured stories IDs from the currentPublication
   const featuredStoriesIds = currentPublication?.featuredStories || [];

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
  // const relatedPublications = (
  //   await Promise.all(
  //     (currentPublication?.relatedPublications || [])?.map(
  //        async (publication) => (await fetchPublications({ customConstraints: [{ key: "_id", constraint_type: "equals", value: publication }] }))[0]
  //      )
  //  )
  // ).filter((publication) => !!publication);

  // Filter the stories to include only the ones that are featured
  const featuredStories = stories.filter(story => featuredStoriesIds.includes(story._id));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `https://www.alldoable.com/${currentPublication?.Slug}`,
        "url": `https://www.alldoable.com/${currentPublication?.Slug}`,
        "name": `Doable | ${currentPublication?.primaryTitle} News`,
        "about": { "@id": "https://www.alldoable.com/about" },
        "description": `${currentPublication?.about}`,
        "breadcrumb": { "@id": "https://alldoable.com/" },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebSite",
        "@id": "https://alldoable.com/#website",
        "url": "https://alldoable.com/",
        "name": "Doable",
        "description": "Doable is a news platform for B2B thought leadership, trends, and insights across every industry. We offer stories from the top minds in technology, wellness, finance, and beyond.",
        "publisher": { "@id": "https://alldoable.com/" },
        "alternateName": ["Doable News", "doable"]
      },
      {
        "@type": "Organization",
        "@id": "https://alldoable.com/",
        "name": "Doable",
        "alternateName": "TC",
        "url": "https://alldoable.com/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://default-doable.b-cdn.net/live-site-images/doable-og-image.png",
          "url": "https://default-doable.b-cdn.net/live-site-images/doable-og-image.png",
          "contentUrl": "https://default-doable.b-cdn.net/live-site-images/doable-og-image.png",
          "width": 660,
          "height": 1220,
          "caption": "Doable News Logo"
        },
        "image": { "@id": "https://default-doable.b-cdn.net/live-site-images/doable-og-image.png" },
        "sameAs": ["https://www.linkedin.com/company/xdoable/"]
      }
    ]
  };

  return (
    <section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ jsonLd }) }} />
   <main className="page-main">
      <Layout
        sections={[
          {
            title: "Featured Stories",
            articles: featuredStories.map((story) => parseStory(story, currentPublication?.Slug || "")),
            variant: "small",
          },
          {
            title: "All Stories",
            articles: stories.map((story) => parseStory(story, currentPublication?.Slug || "")),
            variant: "small",
          },
        ]}
        title={currentPublication?.primaryTitle}
        description={currentPublication?.about}
      />
    </main>
    </section>
  );
}