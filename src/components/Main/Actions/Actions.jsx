import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkBtnStatus } from "../../../utils/utils";
import {
  changeText,
  correctNumber,
  decreaseNumber,
  increaseNumber,
  missNumber,
} from "../../../redux/features/gameSlice";
import * as S from "./styles";
import * as C from "../../../constants/constants";

const Actions = () => {
  const { number, validIsNumber, score, randomNumber } = useSelector(
    (state) => state.game
  );

  const dispatch = useDispatch();
  const playing = score > 0;
  const btnDisabled = checkBtnStatus(validIsNumber, playing);

  const handleMinusNumber = () => {
    if (number <= 1) return;
    dispatch(decreaseNumber(number));
  };

  const handlePlusNumber = () => {
    if (number >= 10) return;
    dispatch(increaseNumber(number));
  };

  const handleCorrectNumber = () => {
    if (number !== randomNumber) {
      if (number > randomNumber) dispatch(changeText(C.HIGH__NUMBER));
      if (number < randomNumber) dispatch(changeText(C.LOW__NUMBER));
      dispatch(missNumber());
      return;
    }

    const correctGame = { highScore: score, text: C.CORRECT__MESSAGE };
    dispatch(correctNumber(correctGame));
  };

  return (
    <S.Container>
      <S.Border>{number}</S.Border>
      <S.BtnBox>
        <S.DownBtn onClick={handleMinusNumber} disabled={btnDisabled}>
          {C.MINUS__BTN}
        </S.DownBtn>
        <S.UpBtn onClick={handlePlusNumber} disabled={btnDisabled}>
          {C.PLUS__BTN}
        </S.UpBtn>
        <S.CheckBtn onClick={handleCorrectNumber} disabled={btnDisabled}>
          {C.CHECK__BTN}
        </S.CheckBtn>
      </S.BtnBox>
    </S.Container>
  );
};

export default Actions;
