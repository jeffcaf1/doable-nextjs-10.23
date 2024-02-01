"use client";

import { useEffect, useState } from "react";

export const Title = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }

    const handleResize = () => {
      console.log("resize");
      if (window.innerWidth < 769) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 return (
  <h1 className="homepage-title">Become the voice of your industry</h1>
    /* Old title with the strikethrough */
   /*   <h1 className="article-header-title" style={{ fontSize: isMobile ? "2rem" : "4.5rem", fontWeight: 500, lineHeight: isMobile ? 1.15 : 1 }}>
      Turning <span style={{ fontFamily: "inherit", fontWeight: "300", opacity: "0.8", textDecoration: "line-through" }}>Content</span> <br />{" "}
      <span style={{ fontFamily: "inherit", marginLeft: "0.625rem" }}>Into</span>{" "}
      <span style={{ fontFamily: "inherit", color: "var(--border)" }}>Conversations</span>
    </h1>  */
  );

};