import React, { useState } from "react";
import cart from "../assets/images/cart.png";
import hmb1 from "../assets/images/hmb1.png";
import hmb2 from "../assets/images/hmb2.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { courseList } from "../utils/mockData/courseListPageData";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDialogOpen, SetIsDialogOpen] = useState(false);
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  const [searchText, setSearchText] = useState("");
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      const matchedCourse = courseList.find((course) =>
        course.title.toLowerCase().includes(searchText.toLowerCase())
      );
      if (matchedCourse) {
        navigate("/courselistpage");
      } else {
        alert("Course not found!");
      }
    }
  };

  return (
    <div className=" h-[84px] pt-2 shadow-lg  z-20  flex flex-grow sticky top-0 bg-white">
      <img
        onClick={() => {
          dispatch(toggleMenu());
        }}
        className="h-8 px-2 mt-2  cursor-pointer hover:scale-110 duration-200  "
        alt="hmb"
        src={isMenuOpen ? hmb2 : hmb1}
      />
      <Link className="text-black" to="/">
        <label className="text-3xl font-bold  pt-2 cursor-pointer hover:scale-110 duration-200">
          Keify
        </label>
      </Link>

      <div className="">
        <ul
          tabIndex={0}
          // onFocus={() => {
          //   SetIsDialogOpen(true);
          // }}
          // onBlur={() => {
          //   SetIsDialogOpen(false);
          // }}
          className="flex justify-items-end  mt-1 p-2 text-lg"
        >
          <li className=" px-2 py-1 ml-4 hover:scale-110 duration-200 font-semibold cursor-pointer"
           onMouseEnter={() => SetIsDialogOpen(true)}
           onMouseLeave={() => SetIsDialogOpen(false)}
          >
            Courses
            <span >
              {isDialogOpen?<KeyboardArrowUpIcon />:<KeyboardArrowDownIcon />}
            </span>
            {isDialogOpen ? (
              <CourseDailog
                isDialogOpen={isDialogOpen}
                SetIsDialogOpen={SetIsDialogOpen}
              />
            ) : null}
          </li>
          <div className=" p-2 mx-10 ">
            <input
              className="h-12 w-[440px] border border-black -mt-6  rounded-l-full rounded-r-full px-4 hover:bg-gray-100 "
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </div>

          <li className="p-2 cursor-pointer hover:scale-110 duration-200 font-semibold">
            Teach On Keify
          </li>
          <li className="p-2">
            <Link to="/cart">
              <img
                onClick={() => {}}
                className="h-10 px-2 -mt-2 cursor-pointer hover:scale-110 duration-200 "
                alt="cart"
                src={cart}
              />
            </Link>
          </li>

          <li className="p-2 mt-1">
            <Link
              to="/login"
              aria-label="Login"
              className="border border-black ml-10 px-2 py-1 font-semibold hover:bg-gray-200 hover:scale-110 duration-200 no-underline text-black "
            >
              Login
            </Link>
          </li>

          <li className="p-2 mt-1">
            <Link
              to="signup"
              className="border border-black px-2 py-1 text-white bg-black font-semibold hover:bg-white hover:text-black z-20 hover:scale-110 duration-200 no-underline"
            >
              SignUp
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

const CourseDailog = ({ isDialogOpen, SetIsDialogOpen }) => {
  const [isDialogOptionOpen, SetIsDialogOption] = useState(false);
  console.log(isDialogOpen);
  return (
    <ul className="absolute  bg-white w-72 my-3 mx-2 p-2 shadow-md border border-gray-600">
      <li className="py-2 ">
        <div className="flex justify-between">
          <span>Competitive Exam </span>
          <span
            // onClick={() => {
            //   SetIsDialogOption(!isDialogOptionOpen);
            // }}
            onMouseEnter={()=>{SetIsDialogOption(true)}}
            // onMouseLeave={()=>SetIsDialogOption(false)}
          >
            <ChevronRightIcon />
          </span>
        </div>
        {isDialogOptionOpen  ? (
          <ul className="ml-[279px] -mt-11 bg-gray-300 w-72 h-[440px] absolute border border-gray-100 shadow-sm ">
            <li className="py-1 ml-10">
              <Link
                to="/courselistpage"
                onClick={(e) => {
                  setTimeout(() => {
                    SetIsDialogOption(false);
                    SetIsDialogOpen(false);
                  }, 100); // Delay submenu closure
                }}
                className="border no-underline text-black border-black rounded-md p-1 bg-gray-50 block w-[144px] text-center "
              >
                GATE
              </Link>
            </li>
            <li className="py-2 ml-10">
              <button className="border border-black rounded p-1 bg-gray-50 w-36">
                IIT JEE
              </button>
            </li>
            <li className="py-2 ml-10">
              <button className="border border-black rounded p-1 bg-gray-50 w-36">
                NEET
              </button>
            </li>
            <li className="py-2 ml-10">
              <button className="border border-black rounded p-1 bg-gray-50 w-36">
                GATE
              </button>
            </li>
            <li className="py-2 ml-10">
              <button className="border border-black rounded p-1 bg-gray-50 w-36">
                GATE
              </button>
            </li>
          </ul>
        ) : null}
      </li>
      <p className="text-xs py-1">GATE, IIT-JEE, NEET,</p>
      <li className="py-2 flex justify-between">
        <span>Professional Courses</span>
        <span>
          <ChevronRightIcon />
        </span>
      </li>
      <p className="text-xs py-1">JAVASCRIPT, REACT, PYTHON,</p>

      <li className="py-2 flex justify-between">
        School Preparation <ChevronRightIcon />
      </li>
      <p className="text-xs py-1">IB-Curriculum, CBSE, ICSE,</p>

      <li className="py-2 flex justify-between">
        <span>Government Exams </span>
        <span className="">
          <ChevronRightIcon />
        </span>
      </li>
      <p className="text-xs py-1">SSC, BANKING, RAilways,</p>

      <li className="py-2 flex justify-between">
        <span>UG, PG Courses</span>
        <span>
          <ChevronRightIcon />
        </span>
      </li>
      <p className="text-xs py-1">GRE, DSAT, GMAT,</p>
    </ul>
  );
};
