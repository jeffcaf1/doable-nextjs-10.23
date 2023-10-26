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
    <h1>{story.titlePrimary}</h1>
    {story?.innerHtml && <article dangerouslySetInnerHTML={{ __html: story.innerHtml }} />}
    </div>;
}
