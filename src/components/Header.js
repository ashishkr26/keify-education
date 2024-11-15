import React from "react";
import cart from "../assets/images/cart.png";
import hmb1 from "../assets/images/hmb1.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className=" p-2 shadow-lg  z-20  flex sticky top-0 bg-white">
      <img
        onClick={() => {
          dispatch(toggleMenu());
        }}
        className="h-6 mt-3 pr-2 cursor-pointer hover:scale-110 duration-200"
        alt="hmb"
        src={hmb1}
      />
      <Link className="text-black" to="/">
        <label className="text-3xl font-bold  py-2 cursor-pointer hover:scale-110 duration-200">
          Keify
        </label>
      </Link>

      <div className=" p-2 mx-10 ">
        <input
          className="h-10 w-[440px] border border-black mx-auto rounded-l-full rounded-r-full p-4 hover:bg-gray-100 "
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="">
        <ul className="flex justify-items-end  my-2 p-2 text-base">
          <li className="px-2 ml-6 hover:scale-110 duration-200 font-semibold">
            <Link className="text-black no-underline" to="/course">
              Course
            </Link>
          </li>

          <li className="px-2 cursor-pointer hover:scale-110 duration-200 font-semibold">
            Teach On Keify
          </li>
          <li className="px-2">
            <img
              onClick={() => {}}
              className="h-8 -mt-1 cursor-pointer hover:scale-110 duration-200 "
              alt="cart"
              src={cart}
            />
          </li>

          <li className="px-4">
            <Link
              to="/login"
              aria-label="Login"
              className="w-20 border border-black ml-10 px-2 py-1 font-semibold hover:bg-gray-200 hover:scale-110 duration-200 no-underline text-black "
            >
              Login
            </Link>
          </li>

          <li className="px-4">
            <Link
              to="signup"
              className="border border-black px-2 py-1 text-white bg-black font-semibold hover:bg-white hover:text-black z-20 hover:scale-110 duration-200 no-underline"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
