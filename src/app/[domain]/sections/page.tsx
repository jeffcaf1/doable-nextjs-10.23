import "./styles.css";

export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "Publication Sections",
    description: "Doable is a B2B thought leadership platform for trade news and insights across every industry. We offer our readers and viewers breaking news and insights from the top minds in technology, wellness, finance, and beyond.",
    openGraph: {
      type: "website",
      url: `https://${params.domain}/about`,
      siteName: "Doable",
      title: "Publication Sections",
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

export default function Sections() {
  return (
    <main className="page-main">
      <section className="page-header-outer">
        <header>
          <div className="inner page-header-inner">
            <div className="page-header-inner-wrapper">
              <h1 className="page-header-title">Sections</h1>
              <p className="page-header-description">
                Doable is a news publication platform designed to elevate thought leaders across nearly every industry. We publish the latest breaking news in Technology,
                AI, Health and Wellness, Finance and Economy, Customer Experience, People Managaement, and more.
              </p>
            </div>
          </div>
        </header>
      </section>
      <section className="page-body-outer">
        <div className="inner">
          <div className="page-inner">
          <a href="/sections/technology" className="page-section-title">Technology</a>
          <br />
          <a href="/sections/health-and-wellness" className="page-section-title">Health and Wellness</a>
          <br />

          <a href="/sections/money-finance-economy" className="page-section-title">Money, Finance, and Economy</a>
          <br />

          <a href="/sections/people-powered" className="page-section-title">People Powered</a>
          </div>         
           </div>
      </section>
    </main>
  );
}
