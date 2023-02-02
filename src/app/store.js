import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
// single place for managing state for the whole app
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
