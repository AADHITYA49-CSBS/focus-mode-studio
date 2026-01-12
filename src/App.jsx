/* import { useState } from "react";
function App(){
  const [mode , setMode] = useState("idle");
  return (
    <div> 
      <h1> Focus Mode Studio</h1>

      <p>Your mind. One task. Zero noise.</p>

      <button onClick={() => setMode("running")}>
        Start Focus
      </button>

      <button onClick={() =>setMode("paused")}>
        Pause
      </button>

      <button onClick={()=>setMode("idle")}>
        Reset
      </button>
    </div>
  );
}*/

import { useState, useEffect } from "react";
import Header from "./components/Header";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";

function App() {
  const [status, setStatus] = useState("idle");   // idle | running | paused
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds

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

  return (
    <div>
      <h1>Focus Mode Studio</h1>

      <p>Status: {status}</p>
      <p>Time left: {timeLeft} seconds</p>

      <button onClick={() => setStatus("running")}>Start</button>
      <button onClick={() => setStatus("paused")}>Pause</button>
      <button onClick={() => setStatus("idle")}>Reset</button>
    </div>
  );
}

export default App;
