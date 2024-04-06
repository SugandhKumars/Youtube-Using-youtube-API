import React, { useEffect, useState } from "react";
import { Youtube_API } from "../Components/Constants/Constant";

const useSearch = (searchText) => {
  const [searchData, setSearchData] = useState(null);
  if (searchText == "undefined") return;
  const searchCategory = async () => {
    if (!searchText || searchText == "All") return;
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=%22${searchText}%22&regionCode=IN&type=video&key=${Youtube_API}`
    );
    const res = await data.json();
    setSearchData(res?.items);
  };
  useEffect(() => {
    // console.log("useSearch useEffect triggered with searchText", searchText);
    searchCategory();
  }, [searchText]);
  return searchData;
};

export default useSearch;
