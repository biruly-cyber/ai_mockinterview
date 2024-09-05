"use client";
import React, { useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="border-b pb-2 mb-2">
        <CollapsibleTrigger className="w-full flex items-center justify-between text-lg font-semibold cursor-pointer">
          <span className="text-gray-700">{question}</span>

          <ChevronsUpDown
            className={`h-5 w-5 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="text-gray-700 mt-2 transition-all duration-300 ease-in-out">
          {answer}
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default FAQItem;
