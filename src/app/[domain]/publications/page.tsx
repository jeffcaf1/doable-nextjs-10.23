import Layout from "@/lib/Layouts/PublicationsLayout";
import { fetchPublications, fetchPublicationsByDomain, parsePublication } from "../../utils";

// Update this function to change the metadata of the page
export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "OutLever | All Publications",
    description: "Explore OutLever's news publications covering B2B thought leadership, trends, and insights across every industry. We offer stories from the top minds in technology, wellness, finance, and beyond.",
    alternates: {
      canonical: `https://${params.domain}/publications`,
    },
    openGraph: {
      type: "website",
      url: `https://${params.domain}/publications`,
      siteName: "OutLever | News + Thought Leadership",
      locale: "en_US",
      title: "OutLever | All Publications",
      images: ["https://default-OutLever.b-cdn.net/live-site-images/OutLever-og-image.png"],
      description: "Explore OutLever's news publications covering B2B thought leadership, trends, and insights across every industry. We offer stories from the top minds in technology, wellness, finance, and beyond.",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@OutLeverhq',
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "url": "https://www.outlever.com/publications",
        "name": `OutLever | All Publications`,
        "about": { "@id": "https://www.outlever.com/about" },
        "description": "Explore OutLever's news publications covering B2B thought leadership, trends, and insights across every industry. We offer stories from the top minds in technology, wellness, finance, and beyond.",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebSite",
        "@id": "https://outlever.com/#website",
        "url": "https://outlever.com/",
        "name": "OutLever | News + Thought Leadership",
        "description": "OutLever is a news platform for thought leadership, trends, and industry insights. We offer stories from top minds in technology, wellness, finance, and beyond.",
        "publisher": { "@id": "https://outlever.com/" },
        "alternateName": ["OutLever", "OutLever"]
      },
      {
        "@type": "Organization",
        "@id": "https://outlever.com/",
        "name": "OutLever | News + Thought Leadership",
        "alternateName": ["OutLever", "OutLever"],
        "url": "https://outlever.com/",
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": "https://default-OutLever.b-cdn.net/live-site-images/OutLever-og-image.png",
          "url": "https://default-OutLever.b-cdn.net/live-site-images/OutLever-og-image.png",
          "contentUrl": "https://default-OutLever.b-cdn.net/live-site-images/OutLever-og-image.png",
          "width": 660,
          "height": 1220,
          "caption": "OutLever News Logo"
        },
        "image": { "@id": "https://default-OutLever.b-cdn.net/live-site-images/OutLever-og-image.png" },
        "sameAs": ["https://www.linkedin.com/company/xOutLever/"]
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
            title: "Featured Publications",
            articles: featuredPublications.slice().reverse().map(parsePublication),
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
    </section>
  );
}
