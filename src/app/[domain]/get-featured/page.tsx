import "./styles.css";

export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "Get Featured",
    description: "We want to speak with B2B thought leaders across all industries. We want your perspectives and insights on breaking news and fundamental topics that are unique to your trade.",
      openGraph: {
      type: "website",
      url: `https://${params.domain}/get-featured`,
      siteName: "Doable",
      title: "Get Featured in Doable News",
      images: ["/images/doable-og-image.png"],
      locale: "en_US",
      description: "We want to speak with B2B thought leaders across all industries. We want your perspectives and insights on breaking news and fundamental topics that are unique to your trade."
    },
    twitter: {
      card: 'summary_large_image',
      site: '@doablehq',
    }
  };
}

export default function GetFeatured() {
  return (
    <main className="page-main">
      <section className="page-header-outer">
        <header>
          <div className="inner page-header-inner">
            <div className="page-header-inner-wrapper">
              <h1 className="page-header-title">Thought Leaders Wanted!</h1>
            </div>
          </div>
        </header>
      </section>
      <section className="page-body-outer">
          <div className="inner">
          <div className="page-inner">
              <p>Want to share your perspective on a timely news story? Or maybe your company has some big news you'd like to amplify?
                Doable is always on the hunt for unique perspectives from thought leaders who are experts in their fields. We want to hear from you!</p>
                <br />
                <p>
Email us today at <a className="body-links" href="mailto:hello@doablehq.com">hello@doablehq.com</a>
</p>
          </div>
          </div>
      </section>
    </main>

  );
}
