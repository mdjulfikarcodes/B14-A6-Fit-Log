# FitLog

### Workout Library & Personal Workout Planner

FitLog is a modern and responsive workout management application designed to help users **discover workouts, build a daily workout plan, save exercises, and track workout progress**.

Built with **Next.js, TypeScript, Tailwind CSS, and React**, FitLog provides a clean dark-themed interface with a simple and focused workout experience.

---

## 🌐 Live Project

**Live Website:** `Add your live URL here`

**GitHub Repository:** `Add your GitHub repository URL here`

---

## Features

* 🏋️ **Workout Library** — Browse workouts fetched from the FitLog REST API.
* 📖 **Workout Details** — View complete workout information, specifications, and instructions.
* 📋 **Today's Plan** — Add workouts to your daily plan with a maximum limit of five exercises.
* 🔖 **Save for Later** — Save favorite workouts for quick access later.
* 📊 **Workout Statistics** — Track exercises, total duration, and calories.
* 🔄 **Workout Sorting** — Sort workouts by duration, calories, or rating.
* ✅ **Mark as Done** — Track completed workouts from your daily plan.
* 🗑️ **Remove Actions** — Easily remove workouts from Plan or Saved.
* 🔔 **Toast Feedback** — Instant feedback for important user actions.
* 📱 **Fully Responsive** — Optimized for mobile, tablet, laptop, and desktop.
* ⚡ **Loading States** — Smooth loading experience while data is being loaded.
* 🚫 **Custom 404 Page** — User-friendly handling of invalid routes.

---

## Tech Stack

| Technology       | Usage                       |
| ---------------- | --------------------------- |
| **Next.js**      | Application framework       |
| **React**        | User interface              |
| **TypeScript**   | Type-safe development       |
| **Tailwind CSS** | Styling & responsive design |
| **React Icons**  | Interface icons             |
| **Context API**  | Global state management     |
| **REST API**     | Workout data                |

---

## API

FitLog uses the provided REST API to load workout data.

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Workout Details

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## Application Routes

| Route           | Description                    |
| --------------- | ------------------------------ |
| `/`             | Workout Library & Hero Section |
| `/workout/[id]` | Individual Workout Details     |
| `/my-plan`      | Today's Plan & Saved Workouts  |
| `404`           | Custom Not Found Page          |

---

## Workout Experience

### Workout Library

The library displays all available workouts in a responsive card-based layout.

Each workout card includes:

* Muscle groups
* Workout name
* Equipment
* Duration
* Calories
* Rating
* Workout image

Users can select any workout to view its complete details.

### Workout Details

The details page provides:

* Workout description
* Muscle groups
* Equipment
* Difficulty
* Sets & reps
* Duration
* Calories
* Rating
* Exercise instructions

Users can **Add to Today's Plan** or **Save for Later** directly from the details page.

---

## My Plan

The My Plan section provides a centralized place to manage workouts.

### Today's Plan

Users can:

* View planned workouts
* Track total exercises
* Track total minutes
* Track total calories
* Mark workouts as completed
* Remove workouts
* Open workout details

### Saved Workouts

Saved exercises can be viewed separately and removed whenever needed.

Workouts can also be sorted by:

* Duration
* Calories
* Rating

---

## UI & Responsive Design

FitLog follows a clean **dark fitness-focused UI** with a high-contrast accent color and responsive layouts.

The interface is optimized for:

* 📱 Mobile devices
* 📲 Tablets
* 💻 Laptops
* 🖥️ Desktop screens

All major sections—including the navbar, hero, workout cards, details page, My Plan, and footer—adapt to different screen sizes.

---

## Getting Started

### Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd FitLog
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

---

## Available Scripts

```bash
npm run dev
```

Start the development server.

```bash
npm run build
```

Create a production build.

```bash
npm start
```

Start the production server.

```bash
npm run lint
```

Run ESLint checks.

---

## Project

**FitLog — Workout Library & Personal Workout Planner**

Built with using:

**Next.js · React · TypeScript · Tailwind CSS**

---

## License

This project was developed for educational purposes as part of the **FitLog workout application assignment**.
