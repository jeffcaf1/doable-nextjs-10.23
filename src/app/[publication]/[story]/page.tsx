import React from "react";
import { fetchAllStories, fetchPublications, fetchStory } from "@/app/utils";

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
  const stories = await fetchAllStories();
  const publications = await fetchPublications();

  let paths = [] as { publication: string; story: string }[];

  publications.forEach((publication) => {
    const storiesForPublication = stories.filter((story) => publication?.allStories?.includes(story._id));
    return storiesForPublication.forEach((story) => {
      paths.push({
        publication: publication.Slug,
        story: story.Slug,
      });
    });
  });

  return paths;
};

export default async function Story({ params }: { params: { story: string } }) {
  const story = await fetchStory(params.story);

  return <div className="p-6">
    <main>
        <div className="article-container">
            <article>
                <div className="article-header-sctn">
                    <ul>Categories</ul>
                    <span>Publication</span>
                    <h1>{story.titlePrimary}</h1>
                    <h2>Story description</h2>
                    <div className="author-snippet">
                        <p>Author Name and description</p>
                    </div>
                </div>
                <div className="hero-img-sctn" >
                    <figure>
                        <div>
                            <img src="https://imssource.com" alt="img alt text" />
                        </div>
                        <div>
                            <figcaption>Figure Caption</figcaption>
                        </div>
                    </figure>
                </div>
                <div className="key-points-sctn" >
                    <div className="key-points-header">Key Points</div>
                    <div className="key-points-list-container">
                        <p className="key-points-set-html">Inner set html ul list of key points</p>
                    </div>
                </div>
                <div className="body-sctn" >
                    <div className="body-intro-graf">
                        <p>Intro paragraph with unique styling</p>
                    </div>
                    <div className="body-set-html">
                    {story?.innerHtml && <p dangerouslySetInnerHTML={{ __html: story.innerHtml }} />}
                    </div>
                </div>
            </article>
            <div className="related-stories-sctn">
                <ul>
                    <li>
                        Related Stories
                    </li>
                </ul>
            </div>
        </div>
    </main>
    </div>
    ;
}
