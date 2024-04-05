import React from "react";

const VideoPlayer = ({ id }) => {
  return (
    <div className="w-full md:w-[60%] h-[200px] md:h-[450px]  p-1 md:p-2">
      <iframe
        className=" rounded-md md:rounded-lg w-full h-full"
        src={`https://www.youtube.com/embed/${id}?si=FxFFTIIQyfL-gQFv`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
