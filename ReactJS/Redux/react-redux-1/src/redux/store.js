import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import {createLogger} from "redux-logger";

const logger = createLogger();

const rootReducer = combineReducers({
    todos: todoReducer,
    count: counterReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;