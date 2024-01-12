import { Constraint, PublicationFromAPI, StoryFromAPI } from "./types";

const API_ENDPOINT = process.env.API_ENDPOINT;
const API_TOKEN = process.env.API_TOKEN;

/**
 * Fetches all available publications from the API
 * @param start - The starting index for the API call
 * @param customConstraints - Custom constraints to add to the API call
 * @returns An array of publications
 */
export const fetchPublications = async ({ start = 0, customConstraints = [] }: { start?: number; customConstraints?: Constraint[] } = {}) => {
  const API_ENDPOINT_PUBLICATIONS = API_ENDPOINT + "/obj/publication?cursor=";

  let publications = [] as PublicationFromAPI[];

  const constraints = [
    {
      key: "draft",
      constraint_type: "equals",
      value: false,
    },
    {
      key: "privateClient",
      constraint_type: "equals",
      value: false,
    },
    {
      key: "allStories",
      constraint_type: "not empty",
    },
    ...customConstraints,
  ];

  const { response } = await fetch(API_ENDPOINT_PUBLICATIONS + start + "/&constraints=" + JSON.stringify(constraints), {
    next: { tags: ["publication"] },
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      return [err];
    });

  const results = response.results as PublicationFromAPI[];

  publications.push(...results);

  if (response.remaining > 0) {
    publications.push(...(await fetchPublications({ start: response.count })));
  }

  //console.log("Publications fetched: ", publications.length);

  return publications;
};

/**
 * Fetches multiple stories from the API based on the constraints, if no constraints are provided it will fetch all stories
 * @param start - The starting index for the API call
 * @param customConstraints - Custom constraints to add to the API call
 * @returns The publication
 */
export const fetchStories = async ({ start = 0, customConstraints = [] }: { start?: number; customConstraints?: Constraint[] } = {}) => {
  const API_ENDPOINT_STORIES = API_ENDPOINT + "/obj/story?cursor=";

  const constraints = [
    {
      key: "draft",
      constraint_type: "equals",
      value: false,
    },
    {
      key: "approved",
      constraint_type: "equals",
      value: true,
    },
    {
      key: "isTemplate",
      constraint_type: "equals",
      value: false,
    },
    ...customConstraints,
  ];

  const getApiEndpointForStories = (start = 0) => {
    const url = `${API_ENDPOINT_STORIES}${start}/&constraints=${JSON.stringify(constraints)}`;
    return encodeURI(url);
  };

  let stories = [] as StoryFromAPI[];

  const { response } = await fetch(getApiEndpointForStories(start), { next: { tags: ["story"] }, headers: { Authorization: `Bearer ${API_TOKEN}` } })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      return [err];
    });

  const results = response?.results || ([] as StoryFromAPI[]);

  stories.push(...results);

  if (response?.remaining > 0) {
    stories.push(...(await fetchStories({ start: response.count, customConstraints })));
  }

  //console.log("Stories fetched for publication: ", stories.length);

  return stories;
};

/**
 * Fetches a specific story from the API
 * @param slug - The slug of the story to fetch
 * @returns The story
 */
export const fetchStory = async (slug: string) => {
  const API_ENDPOINT_STORIES = API_ENDPOINT + "/obj/story";

  const getApiEndpointForStories = (story: string) => {
    const url = `${API_ENDPOINT_STORIES}?constraints=[{"key": "Slug", "constraint_type": "equals", "value": "${story}"},{"key": "draft", "constraint_type": "equals", "value": "false"}]`;
    return encodeURI(url);
  };

  let story = {} as StoryFromAPI;

  const { response } = await fetch(getApiEndpointForStories(slug), { next: { tags: ["story"] }, headers: { Authorization: `Bearer ${API_TOKEN}` } })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      return [err];
    });

  const results = response.results as StoryFromAPI[];

  story = results[0];

  //console.log("Story fetched: ", story?._id);

  return story;
};

export const fetchPublicationsByDomain = async (domain: string) => {
  const publications = await fetchPublications({
    customConstraints: [
      {
        key: "domain",
        constraint_type: "equals",
        value: domain,
      },
    ],
  });

  return publications;
};

// Helper functions to parse the publication data from the API to the format we need for the Card components
export const parsePublication = (publication: PublicationFromAPI) => {
  return {
    title: publication?.primaryTitle,
    description: publication?.about,
    image: publication?.heroImageUrl,
    link: `/${publication?.Slug}`,
  };
};

// Helper functions to parse the story data from the API to the format we need for the Card components
export const parseStory = (story: StoryFromAPI, publicationSlug: string) => {
  return {
    title: story?.titlePrimary,
    description: story?.description,
    image: story?.heroImageUrl,
    link: `/${publicationSlug}/${story?.Slug}`,
  };
};

// Get all stories paths, used for the sitemap.xml and generating the static pages
export const getStoriesPaths = async (domain?: string) => {
  const stories = await fetchStories();
  const publications = domain ? await fetchPublicationsByDomain(domain) : await fetchPublications();

  let paths = [] as { publication: string; story: string; domain: string }[];

  publications.forEach((publication) => {
    const storiesForPublication = stories.filter((story) => publication?.allStories?.includes(story._id));
    return storiesForPublication.forEach((story) => {
      paths.push({
        domain: publication.domain,
        publication: publication.Slug,
        story: story.Slug,
      });
    });
  });

  return paths;
};

// Get all publications paths, used for the sitemap.xml and generating the static pages
export const getPublicationsPaths = async (domain?: string) => {
  const publications = domain ? await fetchPublicationsByDomain(domain) : await fetchPublications();

  console.log("Publications fetched: ", publications.length, domain);

  let paths = [] as { publication: string; domain: string }[];

  publications.forEach((publication) => {
    paths.push({
      domain: publication.domain,
      publication: publication.Slug,
    });
  });

  return paths;
};

// Get all domain paths, used for the sitemap.xml and generating the static pages
export const getDomainPaths = async () => {
  const publications = await fetchPublications();

  let paths = [] as { domain: string }[];

  publications.forEach((publication) => {
    // If the domain is already in the array, skip it
    if (paths.find((path) => path.domain === publication.domain)) return;

    paths.push({
      domain: publication.domain,
    });
  });

  return paths;
};
