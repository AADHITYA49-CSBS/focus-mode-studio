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

import Header from "./components/Header";
import TimerDisplay from "./components/TimerDisplay";
import Controls from "./components/Controls";
import { useTimer } from "./hooks/useTimer";


function App() {
  const {
    status,
    timeLeft,
    start,
    pause,
    reset,
  } = useTimer(1500);

  return (
    <div>
      <Header />

      <TimerDisplay
        status={status}
        timeLeft={timeLeft}
      />

      <Controls
        onStart={start}
        onPause={pause}
        onReset={reset}
      />
    </div>
  );
}

export default App;
