import React from "react";
import { CheckCircleIcon, XCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
const PlanOfferings = ({ plan }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold ">
        {plan.name} Plan -{" "}
        {plan.cost === 0 ? "Free" : "₹" + plan.cost + "/month"}
      </h2>
      <ul className="mt-2 items-center justify-center ">
        {plan.offering.map((offer, index) => (
          <li key={index} className="flex items-center my-3 ">
            {offer.available ? (
              <CheckCircleIcon className="text-green-500" />
            ) : (
              <XCircleIcon className="text-red-500" />
            )}
            <span className="ml-2 text-lg">{offer.value}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-end items-center">
        {plan.cost === 0 ? (
          <Button disabled className="bg-white hover:bg-white"></Button>
        ) : (
          <Button>Upgrade</Button>
        )}
      </div>
    </div>
  );
};

export default PlanOfferings;
