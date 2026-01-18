import { useState } from "react";

export default function DailyGoal({ sessions = [] }) {
  const [goal, setGoal] = useState(4);

  const completedSessions = sessions.length;
  const goalReached = completedSessions >= goal;

  return (
    <div className="daily-goal">
      <h3>Daily Focus Goal</h3>

      <label>
        Goal (sessions):
        <input
          type="number"
          min="1"
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
        />
      </label>

      <p>
        Progress: {completedSessions} / {goal}
      </p>

      {goalReached && (
        <p className="goal-hit">🎉 Goal achieved! Stay focused.</p>
      )}
    </div>
  );
}
