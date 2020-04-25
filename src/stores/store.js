import { configureStore } from "@reduxjs/toolkit";
import operationSlice from "./operations";
import timerSlice from "./timer";

export default configureStore({
  reducer: {
    operations: operationSlice,
    timer: timerSlice,
  },
});
