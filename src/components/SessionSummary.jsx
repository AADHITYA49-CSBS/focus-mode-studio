export default function SessionSummary({ sessions = [] }) {
  if (sessions.length === 0) {
    return <p>No focus sessions yet. Start one.</p>;
  }

  const totalSessions = sessions.length;
  const totalMinutes = Math.floor(
    sessions.reduce((sum, s) => sum + s.duration, 0) / 60
  );

  return (
    <div className="session-summary">
      <h3>Today’s Focus</h3>
      <p>Sessions: {totalSessions}</p>
      <p>Total Focus: {totalMinutes} min</p>
    </div>
  );
}
