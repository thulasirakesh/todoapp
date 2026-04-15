import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    popup : false,
    tasks: []
}

const toDoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        popupHandleOpen : (state) => {state.popup = true},
        popupHandleClose : (state) => {state.popup = false},
        addTask : (state, action) => {
            state.tasks.push(action.payload)
        },
        toggleTask : (state, action) => {
            const task = state.tasks.find(t => t.id === action.payload)
            if (task) {
                task.status = task.status === "Completed" ? "Active" : "Completed"
            }
        }
    }
})

export const { popupHandleOpen, popupHandleClose, addTask, toggleTask } = toDoSlice.actions
export default toDoSlice.reducer