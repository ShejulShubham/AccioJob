export const INCREMENT = "INC";
export const DECREMENT = "DEC";

export function incrementCount(payload = 1) {
  return { type: INCREMENT, payload };
}

export function decrementCount(payload = 1) {
  return { type: DECREMENT, payload };
}
