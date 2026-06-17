import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {counter :0},
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        incrementBy(state, action){
            state.counter += action.payload;
        },
        decrementBy(state, action){
            state.counter -= action.payload;
        }
    }
})

export const { increment, decrement, incrementBy, decrementBy } = counterSlice.actions;
export default counterSlice.reducer;