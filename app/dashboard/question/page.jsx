import React from "react";
import FAQItem from "../_components/FAQItem";
import frequentlyAskedQuestion from "@/utils/frequentlyAskedQuestion";

const Questions = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>

      <div className="space-y-10 ">
        {frequentlyAskedQuestion.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
