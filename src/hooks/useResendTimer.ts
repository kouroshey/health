"use client";

import { useState, useEffect } from "react";

export const useResendTimer = (initialTime: number = 30) => {
  const [isResendActive, setIsResendActive] = useState(false);
  const [activationTime, setActivationTime] = useState(initialTime);

  useEffect(() => {
    if (isResendActive) return;

    const interval: NodeJS.Timeout = setInterval(() => {
      setActivationTime((prev) => {
        if (prev > 0) return prev - 1;

        clearInterval(interval);
        setIsResendActive(true);
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isResendActive]);

  const resetTimer = () => {
    setIsResendActive(false);
    setActivationTime(initialTime);
  };

  return { isResendActive, activationTime, resetTimer };
};
