import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import Guess from "../components/Guess/Guess";
import Main from "../components/Main/Main";
import * as S from "./styles";

const GamePage = () => {
  const { validIsNumber } = useSelector((state) => state.game);

  return (
    <S.Container check={validIsNumber}>
      <Header />
      <Guess />
      <Main />
    </S.Container>
  );
};

export default GamePage;
