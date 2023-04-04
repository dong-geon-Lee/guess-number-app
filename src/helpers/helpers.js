import * as C from "../constants/constants";

export const calcRandomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
};

export const checkBtnStatus = (numCheck, playing) => {
  return numCheck || !playing ? true : false;
};

export const displayGuessNumber = (numCheck, randomNum) => {
  return numCheck ? randomNum : C.QUESTION__MARK;
};
