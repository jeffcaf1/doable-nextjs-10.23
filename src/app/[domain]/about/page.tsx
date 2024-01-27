import "./styles.css";

export default function About() {
  return (
    <main className="page-main">
      <section className="page-header-outer">
        <header>
          <div className="inner page-header-inner">
            <div className="page-header-inner-wrapper">
              <h1 className="page-header-title">About Page</h1>
            </div>
          </div>
        </header>
      </section>
      <section className="page-body-outer">
          <div className="inner">
              <p>This is the text in the header of the about section.</p>
          </div>
      </section>
    </main>
  );
}
