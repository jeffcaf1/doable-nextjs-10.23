import Layout from "@/lib/Layouts/PublicationsLayout";
import { fetchPublications, fetchPublicationsByDomain, parsePublication } from "../../utils";

// Update this function to change the metadata of the page
export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "Doable's News Publications",
    description: "Explore Doable's publications and industry news sources. Our content covers breaking news and insights from top thought leaders across nearly all B2B and consumer interests.",
    openGraph: {
      type: "website",
      url: `https://${params.domain}/publications`,
      siteName: "Doable",
      locale: "en_US",
      title: "Doable's News Publications",
      images: ["/images/doable-og-image.png"],
      description: "Explore Doable's publications and industry news sources. Our content covers breaking news and insights from top thought leaders across nearly all B2B and consumer interests.",
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
