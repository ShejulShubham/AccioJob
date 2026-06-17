import { createStore } from "redux";

const initialState = [];

let idCount = 0;

const CREATETODO = "CREATETODO";
const DELETETODO = "DELETETODO";
const UPDATETODO = "UPDATETODO";

function createTodo(payload) {
  return { type: CREATETODO, payload };
}

function deleteTodo(payload) {
  return { type: DELETETODO, payload };
}

function updateTodo(payload){
    return { type: UPDATETODO, payload };
}

function todoReducers(state, action) {
  switch (action.type) {
    case CREATETODO:
      const newTodo = { id: state.length + 1, task: action.payload };
      return [...state, newTodo];
    case DELETETODO: {
      const newState = state.filter((todo) => todo.id !== action.payload);
      return newState;
    }
    case UPDATETODO: {
        // const todo = state.find((todo)=>todo.id === action.payload.id);
        // todo.task = action.payload.task;
        const filtered = state.filter((todo)=>todo.id !== action.payload.id);
        const newTodo = {id: action.payload.id, task: action.payload.task}
        const newState = [...filtered, newTodo];
        return newState;
    }
    default:
      return state;
  }
}

const store = createStore(todoReducers, initialState);
const { getState, dispatch } = store;
dispatch(createTodo("go to gym"));
dispatch(createTodo("groceries"));
dispatch(createTodo("meet friends"));
console.log(getState());
dispatch(deleteTodo(2));
console.log(getState());
dispatch(updateTodo({id: 1, task: "find girlfriend"}));
console.log(getState());