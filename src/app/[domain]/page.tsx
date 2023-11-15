import Layout from "@/lib/Layouts/HomepageLayout";
import PublicationLayout from "@/lib/Layouts/PublicationLayout";
import { fetchPublications, fetchStories, getDomainPaths, getPublicationsPaths, getStoriesPaths, parsePublication, parseStory } from "../utils";

export async function generateStaticParams() {
  return getDomainPaths();
}

export default async function Home({ params: { domain } }: { params: { domain: string } }) {
  /* Render default homepage for now, if the domain is alldoable.com */

  // Fetch the top 3 publications
  const featuredPublications = await fetchPublications({
    customConstraints: [
      {
        key: "isFeaturedTop3",
        constraint_type: "equals",
        value: "true",
      },
      {
        key: "domain",
        constraint_type: "equals",
        value: domain,
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
}
