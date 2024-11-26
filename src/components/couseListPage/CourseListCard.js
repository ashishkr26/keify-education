import React from "react";
import StarsIcon from "@mui/icons-material/Stars";
import { Link } from "react-router-dom";

const CourseListCard = (props) => {
  const {
    thumbnail,
    title,
    description,
    author,
    rating,
    aggregateRating,
    duration,
    lectures,
    price,
    isPaid,
  } = props.info;
  return (
    <div className="mx-4 my-1 p-2 h-52 border border-gray-300 grid grid-flow-col  shadow-md">
      <div>
        <img src={thumbnail} className="w-48 h-48" alt="thumbnail" />
      </div>
      <div className="course-list mx-2 p-2 col-span-11">
        <div className="font-bold text-2xl ">{title}</div>
        <div className="text-base font-semibold pt-1">{description}</div>
        <div className="text-base font-semibold pt-1 text-pink-600">{author}</div>
        <div className="text-sm font-semibold pt-1">
          Ratings {rating} <StarsIcon fontSize="small" /> ({aggregateRating})
        </div>
        <span className="text-orange-500  font-semibold">{isPaid ? "Paid Course " : "Free Course"}</span>
        <div className="text-sm font-semibold pt-1">
          {" "}
          Total {duration} | {lectures}
        </div>
      </div>
      <div className="ml-10 absolute right-0">
        <div className="font-bold text-2xl col-span-1 my-2 ml-8 w-32  ">
          ₹{price} 
        </div>
        <div className="">
          <Link
            to="/coursebuydetail"
            style={{ width: "8rem", display: "block", textAlign: "center" }}
            className="bg-blue-600  no-underline mx-2 p-2 rounded-md text-white  mt-8 shadow-md"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseListCard;
