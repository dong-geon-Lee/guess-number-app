import React from "react";
import { displayGuessNumber } from "../../helpers/helpers";
import { Container, Box, Line, SubText, Title } from "./styles";

const Guess = ({ numCheck, randomNum }) => {
  const displayNumberStatus = displayGuessNumber(numCheck, randomNum);

  return (
    <Container>
      <Title>Guess My Number!</Title>
      <Box check={numCheck} className="media__box">
        <SubText>{displayNumberStatus}</SubText>
      </Box>
      <Line />
    </Container>
  );
};

export default Guess;
