import React from "react";
import { ANSWER__RANGE__TEXT, RETRY__BTN } from "../../constants/constants";
import * as S from "./styles";

const Header = ({ handleGameReset }) => {
  return (
    <S.Container>
      <S.Button onClick={() => handleGameReset()}>{RETRY__BTN}</S.Button>
      <S.Text>{ANSWER__RANGE__TEXT}</S.Text>
    </S.Container>
  );
};

export default Header;
