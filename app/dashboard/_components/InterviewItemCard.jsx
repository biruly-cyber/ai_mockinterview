import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const InterviewItemCard = ({ interview }) => {
  console.log(interview);

  const router = useRouter();

  const onStart = () => {
    router.push(`/dashboard/interview/${interview?.mockId}`);
  };

  const onFeedbackPress = () => {
    router.push(`/dashboard/interview/${interview?.mockId}/feedback`);
  };

  return (
    <div className="border shadow-sm rounded-lg p-3">
      <h2 className="capitalize font-bold text-blue-500">
        {interview?.jobPosition}
      </h2>
      <h2 className="text-sm text-gray-600">
        Years of experience: {interview?.jobExperience}
      </h2>
      <h2 className="text-xs text-gray-400">
        Created At: {interview?.createdAt}
      </h2>
      <div className="flex justify-between mt-2 gap-5">
        <Button
          onClick={onFeedbackPress}
          size="sm"
          variant="outline"
          className="w-full"
        >
          Feedback
        </Button>

        <Button size="sm" className="w-full" onClick={onStart}>
          Start
        </Button>
      </div>
    </div>
  );
};

export default InterviewItemCard;
