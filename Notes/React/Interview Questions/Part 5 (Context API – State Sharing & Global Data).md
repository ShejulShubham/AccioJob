### **41. What is Context API in React?**

**Answer:**

Context API is a way to share data globally across the component tree without passing props manually at every level (props drilling).

---

### **42. When should you use Context API?**

**Answer:**

Context should be used for global data such as authentication state, theme, language preferences, or user settings that are needed by many components.

---

### **43. What problem does Context API solve?**

**Answer:**

It solves the problem of **props drilling**, where data has to be passed through multiple intermediate components unnecessarily.

---

### **44. What are the main parts of Context API?**

**Answer:**

- `createContext()`
- `Provider`
- `Consumer` (or `useContext` hook)

---

### **45. What is a Context Provider?**

**Answer:**

A Provider is a component that supplies context data to its child components using the `value` prop.

---

### **46. What is `useContext`?**

**Answer:**

`useContext` is a hook that allows functional components to consume context values directly without using a Consumer component.

---

### **47. What happens when a context value changes?**

**Answer:**

All components that consume that context re-render when the context value changes.

---

### **48. Can we have multiple contexts in a React app?**

**Answer:**

Yes. An application can have multiple contexts, such as AuthContext, ThemeContext, and CartContext.

---

### **49. Is Context API a replacement for Redux?**

**Answer:**

No. Context API is good for simple global state, but Redux is better for complex state logic, middleware, debugging, and large-scale applications.

---

### **50. What are the performance issues with Context API?**

**Answer:**

When the context value changes, all consuming components re-render. Without optimization, this can lead to unnecessary re-renders.

---

### 📌 Part 5 Coverage

- Context basics
- Provider & `useContext`
- Props drilling
- Performance considerations
- Context vs Redux