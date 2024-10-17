"use client";

import React, { useState } from "react";
import PersonalDetails from "./_components/PersonalDetails";
import StepIndicator from "@/components/ui/step-indicator/StepIndicator";

const UserDetailsPage = () => {
  const [activeStep, setActiveStep] = useState(3);
  return (
    <div className="w-full px-3 backdrop-blur-lg flex flex-col gap-16 items-center">
      <div className="flex flex-col gap-8 justify-start items-center h-full w-full">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="primary-h1">تکمیل اطلاعات</h2>
          <p className="text-gray-400">
            لطفا نام و نام خانوادگی خود را وارد کنید
          </p>
        </div>
        <PersonalDetails />
      </div>
      <StepIndicator
        totalSteps={3}
        activeStep={activeStep}
        onStepChange={(newStep) => setActiveStep(newStep)}
      />
    </div>
  );
};

export default UserDetailsPage;
