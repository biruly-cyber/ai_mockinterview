"use client";

import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/models/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

const Interview = ({ params }) => {
  const [interviewData, setInterviewData] = useState(null);
  const [webcamEnable, setWebcamEnable] = useState(false);

  useEffect(() => {
    if (params.interviewId) {
      getInterviewDetails();
    }
  }, [params.interviewId]);

  // Get interview details
  const getInterviewDetails = async () => {
    try {
      const response = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));

      console.log(response);

      if (response.length > 0) {
        setInterviewData(response[0]);
      } else {
        console.error("No interview found");
      }
    } catch (error) {
      console.error("Failed to fetch interview details", error);
    }
  };

  return (
    <div className="my-10 flex justify-center items-center flex-col">
      <h2 className="font-bold text-2xl">Let's Get Started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="flex my-5  flex-col gap-5 ">
          <div className="flex flex-col p-5 rounded-lg border">
            <h2 className="text-lg">
              <strong>Job Role/Job Positions</strong> :{" "}
              {interviewData.jobPosition}
            </h2>
            <h2 className="text-lg">
              <strong>Job Description/Tech stack</strong> :
              {interviewData.jobDesc}
            </h2>
            <h2 className="text-lg">
              <strong>Years of experience</strong> :
              {interviewData.jobExperience}
            </h2>
          </div>
          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-50">
            <h2 className="flex gap-3 items-center">
              <Lightbulb className="text-yellow-500" />
              <span className="text-yellow-500">
                <strong>Information</strong>
              </span>
            </h2>
            <h2 className="p-2 text-yellow-600">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>
        <div className="">
          {webcamEnable ? (
            <Webcam
              mirrored={true}
              onUserMedia={() => {
                console.log("User media granted");
                setWebcamEnable(true);
              }}
              onUserMediaError={(error) => {
                console.error("User media error:", error);
                setWebcamEnable(false);
              }}
              style={{ height: 300, width: 300 }}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 w-full p-20 bg-secondary rounded-lg" />
              <Button
                onClick={() => {
                  setWebcamEnable(true);
                  console.log("clicked");
                }}
                variant="ghost"
                className="mt-5 w-full"
              >
                Enable webcam and microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end w-full">
        <Button className="">Start Interview</Button>
      </div>
    </div>
  );
};

export default Interview;
