"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModel";
import { Loader2 } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/models/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";

const AddNewInterview = () => {
  const { user } = useUser();
  const [openDialog, setOpenDailog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    jobPosition: "",
    jobDesc: "",
    jobExperience: "",
  });

  const [jsonResponse, setJsonResponse] = useState([]);

  const onSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(formData);
    const inputPrompt = `Job Position: ${formData.jobPosition}, Job Description: ${formData.jobDesc}, Year of Experience: ${formData.jobExperience}, Depends on Job Position, Job Description and Years of Experience give us ${process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT} interview question anlong with Answer in JSON format, Give question and answer as field in JSON`;

    const result = await chatSession.sendMessage(inputPrompt);

    const jsonMockResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");

    //SET IN VARIBLE
    setJsonResponse(jsonMockResp);
    console.log(JSON.parse(jsonMockResp));

    if (!formData.jobPosition || !formData.jobDesc || !formData.jobExperience) {
      throw new Error(
        "jobPosition is required and cannot be null or undefined"
      );
    }

    if (jsonMockResp) {
      const response = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: jsonMockResp || "",
          jobPosition: formData.jobPosition || "",
          jobDesc: formData.jobDesc || "",
          jobExperience: formData.jobExperience || "",
          createdBy: user?.primaryEmailAddress?.emailAddress || "unknown", 
          createdAt: moment().format("DD-MM-yyyy"),
        })
        .returning({ mockId: MockInterview.mockId }); 

      console.log("inserted id", response);
    } else {
      console.log("error");
    }

    setIsLoading(false);
    setOpenDailog(false);
  };

  return (
    <div>
      <div
        onClick={() => setOpenDailog(true)}
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
      >
        <h2 className=" text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="texl-2xl">
              Tell us about your job interviewing
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add details about your job position/role, Job descroiption
                    and year of experience.
                  </h2>
                  <div className="mt-7 my-2">
                    <label htmlFor="role">Job role/Job Position</label>
                    <Input
                      id="role"
                      type="text"
                      placeholder="Ex. Full Stack Developer"
                      required
                      value={formData.jobPosition}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          jobPosition: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className=" my-3">
                    <label htmlFor="desc">
                      Job Description/ Tech stack(In sort)
                    </label>
                    <Textarea
                      placeholder="Ex. React, Nextjs, nodeJs"
                      max="50"
                      required
                      value={formData.jobDesc}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          jobDesc: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className=" my-3">
                    <label htmlFor="experience">Years of Experience</label>
                    <Input
                      id="experience"
                      type="number"
                      placeholder="Ex. 1 "
                      required
                      value={formData.jobExperience}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          jobExperience: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDailog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="animate-spin" /> AI preparing your
                        mock interview...
                      </>
                    ) : (
                      "Start Interview"
                    )}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
