import React from "react";
import { Link } from "react-router-dom";
import useVideoStatics from "../Hooks/useVideoStatics";
import useTime from "../Hooks/useTime";
import useViews from "../Hooks/useViews";
import useChannelDetails from "../Hooks/useChannelDetails";
// import { FaLeaf } from "react-icons/fa6";
const Video = ({ allVideos }) => {
  const { thumbnails, title, channelTitle } = allVideos?.snippet;
  const { videoId } = allVideos?.id;
  // Getting Statictics of the video using id Of the Each Video
  const videoData =
    videoId || allVideos?.id ? useVideoStatics(videoId || allVideos?.id) : null;
  // Converting views with only number to the views with suffix ======> 1000 views => 1K views

  let views = videoData[0]?.statistics?.viewCount;
  const viewsWithSuffix = views?.length > 0 ? useViews(views) : null;

  // Getting Chnnel Data using Channel id
  const channelId = videoData[0]?.snippet?.channelId;
  const channelData = useChannelDetails(channelId);

  let Profile = channelData[0]?.snippet?.thumbnails?.high?.url;

  // Getting the Date in a useable Format
  let date;
  if (videoData?.length > 0) {
    const { publishedAt } = videoData[0]?.snippet;
    let d = publishedAt.split("T");
    date = d[0];
  }
  if (date === undefined) return;
  // Converting Date into Time from when its uploaded to till date
  const publishedDate = useTime(date);
  return (
    <>
      <Link to={`/video/${videoId || allVideos?.id}`}>
        <div className="main flex flex-col w-[230px] md:w-[360px] md:h-72 h-48 mb-2">
          <div className="Thumbnail-container w-full h-[60%] bg-zinc-400 rounded-lg">
            <img
              className="w-full h-full object-cover rounded-tl-lg  rounded-tr-lg"
              src={thumbnails?.high?.url}
              alt="Thumbnail"
            />
          </div>
          <div className="Video-Details flex w-full h-[40%] mt-2">
            <div className="Profile w-[12%] h-[40%] rounded-full mx-1">
              <img className="rounded-full" src={Profile} alt="" />
            </div>
            <div className="details w-[88%] leading-4">
              <p className="font-semibold leading-5 mb-3">{title}</p>
              <p className="mb-1">{channelTitle}</p>
              <p>
                {viewsWithSuffix + " views"}
                <span> · {publishedDate}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Video;
