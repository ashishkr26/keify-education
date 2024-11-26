import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import student1 from "../assets/images/student1.png";
import student2 from "../assets/images/student1.png";

const Testimonial = () => {
  const testimonialData = [
    {
      name: "Deepika Singh",
      thumbnail: student1,
      comment:
        "Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit. do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Ashish Kumar",
      thumbnail: student2,
      comment:
        "Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit. do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Irish Allen",
      thumbnail: student1,
      comment:
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit.",
    },
    {
      name: "Wilson Rome",
      thumbnail: student2,
      comment:
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit.",
    },
    {
      name: "Deepika Singh",
      thumbnail: student1,
      comment:
        "Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit. do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Ashish Kumar",
      thumbnail: student2,
      comment:
        "Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit. do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Irish Allen",
      thumbnail: student1,
      comment:
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit.",
    },
    {
      name: "Wilson Rome",
      thumbnail: student2,
      comment:
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit.",
    },
    {
      name: "Deepika Singh",
      thumbnail: student1,
      comment:
        "Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit. do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Ashish Kumar",
      thumbnail: student2,
      comment:
        "Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit. do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Irish Allen",
      thumbnail: student1,
      comment:
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit.",
    },
    {
      name: "Wilson Rome",
      thumbnail: student2,
      comment:
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, Sed consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="bg-gray-50 mt-10">
      <h2 className="mx-2 mt-12 p-2 text-xl font-bold text-center">
        See What Others Are Achieving Through Our Learnings
      </h2>
      <div className="m-4 px-10">
      <Swiper
        modules={[Navigation]}
        spaceBetween={-1000} // Negative value to overlap slides
        slidesPerView={4} // Allows part of the next and previous slides to show
        centeredSlides={true}
        navigation
        loop={true}
        className="testimonial-swiper"
        
      >
        {testimonialData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-2/3 px-20 py-20 bg-white  h-96  rounded-2xl shadow-lg mx-auto my-16 swiper-slide-item">
              <div className="user-name flex items-center">
                {/* <div className="bg-gray-900 w-12 h-12 mt-10  text-white rounded-full text-center ">
                  {item.name.split(" ").map((n) => n[0]).join("")}
                </div> */}
                
                <span className="ml-4 text-lg font-semibold">{item.name}</span>
              </div>
              
              <div className="flex justify-center"><img className="h-40"  alt="thumbnail" src={item.thumbnail}/></div>
              <div className="mt-2 text-left">
                
                <div className="mt-2 text-sm text-gray-600">{item.comment}</div>
              </div>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
     
    </div>
  );
};

export default Testimonial;
