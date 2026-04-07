import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popup : false
}

const toDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        popupHandleOpen : (state) => {state.popup = true},
        popupHandleClose : (state) => {state.popup = false}
    }
})

export const { popupHandleOpen, popupHandleClose } = toDoSlice.actions
export default toDoSlice.reducer