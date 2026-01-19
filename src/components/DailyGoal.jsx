import { useState } from "react";

export default function DailyGoal({ sessions = [] }) {
  const [goal, setGoal] = useState(4);

  const completedSessions = sessions.length;
  const goalReached = completedSessions >= goal;

  // ✅ Progress percentage (defensive + capped)
  const progressPercent = Math.min(
    Math.round((completedSessions / goal) * 100),
    100
  );

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

      {/* ✅ Goal Progress Bar */}
      <div className="goal-bar">
        <div
          className="goal-fill"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {goalReached && (
        <p className="goal-hit">🎉 Goal achieved! Stay focused.</p>
      )}
    </div>
  );
}
