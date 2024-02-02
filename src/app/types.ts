export type PublicationFromAPI = {
  Slug: string;
  _id: string;
  "Created Date": string;
  "Modified Date": string;
  approved: boolean;
  draft: boolean;
  isSectionUnderPub: boolean;
  allStories?: string[];
  primaryTitle: string;
  secondaryTitle: string;
  about: string;
  heroImageUrl: string;
  heroImageAltText: string;
  heroImageCaption: string;
  relatedPublications?: string[];
  domain: string;
  primaryParentSectionAsText: string;
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
  featuredPplAndCosProfiles?: string[];
  parentPublication: string;
  parentPublicationTitle: string;
  pubChildSectionTagAsText: string;
  primaryParentSectionAsText: string;
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
