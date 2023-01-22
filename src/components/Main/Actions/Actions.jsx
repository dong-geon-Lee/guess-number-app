import React from "react";
import { Container, Border, UpBtn, DownBtn, BtnBox, CheckBtn } from "./styles";
import { checkBtnStatus } from "../../../helper/calculate";
import {
  CHECK__BTN,
  MINUS__BTN,
  PLUS__BTN,
} from "../../../constants/constants";

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
    <Container>
      <Border>{number}</Border>
      <BtnBox>
        <DownBtn
          onClick={() => handleMinusNumber(number)}
          check={numCheck}
          play={playing}
          disabled={btnDisabled}
        >
          {MINUS__BTN}
        </DownBtn>
        <UpBtn
          onClick={() => handlePlusNumber(number)}
          check={numCheck}
          play={playing}
          disabled={btnDisabled}
        >
          {PLUS__BTN}
        </UpBtn>
        <CheckBtn
          onClick={() => handleCheckNumber(number)}
          check={numCheck}
          play={playing}
          disabled={btnDisabled}
        >
          {CHECK__BTN}
        </CheckBtn>
      </BtnBox>
    </Container>
  );
};

export default Actions;
