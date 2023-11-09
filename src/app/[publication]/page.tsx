import React from "react";
import { fetchPublications, fetchStories, getPublicationsPaths, parsePublication, parseStory } from "../utils";
import Layout from "@/lib/Layouts/PublicationLayout";
import { Metadata } from "next";
import { redirect } from "next/navigation";

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
export const generateStaticParams = getPublicationsPaths();

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { publication: string } }): Promise<Metadata> {
  const publications = await fetchPublications({
    customConstraints: [
      {
        key: "Slug",
        constraint_type: "equals",
        value: params.publication,
      },
    ],
  });

  const currentPublication = publications[0];

  return {
    title: currentPublication?.primaryTitle || "",
    description: currentPublication?.about || "",
  };
}

export default async function Publication({ params }: { params: { publication: string } }) {
  // Fetch the current publication
  const currentPublicationFromSlug = await fetchPublications({
    customConstraints: [
      {
        key: "Slug",
        constraint_type: "equals",
        value: params.publication,
      },
    ],
  }).then((res) => res[0]);

  // Fetch the current publication by domain
  const currentPublicationFromDomain = await fetchPublications({
    customConstraints: [
      {
        key: "domain",
        constraint_type: "equals",
        value: decodeURIComponent(params.publication.replace("localhost:54321", process.env.NEXT_PUBLIC_ROOT_DOMAIN!)),
      },
    ],
  }).then((res) => res[0]);

  const currentPublication = currentPublicationFromSlug || currentPublicationFromDomain;

  if (!currentPublication) {
    return <h1>Publication not found</h1>;
  }

  // Fetch all stories for the current publication
  const stories = await fetchStories({
    customConstraints: [
      {
        key: "parentPublication",
        constraint_type: "equals",
        value: currentPublication?._id,
      },
    ],
  });

  // Fetch all related publications for the current publication
  const relatedPublications = (
    await Promise.all(
      (currentPublication?.relatedPublications || [])?.map(
        async (publication) => (await fetchPublications({ customConstraints: [{ key: "_id", constraint_type: "equals", value: publication }] }))[0]
      )
    )
  ).filter((publication) => !!publication);

  console.log("currentPublication", relatedPublications);

  return (
    <main className="page-main">
      <Layout
        sections={[
          {
            title: "Featured Stories",
            articles: stories.slice(0, 3).map((story) => parseStory(story, currentPublication?.Slug || "", currentPublication?.domain)),
            variant: "large",
          },
          {
            title: "All Stories",
            articles: stories.map((story) => parseStory(story, currentPublication?.Slug || "", currentPublication?.domain)),
            variant: "small",
          },
          {
            title: "Related Publications",
            articles: relatedPublications.map((publication) => parsePublication(publication)),
            variant: "small",
          },
        ]}
        title={currentPublication?.primaryTitle}
        description={currentPublication?.about}
      />
    </main>
  );
}
