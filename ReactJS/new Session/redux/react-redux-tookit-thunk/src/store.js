import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./components/Users/userSlice";
import postReducers from "./components/Posts/postSlice";


const store = configureStore({
    reducer: {
        users: userReducers,
        posts: postReducers,
    }
});

export default store;