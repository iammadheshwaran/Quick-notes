# Quick Notes – Minimal Note-Taking App

A simple and lightweight React + TypeScript app to quickly add, view, expand, and delete notes. Styled with Tailwind CSS for a clean UI and smooth transitions.

---

## Features

- Add and display notes from Firebase Firestore  
- Expand/collapse note content on click  
- Delete notes with confirmation and toast notifications  
- Responsive grid layout with mobile-friendly design  
- Smooth animations for expanding notes  

---

## What You’ll Learn

- Real-time data syncing with Firebase Firestore  
- React state management with `useState` and hooks  
- Conditional rendering and event handling  
- Styling layouts with Tailwind CSS  
- Handling user interactions (expand, delete)  

---

## Tech Stack

| Tech             | Purpose                              |
|------------------|------------------------------------|
| React + Vite     | Frontend UI and app framework       |
| TypeScript       | Type-safe components and logic      |
| Tailwind CSS     | Utility-first styling and layout    |
| Firebase Firestore | Real-time database for notes       |
| react-hot-toast  | User notifications (toast messages) |

---

## Folder Structure

```txt

src/
├── components/
│   ├── NoteList.tsx
│   ├── NoteForm.tsx
│   └── ui/
├── lib/
│   └── firsbase.ts
├── App.tsx
└── main.tsx


