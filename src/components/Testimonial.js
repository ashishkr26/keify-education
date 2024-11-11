import React from "react";
import uppercomma from "../assets/images/uppercomma.png";

const Testimonial = () => {
  const testimonialData = [
    {
      name: "Deepika Singh",
      comment:
        "Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit. do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Ashish Kumar",
      comment:
        "Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit. do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Irish Allen",
      comment:
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit. ",
    },
  ];

  return (
    <div className="bg-gray-50 mt-10">
      <h2 className="mx-2 mt-12 p-2 ">
        See What others are Achieving through our Learnings
      </h2>
      <div className="flex">
        {testimonialData.map((item) => {
          return (
            <div
              key={item.id}
              className="w-1/4 bg-white border border-black h-64 m-4 p-4 rounded-md"
            >
              <div className="user-name flex">
                <div className="bg-gray-900 w-12 h-12 text-white rounded-full text-center pt-[10px]">
                  DS
                </div>
                <span className="ml-4 p-2 mt-1">{item.name}</span>
              </div>
              <div className="mt-4 text-left">
                <img className="h-6 -ml-2" src={uppercomma} alt="/" />
                <div className="text-sm">{item.comment}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* <div className=" absolute -mt-44 flex justify-around">
      <button className="w-10 h-10 rounded-full ml-2  bg-gray-600  text-white ">{""}</button>
      <button className="w-10 h-10 rounded-full bg-gray-600  text-white ml-[1160px]">{""}</button>
      </div> */}
      
    </div>
  );
};

export default Testimonial;
