import React from "react";
import { useSelector } from "react-redux";
import { displayGuessNumber } from "../../utils/utils";
import * as S from "./styles";

const Guess = () => {
  const { validIsNumber, randomNumber } = useSelector((state) => state.game);
  const displayNumberStatus = displayGuessNumber(validIsNumber, randomNumber);

  return (
    <S.Container>
      <S.Title>Guess My Number!</S.Title>
      <S.Box check={validIsNumber} className="media__box">
        <S.SubText>{displayNumberStatus}</S.SubText>
      </S.Box>
      <S.Line />
    </S.Container>
  );
};

export default Guess;
