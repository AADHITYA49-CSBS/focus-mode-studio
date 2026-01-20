import { formatTime } from "../utils/formatTime";

export default function TimerDisplay({ status, timeLeft,mode }) {
  let urgency = "normal";

  if (timeLeft <= 60) urgency = "danger";
  else if (timeLeft <= 300) urgency = "warning";

  return (
    <div className={`timer ${status} ${urgency}`}>
      <p className="status">
  {mode === "focus" ? "FOCUS MODE" : "BREAK TIME"}
</p>

      <h2 className="time">{formatTime(timeLeft)}</h2>
    </div>
  );
}
