import React from "react";
import * as S from "./styles";
import * as C from "../../constants/constants";

const Header = ({ handleGameReset }) => {
  return (
    <S.Container>
      <S.Button onClick={() => handleGameReset()}>{C.RETRY__BTN}</S.Button>
      <S.Text>{C.ANSWER__RANGE__TEXT}</S.Text>
    </S.Container>
  );
};

export default Header;
