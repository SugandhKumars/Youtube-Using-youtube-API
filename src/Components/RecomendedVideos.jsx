import React from "react";
import { Link } from "react-router-dom";

const RecomendedVideos = ({ allData, videoSize, channelProfile }) => {
  const { thumbnails, title, channelTitle } = allData?.snippet;

  return (
    <>
      <Link to={`/video/${allData?.id?.videoId}`}>
        <div className="flex md:justify-center gap-2 md:gap-2 md:mb-4">
          <div
            className=" w-[35%] h-[35%] md:w-[50%] md:h-28 md:rounded-lg rounded-md "
            style={videoSize}
          >
            <img
              className="w-full h-full object-cover rounded-lg"
              src={thumbnails?.high?.url}
              alt="Thumbnail"
            />
          </div>
          <div className="w-[70%] ">
            <p className="title md:text-lg md:font-[400]  leading-5 md:leading-7">
              {title}
            </p>
            <div className="flex items-center gap-1">
              {channelProfile && (
                <p className="w-7 h-7 bg-zinc-200 rounded-full">
                  <img src="" alt="" />
                </p>
              )}
              <p className="Channel_Name text-xs md:text-base leading-[8px] md:leading-8">
                {channelTitle}
              </p>
            </div>
            <p className="views and time">
              <span
                className=" text-xs md:text-base"
                // style={{ fontSize: "px" }}
              >
                100K Views{" "}
              </span>
              <span className=" text-xs md:text-base">2 days ago</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RecomendedVideos;
