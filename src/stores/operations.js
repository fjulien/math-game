import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { makeRandomNumber, multiply } from "math-game-function";
import Axios from "axios";

export const wait = createAsyncThunk(
  "users/fetchByIdStatus",
  async (pseudo) => {
    console.log(pseudo);
    const response = await startApi(pseudo);
    return response.data;
  }
);

export const operationSlice = createSlice({
  name: "operations",
  initialState: {
    all: [],
    isEmpty: true,
    score: 0,
  },
  reducers: {
    start: (state) => {
      state.isEmpty = false;
      state.score = 0;
      state.all = [operation()];
    },
    addOperation: (state) => {
      state.all = [operation(), ...state.all];
    },
    responseIsSuccess: (state) => {
      state.score++;
      state.all[0].success = true;
    },
    responseIsFail: (state) => {
      state.score--;
    },
  },
  // extraReducers: {
  //   // Add reducers for additional action types here, and handle loading state as needed
  //   [start.fulfilled]: (state, action) => {
  //     // Add user to the state array
  //     console.log(action.payload);
  //   },
  // },
});

export function operation() {
  const nb1 = makeRandomNumber();
  const nb2 = makeRandomNumber();
  return {
    success: false,
    nb1: nb1,
    nb2: nb2,
    response: multiply(nb1, nb2),
    text: `${nb1} x ${nb2} = `,
  };
}
// Methode
export const {
  start,
  addOperation,
  end,
  responseIsSuccess,
  responseIsFail,
} = operationSlice.actions;

// Attribut
export const operationsState = (state) => state.operations;
export const isEndGame = (state) => state.operations.endGame;
export const getFirstResponse = (state) => {
  const size = state.operations.all.length;
  return size !== 0 ? state.operations.all[0].response : undefined;
};

export const startApi = async (pseudo) => {
  const { data } = await Axios.post("/api/score", { pseudo });
  console.log(pseudo);
  console.log("la");
  return data;
};

export default operationSlice.reducer;
