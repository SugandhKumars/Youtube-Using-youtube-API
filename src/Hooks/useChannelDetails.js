import { useEffect, useState } from "react";
import { Youtube_API } from "../Components/Constants/Constant";

const useChannelDetails = (channelId) => {
  const [channelDetail, setChannelDetail] = useState([]);

  const getChannelData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${Youtube_API}`
    );
    const res = await data.json();
    if (channelId === undefined) return;
    setChannelDetail(res?.items);
  };

  useEffect(() => {
    getChannelData();
  }, [channelId]);
  return channelDetail;
};

export default useChannelDetails;
