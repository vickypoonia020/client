import React from "react";

const VideoComponent = () => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <video controls width="1000" height="500">
        <source src="https://www.youtube.com/watch?v=zwrRwyMjZQg" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
