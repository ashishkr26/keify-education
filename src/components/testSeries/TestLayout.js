import React, { useEffect, useState } from "react";
import { test01 } from "../../utils/mockData/test01";
import { useDispatch } from "react-redux";
import { toggleHeader } from "../../utils/store/appSlice";

const TestLayout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleHeader()); // Hide header
    return () => {
      dispatch(toggleHeader()); // Restore header
    };
  }, [dispatch]);
  const questionList = test01.testPaper.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < questionList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{test01.testPaper.title}</h1>
      <p>{test01.testPaper.description}</p>

      <div>
        <p>
          Question {currentQuestionIndex + 1} of {questionList.length}
        </p>
        <p>{questionList[currentQuestionIndex].question}</p>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          {questionList[currentQuestionIndex].options.map((option, index) => (
            <li key={index}>
              <label>
                <input
                  type="radio"
                  name={`question-${questionList[currentQuestionIndex].id}`}
                  value={option}
                />{" "}
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === questionList.length - 1}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            cursor:
              currentQuestionIndex === questionList.length - 1
                ? "not-allowed"
                : "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TestLayout;
