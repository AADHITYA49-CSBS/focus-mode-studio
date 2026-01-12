function TimerDisplay({ timeLeft, status }) {
  return (
    <div>
      <p>Status: {status}</p>
      <p>Time left: {timeLeft} seconds</p>
    </div>
  );
}

export default TimerDisplay;
