import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = 'http://jsonplaceholder.typicode.com/posts'

const initialState = {
 posts: [],
 status: 'idle',
 error: null,
}

export const  fetchPosts = createAsyncThunk('posts/fetchPosts',async() => {
 
 try{
    const response = await axios.get(POSTS_URL);
    return response.data; 
 }
 catch(err) {
   return err.message;
 }

})



const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        addPost(state,action) {
            console.log(state.posts);
            state.posts.push(action.payload);
        },
        postUpdated(state,action) {
            const {id , title , content , user} = action.payload
            const existingPost = state.posts.find(post => post.id == id)
            if(existingPost){
                existingPost.title = title;
                existingPost.content = content;
            }
        }
     
    },
    // extraReducers(builder){
    //     builder
    //     .addCase(fetchPosts.pending, (state, action) => {
    //         state.status = 'loading'
    //     })
    //     .addCase(fetchPosts.fulfilled, (state, action) => {
    //         state.status = 'succeeded'
    //         // Adding date and reactions
    //         let min = 1;
    //         const loadedPosts = action.payload.map(post => {
    //             // post.date = sub(new Date(), { minutes: min++ }).toISOString();
    //             // post.reactions = {
    //             //     thumbsUp: 0,
    //             //     wow: 0,
    //             //     heart: 0,
    //             //     rocket: 0,
    //             //     coffee: 0
    //             // }
    //             return post;
    //         });

    //         // Add any fetched posts to the array
    //         state.posts = state.posts.concat(loadedPosts)
    //     })
    //     .addCase(fetchPosts.rejected, (state, action) => {
    //         state.status = 'failed'
    //         state.error = action.error.message
    //     })
    // }

})

export const {addPost,postUpdated } = postsSlice.actions;

export const selectAllPosts = (state) => (state.posts.posts);
export const getPostStatus = (state) => (state.posts.status);
export const getPostError = (state) => (state.posts.error);

export default postsSlice.reducer;