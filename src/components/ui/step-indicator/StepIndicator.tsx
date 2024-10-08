import React from "react";

interface StepIndicatorProps {
  totalSteps: number;
  activeStep: number;
  onStepChange: (step: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  totalSteps,
  activeStep,
  onStepChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === activeStep;

        return (
          <div
            key={index}
            onClick={() => onStepChange(stepNumber)}
            className={`cursor-pointer h-2
              ${
                isActive
                  ? "w-8 bg-primary rounded-full"
                  : "w-2 bg-gray-300 rounded-full"
              }`}
          />
        );
      })}
    </div>
  );
};

export default StepIndicator;
