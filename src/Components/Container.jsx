import React from "react";
import Sidebar from "./Sidebar";
import VideosContainer from "./VideosContainer";

const Container = () => {
  return (
    <div className=" w-full md:w-screen flex pt-1 md:pt-3  ">
      <Sidebar />
      <VideosContainer />
    </div>
  );
};

export default Container;
