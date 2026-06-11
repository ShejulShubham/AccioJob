export const ADDTODO = "ADDTODO";
export const REMOVETODO = "REMOVETODO";

export function addTodo(payload) {
  return { type: ADDTODO, payload };
}

export function removeTodo(payload) {
  return { type: REMOVETODO, payload };
}
