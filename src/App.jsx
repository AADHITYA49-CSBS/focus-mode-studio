import { useState } from "react";
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
}

export default App;