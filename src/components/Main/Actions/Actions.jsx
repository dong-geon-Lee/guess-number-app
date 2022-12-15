import React from "react";
import { Container, Border, UpBtn, DownBtn, BtnBox, CheckBtn } from "./styles";

const Actions = ({ number, setNumber, numCheck, handleCheckNumber, score }) => {
  const playing = score > 0;

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
          disabled={numCheck || !playing ? true : false}
        >
          -
        </DownBtn>
        <UpBtn
          onClick={() => handlePlusNumber(number)}
          check={numCheck}
          play={playing}
          disabled={numCheck || !playing ? true : false}
        >
          +
        </UpBtn>
        <CheckBtn
          onClick={() => handleCheckNumber(number)}
          check={numCheck}
          play={playing}
          disabled={numCheck || !playing ? true : false}
        >
          check
        </CheckBtn>
      </BtnBox>
    </Container>
  );
};

export default Actions;
