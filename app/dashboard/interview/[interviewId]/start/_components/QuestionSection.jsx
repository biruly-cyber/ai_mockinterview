import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

const QuestionSection = ({ mockInterViewQuestion, activeQuestionIndex }) => {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, Your browser does not support text to speech");
    }
  };
  return (
    mockInterViewQuestion && (
      <div className="p-5 border rounded-lg my-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {mockInterViewQuestion &&
            mockInterViewQuestion.map((question, index) => (
              <div key={index}>
                <h2
                  className={`text-sm md:text-sm py-2 text-center cursor-pointer bg-secondary rounded-full ${
                    activeQuestionIndex == index && "bg-blue-500 text-white"
                  }`}
                >
                  Question #{index + 1}
                </h2>
                {/* Assuming question.text contains the actual question text */}
              </div>
            ))}
        </div>
        <h2 className="my-5 text-sm md:text-lg">
          {mockInterViewQuestion[activeQuestionIndex]?.question}
        </h2>

        <Volume2
          className="cursor-pointer"
          onClick={() =>
            textToSpeech(mockInterViewQuestion[activeQuestionIndex]?.question)
          }
        />
        <div className="border rounded-lg p-5 bg-blue-100 mt-20">
          <h2 className="flex gap-2 items-center text-blue-700 mb-2">
            <Lightbulb />
            <strong>Note:</strong>
          </h2>
          <h2 className="text-sm text-blue-700">
            Click on record answer when you want to answer the question. At the
            end of interview we will give you the feedback along with correct
            answer for each of question and your answer to comapare it.
          </h2>
        </div>
      </div>
    )
  );
};

export default QuestionSection;
