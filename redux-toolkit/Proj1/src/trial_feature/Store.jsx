import { configureStore } from "@reduxjs/toolkit";
import  countReducer from "./CountSlice"


export const Trialstore = configureStore({
    reducer:{
     counter: countReducer,
    }
})