# 🎯 Focus Mode Studio

A minimalist focus timer built with React to help you work deeply, track focus sessions, and build discipline.

> Your mind. One task. Zero noise.

---

## ✨ Features

- ⏱️ Focus & Break cycles (Pomodoro-style)
- 🔁 Automatic mode switching (Focus → Break)
- 📊 Session tracking (stored in LocalStorage)
- 🎯 Daily focus goals
- ⌨️ Keyboard shortcuts
- 🧠 Clean separation of logic & UI using custom hooks
- ⚡ Built with Vite + React

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|----|-------|
| Space | Start / Pause timer |
| R | Reset session |

---

## 🧠 Core Concepts Used

- `useState` – state management
- `useEffect` – timer & side effects
- Custom Hook (`useTimer`) – reusable business logic
- Component-based architecture
- LocalStorage persistence
- Utility functions (`formatTime`)
- Controlled components
- Conditional rendering

---

## 📁 Project Structure

src/
├── components/
│ ├── Header.jsx
│ ├── TimerDisplay.jsx
│ ├── Controls.jsx
│ ├── SessionStats.jsx
│ ├── SessionList.jsx
│ ├── SessionSummary.jsx
│ └── DailyGoal.jsx
│
├── hooks/
│ └── useTimer.js
│
├── utils/
│ └── formatTime.js
│
├── App.jsx
├── main.jsx
└── index.css


---

## 🚀 Running Locally

```bash
npm install
npm run dev

🧪 Version

v1.0 — Stable frontend release

This version focuses on:

Learning React fundamentals deeply

Clean architecture

Intentional UI

🔮 Planned (Next Versions)

Backend (Node + Express)

User accounts

Analytics dashboard

Cloud sync

Mobile-friendly layout

