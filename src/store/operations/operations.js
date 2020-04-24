import { createSlice } from "@reduxjs/toolkit";
import { makeRandomNumber, multiply } from "math-game-function";

export const operationSlice = createSlice({
  name: "operations",
  initialState: {
    all: [],
    isEmpty: true,
    time: 0,
    score: 0,
    endGame: false,
  },
  reducers: {
    start: (state, action) => {
      state.isEmpty = false;
      state.endGame = false;
      state.all.push(operation());
    },
    addOperation: (state) => {
      state.all = [operation(), ...state.all];
    },
    startTimer: () => {},
    stopTimer: () => {},
    end: (state) => {
      state.endGame = true;
    },
    responseIsSuccess: (state, action) => {
      state.score++;
      state.all[0].success = true;
    },
  },
  extraReducers: {},
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
} = operationSlice.actions;

// Attribut
export const operationsState = (state) => state.operations;
export const isEndGame = (state) => state.operations.endGame;
export const getFirstResponse = (state) => {
  const size = state.operations.all.length;
  return size !== 0 ? state.operations.all[0].response : undefined;
};

export default operationSlice.reducer;
