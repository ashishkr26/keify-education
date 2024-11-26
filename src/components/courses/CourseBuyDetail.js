import React, { useState } from "react";
import CourseBuyCard from "./CourseBuyCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { faqList } from "../../utils/mockData/courseListPageData";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CourseBuyDetail = () => {
  const [showAnsIndex, SetShowAnsIndex] = useState(null);
  console.log(faqList[1].ans);
  return (
    <div>
      <div className="bg-gray-200 h-72 w-full z-10">
        <h2 className=" p-8 font-semibold">
          GATE 2024 Weekend Crash Course{" "}
        </h2>
      </div>
      <div className="fixed top-24 right-4 z-20 bg-white shadow-md">
        <CourseBuyCard />
      </div>
      <div className="border border-gray-700 bg-gray-900 text-white w-3/5 m-4 p-4 h-96 shadow-md">
        <h4>Batch Features</h4>
      </div>
      <div className="border border-gray-700 bg-gray-100 w-3/5 m-4 p-4 h-96 shadow-md ">
        <h4>About Batch</h4>
        <div>
          <CalendarMonthIcon /> Batch duration
        </div>
        <div>
          <StarPurple500Icon /> Validity
        </div>
      </div>

      {/* FAQ */}
      <div className="border border-gray-700 w-3/5 m-4 p-4 h-auto shadow-md flex flex-grow flex-col justify-items-center ">
        <h4 className="m-2 p-2">FAQ- Frequently Asked Question</h4>
        {faqList.map((faq, index) => (
          <div key={faq.id} className="p-2">
            <div className="flex justify-between text-xl px-2 py-2 bg-gray-100">
              <span>Q: {faq.ques}</span>

              <p
                onClick={
                  () =>
                    showAnsIndex === index
                      ? SetShowAnsIndex(null) // Hide the answer
                      : SetShowAnsIndex(index) // Show the answer for the clicked question
                }
                
                className="text-3xl cursor-pointer"
              >
                
                {showAnsIndex === index ? (
                  <RemoveCircleOutlineIcon />
                ) : (
                  <AddCircleOutlineIcon />
                )}
              </p>
            </div>

            {/* Only show the answer for the currently active index */}
            {showAnsIndex === index && <div className="p-2">A: {faq.ans}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseBuyDetail;
