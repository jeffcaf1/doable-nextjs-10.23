export type PublicationFromAPI = {
  "Created Date": string;
  "Created By": string;
  "Modified Date": string;
  about: string;
  primaryTitle: string;
  Slug: string;
  createdByOrg: string;
  approved: boolean;
  draft: boolean;
  isPublication: boolean;
  _id: string;
  allStories?: string[];
};

export type StoryFromAPI = {
  Slug: string;
  intrvwRecordingData: string;
  "Created By": string;
  "Created Date": string;
  "Modified Date": string;
  titlePrimary: string;
  approved: boolean;
  OLDvidIntrvwInProgressEmailSent: boolean;
  isTemplate: boolean;
  pubPermission: string;
  userPermissions: string[];
  templateStoryPeopleProspects: string[];
  progressStatus: string;
  innerHtml: string;
  _id: string;
};
