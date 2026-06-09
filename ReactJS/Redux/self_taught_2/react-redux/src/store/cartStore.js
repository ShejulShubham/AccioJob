import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        let doesItemExist = false;

        state.items.forEach((i)=>{
            if(action.payload.id == i.id){
                i.quantity += 1;
                doesItemExist = true;
            }
        });

        if(!doesItemExist){
            state.items.push(action.payload);
        }
    },

    removeItem: (state, action) => {
        const newItems = state.items.filter((i)=>action.payload != i.id);
        state.items = newItems;
    },

    clearCart: (state, action)=>{
        state.items = [];
    }
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export const cartStore = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})