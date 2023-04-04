import React from "react";
import { checkBtnStatus } from "../../../helpers/helpers";
import * as S from "./styles";
import * as C from "../../../constants/constants";

const Actions = ({ number, setNumber, numCheck, handleCheckNumber, score }) => {
  const playing = score > 0;
  const btnDisabled = checkBtnStatus(numCheck, playing);

  const handleMinusNumber = (num) => {
    if (num <= 0) return;
    setNumber((prevState) => prevState - 1);
  };

  const handlePlusNumber = (num) => {
    if (num >= 10) return;
    setNumber((prevState) => prevState + 1);
  };

  return (
    <S.Container>
      <S.Border>{number}</S.Border>
      <S.BtnBox>
        <S.DownBtn
          onClick={() => handleMinusNumber(number)}
          check={numCheck}
          play={playing}
          disabled={btnDisabled}
        >
          {C.MINUS__BTN}
        </S.DownBtn>
        <S.UpBtn
          onClick={() => handlePlusNumber(number)}
          check={numCheck}
          play={playing}
          disabled={btnDisabled}
        >
          {C.PLUS__BTN}
        </S.UpBtn>
        <S.CheckBtn
          onClick={() => handleCheckNumber(number)}
          check={numCheck}
          play={playing}
          disabled={btnDisabled}
        >
          {C.CHECK__BTN}
        </S.CheckBtn>
      </S.BtnBox>
    </S.Container>
  );
};

export default Actions;
