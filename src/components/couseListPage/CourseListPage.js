import React from "react";
import CourseListCard from "./CourseListCard";
import { courseList } from "../../utils/mockData/courseListPageData";

const CourseListPage = () => {
  return (
    <div>
      <div className="grid grid-flow-col">
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
