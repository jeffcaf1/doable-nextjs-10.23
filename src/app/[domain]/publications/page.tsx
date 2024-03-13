import Layout from "@/lib/Layouts/PublicationsLayout";
import { fetchPublications, fetchPublicationsByDomain, parsePublication } from "../../utils";

// Update this function to change the metadata of the page
export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "Doable | News Publications",
    description: "Explore Doable's news publications B2B thought leadership, trends, and insights across every industry. We offer stories from the top minds in technology, wellness, finance, and beyond.",
    openGraph: {
      type: "website",
      url: `https://${params.domain}/publications`,
      siteName: "Doable",
      locale: "en_US",
      title: "Doable | News Publications",
      images: ["https://default-doable.b-cdn.net/live-site-images/doable-og-image.png"],
      description: "Explore Doable's news publications B2B thought leadership, trends, and insights across every industry. We offer stories from the top minds in technology, wellness, finance, and beyond.",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@doablehq',
    }
  };
}

export default async function Publications({ params }: { params: { domain: string } }) {
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
        value: params.domain,
      },
    ],
  });

  const allPublications = await fetchPublicationsByDomain(params.domain);

  return (
    <main className="page-main">
      <Layout
        sections={[
          {
            title: "Featured Publications",
            articles: featuredPublications.map(parsePublication),
            variant: "small",
          },
          {
            title: "All Publications",
            articles: allPublications.map(parsePublication),
            variant: "small",
          },
        ]}
      />
    </main>
  );
}
