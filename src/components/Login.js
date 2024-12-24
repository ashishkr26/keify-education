import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef();
  const password = useRef();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email.current.value || !password.current.value) {
      setErrorMessage("Email and password cannot be empty.");
      return;
    }
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    console.log(message);
    if (message) return;
  };

  const navigate = useNavigate();
  return (
    <div className="flex  justify-center items-center font-poppins ">
      {/* <img alt="login-page" src={}/> */}
      <form className="my-20  p-4 border shadow-lg">
        <label className="text-black text-2xl m-2 p-2 font-semibold">
          Sign Into Your Account
        </label>
        <p className="text-xs text-red-600">
          {errorMessage === "Email and password cannot be empty."
            ? "Email and password cannot be empty."
            : null}
        </p>
        <div className="">
          <label className="flex text-sm text-blue-600">
            Enter Your Email Id
          </label>
          <input
            ref={email}
            className="mr-2 my-2 p-2 w-full border border-black "
            type="text"
            placeholder="Email Id"
          />
          <p className="text-xs text-red-600">
            {errorMessage === "Email id is not valid"
              ? "Email id is not valid"
              : null}
          </p>
          <label className="flex text-sm text-blue-600">
            Enter your Password
          </label>
          <input
            ref={password}
            className="mr-2 my-2 p-2 w-full border border-black"
            type="password"
            placeholder="Password"
          />
          <p className="text-xs text-red-600">
            {errorMessage === "Password is not valid"
              ? "Password is not valid"
              : null}
          </p>

          <div className="flex justify-center my-2">
            <button
              onClick={handleSignIn}
              className=" py-2 w-full bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Sign In
            </button>
          </div>

          <div className=" m-2">
            <span>Continue Without Signing In </span>
            <span
              onClick={() => navigate("/")}
              className=" text-blue-600 underline cursor-pointer"
            >
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
