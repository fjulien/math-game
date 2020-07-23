import { configureStore } from "@reduxjs/toolkit";
import operationSlice from "./operations";
import userSlice from "./user";
import timerSlice from "./timer";

export default configureStore({
  reducer: {
    operations: operationSlice,
    timer: timerSlice,
    user: userSlice,
  },
});
