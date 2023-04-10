import * as C from "../constants/constants";

export const calcRandomNumber = () => {
  return Math.floor(Math.random() * 10 + 1);
};

export const checkBtnStatus = (validIsNumber, playing) => {
  return validIsNumber || !playing ? true : false;
};

export const displayGuessNumber = (validIsNumber, randomNumber) => {
  return validIsNumber ? randomNumber : C.QUESTION__MARK;
};
