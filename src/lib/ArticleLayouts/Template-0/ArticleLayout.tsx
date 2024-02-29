import { StoryFromAPI } from "@/app/types";
import CardList from "@/lib/CardList/CardList";
import { v4 } from "uuid";
import Body from "../../Article/Body/Body";
import CoverImage from "../../Article/CoverImage/CoverImage";
import Header from "../../Article/Header/Header";
import Intro from "../../Article/Intro/Intro";
import Keypoints from "../../Article/Keypoints/Keypoints";
import "./styles.css";
import { CardListProps } from "./types";
import Author from "@/lib/Article/Author/Author";

const Template0 = async ({ story, sections }: { story: StoryFromAPI; sections: CardListProps[] }) => {
  return (
    <>
      <article className="article template-0">
        <Header pubChildSectionTagAsText={story?.pubChildSectionTagAsText} title={story?.titlePrimary} publicationName={story?.parentPublicationTitle } publicationSlugAsText={story?.publicationSlugAsText} 
        />
        <section className="article-content">
          <Author author={story?.authorName} authorSlug={story?.authorProfileSlug} timeStamp={story?.["Created Date"]} />
          <div className="article-content-header">
            <CoverImage src={story?.heroImageUrl} alt={story?.heroImageAltText} caption={story?.heroImageCaption || ""} />
            {story?.innerHtmlKeyPoints && <Keypoints html={story.innerHtmlKeyPoints} />}
          </div>
          {story?.innerHtmlIntroGraf && <Intro html={story.innerHtmlIntroGraf} />}
          {story?.innerHtmlBody && <Body html={story.innerHtmlBody} />}
        </section>
      </article>

      {sections.some(section => section.articles.length > 0) && (
        <section className="article-sections-container inner">
          {sections.map((section) => (
            section.articles.length > 0 && <CardList key={v4()} title={section.title} articles={section.articles} variant={section.variant} />
          ))}
        </section>
      )}
    </>
  );
};

export default Template0;