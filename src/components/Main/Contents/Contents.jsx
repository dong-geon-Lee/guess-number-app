import React from "react";
import * as S from "./styles";
import * as C from "../../../constants/constants";
import { useSelector } from "react-redux";

const Contents = () => {
  const { text, score, highScore } = useSelector((state) => state.game);
  const displayGameStatus = score > 0 ? text : C.GAME__OVER;

  return (
    <S.Container>
      <S.Text className="media__h2">{displayGameStatus}</S.Text>
      <S.Content>
        <S.Div>
          <S.Icon>{C.SCORE__ICON}</S.Icon>
          <S.Label>Score:</S.Label>
          <S.Text>{score}</S.Text>
        </S.Div>
        <S.Div>
          <S.Icon>{C.MEDAL__ICON}</S.Icon>
          <S.Label>HighScore:</S.Label>
          <S.Text>{highScore}</S.Text>
        </S.Div>
      </S.Content>
    </S.Container>
  );
};

export default Contents;
