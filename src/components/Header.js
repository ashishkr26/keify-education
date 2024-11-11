import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import cart from "../assets/images/cart.png";
import hmb1 from "../assets/images/hmb1.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";
// import keifyl from "../assets/images/keifyl.jpg";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };
  return (
    <div className=" p-2 shadow-lg  z-20  flex sticky top-0 bg-white">
      <img
        onClick={() => {
          dispatch(toggleMenu());
        }}
        className="h-6 mt-3 pr-2 cursor-pointer"
        alt="hmb"
        src={hmb1}
      />
      <Link className="text-black" to="/">
        <label className="text-3xl font-bold  py-2 cursor-pointer">Keify</label>
      </Link>
      <div className=" p-2 mx-4 ">
        <input
          className="h-10 w-96 border border-gray-600 mx-auto rounded-l-full rounded-r-full p-4"
          type="text"
          placeholder="Search"
        />
      </div>

      <ul className="flex justify-items-end  my-2 mx-10 p-2 text-base">
        <Link className="no-underline text-black" to="/course">
          <li className="px-4 ml-4">Course</li>
        </Link>
        <li className="px-2">Teach On Keify</li>
        <li className="px-2">
          <img
            onClick={() => {
              navigate("/cart");
            }}
            className="h-8 -mt-1 cursor-pointer"
            alt="cart"
            src={cart}
          />
        </li>
        <li className="px-4">
          <button
            onClick={handleSignIn}
            className="w-20 border border-black ml-10 px-2 py-1 font-semibold hover:bg-gray-200"
          >
            Login
          </button>
        </li>
        <li className="px-4">
          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="border border-black px-2 py-1 text-white bg-black font-semibold hover:bg-white hover:text-black z-20"
          >
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
