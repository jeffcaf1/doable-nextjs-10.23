import { fetchPublications } from "../utils";

export default async function Publications() {
  const publications = await fetchPublications();

  return (
    <main className="main-container">
      <div className="prose lg:prose-xl">
        <div className="all-pubs-header-sctn">
          <h1>Our Publications</h1>
          <p>Doable hosts over XXX publications dedicated to the top B2B thought leaders. We get the hottest daily takes from enterprise and mid-market masterminds who are driving technology businesses forward.</p>
        </div>
        <div className="all-publications-for-srch-sort-filter">
          <h3>Featured Publications</h3>
          {publications.slice(0, 4).map(({ primaryTitle, Slug }) => (
            <div>
              <a href={`/${Slug}`} key={Slug} className="underline">
                {primaryTitle}
              </a>
            </div>
          ))}
        </div>
        <div className="all-pubs-srch-sort-filter">
          <h3>All Publications</h3>
          <div className="srch-sort-filter-sctn">
          <span>Search/Sort/Filter</span>
          </div>
          {publications.map(({ primaryTitle, Slug }) => (
            <div>
              <a href={`/${Slug}`} key={Slug} className="underline">
                {primaryTitle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
