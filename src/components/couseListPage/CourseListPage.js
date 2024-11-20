import React from "react";
import CourseListCard from "./CourseListCard";
import { courseList } from "../../utils/mockData/courseListPageData";

const CourseListPage = () => {
 
  return (
    <div >
      {/* <div className="flex">
        <button className="border border-black font- h-14 w-24 m-4 p-2">
          All Courses
        </button>

        <button className="border border-black font- h-14 w-24 m-4 p-2">
          Paid Courses
        </button>

        <button className="border border-black font- h-14 w-24 m-4 p-2">
          Free Courses
        </button>
      </div> */}
      <div className="grid grid-flow-col">
      {/* <div className="filter-list">
        <ul>
          <li>Ratings</li>
          <li>Language</li>
          <li>Price</li>
        </ul>

      </div> */}

      <div>
        {courseList.map((course) => (
          <CourseListCard key={course.title} info={course} />
        ))}
      </div>
      </div>
     
    </div>
  );
};

export default CourseListPage;
