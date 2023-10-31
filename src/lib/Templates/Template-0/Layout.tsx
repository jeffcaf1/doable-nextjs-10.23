import React from "react";
import "./styles.css";
import { StoryFromAPI } from "@/app/types";
import Header from "../../Article/Header/Header";
import CoverImage from "../../Article/CoverImage/CoverImage";
import Keypoints from "../../Article/Keypoints/Keypoints";
import Intro from "../../Article/Intro/Intro";
import Body from "../../Article/Body/Body";

const Template0 = ({ story }: { story: StoryFromAPI }) => {
  return (
    <article className="article template-0">
      <Header title={story.titlePrimary} description={story.description} />

      <section className="article-content">
        <div className="article-content-header">
          <CoverImage src={story.heroImageUrl} caption={story.heroImageCaption} />
          <Keypoints html={story.innerHtmlKeyPoints} />
        </div>
        <Intro html={story.innerHtmlIntroGraf} />
        <Body html={story.innerHtmlBody} />
      </section>
    </article>
  );
};

export default Template0;
