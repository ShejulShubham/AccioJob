import { createSlice, configureStore } from "@reduxjs/toolkit";

const bankSlice = createSlice({
  name: "bank",
  initialState: { balance: 2000 },
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

export const { deposit, withdraw } = bankSlice.actions;

export const store = configureStore({
  reducer: {
    bank: bankSlice.reducer,
  },
});
