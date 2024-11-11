import React from "react";
import engg from "../../assets/images/engg.png";

const Video = () => {
  return (
    <div>
      <div className="m-2 p-2 "></div>
      <div className="bg-gray-200 w-1/3 h-60 m-4 ">
        <div className=" flex">
          <img className="w-1/3  h-60" alt="thumbnail" src={engg} />
          <div>
            <div className="p-2">Engineerin Mathematics</div>
            <div>
              1. Introduction |<span> Basic Maths | </span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
