export type PublicationFromAPI = {
  Slug: string;
  _id: string;
  "Created Date": string;
  "Modified Date": string;
  draft: boolean;
  allStories?: string[];
  primaryTitle: string;
  about: string;
  isFeaturedTop3: boolean;
  heroImageUrl: string;
  heroImageAltText: string;
  heroImageCaption: string;
  relatedPublications?: string[];
  domain: string;
};

export type StoryFromAPI = {
  Slug: string;
  _id: string;
  "Created Date": string;
  "Modified Date": string;
  approved: boolean;
  draft: boolean;
  titlePrimary: string;
  description: string;
  authorProfile: string;
  authorName: string;
  authorIsPersonOrOrganization: string;
  authorProfileSlug: string;
  heroImageUrl: string;
  heroImageCaption: string;
  heroImageAltText: string;
  innerHtmlIntroGraf: string;
  innerHtmlKeyPoints: string;
  innerHtmlBody: string;
  featuredOnHomepage: boolean;
  relatedStories?: string[];
  parentPublication: string;
  parentPublicationTitle: string;
  publicationSlugAsText: string;
  childSectionTagAsText: string;
};

export type ProfileFromAPI = {
  Slug: string;
  _id: string;
  "Created Date": string;
  "Modified Date": string;
  draft: boolean;
  fullName: string;
  firstName: string;
  lastName: string;
  about: string;
  imageUrl: string;
  titleAndCompany: string;
  linkedInUrl: string;
  twitterUrl: string;
  website: string;
  featuredStories?: string[];
  authorIsPersonOrOrganization: string;
};

export type Constraint = {
  key: string;
  constraint_type: string;
  value?: string;
};
