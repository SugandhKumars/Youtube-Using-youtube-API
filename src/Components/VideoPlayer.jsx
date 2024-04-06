import React from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
// import { SiSharex } from "react-icons/si";
import { TfiDownload } from "react-icons/tfi";
import useVideoStatics from "../Hooks/useVideoStatics";
import useViews from "../Hooks/useViews";
import useChannelDetails from "../Hooks/useChannelDetails";
const VideoPlayer = ({ id, channelId }) => {
  // Getting Video Stats by using VideoId
  const videoData = useVideoStatics(id);
  const Title = videoData[0]?.snippet?.title;
  const Likes = videoData[0]?.statistics?.likeCount;
  let likesCount = useViews(Likes);

  //  Getting Channel Data using ChannelId
  const channelData = useChannelDetails(channelId);
  const channelName = channelData[0]?.snippet?.title;
  const Profile = channelData[0]?.snippet?.thumbnails?.high?.url;
  const Subscribers = channelData[0]?.statistics?.subscriberCount;
  const TotalSubs = useViews(Subscribers);

  return (
    <div className="w-full md:w-[60%]   p-1 md:p-2">
      <div className="w-full  h-[200px] md:h-[450px]">
        <iframe
          className=" rounded-md md:rounded-lg w-full h-full"
          src={`https://www.youtube.com/embed/${id}?si=FxFFTIIQyfL-gQFv`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="w-full flex flex-col mt-2 ">
        <div className="Title text-xl font-bold">{Title}</div>
        <div className="allDetail flex items-center justify-between mt-2">
          <div className="Profile Name SubscribeBUtton items-center flex gap-2 cursor-pointer ">
            <div className="Profile w-10 h-10 bg-zinc-300 rounded-full">
              <img
                className="w-full h-full rounded-full"
                src={Profile}
                alt=""
              />
            </div>
            <div className="Chanel Name flex flex-col ">
              <p className="text-lg font-medium">{channelName}</p>
              <p>{TotalSubs} Subscribers</p>
            </div>
            <div>
              <button className="bg-black text-white px-4 font-semibold py-2 rounded-full text-sm hover:opacity-85 transition-all">
                Subscribe
              </button>
            </div>
          </div>
          <div className="Like Dislike share Download More flex gap-2 ">
            <div className="flex bg-zinc-200   rounded-full">
              <div className="  px-3 py-1 flex items-center gap-1 border-[1px] border-r-zinc-400 hover:bg-zinc-300 rounded-l-full  cursor-pointer">
                <BiLike className="text-2xl  " /> {likesCount}
              </div>
              <div className=" px-3 py-1 hover:bg-zinc-300 rounded-r-full  cursor-pointer ">
                <BiDislike className="text-2xl" />
              </div>
            </div>
            <div className="bg-zinc-200 px-3 py-1 rounded-full hover:bg-zinc-300  cursor-pointer flex gap-1 items-center">
              <PiShareFatThin className="text-2xl" /> Share
            </div>
            <div className="bg-zinc-200 px-3 py-1 rounded-full hover:bg-zinc-300  cursor-pointer flex items-center gap-1">
              <TfiDownload className="text-lg" /> Download
            </div>
            <div className="bg-zinc-200 px-3 py-1 rounded-full hover:bg-zinc-300  cursor-pointer">
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
