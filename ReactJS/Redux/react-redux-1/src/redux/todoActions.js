export const ADDTODO = "ADDTODO";
export const REMOVETODO = "REMOVETODO";
export const UPDATETODO = "UPDATETODO";

export function addTodo(payload) {
  return { type: ADDTODO, payload };
}

export function removeTodo(payload) {
  return { type: REMOVETODO, payload };
}

export function updateTodo(payload) {
  return { type: UPDATETODO, payload };
}
