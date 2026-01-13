import { formatTime } from "../utils/formatTime";

function TimerDisplay({ timeLeft, status }) {
  return (
    <div>
      <p>Status: {status}</p>
      <p>Time left: {formatTime(timeLeft)}</p>
    </div>
  );
}

export default TimerDisplay;
