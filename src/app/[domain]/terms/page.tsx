import "./styles.css";

export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "Terms and Conditions",
    description: "These Terms of Service govern each website, mobile site, application, and/or other service, regardless of how distributed, transmitted, published, or broadcast provided by Doable, its parent, subsidiaries and/or affiliates.",
    openGraph: {
      type: "website",
      url: `https://${params.domain}/terms`,
      siteName: "Doable",
      title: "Terms and Conditions",
      images: ["/images/doable-og-image.png"],
      locale: "en_US",
      description: "These Terms of Service govern each website, mobile site, application, and/or other service, regardless of how distributed, transmitted, published, or broadcast provided by Doable, its parent, subsidiaries and/or affiliates.",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@doablehq',
    }
  };
}

export default function Terms() {
  return (
    <main className="page-main">
      <section className="page-header-outer">
        <header>
          <div className="inner page-header-inner">
            <div className="page-header-inner-wrapper">
              <h1 className="page-header-title">Terms and Conditions</h1>
            </div>
          </div>
        </header>
      </section>
      <section className="page-body-outer">
          <div className="inner">
          <div className="page-inner">
              <p>This is the terms and conditions text</p>
          </div>
          </div>
      </section>
    </main>

  );
}
