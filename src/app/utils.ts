import { PublicationFromAPI, StoryFromAPI } from "./types";

const API_ENDPOINT = process.env.API_ENDPOINT;

/**
 * Fetches all available publications from the API
 * @param start - The starting index for the API call
 * @returns An array of publications
 */
export const fetchPublications = async (start = 0) => {
  const API_ENDPOINT_PUBLICATIONS = API_ENDPOINT + "/obj/publication?cursor=";

  let publications = [] as PublicationFromAPI[];

  const { response } = await fetch(API_ENDPOINT_PUBLICATIONS + start, { next: { tags: ["publication"] } })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      return [err];
    });

  const results = response.results as PublicationFromAPI[];

  publications.push(...results);

  if (response.remaining > 0) {
    publications.push(...(await fetchPublications(response.count)));
  }

  console.log("Publications fetched: ", publications.length);

  return publications;
};

/**
 * Fetches all available stories for a specific publication from the API
 * @param publicationId - The publication ID to fetch stories for
 * @param start - The starting index for the API call, defaults to 0
 * @returns An array of stories
 */
export const fetchStoriesForPublication = async (publicationId: string, start = 0) => {
  const API_ENDPOINT_STORIES = API_ENDPOINT + "/obj/story?cursor=";

  const getApiEndpointForStories = (publicationId: string, start = 0) => {
    const url = `${API_ENDPOINT_STORIES}${start}/&constraints=[{"key": "draft", "constraint_type": "equals", "value": "false"}, {"key": " parentPublication", "constraint_type": "equals", "value": "${publicationId}"}]`;
    return encodeURI(url);
  };

  let stories = [] as StoryFromAPI[];

  const { response } = await fetch(getApiEndpointForStories(publicationId), { next: { tags: ["story"] } })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      return [err];
    });

  const results = response?.results || ([] as StoryFromAPI[]);

  stories.push(...results);

  if (response?.remaining > 0) {
    stories.push(...(await fetchStoriesForPublication(publicationId, response.count)));
  }

  console.log("Stories fetched for publication: ", stories.length);

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

  const { response } = await fetch(getApiEndpointForStories(slug), { next: { tags: ["story"] } })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      return [err];
    });

  const results = response.results as StoryFromAPI[];

  story = results[0];

  console.log("Story fetched: ", story?._id);

  return story;
};

/**
 * Fetches all available stories from the API
 * @param start - The starting index for the API call
 * @returns An array of stories
 */
export const fetchAllStories = async (start = 0) => {
  const API_ENDPOINT_STORIES = API_ENDPOINT + "/obj/story?cursor=";

  let stories = [] as StoryFromAPI[];

  const { response } = await fetch(API_ENDPOINT_STORIES + start, { next: { tags: ["story"] } })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      return [err];
    });

  const results = response.results as StoryFromAPI[];

  stories.push(...results);

  console.log("Stories fetched: ", stories.length);

  if (response.remaining > 0) {
    stories.push(...(await fetchAllStories(response.count)));
  }

  return stories;
};
