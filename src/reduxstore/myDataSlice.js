import { createSlice } from "@reduxjs/toolkit";

export const myDataSlice = createSlice({
  name: "myData",
  initialState: {
    username: "",
    password: "",
    email:""
  },
  reducers: {
    changeUsername: (state, action) => {
      state.username = action.payload;
    },
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    changeEmail: (state, action) => {
        state.email = action.payload;
      }
  }
});

export const { changeUsername, changePassword,changeEmail } = myDataSlice.actions;

export const CurrentUsername = (state) => state.myData.username;
export const CurrentPassword = (state) => state.myData.password;
export const CurrentEmail = (state) => state.myData.email;

export default myDataSlice.reducer;
