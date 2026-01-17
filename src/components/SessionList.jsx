export default function SessionList({ sessions = [] }) {
  if (sessions.length === 0) {
    return <p className="empty">No sessions yet</p>;
  }

  return (
    <ul className="session-list">
      {sessions.map((session, index) => (
        <li key={index}>
          <span>
            {new Date(session.date).toLocaleTimeString()}
          </span>
          <span>{Math.floor(session.duration / 60)} min</span>
        </li>
      ))}
    </ul>
  );
}
