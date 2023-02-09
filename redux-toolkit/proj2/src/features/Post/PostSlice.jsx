import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id: '1', title:"Learning Redux Toolkit" , content: " hasdgfkdhjkfguguio hiohglkhwerklghoiwheilghkldhaglkiolkjwerg io", user:"unknown"},
    {id: '2', title:"Applying Redux" , content: " hasdgfkdhjkfguguio hiohglkhwerklghoiwheilghkldhaglkiolkjwerg io", user:"unknown"}
]

const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        addPost(state,action) {
           console.log(state);
            state.push(action.payload);
        }

    }

})

export const {addPost } = postsSlice.actions;

export const selectAllPosts = (state) => (state.posts);

export default postsSlice.reducer;