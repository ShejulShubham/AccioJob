## Redux Core Concepts

Redux is a predictable state container for JavaScript apps, commonly used with libraries like React to manage global application state.

### 1. Three Principles of Redux

- **Single Source of Truth:** The global state of your application is stored in an object tree within a single **store**.
    
- **State is Read-Only:** The only way to change the state is to emit an **action**, an object describing what happened.
    
- **Changes are Made with Pure Functions:** To specify how the state tree is transformed by actions, you write pure **reducers**.
    

### 2. Core Architecture

```
[ UI / Component ] ───( Dispatches )───> [ Action ]
       ▲                                     │
       │                                     ▼
( Updates State ) ◄────── [ Store / Reducer ]
```

- **Store:** Holds the application state. It provides methods to access state, dispatch actions, and register listeners.
    
- **Actions:** Plain JavaScript objects that represent an intention to change the state. They must have a `type` property.
    
    ```javascript
    const addItemAction = {
      type: 'ADD_ITEM',
      payload: { id: 1, name: 'Learn Redux' }
    };
    ```
    
*   **Reducers:** Functions that take the `currentStoreState` and an `action` as arguments, and return the `newStoreState`. **They must be pure functions** (no side effects, no API calls, no mutations).

```javascript
    const counterReducer = (state = { count: 0 }, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return { ...state, count: state.count + 1 };
        default:
          return state;
      }
    };
```

### 3. Redux Toolkit (Modern Standard)

Redux Toolkit (RTK) is the recommended way to write Redux logic today. It eliminates boilerplate code and includes built-in tools like Immer (for writing mutable-style logic safely) and Redux Thunk (for async logic).

#### Creating a Slice

```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      // RTK allows us to write "mutating" logic safely thanks to Immer
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

### 4. Key Advantages

- **Centralized State:** Easier to debug, maintain, and inspect application state.
    
- **Predictability:** State changes are explicit and trackable via Redux DevTools.
    
- **Component Decoupling:** Components don't need to pass props down deeply through multiple layers (prop drilling).
    