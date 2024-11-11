import React from "react";
import Header from "./Header";
import Main from "./Main";
import Login from "./Login";
import Course from "./courses/Course";
import { useLocation } from "react-router-dom";
import Cart from "./Cart";
import SignUp from "./SignUp";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import CourseDetail from "./courses/CourseDetail";
import CourseBuyDetail from "./courses/CourseBuyDetail";
import Sidebar from "./SideBar";

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <Sidebar/>
      <Header />
      {/* Conditionally render Main or Login based on the pathname */}
      {location.pathname === "/" && <Main /> }
      {location.pathname === "/login" && <Login />}
      {location.pathname === "/course" && <Course />}
      {location.pathname === "/signup" && <SignUp />}
      {location.pathname === "/cart" && <Cart />}
      {location.pathname === "/" && <CourseDetail/>}
      {location.pathname === "/" && <Testimonial/>}
      {location.pathname === "/" && <Footer/>}
      {location.pathname === "/coursebuydetail" && <CourseBuyDetail/>}
    </div>

  );
};

export default Home;
