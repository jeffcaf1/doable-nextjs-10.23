import Layout from "@/lib/Layouts/PublicationsLayout";
import { fetchPublications, parsePublication } from "../../utils";

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
    </main>
  );
}
