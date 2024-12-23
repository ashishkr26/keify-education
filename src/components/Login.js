import React from "react";
import {useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  justify-center items-center font-poppins ">
      {/* <img alt="login-page" src={}/> */}
      <form className="my-20  p-4 border shadow-lg">
        <label className="text-black text-2xl m-2 p-2 font-semibold">
          Sign Into Your Account
        </label>
        <div className="">
          <label className="flex text-sm text-blue-600">
            Enter Your Email Id
          </label>
          <input
            className="mr-2 my-2 p-2 w-full border border-black "
            type="text"
            placeholder="Email Id"
          />
          <label className="flex text-sm text-blue-600">
            Enter your Password
          </label>
          <input
            className="mr-2 my-2 p-2 w-full border border-black"
            type="password"
            placeholder="Password"
          />

          <div className=" m-2">
            <span>Continue Without Signing In </span>
            <span onClick={()=>navigate("/")} className=" text-blue-600 underline cursor-pointer">
              Explore
            </span>
          </div>

          <div className="m-2">
            <span>Don't have an Account, Create Account </span>
            <span
              onClick={() => navigate("/signup")}
              className=" mx-2 text-blue-600 underline cursor-pointer"
            >
              Sign Up
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
