import { useState, useEffect } from "react";

export function useTimer(focusSeconds = 1500, breakSeconds = 300) {
  const [mode, setMode] = useState("focus"); // focus | break
  const [status, setStatus] = useState("idle");
  const [timeLeft, setTimeLeft] = useState(focusSeconds);

  // ✅ Sessions persisted (localStorage)
  const [sessions, setSessions] = useState(() => {
    const saved = localStorage.getItem("sessions");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Persist sessions
  useEffect(() => {
    localStorage.setItem("sessions", JSON.stringify(sessions));
  }, [sessions]);

  // ✅ Timer engine
  useEffect(() => {
    if (status !== "running") return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);

          if (mode === "focus") {
            setSessions((s) => [...s, new Date().toISOString()]);
            setMode("break");
            return breakSeconds;
          } else {
            setMode("focus");
            return focusSeconds;
          }
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [status, mode, focusSeconds, breakSeconds]);

  // ✅ Controls
  const start = () => setStatus("running");
  const pause = () => setStatus("paused");

  const reset = () => {
    setStatus("idle");
    setMode("focus");
    setTimeLeft(focusSeconds);
  };

  return {
    status,
    timeLeft,
    mode,
    sessions,
    start,
    pause,
    reset,
  };
}
