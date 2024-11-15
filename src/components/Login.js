import React from "react";
import google from "../assets/images/google.jpg";

const Login = () => {

  return (
    <div className="">
      <div className="w-[420px] shadow-lg absolute right-0 left-0 mx-auto my-28 bg-opacity-80 p-12 rounded-md">
        {/* <img alt="login-page" src={}/> */}
        <form className="">
          <label className="text-black text-2xl m-4 p-2 font-semibold">
            Sign Into Your Account
          </label>
          <div>
            <button className="border border-black mx-8 my-2 p-2 rounded-md flex ">
              <img className="h-8 " src={google} alt=" g-logo" />
              <span className="mx-2 mt-1 font-semibold">
                Sing In With Your Google
              </span>
            </button>

            <div className="my-4 mx-4">
              <span>Continue Without Signing In</span>
              <span className="mx-2 text-blue-600 underline cursor-pointer">
                Explore
              </span>
            </div>

            <div className="my-4 mx-4">
              <span>Don't have an Account, Create Account </span>
              <span onClick={()=>{}} className=" mx-2 text-blue-600 underline cursor-pointer">
               
                Sign Up
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
