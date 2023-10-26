import { fetchPublications } from "../utils";

export default async function Publications() {
  const publications = await fetchPublications();

  return (
    <div className="flex flex-col gap-2 p-6">
      {publications.map(({ primaryTitle, Slug }) => (
        <a href={`/${Slug}`} key={Slug} className="underline">
          {primaryTitle}
        </a>
      ))}
    </div>
  );
}
