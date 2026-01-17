export default function SessionStats({ sessions = [] }) {
  const totalSessions = sessions.length;

  const totalTime = sessions.reduce(
    (sum, session) => sum + session.duration,
    0
  );

  const minutes = Math.floor(totalTime / 60);

  return (
    <div className="stats">
      <p>
        Sessions completed: <strong>{totalSessions}</strong>
      </p>
      <p>
        Focused time: <strong>{minutes} min</strong>
      </p>
    </div>
  );
}
