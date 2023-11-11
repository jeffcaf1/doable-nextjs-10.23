import Layout from "@/lib/Layouts/HomepageLayout";
import PublicationLayout from "@/lib/Layouts/PublicationLayout";
import { fetchPublications, fetchStories, parsePublication, parseStory } from "./utils";

import { headers } from "next/headers";

export default async function Home() {
  const domain = headers().get("host")?.split(":")[0];

  if (domain === process.env.NEXT_PUBLIC_ROOT_DOMAIN_DEV || domain === process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
    const featuredPublications = await fetchPublications({
      customConstraints: [
        {
          key: "isFeaturedTop3",
          constraint_type: "equals",
          value: "true",
        },
      ],
    });

    /* Hardcode featured stories for now */

    const featuredStories = [
      {
        title: "Tesla wins fatal Autopilot crash jury trial",
        description:
          "A jury on Tuesday handed Tesla another win after siding with the automaker over allegations that its Autopilot advanced driver assistance system led to a death. ",
        link: "http://localhost:54321/service-at-scale/tesla-wins-autopilot-crash-jury-trial",
        image: "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1245135186.jpg?w=1390&crop=1",
      },
      // Add more stories here
    ];

    // Uncomment this to fetch stories from the API
    // const featuredStories = await fetchStories({
    //   customConstraints: [
    //     {
    //       key: "isFeaturedTop3",
    //       constraint_type: "equals",
    //       value: "true",
    //     },
    //   ],
    // });

    console.log("featuredPublications", featuredPublications);
    console.log("featuredStories", featuredStories);

    return (
      <main className="homepage-main">
        <Layout
          sections={[
            {
              title: "Featured Publications",
              articles: featuredPublications.map(parsePublication),
              variant: "small",
            },
            {
              title: "Featured Stories",
              articles: featuredStories,
              variant: "small",
            },
          ]}
        />
      </main>
    );
  } else {
    // Fetch the current publication by domain
    const currentPublicationFromDomain = await fetchPublications({
      customConstraints: [
        {
          key: "domain",
          constraint_type: "equals",
          value: domain,
        },
      ],
    }).then((res) => res[0]);

    if (!currentPublicationFromDomain) {
      return <h1>Publication not found</h1>;
    }

    // Fetch all stories for the current publication
    const stories = await fetchStories({
      customConstraints: [
        {
          key: "parentPublication",
          constraint_type: "equals",
          value: currentPublicationFromDomain?._id,
        },
      ],
    });

    // Fetch all related publications for the current publication
    const relatedPublications = (
      await Promise.all(
        (currentPublicationFromDomain?.relatedPublications || [])?.map(
          async (publication) => (await fetchPublications({ customConstraints: [{ key: "_id", constraint_type: "equals", value: publication }] }))[0]
        )
      )
    ).filter((publication) => !!publication);

    console.log("currentPublication", relatedPublications);

    return (
      <main className="page-main">
        <PublicationLayout
          sections={[
            {
              title: "Featured Stories",
              articles: stories.slice(0, 3).map((story) => parseStory(story, currentPublicationFromDomain?.Slug || "", currentPublicationFromDomain?.domain)),
              variant: "large",
            },
            {
              title: "All Stories",
              articles: stories.map((story) => parseStory(story, currentPublicationFromDomain?.Slug || "", currentPublicationFromDomain?.domain)),
              variant: "small",
            },
            {
              title: "Related Publications",
              articles: relatedPublications.map((publication) => parsePublication(publication)),
              variant: "small",
            },
          ]}
          title={currentPublicationFromDomain?.primaryTitle}
          description={currentPublicationFromDomain?.about}
        />
      </main>
    );
  }
}
