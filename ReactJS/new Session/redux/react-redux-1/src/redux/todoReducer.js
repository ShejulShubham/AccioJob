import { ADDTODO, REMOVETODO } from "./todoActions";

const initialState = [
    { id: 1, title: "make lunch" },
    { id: 2, title: "file a complaint" },
    { id: 3, title: "meet client" },
  ]

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTODO: {
      const newTodo = { id: Date.now(), title: action.payload };
      return [...state, newTodo];
    }
    case REMOVETODO: {
      console.log(state);
      return state.filter((todo) => todo.id !== action.payload);
    }
    default:
      return state;
  }
}
