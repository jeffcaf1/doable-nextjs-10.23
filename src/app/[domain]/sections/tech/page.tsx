import Layout from "@/lib/Layouts/SectionsLayout";
import { fetchPublications, parsePublication } from "../../../utils";


// Update this function to change the metadata of the page
export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "Technology | Doable",
    description: "Explore Doable's publications and industry news sources. Our content covers breaking news and insights from top thought leaders across nearly all B2B and consumer interests.",
    openGraph: {
      type: "website",
      url: `https://${params.domain}/tech`,
      siteName: "Doable",
      locale: "en_US",
      title: "Technology | Doable",
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
        key: "primaryParentSectionAsText",
        constraint_type: "equals",
        value: "Technology",
      },
      {
        key: "domain",
        constraint_type: "equals",
        value: params.domain,
      },
    ],
  });

  return (
    <main className="page-main">
      <Layout
        sections={[
          {
            title: "Technology Publications",
            articles: featuredPublications.map(parsePublication),
            variant: "small",
          },
        ]}
      />
    </main>
  );
}