import React from "react";
import CourseBuyCard from "./CourseBuyCard";

const CourseBuyDetail = () => {
  return (
    <div>
      <div className="bg-pink-500 h-[240px] w-full z-10">
        <h2 className="text-white py-12 px-20 font-semibold">
          GATE 2024 Weekend Crash Course{" "}
        </h2>
      </div>
      <div className="fixed top-24 right-4 z-20 bg-white shadow-md">
        <CourseBuyCard />
      </div>
      <div className="border border-gray-700 w-1/2 m-4 p-4 h-96 ">
        <h4>What You Will Learn</h4>
      </div>
    </div>
  );
};

export default CourseBuyDetail;
