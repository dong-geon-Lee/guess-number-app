import React from "react";
import { displayGuessNumber } from "../../helpers/helpers";
import * as S from "./styles";

const Guess = ({ numCheck, randomNum }) => {
  const displayNumberStatus = displayGuessNumber(numCheck, randomNum);

  return (
    <S.Container>
      <S.Title>Guess My Number!</S.Title>
      <S.Box check={numCheck} className="media__box">
        <S.SubText>{displayNumberStatus}</S.SubText>
      </S.Box>
      <S.Line />
    </S.Container>
  );
};

export default Guess;
