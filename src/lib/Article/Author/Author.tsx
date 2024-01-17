import React from "react";
import "./styles.css";

const Author = ({ author, timeStamp, authorSlug }: { author: string; timeStamp: string; authorSlug: string }) => {
  // Format the timestamp to mm/dd/yy, HH:MM:A/PM
  const formattedTimeStamp = new Date(timeStamp)
    .toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "2-digit",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    .toLowerCase();

  return (
    <div className="author-container">
      <div className="author-name-container">
        by{" "}
        <a className="author-name" href={`/contributor/${authorSlug}`}>
          {author}
        </a>{" "}
      </div>

      <div className="published-container">| published {formattedTimeStamp}</div>
    </div>
  );
};

export default Author;
