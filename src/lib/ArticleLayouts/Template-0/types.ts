export type CardListProps = {
  title: string;
  variant: "small" | "large";
  articles: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];
};

export type CardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  variant: "small" | "large";
};
