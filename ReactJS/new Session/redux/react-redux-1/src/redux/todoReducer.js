import { ADDTODO, REMOVETODO, UPDATETODO } from "./todoActions";

const initialState = [
  { id: 1, title: "make lunch" },
  { id: 2, title: "file a complaint" },
  { id: 3, title: "meet client" },
];

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTODO: {
      const newTodo = { id: Date.now(), title: action.payload };
      return [...state, newTodo];
    }
    case REMOVETODO: {
      return state.filter((todo) => todo.id !== action.payload);
    }
    case UPDATETODO: {
      const newState = [...state];
      // const update = newState.find((todo) => todo.id === action.payload.id);
      // update.title = action.payload.title;
      // return newState;
      const index = state.findIndex((todo) => todo.id == action.payload.id);
      newState[index] = { id: action.payload.id, title: action.payload.title };
      return newState;
    }
    default:
      return state;
  }
}
