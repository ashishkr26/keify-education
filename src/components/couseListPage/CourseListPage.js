import React, { useState } from "react";
import CourseListCard from "./CourseListCard";
import { courseList } from "../../utils/mockData/courseListPageData";

const CourseListPage = () => {
  const buttonList = ["Most Rated", "Paid Course", "Free Course", "Price", "Our Partners"];
  const [filteredCourse, setFilteredCourse] = useState(courseList);

  const handleFilter = (filterType) => {
    let filtered = [...courseList]; // Start with the full list of courses

    switch (filterType) {
      case "Most Rated":
        // Implement relevance logic (e.g., based on a rating or priority property)
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "Paid Course":
        filtered = filtered.filter((course) => course.isPaid);
        break;
      case "Free Course":
        filtered = filtered.filter((course) => !course.isPaid);
        break;
      case "Price":
        filtered = filtered.sort((a, b) => a.price - b.price); // Sorting by price (ascending)
        break;
      case "Our Partners":
        filtered = filtered.filter((course) => course.partner === true); // Assuming 'partner' is a boolean
        break;
      default:
        break;
    }

    setFilteredCourse(filtered); // Update the state with the filtered list
  };

  return (
    <div className="">
      <div className="grid grid-flow-row">
        <div className="filter-buttons p-2 flex flex-row justify-center">
          <label className="border border-black p-2 my-2 rounded-lg bg-black text-white font-semibold">Filters</label>
          {buttonList.map((buttonItem) => (
            <button
              onClick={() => handleFilter(buttonItem)}
              className="border border-black bg-fuchsia-200 rounded-2xl px-3 py-2 my-2 mx-12 font-semibold"
            >
              {buttonItem}
            </button>
          ))}
        </div>
        <div>
          {filteredCourse.map((course) => (
            <CourseListCard key={course.title} info={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseListPage;
