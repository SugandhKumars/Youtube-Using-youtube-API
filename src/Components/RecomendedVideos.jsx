import React from "react";
import { Link } from "react-router-dom";
import useVideoStatics from "../Hooks/useVideoStatics";
import useTime from "../Hooks/useTime";
import useViews from "../Hooks/useViews";
import useChannelDetails from "../Hooks/useChannelDetails";

const RecomendedVideos = ({ allData, videoSize, channelProfile }) => {
  const { thumbnails, title, channelTitle, channelId } = allData?.snippet;
  //   Getting Channel Data USing ChannelId
  const channelData = useChannelDetails(channelId);
  const Profile = channelData[0]?.snippet?.thumbnails?.high?.url;
  //   Getting video stats using channel id
  const videoData = useVideoStatics(allData?.id?.videoId);
  let views = videoData?.length > 0 && videoData[0]?.statistics?.viewCount;
  const viewsWithSuffix = useViews(views);

  let date;
  if (videoData?.length > 0) {
    const { publishedAt } = videoData[0]?.snippet;
    let d = publishedAt.split("T");
    date = d[0];
  }
  if (date === undefined) return;
  const publishedDate = useTime(date);
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
                  <img
                    className="w-full h-full rounded-full"
                    src={Profile}
                    alt=""
                  />
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
                {viewsWithSuffix + " views"}
              </span>
              <span className=" text-xs md:text-base"> · {publishedDate}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RecomendedVideos;
