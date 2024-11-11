import React from "react";
import { useNavigate } from "react-router-dom";
import news from "../assets/images/news.jpeg";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="m-4 p-4 ">
      <form className="">
        <div className=" my-4 p-2 text-3xl font-bold">
          Sign Up And Kick Start Your Learning
        </div>
        <div>
          <input
            type="text"
            placeholder="Full Name"
            className="border border-black w-1/3 h-14 m-2 p-2"
          />
        </div>
        <div>
          <input
            input="Email"
            placeholder="Email"
            className="border border-black w-1/3 h-14 m-2 p-2"
          />
        </div>
        <div>
          <input
            input="Password"
            placeholder="Password"
            className="border border-black w-1/3 h-14 m-2 p-2"
          />
        </div>
        <div className="w-1/3 m-2 p-2 flex">
          <input className="-ml-2 -mt-5 h-16" type="checkbox" />
          <label className="font-semibold text-base mx-2">
            Send me special offers, Recommendations and Offers
          </label>
        </div>
        <div>
          <button className="font-bold border border-black bg-purple-600 w-1/3 h-14 m-2 p-2 text-white hover:bg-purple-500">
            Sign Up
          </button>
        </div>

        <div className="text-xs center m-2 p-2">
          By signing up, you agree to our{" "}
          <span className="text-blue-600 underline">Terms of Use</span> and{" "}
          <span className="text-blue-600 underline">Privacy Policy.</span>
        </div>

        <div className="w-1/3 bg-purple-100 h-12 m-2 p-2">
          Already have an account?{" "}
          <span
            onClick={() => {
              navigate("/login");
            }}
            className="text-blue-600 underline cursor-pointer"
          >
            Log in
          </span>
        </div>
      </form>

      <img
        className="absolute right-20 top-40  mt-3 w-2/5 shadow-lg "
        alt="signup-image"
        src={news}
      />
    </div>
  );
};

export default SignUp;
