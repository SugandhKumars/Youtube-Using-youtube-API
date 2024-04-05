import React, { useEffect } from "react";
import Categories from "./Categories";
import VideoContainer from "./VideoContainer";

const VideosContainer = () => {
  return (
    <>
      <div className=" md:w-[84%] box-border   flex flex-col mt-14">
        <Categories />
        <VideoContainer />
      </div>
    </>
  );
};

export default VideosContainer;
