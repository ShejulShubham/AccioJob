### **21. What are React Hooks?**

**Answer:**

Hooks are functions that allow functional components to use React features like state, lifecycle methods, and context without writing class components.

---

### **22. Why were Hooks introduced in React?**

**Answer:**

Hooks were introduced to solve problems like complex class components, duplicated logic, and confusion around `this`. They make code cleaner, reusable, and easier to understand.

---

### **23. Name some commonly used React Hooks.**

**Answer:**

- `useState`
- `useEffect`
- `useContext`
- `useRef`
- `useMemo`
- `useCallback`

---

### **24. Can Hooks be used in class components?**

**Answer:**

No. Hooks can only be used inside functional components or custom hooks, not in class components.

---

### **25. What are the Rules of Hooks?**

**Answer:**

1. Call hooks only at the top level
2. Call hooks only inside React functional components or custom hooks

These rules ensure hooks work correctly across renders.

---

### **26. Why should Hooks not be called inside loops or conditions?**

**Answer:**

Hooks rely on the order in which they are called. Calling them conditionally can change this order, causing React to associate incorrect state with hooks.

---

### **27. What is `useState`?**

**Answer:**

`useState` is a hook that allows functional components to store and update state values.

---

### **28. What is `useEffect`?**

**Answer:**

`useEffect` is a hook used to perform side effects such as data fetching, subscriptions, timers, or DOM updates after rendering.

---

### **29. What is the difference between `useEffect` and lifecycle methods?**

**Answer:**

`useEffect` can replace `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` using dependency arrays and cleanup functions.

---

### **30. What is a custom hook?**

**Answer:**

A custom hook is a reusable function that starts with `use` and contains one or more React hooks to share logic across components.

---

### 📌 Part 3 Coverage

- Introduction to hooks
- Why hooks exist
- Rules of hooks
- Core hooks overview
- Custom hooks
