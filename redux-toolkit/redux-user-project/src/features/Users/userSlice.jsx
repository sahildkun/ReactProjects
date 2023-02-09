import { createSlice } from "@reduxjs/toolkit";

const initialState = ["jjhjh",

];
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser: (state,action) => {
           state.push(action.payload)
         
        },
        removeUser: (state,action) => {
          state.splice(action.payload,1)
        },
        deleteUser: (state,action) => {
           state.length = 0;
        }
    }
    

})

export const {addUser,deleteUser,removeUser} = userSlice.actions;
export const selectAllUsers = (state) => (state.users); 
export default userSlice.reducer;