export default function TimerDisplay({ status, timeLeft }) {
  return (
    <div className={`timer ${status}`}>
      <p className="status">{status.toUpperCase()}</p>
      <h2 className="time">{timeLeft}s</h2>
    </div>
  );
}
