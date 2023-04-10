import { createSlice } from "@reduxjs/toolkit";
import { calcRandomNumber } from "../../utils/utils";
import { START__TEXT } from "../../constants/constants";

const initialState = {
  number: 0,
  randomNumber: calcRandomNumber(),
  validIsNumber: false,
  score: 10,
  highScore: 0,
  text: START__TEXT,
};

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    increaseNumber: (state) => {
      state.number += 1;
    },
    decreaseNumber: (state) => {
      state.number -= 1;
    },
    correctNumber: (state, action) => {
      const { highScore, text } = action.payload;
      state.validIsNumber = true;
      state.highScore = highScore;
      state.text = text;
    },
    changeText: (state, action) => {
      state.text = action.payload;
    },
    missNumber: (state) => {
      state.score -= 1;
    },
    gameReset: (state) => {
      state.number = 0;
      state.randomNumber = calcRandomNumber();
      state.validIsNumber = false;
      state.score = 10;
      state.highScore = 0;
      state.text = START__TEXT;
    },
  },
});

export const {
  increaseNumber,
  decreaseNumber,
  correctNumber,
  changeText,
  missNumber,
  gameReset,
} = gameSlice.actions;

export default gameSlice.reducer;
