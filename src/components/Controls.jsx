function Controls({ status, onStart, onPause, onReset }) {
  return (
    <div>
      <button onClick={onStart} disabled={status === "running"}>
        Start
      </button>

      <button onClick={onPause} disabled={status !== "running"}>
        Pause
      </button>

      <button onClick={onReset} disabled={status === "idle"}>
        Reset
      </button>
    </div>
  );
}

export default Controls;
