### **11. What is the Virtual DOM?**

**Answer:**

The Virtual DOM is a lightweight JavaScript object that represents the real DOM. React uses it to track UI changes and update only the necessary parts of the real DOM efficiently.

---

### **12. Why does React use the Virtual DOM instead of the real DOM?**

**Answer:**

Direct DOM manipulation is slow. React compares the Virtual DOM with the previous version (diffing) and updates only the changed nodes in the real DOM, improving performance.

---

### **13. What is reconciliation in React?**

**Answer:**

Reconciliation is the process where React compares the previous Virtual DOM with the new one to determine the minimum number of changes required to update the real DOM.

---

### **14. What is diffing in React?**

**Answer:**

Diffing is the algorithm React uses during reconciliation to compare two Virtual DOM trees and identify what has changed.

---

### **15. How does React identify which elements need to be updated?**

**Answer:**

React compares elements by type and key. If the type or key changes, React recreates the component; otherwise, it updates only the changed properties.

---

### **16. What are keys in React and why are they important?**

**Answer:**

Keys are unique identifiers used when rendering lists. They help React efficiently track and update individual items when the list changes.

---

### **17. What happens if keys are not used in lists?**

**Answer:**

Without keys, React may re-render unnecessary components, leading to performance issues and unexpected UI behavior.

---

### **18. Can we use array index as key?**

**Answer:**

Yes, but it’s not recommended when the list can change. Using index as a key can cause incorrect re-renders when items are added, removed, or reordered.

---

### **19. What triggers a re-render in React?**

**Answer:**

- State change
- Props change
- Parent component re-render
- Context value change

---

### **20. Does React re-render the entire page on state change?**

**Answer:**

No. React re-renders the component and its children in the Virtual DOM, then updates only the changed parts in the real DOM.

---

### 📌 Part 2 Coverage

- Virtual DOM
- Reconciliation & diffing
- Keys and list rendering
- Re-render triggers