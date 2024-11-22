import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="m-2 p-2 w-72 shadow-lg">
      <ul>
        <li>Title</li>
        <li>channelTitle</li>
        <li>viewCount</li>
      </ul>
    </div>
  );
};

export default VideoCard;
