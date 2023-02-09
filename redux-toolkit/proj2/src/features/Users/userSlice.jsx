import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 {id: '0', name:"Monkey D Luffy "},
 {id: '1', name:"Rorona Zoro "},
 {id: '2', name:"Vinsmoke Sanji"}
]


const userSlice = createSlice({
    name:"users",
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) =>state.users;
 export default  userSlice.reducer;