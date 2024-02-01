import Layout from "@/lib/Layouts/PublicationsLayout";
import { fetchPublications, fetchPublicationsByDomain, parsePublication } from "../../utils";

// Update this function to change the metadata of the page
export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "Doable's News Publications",
    description: "List of B2B trade publications and industry news hosted by Doable",
    openGraph: {
      type: "website",
      url: `https://${params.domain}/publications`,
      siteName: "Doable",
      locale: "en_US",
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Doable News Publications',
      description: 'List of B2B trade publications and industry news hosted by Doable',
      images: ['https://nextjs.org/og.png'], // Must be an absolute URL
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
