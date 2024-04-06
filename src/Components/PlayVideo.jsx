import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecomendedVideos from "./RecomendedVideos";
import { Youtube_API } from "./Constants/Constant";
import useSearch from "../Hooks/useSearch";
import VideoPlayer from "./VideoPlayer";

const PlayVideo = () => {
  const [videoData, setVideoData] = useState(null);

  const { id } = useParams();
  const getData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&regionCode=IN&key=${Youtube_API}`
    );
    const res = await data.json();
    setVideoData(res?.items[0]);
  };
  const title = videoData?.snippet?.title;
  const channelId = videoData?.snippet?.channelId;

  useEffect(() => {
    getData();
  }, [id]);
  const rec = useSearch(title);

  return (
    <div>
      <div className="mt-16 md:px-4 flex flex-col md:flex md:flex-row w-full md:gap-4 gap-3">
        <VideoPlayer id={id} channelId={channelId} />
        <div className="right w-[100%] md:w-[40%]   md:p-3 p-1">
          {!rec ? (
            <div>"Loading"</div>
          ) : (
            rec.map((video) => (
              <RecomendedVideos key={video?.id?.videoId} allData={video} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
