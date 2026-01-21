import { formatTime } from "../utils/formatTime";

export default function TimerDisplay({ status, timeLeft, mode }) {
  return (
    <div className={`timer ${mode} ${status}`}>
      <span className="mode-badge">
        {mode === "focus" ? "FOCUS" : "BREAK"}
      </span>

      <h2 className="time">
        {formatTime(timeLeft)}
      </h2>

      <p className="status-text">
        {status === "running"
          ? "Stay focused."
          : status === "paused"
          ? "Paused."
          : "Ready when you are."}
      </p>
    </div>
  );
}
