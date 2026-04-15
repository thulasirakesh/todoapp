import { configureStore } from "@reduxjs/toolkit";
import todReducer from './feature/todoSlice'

export const store = configureStore({
    reducer: {
        todo : todReducer
    }
}) 
