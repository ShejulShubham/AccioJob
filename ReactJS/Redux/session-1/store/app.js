import counterStore from "./counterStore.js";

const counter = document.getElementById("value");

function render() {
  const state = counterStore.getState();
  console.log("State: ", state);
  counter.innerHTML = state.count;
}

render();

counterStore.subscribe(render);

document.getElementById("increment").addEventListener("click", () => {
  counterStore.dispatch({ type: "increment" });
});

document.getElementById("decrement").addEventListener("click", () => {
  counterStore.dispatch({ type: "decrement" });
});
