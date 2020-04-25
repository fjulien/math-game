import { createSlice } from "@reduxjs/toolkit";

const TIME_GAME = 30;

export const timerSlice = createSlice({
  name: "timer",
  initialState: {
    time: TIME_GAME,
    interval: undefined,
    endGame: false,
  },
  reducers: {
    decremente: (state) => {
      if (state.time > 0) {
        state.time--;
      } else {
        state.endGame = true;
        clearInterval(state.interval);
      }
    },
    initInternval: (state, action) => {
      state.interval = action.payload;
    },
    initTime: (state) => {
      state.endGame = false;
      state.time = TIME_GAME;
    },
  },
  extraReducers: {},
});

// Methode
export const { decremente, initInternval, initTime } = timerSlice.actions;

// Attribut
export const timeState = (state) => state.timer.time;
export const isEndGame = (state) => state.timer.endGame;

export default timerSlice.reducer;
