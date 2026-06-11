import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
    todos: todoReducer,
    count: counterReducer
})

const store = createStore(rootReducer);

export default store;