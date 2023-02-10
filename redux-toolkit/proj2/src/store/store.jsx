import { configureStore } from "@reduxjs/toolkit";
import postsReducer from  "../features/Post/PostSlice"
import usersReducer from '../features/Users/userSlice'
export const store = configureStore({
    reducer:{
        posts: postsReducer,
        users: usersReducer,
    }
})

