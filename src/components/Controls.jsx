export default function Controls({ status, onStart, onPause, onReset }) {
  return (
    <div className="controls">
      {status !== "running" && (
        <button className="primary" onClick={onStart}>Start</button>
      )}

      {status === "running" && (
        <button className="primary" onClick={onPause}>Pause</button>
      )}

      <button className="secondary" onClick={onReset}>Reset</button>
    </div>
  );
}
