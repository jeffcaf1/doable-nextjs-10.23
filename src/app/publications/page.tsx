import Layout from "@/lib/Templates/Template-0/PublicationsLayout";
import { fetchPublications, parsePublication } from "../utils";

export default async function Publications() {
  const featuredPublications = await fetchPublications({
    customConstraints: [
      {
        key: "isFeaturedTop3",
        constraint_type: "equals",
        value: "true",
      },
    ],
  });

  const allPublications = await fetchPublications();

  return (
    <main className="page-main">
      <Layout
        sections={[
          {
            title: "Featured Publications",
            articles: featuredPublications.map(parsePublication),
            variant: "small",
          },
          {
            title: "All Publications",
            articles: allPublications.map(parsePublication),
            variant: "small",
          },
        ]}
      />
      {/* <div className="prose lg:prose-xl">
        <div className="header-sctn">
          <h1>{currentPublication?.primaryTitle}</h1>
        </div>
        <div className="ftrd-stories-sctn">
          <h3>Featured Stories</h3>
          {stories.slice(0, 3).map(({ titlePrimary, Slug }) => (
            <div>
              <a href={`/${currentPublication?.Slug}/${Slug}`} key={Slug} className="underline">
                {titlePrimary}
              </a>
            </div>
          ))}
        </div>
        <div className="all-stories-srch-sort-filter">
          <h3>All Stories</h3>
          <div className="srch-sort-filter-sctn">
            <span>Search/Sort/Filter</span>
          </div>
          {stories.map(({ titlePrimary, Slug }) => (
            <div>
              <a href={`/${currentPublication?.Slug}/${Slug}`} key={Slug} className="underline">
                {titlePrimary}
              </a>
            </div>
          ))}
        </div>
      </div> */}
    </main>

    // <main className="main-container">
    //   <div className="prose lg:prose-xl">
    //     <div className="all-pubs-header-sctn">
    //       <h1>Our Publications</h1>
    //       <p>Doable hosts over XXX publications dedicated to the top B2B thought leaders. We get the hottest daily takes from enterprise and mid-market masterminds who are driving technology businesses forward.</p>
    //     </div>
    //     <div className="all-publications-for-srch-sort-filter">
    //       <h3>Featured Publications</h3>
    //       {publications.slice(0, 4).map(({ primaryTitle, Slug }) => (
    //         <div>
    //           <a href={`/${Slug}`} key={Slug} className="underline">
    //             {primaryTitle}
    //           </a>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="all-pubs-srch-sort-filter">
    //       <h3>All Publications</h3>
    //       <div className="srch-sort-filter-sctn">
    //       <span>Search/Sort/Filter</span>
    //       </div>
    //       {publications.map(({ primaryTitle, Slug }) => (
    //         <div>
    //           <a href={`/${Slug}`} key={Slug} className="underline">
    //             {primaryTitle}
    //           </a>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </main>
  );
}
