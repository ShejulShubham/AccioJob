import { createSlice, configureStore } from "@reduxjs/toolkit";

const bankSlice = createSlice({
    name: 'bank',
    initialState: { balance: 3000 },
    reducers: {
        deposit: (state, action) => {
            state.balance += action.payload
        },
        withdraw: (state, action) => {
            state.balance -= action.payload
        }
    }
});

export const { deposit, withdraw } = bankSlice.actions;
const bankReducer = bankSlice.reducer;


const store = configureStore({
    reducer: {
        bank: bankReducer,
    }
});

store.subscribe(()=>{
    console.log("Bank state changed: ", store.getState());
});

console.log("Initial State: ", store.getState());

console.log("action name: ", deposit);
console.log("action name: ", withdraw);

store.dispatch(deposit(700));
store.dispatch(withdraw(200));