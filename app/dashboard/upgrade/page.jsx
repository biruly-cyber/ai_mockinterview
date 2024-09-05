import React from "react";
import PlanOfferings from "../_components/PlanOfferings";
import planData from "@/utils/planData";
import { Button } from "@/components/ui/button";

const Upgrade = () => {
  console.log(planData);
  return (
    <div className="p-10">
      <div className="p-4 mt-10 items-center justify-center grid grid-cols-1 md:grid-cols-2 gap-5">
        {planData.map((plan) => (
          <PlanOfferings key={plan.id} plan={plan} />
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Upgrade;
