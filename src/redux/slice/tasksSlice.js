import { createSlice } from "@reduxjs/toolkit";
import { getDataStorage, saveDataStorage } from "../../util/storage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: getDataStorage("task_data") || [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, title, description, completed } = action.payload;
      const existingTask = state.find((task) => task.id === id);

      if (existingTask) {
        existingTask.title = title;
        existingTask.description = description;
        existingTask.completed = completed;
      } else {
        const newTask = {
          id: Date.now(),
          title,
          description,
          completed,
        };
        state.push(newTask);
        saveDataStorage([...state], "task_data");
      }
    },
    deleteTask: (state, action) => {
      const id = action.payload;
      const index = state.findIndex((task) => task.id === id);

      if (index !== -1) {
        state.splice(index, 1);
        saveDataStorage(state, "task_data");
      }
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
