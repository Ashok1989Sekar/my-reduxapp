import { configureStore } from "@reduxjs/toolkit";
import myDataReducer from "./myDataSlice";

export default configureStore({
  reducer: {
    myData: myDataReducer
  }
});
