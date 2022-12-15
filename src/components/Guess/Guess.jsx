import React from "react";
import { Container, Box, Line, SubText, Title } from "./styles";

const Guess = ({ numCheck, randomNum }) => {
  return (
    <Container>
      <Title>Guess My Number!</Title>
      <Box check={numCheck} className="media__box">
        <SubText>{numCheck ? randomNum : "?"}</SubText>
      </Box>
      <Line />
    </Container>
  );
};

export default Guess;
