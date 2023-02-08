import { createSlice } from "@reduxjs/toolkit";



export const  counterSlice = createSlice({
    name:"counter",
    initialState:{
        count: 0,
    },
    reducers: {

       plusOne: (state )=> {state.count += 1},
       minusOne: (state) => {state.count -= 1},
    }
    
})

export const { plusOne, minusOne} = counterSlice.actions;


export default counterSlice.reducer;