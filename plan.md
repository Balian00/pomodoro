# Pomodoro Project Plan

## General description
This project is a step-by-step app starting with a focused Pomodoro timer (v1), then extending to an integrated daily planner (v2), adding AI features for productivity coaching (v3), and finally integrating a calendar focused on exam blocks (v4). The goal is to build iteratively so each version is useful and learnable.

## Vision & Goals
- Provide a simple, reliable Pomodoro timer with good UX for managing focused work.
- Extend the app into a lightweight daily planner that integrates with the timer.
- Add optional AI features to suggest schedules, analyze productivity, and generate study blocks.
- Offer an exam-focused calendar view for planning study sessions before exams.

## Versions & Roadmap
- Version 1 (v1): Pomodoro timer — MVP: start/pause/reset timer, configurable durations, notifications, session history (local), simple UI. (Priority now)
- Version 2 (v2): Integrated daily planner — task lists, scheduling, linking tasks to pomodoro sessions, drag-and-drop ordering, simple persistence.
- Version 3 (v3): AI assistant — session suggestions, analytics, personalized study plans, smart scheduling.
- Version 4 (v4): Exam calendar — calendar view with exam blocks, auto-generate study plan based on exam dates.

---

## Detailed Plan for Version 1 (Pomodoro) — step-by-step (for a first-time developer)

This section breaks v1 into concrete, ordered tasks with explanations so you can follow along even if you never developed an app before.

1) Decide scope (MVP)
	- Core features to build first:
		- Start / Pause / Reset timer
		- Configurable lengths for Focus, Short Break, Long Break
		- Cycle counting (how many pomodoros done in a session)
		- Simple persistent storage (save settings and session history locally)
		- Visual and optional sound notification when a session ends
		- Minimal responsive UI (works on desktop and mobile)

2) Choose tech stack (simple and beginner-friendly)
	- For v1, recommended stack:
		- Plain HTML, CSS, and JavaScript (no build tools required)
		- Keep files in `pomodoro/` (e.g., `index.html`, `style.css`, `app.js`)
		- Use `localStorage` for persistence (no backend needed)
		- Deploy via GitHub Pages or simple static hosting when ready
	- Why: this keeps the learning curve small and lets you focus on app logic and UX.

3) Folder / file structure (suggested)
	- `pomodoro/`
		- `index.html` — main page and UI
		- `style.css` — styles
		- `app.js` — main JavaScript logic
		- `assets/` — images, icons, sounds
		- `README.md` — short instructions and how to run locally

4) UI design & wireframes (minimal)
	- Screens/components to design:
		- Main screen with large timer display (minutes:seconds)
		- Controls: Start / Pause / Reset
		- Settings panel (modal or sidebar) with inputs for durations and long break frequency
		- Session / history area showing last N sessions (time, type: focus/break)
		- Small icon/button to toggle sound
	- Design tips:
		- Make the timer prominent and readable.
		- Keep controls large and accessible on mobile.
		- Use color coding (red/green/blue) to indicate focus vs break.

5) Data model & persistence
	- Use `localStorage` keys such as:
		- `pomodoro.settings` -> JSON {focus:25, shortBreak:5, longBreak:15, cyclesBeforeLong:4}
		- `pomodoro.history` -> JSON array [{date: '2025-11-27T12:00', type:'focus', duration:25}]
	- No user accounts for v1 — everything local.

6) Implementation plan — break into tasks (with recommended order)
	- Task A: Scaffold files and basic HTML layout
		- Create `index.html`, `style.css`, `app.js`
		- Add the timer display and buttons to HTML
	- Task B: Timer core logic
		- Implement a reliable countdown using `setInterval` (update every second)
		- Support Start, Pause (clear interval), Reset (set remaining to configured length)
		- Implement switching between focus and break automatically after end of session
	- Task C: Settings and configuration
		- Add a settings UI to change durations and cyclesBeforeLong
		- Persist settings to `localStorage` and load them on start
	- Task D: Notifications and sound
		- Add a subtle sound (optional) and a visible notification (blink or toast)
		- Use the Web Notifications API for desktop notifications (ask for permission)
	- Task E: Session history and display
		- Record completed sessions to `localStorage` with timestamp and type
		- Show recent history in UI
	- Task F: Responsive CSS and accessibility
		- Ensure layout works on small screens
		- Add keyboard shortcuts (space to start/pause) and ARIA labels for accessibility
	- Task G: Small polish and input validation
		- Validate numeric inputs, clamp ranges (e.g., 1–180 minutes)
		- Add small animations and focus states
	- Task H: Manual testing and bug fixes
		- Test start/pause/reset, settings persistence, notifications, long breaks sequence

7) Testing & QA checklist
	- Acceptance criteria for v1:
		- Timer starts, pauses, resets reliably.
		- Durations changed in settings persist across reloads.
		- Automatic transition between focus/break works and long breaks occur after configured cycles.
		- Notifications trigger when a session ends (when permissions allow).
		- App is usable on desktop and mobile viewport sizes.
	- Manual tests to run:
		- Start a short focus period (e.g., 0.1 minutes) and confirm the transition.
		- Change settings and reload page to confirm persistence.
		- Attempt invalid inputs and confirm validation.

8) Deployment & distribution
	- For a static site, deploy on GitHub Pages, Netlify, or Vercel.
	- Steps for GitHub Pages (simple):
		- Commit `pomodoro/` to your repo and push to GitHub.
		- In repo settings, enable Pages for `main` branch root or `gh-pages` branch.
		- Alternatively, use Netlify drop or Vercel for a quick deploy.

9) Documentation & README
	- In `pomodoro/README.md` include:
		- Project summary and goals
		- How to run locally (open `index.html` in a browser)
		- Basic usage instructions (start/pause/reset, settings)
		- How to deploy (GitHub Pages quick steps)

10) Timeline & estimates (rough for a beginner)
	- Scaffolding + basic UI: 1–2 days
	- Timer core logic: 1 day
	- Settings + persistence: 1 day
	- Notifications + history: 1 day
	- Responsive CSS + accessibility polish: 1 day
	- Testing & deployment: 1 day
	- Total (MVP): ~1 week (part-time learning + building)

11) Learning resources (short curated list)
	- JavaScript: MDN Web Docs — Timers and `setInterval` / `clearInterval`
	- Web Notifications API: MDN — Notifications
	- localStorage: MDN — Window.localStorage
	- Responsive design basics: CSS-Tricks or MDN Responsive Design

12) Next steps after v1 (high-level)
	- v2: Add task management UI and link tasks to pomodoro sessions
	- v3: Add analytics and smart suggestions (requires collecting local usage data)
	- v4: Add calendar view for exam planning and study schedules

---

## Quick checklist (copy into issue tracker or todo app)
- [ ] Create `index.html`, `style.css`, `app.js` scaffold
- [ ] Implement countdown logic and controls
- [ ] Implement settings UI and localStorage persistence
- [ ] Add notifications and sound
- [ ] Save session history and display it
- [ ] Make responsive and accessible
- [ ] Test and fix bugs
- [ ] Deploy to GitHub Pages

---

If you'd like, I can now:
- scaffold the `pomodoro/` files (`index.html`, `style.css`, `app.js`) with a working minimal implementation of v1, or
- produce a smaller step-by-step daily checklist you can follow as you code.

Tell me which you'd prefer and I'll continue.
