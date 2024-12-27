import React from "react";
import { useNavigate } from "react-router-dom";

const TestHome = () => {
  const navigate = useNavigate()
  const testList = ["Test-01", "Test-02"];
  return (
    <div className="flex flex-row font-poppins ">
      <div className="w-1/2 m-4 p-4 text-2xl font-bold text-blue-500">
        GATE- FULL LENGTH TESTS
      </div>
      <div className="w-1/2 border border-slate-950 m-4 h-80 shadow-inner">
        {testList.map((item) => (
          <div className="flex m-2  p-2 justify-between bg-green-100">
            <div className=" flex justify-center items-center p-2 rounded-md ">
              FULL LENGTH {item}
            </div>
            <div>
              <button onClick={()=>navigate("/test-layout")} className="px-2 py-1 bg-blue-400 rounded-md">
                Start
              </button>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestHome;
