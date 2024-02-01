import "./styles.css";

export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "Privacy Policy",
    description: "At Doable, we very much appreciate your readership and understand the importance of your personal privacy. This policy is available to help you understand the handling of information while you're on our sites.",
      openGraph: {
      type: "website",
      url: `https://${params.domain}/privacy`,
      siteName: "Doable",
      title: "Privacy Policy",
      images: ["/images/doable-og-image.png"],
      locale: "en_US",
      description: "At Doable, we very much appreciate your readership and understand the importance of your personal privacy. This policy is available to help you understand the handling of information while you're on our sites.",
    },
    twitter: {
      card: 'summary_large_image',
      site: '@doablehq',
    }
  };
}

export default function Privacy() {
  return (
    <main className="page-main">
      <section className="page-header-outer">
        <header>
          <div className="inner page-header-inner">
            <div className="page-header-inner-wrapper">
              <h1 className="page-header-title">Privacy Policy</h1>
            </div>
          </div>
        </header>
      </section>
      <section className="page-body-outer">
          <div className="inner">
          <div className="page-inner">
              <p>This is the privacy policy text</p>
          </div>
          </div>
      </section>
    </main>

  );
}
