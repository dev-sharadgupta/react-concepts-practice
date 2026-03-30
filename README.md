# ⚛️ React Concepts Practice App

A hands-on project to explore and understand core **React concepts** through small, focused examples.
This repository is designed for **learning, experimentation, and revision**.

---

## 🚀 Purpose

This project is not a full application — it’s a **concept playground** where each folder demonstrates a specific React feature with minimal, clear examples.

---

## 📁 Project Structure

```bash
src
 ├── concepts
 │    ├── Rendering
 │    │    └── RenderingExample.jsx
 │    ├── PropsState
 │    │    └── PropsStateExample.jsx
 │    ├── Effects
 │    │    ├── UseEffectExample.jsx
 │    │    └── UseLayoutEffectExample.jsx
 │    ├── Controlled
 │    │    └── ControlledInput.jsx
 │    ├── Memoization
 │    │    ├── UseCallback
 │    │    │    ├── UseCallbackExample.jsx
 │    │    │    ├── UseCallbackExampleList.jsx
 │    │    │    └── useCallBackExampleUseEffectProblem.jsx
 │    │    ├── ReactMemoExample.jsx
 │    │    └── UseMemoExample.jsx
 │    ├── Context
 │    │    └── ThemeContextExample.jsx
 │    ├── Hooks
 │    │    └── useCounter.js
 │    ├── ErrorBoundary
 │    │    └── ErrorBoundary.jsx
 │    └── Reconciliation
 │         └── KeyExample.jsx
 │
 ├── router
 │    └── AppRouter.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

## 📚 Concepts Covered

### 🧩 Core Concepts

* **Rendering**

  * Understanding how React renders components
  * Re-renders and UI updates

* **Props & State**

  * Data flow between components
  * Managing local state

---

### ⚡ Hooks & Effects

* **useEffect**

  * Side effects (API calls, subscriptions)
* **useLayoutEffect**

  * DOM measurements and synchronous updates

---

### 🎯 Forms

* **Controlled Components**

  * Managing form inputs via state

---

### 🚀 Performance Optimization

* **useCallback**

  * Prevent unnecessary function recreation
* **useMemo**

  * Memoizing expensive calculations
* **React.memo**

  * Avoid unnecessary re-renders

---

### 🌐 Context API

* Global state management using Context
* Example: Theme switching

---

### 🪝 Custom Hooks

* Creating reusable logic
* Example: `useCounter`

---

### 🛡 Error Handling

* **Error Boundaries**

  * Catching runtime errors in component trees

---

### 🔁 Reconciliation

* Understanding React’s diffing algorithm
* Importance of `key` props

---

## 🧭 Routing

* Centralized routing using:

  * `AppRouter.jsx`

---

## ▶️ How to Run

```bash
npm install
npm run dev
```

Visit:

```bash
http://localhost:5173
```

---

## ✨ How to Use This Project

* Explore each folder inside `concepts/`
* Open individual files and experiment
* Modify examples to see how React behaves
* Use this as a revision guide

---

## 📌 Notes

* This project focuses on **clarity over complexity**
* Each example is intentionally simple
* No backend — purely frontend learning

---

## 📈 Suggested Improvements

* Add TypeScript support
* Add comments explaining each concept inline
* Create UI navigation for switching between examples
* Add real-world use cases for each concept

---

## 🎯 Ideal For

* Beginners learning React
* Intermediate developers revising concepts
* Interview preparation
* Hands-on experimentation

---

## 📄 License

Free to use for learning and educational purposes.
