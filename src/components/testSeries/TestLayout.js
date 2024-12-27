import React, { useEffect, useState } from "react";
import { test01 } from "../../utils/mockData/test01";
import { useDispatch } from "react-redux";
import { toggleHeader } from "../../utils/store/appSlice";
import { useNavigate } from "react-router-dom";

const TestLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(toggleHeader()); // Hide header
    return () => {
      dispatch(toggleHeader()); // Restore header
    };
  }, [dispatch]);

  const questionList = test01.testPaper.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Store selected answers

  const handleNext = () => {
    if (currentQuestionIndex < questionList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // If it's the last question, navigate to the test analysis page
    handleSubmit()
    }
  };
  
  const handleSubmit =()=>{
    navigate("/test-analysis")
  }

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleOptionSelect = (questionId, option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
  };

  return (
    <div className="p-4 font-poppins">
      <h3>Test-01</h3>

      <div className="flex flex-row">
        <div className="w-1/2 border border-gray-950 p-4 m-2 shadow-lg">
          {/* showing Question no */}
          <div className="text-blue-600">
            Question {currentQuestionIndex + 1} of {questionList.length}
          </div>
          {/* showing Question */}
          <div className="mt-1 text-lg">
            {questionList[currentQuestionIndex].question}
          </div>
        </div>

        <div className="w-1/2 border border-stone-950 p-4 m-2 shadow-lg">
          <div>Select an Option</div>
          <ul className="list-none pl-0 mt-4">
            {questionList[currentQuestionIndex].options.map((option, index) => (
              <li
                className="py-2 cursor-pointer hover:bg-green-100 flex items-center"
                key={index}
              >
                <label className="flex items-center">
                  <input
                    type="radio"
                    name={`question-${questionList[currentQuestionIndex].id}`}
                    value={option}
                    checked={
                      selectedAnswers[questionList[currentQuestionIndex].id] ===
                      option
                    }
                    onChange={() =>
                      handleOptionSelect(
                        questionList[currentQuestionIndex].id,
                        option
                      )
                    }
                    className="hidden peer"
                  />
                  <span
                    className={`w-4 h-4 border-2 rounded-full mr-2 ${
                      selectedAnswers[questionList[currentQuestionIndex].id] ===
                      option
                        ? "bg-green-500 border-green-500"
                        : "border-gray-400"
                    }`}
                  ></span>
                  {option}
                </label>
              </li>
            ))}
          </ul>

          <div className="mt-32">
            <button
              onClick={handlePrev}
              disabled={currentQuestionIndex === 0}
              className={`mr-10 px-4 py-2 bg-gray-400 text-black ${
                currentQuestionIndex === 0
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              Prev
            </button>

            <button
              onClick={handleNext}
              disabled={currentQuestionIndex === questionList.length - 1}
              className={`mr-10 px-4 py-2 bg-gray-400 text-black cursor-pointer `}
            >
            {currentQuestionIndex === questionList.length - 1 ? "Submit" : "Next"}  
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestLayout;
