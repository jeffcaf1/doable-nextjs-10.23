import Layout from "@/lib/Layouts/PublicationsLayout";
import { fetchPublications, fetchPublicationsByDomain, parsePublication } from "../../utils";

// Update this function to change the metadata of the page
export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "Doable | All Publications",
    description: "Explore Doable's news publications covering B2B thought leadership, trends, and insights across every industry. We offer stories from the top minds in technology, wellness, finance, and beyond.",
    openGraph: {
      type: "website",
      url: `https://${params.domain}/publications`,
      siteName: "Doable News",
      locale: "en_US",
      title: "Doable | All Publications",
      images: ["https://default-doable.b-cdn.net/live-site-images/doable-og-image.png"],
      description: "Explore Doable's news publications covering B2B thought leadership, trends, and insights across every industry. We offer stories from the top minds in technology, wellness, finance, and beyond.",
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "url": "https://www.alldoable.com/publications",
        "name": `Doable | All Publications`,
        "about": { "@id": "https://www.alldoable.com/about" },
        "description": "Explore Doable's news publications covering B2B thought leadership, trends, and insights across every industry. We offer stories from the top minds in technology, wellness, finance, and beyond.",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebSite",
        "@id": "https://alldoable.com/#website",
        "url": "https://alldoable.com/",
        "name": "Doable News",
        "description": "Doable is a news platform for B2B thought leadership, trends, and insights across every industry. We offer stories from the top minds in technology, wellness, finance, and beyond.",
        "publisher": { "@id": "https://alldoable.com/" },
        "alternateName": ["Doable", "doable"]
      },
      {
        "@type": "Organization",
        "@id": "https://alldoable.com/",
        "name": "Doable News",
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
