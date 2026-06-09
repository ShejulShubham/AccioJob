import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { cartStore } from "./store/cartStore.js";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Provider store={cartStore}>
      <App />
    </Provider>
  </Provider>,
);
