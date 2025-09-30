import React from "react";
import Manufacturing from "../components/home/Manufacturing";
import NewsLetter from "../components/home/NewsLetter";
import GalleryGrid from "../components/gallery/GalleryGrid";

const page = () => {
  return (
    <>
      <GalleryGrid />
      <Manufacturing />
      <NewsLetter />
    </>
  );
};

export default page;
