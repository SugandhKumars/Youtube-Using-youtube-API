import React from "react";
import { useParams } from "react-router-dom";
import useSearch from "./Hooks/useSearch";
import RecomendedVideos from "./Components/RecomendedVideos";

const SearchResult = () => {
  const { result } = useParams();
  const data = useSearch(result);
  console.log(data);
  return (
    <div className="mt-20 ml-20">
      {data?.map((video) => (
        <RecomendedVideos
          key={video?.id?.videoId}
          allData={video}
          videoSize={{ width: "700px", height: "310px" }}
          channelProfile={true}
        />
      ))}
    </div>
  );
};

export default SearchResult;
