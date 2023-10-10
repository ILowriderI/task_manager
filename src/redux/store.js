import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slice/tasksSlice"

export const store = configureStore({
    reducer: {taskReducer},
  })