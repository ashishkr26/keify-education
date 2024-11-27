import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay
import "swiper/css";
import "swiper/css/navigation";

import student1 from "../assets/images/student1.png";
import student2 from "../assets/images/student2.png";

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
  ];

  return (
    <div className="bg-gray-50 py-4">
      <h2 className="mx-2  p-2 text-xl font-bold text-center">
        See What Others Are Achieving Through Our Learnings
      </h2>
      <div className="m-4 px-4">
        <Swiper
          modules={[Navigation, Autoplay]} // Add Autoplay module
          spaceBetween={-50} // Spacing between slides
          slidesPerView={3} // Number of visible slides
          centeredSlides={true}
          navigation
          loop={true}
          autoplay={{
            delay: 1000, // 1-second delay
            disableOnInteraction: false, // Continue autoplay even after interaction
          }}
          speed={3000} // Transition duration (1 second)
          breakpoints={{
            640: { slidesPerView: 1 }, // Small devices
            768: { slidesPerView: 2 }, // Medium devices
            1024: { slidesPerView: 3 }, // Large devices
          }}
          style={{
            "--swiper-navigation-color": "#000",
            "--swiper-navigation-size": "20px",
            transitionTimingFunction: "ease-in-out", // Smooth transition
          }}
          className="testimonial-swiper"
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-5/6 p-6 bg-white h-96 rounded-lg shadow-lg border border-gray-600 mx-auto my-6">
                <div className="user-name flex items-center">
                  <div className="bg-gray-900 w-10 h-10 flex items-center justify-center text-white rounded-full text-lg font-bold">
                    {item.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <span className="ml-4 text-lg font-semibold">
                    {item.name}
                  </span>
                </div>

                <div className="flex justify-center mt-4">
                  <img
                    className="h-32 w-32 object-cover rounded-full border-2 border-gray-300"
                    alt="thumbnail"
                    src={item.thumbnail}
                  />
                </div>

                <div className="mt-4 text-left">
                  <p className="text-sm text-gray-600">{item.comment}</p>
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
