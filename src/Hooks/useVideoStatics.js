import React, { useEffect, useState } from "react";
import { Youtube_API } from "../Components/Constants/Constant";

const useVideoStatics = (id) => {
  const [videoData, setVideoData] = useState([]);
  const getVideoData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${Youtube_API}`
    );
    const res = await data.json();
    setVideoData(res?.items);
  };
  useEffect(() => {
    getVideoData();
  }, [id]);
  return videoData;
};

export default useVideoStatics;
