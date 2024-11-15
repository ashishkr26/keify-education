import React from "react";
import VideoContainer from "./VideoContainer";

const Course = () => {
  return (
    <div>
      <div>
        <div className="w-full">
          <div className="text-3xl p-2 m-2 font-bold">Welcome User,</div>
          <div className="text-xl p-2 m-2 font-semibold">Let's Start Learning</div>
        </div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default Course;
