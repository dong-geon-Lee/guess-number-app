import React from "react";
import { Container } from "./styles";
import Actions from "./Actions/Actions";
import Contents from "./Contents/Contents";

const Main = ({
  number,
  setNumber,
  numCheck,
  score,
  text,
  highScore,
  handleCheckNumber,
}) => {
  return (
    <Container>
      <Actions
        number={number}
        setNumber={setNumber}
        handleCheckNumber={handleCheckNumber}
        numCheck={numCheck}
        score={score}
      />

      <Contents text={text} score={score} highScore={highScore} />
    </Container>
  );
};

export default Main;
