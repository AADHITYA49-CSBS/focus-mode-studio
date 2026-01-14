function TimerDisplay({ status, timeLeft }) {
  return (
    <div>
      <h2>{status}</h2>
      <p>{timeLeft}</p>
    </div>
  );
}

export default TimerDisplay;
