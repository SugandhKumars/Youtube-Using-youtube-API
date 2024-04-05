import React, { useEffect, useState } from "react";
import Video from "./Video";
import { Youtube_API } from "./Constants/Constant";
import { useSelector } from "react-redux";
import useSearch from "../Hooks/useSearch";

const VideoContainer = () => {
  const [video, setVideo] = useState(null);
  let category = useSelector((state) => state.category);
  // console.log(category);
  const categoryData = useSearch(category);
  const getData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${Youtube_API}`
    );
    const res = await data.json();
    // console.log(res);
    setVideo(res?.items);
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(video && video);
  return (
    <>
      <div className="px-1 md:px-2 w-full flex flex-wrap  gap-4 ml-48 md:ml-52">
        {categoryData?.length > 0 && category != "All"
          ? categoryData?.map((video) => (
              <Video key={Math.random()} allVideos={video} />
            ))
          : video?.map((video) => <Video key={video?.id} allVideos={video} />)}
      </div>
    </>
  );
};

export default VideoContainer;
