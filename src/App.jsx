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

import { useEffect } from "react";
import Header from "./components/Header";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import SessionStats from "./components/SessionStats";
import SessionList from "./components/SessionList";

import { useTimer } from "./hooks/useTimer";

function App() {
  const { status, timeLeft, start, pause, reset, sessions } = useTimer(1500);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        status === "running" ? pause() : start();
      }

      if (e.key.toLowerCase() === "r") {
        reset();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [status, start, pause, reset]);

  return (
    <div className="app">
      <Header />

      <TimerDisplay status={status} timeLeft={timeLeft} />

      {/* ✅ Session statistics */}
      <SessionStats sessions={sessions} />
      <SessionList sessions={sessions} />


      <Controls
        status={status}
        onStart={start}
        onPause={pause}
        onReset={reset}
      />
    </div>
  );
}

export default App;
