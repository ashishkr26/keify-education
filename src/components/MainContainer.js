import React from "react";
import CourseDetail from "./courses/CourseDetail";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import MainCarousel from "./Carousel";

const MainContainer = () => {
  return (
    <div>
      <MainCarousel />
      <CourseDetail />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default MainContainer;
