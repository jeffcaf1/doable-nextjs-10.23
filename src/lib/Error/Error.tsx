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
              <div className="page-inner">
                <p>The page you are looking for does not exist!</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </main>
  );
};

export default ErrorComponent;
