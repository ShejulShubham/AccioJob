### **31. What is `useState` and how does it work?**

**Answer:**

`useState` allows functional components to store state. It returns an array with the current state value and a function to update it. Updating state triggers a re-render of the component.

---

### **32. Why does `useState` return an array and not an object?**

**Answer:**

Arrays allow flexible naming through destructuring. The order of values is fixed, making it easier and faster for React to implement internally.

---

### **33. Is `setState` in `useState` synchronous or asynchronous?**

**Answer:**

State updates are asynchronous. React batches multiple updates together to improve performance, so the updated value is not available immediately.

---

### **34. What happens if we update state with the same value?**

**Answer:**

React compares the new state with the previous one using `Object.is`. If they are the same, React skips re-rendering.

---

### **35. How do you update state based on the previous state?**

**Answer:**

By passing a callback function to the state updater function.

Example:

```jsx
setCount(prevCount => prevCount + 1);

```

---

### **36. What is lazy initialization in `useState`?**

**Answer:**

Lazy initialization allows passing a function to `useState` so the initial state is calculated only once during the first render.

---

### **37. What is `useEffect` used for?**

**Answer:**

`useEffect` is used to perform side effects like API calls, subscriptions, event listeners, timers, and manual DOM updates.

---

### **38. How does the dependency array in `useEffect` work?**

**Answer:**

- No dependency array → runs after every render
- Empty array `[]` → runs once on mount
- With dependencies → runs when those dependencies change

---

### **39. What is the cleanup function in `useEffect`?**

**Answer:**

The cleanup function runs before the effect re-executes or when the component unmounts. It is used to clean up subscriptions, timers, or event listeners.

---

### **40. Can we use multiple `useEffect` hooks in a component?**

**Answer:**

Yes. Using multiple `useEffect` hooks is recommended to separate unrelated side effects and keep code clean and maintainable.

---

### 📌 Part 4 Coverage

- `useState` behavior
- Async state updates
- Lazy initialization
- `useEffect` dependency patterns
- Cleanup functions
