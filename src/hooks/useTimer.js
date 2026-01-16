import { useState, useEffect } from "react";



export function useTimer(initialSeconds) {
  const [status, setStatus] = useState("idle");
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [sessions, setSessions] = useState([]);


  useEffect(() => {
    if (status !== "running") return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
  clearInterval(interval);
  setStatus("idle");

  setSessions((prevSessions) => [
    ...prevSessions,
    {
      date: new Date().toISOString(),
      duration: initialSeconds,
    },
  ]);

  return initialSeconds;
}

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [status, initialSeconds]);

  const start = () => setStatus("running");
  const pause = () => setStatus("paused");
  const reset = () => {
    setStatus("idle");
    setTimeLeft(initialSeconds);
  };

  return { status, timeLeft, start, pause, reset };
}
