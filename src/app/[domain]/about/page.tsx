import "./styles.css";

export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "About Page",
    description: "Doable is a B2B thought leadership platform for trade news and insights across every industry. We offer our readers and viewers breaking news and insights from the top minds in technology, wellness, finance, and beyond.",
    openGraph: {
      type: "website",
      url: `https://${params.domain}/about`,
      siteName: "Doable",
      title: "About Doable",
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

export default function About() {
  return (
    <main className="page-main">
      <section className="page-header-outer">
        <header>
          <div className="inner page-header-inner">
            <div className="page-header-inner-wrapper">
              <h1 className="page-header-title">What is Doable?</h1>
            </div>
          </div>
        </header>
      </section>
      <section className="page-body-outer">
        <div className="inner">
          <div className="page-inner">
            <p>
              Doable is a news publication platform designed to elevate B2B thought leaders. We publish industry news across nearly all sectors like Technology,
              AI, Health and Wellness, Personal Finance, Home Service Industry, and more...
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
