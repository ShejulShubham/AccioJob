import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  posts: [],
};

const API = "https://jsonplaceholder.typicode.com/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const result = await fetch(API);
    return await result.json();
  } catch (error) {
    console.log("ERROR: ", error);
    return error;
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.posts = [];
      state.loading = false;
      state.error = action.payload.message;
    });
  },
});

export default postSlice.reducer;
