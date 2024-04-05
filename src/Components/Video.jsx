import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setText } from "./Redux/SearchText";

const Video = ({ allVideos }) => {
  const { thumbnails, title, channelTitle } = allVideos?.snippet;
  const { videoId } = allVideos?.id;
  const dispatch = useDispatch();
  // console.log(dispatch(setText(title)));
  return (
    <>
      <Link to={`/video/${videoId || allVideos?.id}`}>
        <div className="main flex flex-col w-[230px] md:w-[360px] md:h-72 h-48 mb-8">
          <div className="Thumbnail-container w-full h-[60%] bg-zinc-400 rounded-lg">
            <img
              className="w-full h-full object-cover rounded-tl-lg  rounded-tr-lg"
              src={thumbnails?.high?.url}
              alt="Thumbnail"
            />
          </div>
          <div className="Video-Details flex w-full h-[40%] mt-2">
            <div className="Profile w-[12%] h-[40%]  bg-zinc-400 rounded-full mx-1">
              <img src="" alt="" />
            </div>
            <div className="details w-[88%] leading-4">
              <p className="font-semibold leading-5 mb-3">{title}</p>
              <p className="mb-1">{channelTitle}</p>
              <p>
                100K views<span> · 2 days ago</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Video;
