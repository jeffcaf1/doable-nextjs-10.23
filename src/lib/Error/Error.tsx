import "./styles.css";

const ErrorComponent = () => {
  return (
    <main>
        <div className="prose lg:prose-xl">
          <main className="page-main">
      <section className="page-header-outer">
        <header>
          <div className="inner page-header-inner">
            <div className="page-header-inner-wrapper">
              <h1 className="page-header-title">404 Page Not Found</h1>
            </div>
          </div>
        </header>
      </section>
      <section className="page-body-outer">
          <div className="inner">
              <p>This is the text in the body of the 404 page.</p>
          </div>
      </section>
    </main>
        </div>
      </main>
  );
};

export default ErrorComponent;
