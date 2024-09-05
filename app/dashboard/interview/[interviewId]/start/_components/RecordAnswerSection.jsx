"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircle, Users } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAIModel";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/models/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const RecordAnswerSection = ({
  mockInterViewQuestion,
  activeQuestionIndex,
  interviewData,
}) => {
  const { user } = useUser();
  const [userAns, setUserAns] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  //SET THE USER ANSWER WHEN USER SPEAKS
  useEffect(() => {
    results.map((result) =>
      setUserAns((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  // STORE USER ANSWER ON DATABASE WHEN USER ANSWER IS LONGER THAN 10 AND CHANGE THE ANSWER
  useEffect(() => {
    if (!isRecording && userAns.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAns]);

  // START RECORDING ANSWER AND STOP RECORDING ANSWER
  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      startSpeechToText();
    }
  };

  // UPDATE USER ANSWER
  const UpdateUserAnswer = async () => {
    setLoading(true);
    // DYNAMIC ANSWER FOR PROMPTING TO AI FOR COMPARING THE USER ANSWER AND CORRECT ANSWER AND FIGE THEM RATING AND FEEDBACK
    const feedbackPromt = `Question ${mockInterViewQuestion[activeQuestionIndex]?.question},  User answer: ${userAns} Depends on question and user answer for given interview question, please give us rating for answer and feedback as area of improvement if any in just 3 to 5 lines to improve it in JOSN formate with rating and field and feedback field.`;
    //SEND MESSAGE TO GEMINI AI
    const result = await chatSession.sendMessage(feedbackPromt);

    // GET THE RESPONSE FROM GEMINI AI AND CLEAN UP THE ANSWER
    const mockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    // PARSE IT IN JSON FORMAT TO GET RATING AND FEEDBACK
    const jsonFeedbackResp = JSON.parse(mockJsonResp);

    // store feedback on database
    const response = await db.insert(UserAnswer).values({
      mockIdRef: interviewData?.mockId,
      question: mockInterViewQuestion[activeQuestionIndex]?.question,
      correctAns: mockInterViewQuestion[activeQuestionIndex]?.answer,
      userAns: userAns,
      feedback: jsonFeedbackResp?.feedback,
      rating: jsonFeedbackResp?.rating,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD-MM-yyyy"),
    });

    // FINALY SHOW TOAST MESSAGE TO USER THAT ANSWER IS SUCCESSFULLY STORED
    if (response) {
      toast.success("User answer recorded successfully.");
      // ANGAIN SET THE VALUE IS EMPTY
      setUserAns("");
      setResults([]);
    }
    setResults([]);
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-col mt-20 justify-center items-center bg-black rounded-lg p-5">
        <Image
          src={"/webcam.png"}
          width={200}
          height={200}
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>
      <Button
        disabled={loading}
        variant="outline"
        className="my-10"
        onClick={StartStopRecording}
      >
        {isRecording ? (
          <h2 className="text-red-600 flex gap-2 animate-pulse">
            <StopCircle />
            Stop Recording ...
          </h2>
        ) : (
          "Record Answer"
        )}
      </Button>
    </div>
  );
};

export default RecordAnswerSection;
