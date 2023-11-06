export type PublicationFromAPI = {
  Slug: string;
  _id: string;
  "Created Date": string;
  "Modified Date": string;
  approved: boolean;
  draft: boolean;
  isPublication: boolean;
  allStories?: string[];
  primaryTitle: string;
  secondaryTitle: string;
  about: string;
  heroImageUrl: string;
};

export type StoryFromAPI = {
  Slug: string;
  _id: string;
  "Created Date": string;
  "Modified Date": string;
  approved: boolean;
  draft: boolean;
  titlePrimary: string;
  titleSecondary: string;
  description: string;
  authorProfile: string;
  heroImageUrl: string;
  heroImageCaption: string;
  innerHtmlIntroGraf: string;
  innerHtmlKeyPoints: string;
  innerHtmlBody: string;
  relatedStories?: string[];
  featuredPplAndCosProfiles?: string[];
  parentPublication: string;
  parentPublicationTitle: string;
};

export type Constraint = {
  key: string;
  constraint_type: string;
  value?: string;
};
