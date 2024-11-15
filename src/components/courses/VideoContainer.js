import React, { useEffect, useState } from "react";
import { CHANNEL_API_URL, VIDEO_API_URL } from "../../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
    const [video, setVideo] = useState();

    useEffect(() => {
      getVideos();
    },[]);

    const getVideos = async ()=>{
      const data = await fetch(CHANNEL_API_URL);
      const response = await data.json();
      console.log(response);
      setVideo(response.items);
    }
  return (
  

   
    <div>
      <VideoCard info={video}/>
    </div>
  );
};

export default VideoContainer;

