import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
  ToggleStatusOfSideMenuBar: true,
  TaskList: [
    {
      id: 1,
      content: "Complete Assingment1",
      completed: false,
      priority: "low", // low, mid
      type_of_work: "outdoor", // indoor
    },
    {
      id: 2,
      content: "Complete Assingment2",
      completed: true,
      priority: "high", // low, mid
      type_of_work: "outdoor", // indoor
    },
    {
      id: 3,
      content: "Complete Assingment3",
      completed: true,
      priority: "low", // low, mid
      type_of_work: "outdoor", // indoor
    },
    {
      id: 4,
      content: "Complete Assingment4",
      completed: false,
      priority: "high", // low, mid
      type_of_work: "outdoor", // indoor
    },
  ],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isUserLoggedIn: (state, action) => {
      state.isUserLoggedIn = true;
    },
    LogoutUser: (state, action) => {
      state.isUserLoggedIn = false;
    },
    SetTogglingStatus: (state, action) => {
      state.ToggleStatusOfSideMenuBar = action.payload;
    },
    AddTask: (state, action) => {
      state.TaskList.push(action.payload);
      localStorage.setItem("TaskList", JSON.stringify(state.TaskList));
    },
    UpdateTaskList: (state, action) => {
      state.TaskList = action.payload;
      localStorage.setItem("TaskList", JSON.stringify(state.TaskList));
    },
  },
});

export const {
  SetTogglingStatus,
  AddTask,
  UpdateTaskList,
  isUserLoggedIn,
  LogoutUser,
} = authSlice.actions;
export default authSlice.reducer;
