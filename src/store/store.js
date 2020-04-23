import { configureStore } from "@reduxjs/toolkit";
import operationSlice from "./operations/operations";
import { thunk } from "thunk";

export default configureStore({
  reducer: {
    operations: operationSlice,
    middleware: [thunk],
  },
});
