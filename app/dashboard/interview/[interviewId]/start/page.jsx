"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/models/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import QuestionSection from "./_components/QuestionSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";

const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState([]);
  const [mockInterViewQuestion, setMockInterViewQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  useEffect(() => {
    getInterviewDetails();
  }, []);

  // Get interview details
  const getInterviewDetails = async () => {
    try {
      const response = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));

      console.log(response);

      console.log(mockInterViewQuestion);
      if (response.length > 0) {
        const jsonMockResp = JSON.parse(response[0].jsonMockResp);
        console.log(jsonMockResp);
        setMockInterViewQuestion(jsonMockResp);
        setInterviewData(response[0]);
      } else {
        console.error("No interview found");
      }
    } catch (error) {
      console.error("Failed to fetch interview details", error);
    }
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <QuestionSection
          mockInterViewQuestion={mockInterViewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />
        <RecordAnswerSection
          mockInterViewQuestion={mockInterViewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData = { interviewData}
        />
      </div>
    </div>
  );
};

export default StartInterview;
