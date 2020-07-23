import { createSlice } from "@reduxjs/toolkit";
import { makeRandomNumber, multiply } from "math-game-function";

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

export const {
  start,
  addOperation,
  end,
  responseIsSuccess,
  responseIsFail,
} = operationSlice.actions;

export const operationsState = (state) => state.operations;
export const isEndGame = (state) => state.operations.endGame;
export const getFirstResponse = (state) => {
  const size = state.operations.all.length;
  return size !== 0 ? state.operations.all[0].response : undefined;
};

export default operationSlice.reducer;
