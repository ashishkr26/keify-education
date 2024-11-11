import React from "react";
import Video from "./Video";

const Course = () => {
  return (
    <div>
      <div>
        <div className="w-full">
          <div className="text-3xl p-2 m-2 font-bold">Welcome User,</div>
          <div className="text-xl p-2 m-2 font-semibold">Let's Start Learning</div>
        </div>
        <Video />
      </div>
    </div>
  );
};

export default Course;
