import React from "react";
import "./styles.css";
import { PublicationFromAPI, StoryFromAPI } from "@/app/types";
import Header from "../../Article/Header/Header";
import CoverImage from "../../Article/CoverImage/CoverImage";
import Keypoints from "../../Article/Keypoints/Keypoints";
import Intro from "../../Article/Intro/Intro";
import Body from "../../Article/Body/Body";

const Template0 = ({ story }: { story: StoryFromAPI }) => {
  return (
    <article className="article template-0">
      <Header title={story?.titlePrimary} description={story?.description} publicationName={story?.parentPublicationTitle} />

      <section className="article-content">
        <div className="article-content-header">
          <CoverImage src={story?.heroImageUrl} caption={story?.heroImageCaption} />
          {story?.innerHtmlKeyPoints && <Keypoints html={story.innerHtmlKeyPoints} />}
        </div>
        {story?.innerHtmlIntroGraf && <Intro html={story.innerHtmlIntroGraf} />}
        {story?.innerHtmlBody && <Body html={story.innerHtmlBody} />}
      </section>
    </article>
  );
};

export default Template0;
