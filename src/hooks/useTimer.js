import { useState, useEffect } from "react";

export function useTimer(initialTime = 1500) {
  const [status, setStatus] = useState("idle");
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (status !== "running") return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setStatus("idle");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [status]);

  const start = () => setStatus("running");
  const pause = () => setStatus("paused");
  const reset = () => {
    setStatus("idle");
    setTimeLeft(initialTime);
  };

  return {
    status,
    timeLeft,
    start,
    pause,
    reset,
  };
}
