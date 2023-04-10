import React from "react";
import Actions from "./Actions/Actions";
import Contents from "./Contents/Contents";
import * as S from "./styles";

const Main = () => {
  return (
    <S.Container>
      <Actions />
      <Contents />
    </S.Container>
  );
};

export default Main;
