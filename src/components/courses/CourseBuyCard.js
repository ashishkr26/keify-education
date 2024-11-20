import React from "react";
import TimerIcon from '@mui/icons-material/Timer';

const CourseBuyCard = () => {
  return (
    <div className="mr-4 p-4 border w-full  bg-white ">
      <div>
        <h3 className="ml-4">Course Preview</h3>
      </div>
      <div className="flex">
        <div className="m-2 p-2 text-2xl font-bold">₹. 499 </div>
        <span className="mt-3 pt-2 text-sm">86% off</span>
      </div>

      <div className="text-red-600 text-sm m-2 p-2">
      <TimerIcon/> 1 Day Left For This Price
      </div>
      <div className=" p-2">
        <button className="font-bold border bg-purple-600 p-2 w-80 text-white mr-2">
          Add to Cart
        </button>
      </div>
      <div className="p-2">APPLY COUPON</div>
      <div className="p-2 w-full ml-1">
        <input
          placeholder="Enter Copon Code"
          className="border border-black h-10 w-64 p-2"
          type="text"
        />
        <button className="bg-black text-white p-2 text-base">Apply</button>
      </div>
    </div>
  );
};

export default CourseBuyCard;
