import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("users/fetchUsers", async ()=>{
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    return data;
});


const userSlice = createSlice({
    name: "user",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchUser.pending, (state)=>{
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action)=>{
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchUser.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.payload.message || "something went wrong";
            })
    }
});


export const userStore = configureStore({
    reducer: {
        users: userSlice.reducer
    }
});