import React from "react";
import { fetchPublications, fetchStoriesForPublication } from "../utils";

/**
 * Because static paths are not revalidated, we need to set this to true.
 * This will generate the new paths on demand.
 * Because Next.js will cache everything, the API will only be called once.
 */
export const dynamicParams = true;

/**
 This function is called at build time to generate the static paths.
 Important: This function won't be called when revalidating.
*/
export const generateStaticParams = async () => {
  const publications = await fetchPublications();

  let paths = [] as { publication: string }[];

  publications.forEach((publication) => {
    paths.push({
      publication: publication.Slug,
    });
  });

  return paths;
};

export default async function Publication({ params }: { params: { publication: string } }) {
  const publications = await fetchPublications();
  const currentPublication = publications.find(({ Slug }) => Slug === params.publication)!;

  const stories = await fetchStoriesForPublication(currentPublication?._id);

  return (
    <main className="main-container">
      <div className="prose lg:prose-xl">
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
      </div>
    </main>
  );
}
