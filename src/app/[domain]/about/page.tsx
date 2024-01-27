import "./styles.css";

export async function generateMetadata({ params }: { params: { domain: string } }) {
  return {
    title: "About Page",
    description: "This is the about page",
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
