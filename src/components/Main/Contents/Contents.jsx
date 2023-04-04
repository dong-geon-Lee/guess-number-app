import React from "react";
import { MEDAL__ICON, SCORE__ICON } from "../../../constants/constants";
import * as S from "./styles";

const Contents = ({ text, score, highScore }) => {
  const displayGameStatus = score > 0 ? text : "💥 Game over!";

  return (
    <S.Container>
      <S.Text className="media__h2">{displayGameStatus}</S.Text>
      <S.Content>
        <S.Div>
          <S.Icon>{SCORE__ICON}</S.Icon>
          <S.Label>Score:</S.Label>
          <S.Text>{score}</S.Text>
        </S.Div>
        <S.Div>
          <S.Icon>{MEDAL__ICON}</S.Icon>
          <S.Label>HighScore:</S.Label>
          <S.Text>{highScore}</S.Text>
        </S.Div>
      </S.Content>
    </S.Container>
  );
};

export default Contents;
