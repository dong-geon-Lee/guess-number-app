import React from "react";
import { useDispatch } from "react-redux";
import { gameReset } from "../../reduxToolkit/features/gameSlice";
import * as S from "./styles";
import * as C from "../../constants/constants";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Button onClick={() => dispatch(gameReset())}>{C.RETRY__BTN}</S.Button>
      <S.Text>{C.ANSWER__RANGE__TEXT}</S.Text>
    </S.Container>
  );
};

export default Header;
