import React from "react";
import { MEDAL__ICON, SCORE__ICON } from "../../../constants/constants";
import { Container, Text, Content, Div, Icon, Label } from "./styles";

const Contents = ({ text, score, highScore }) => {
  const displayGameStatus = score > 0 ? text : "💥 Game over!";

  return (
    <Container>
      <Text className="media__h2">{displayGameStatus}</Text>
      <Content>
        <Div>
          <Icon>{SCORE__ICON}</Icon>
          <Label>Score:</Label>
          <Text>{score}</Text>
        </Div>
        <Div>
          <Icon>{MEDAL__ICON}</Icon>
          <Label>HighScore:</Label>
          <Text>{highScore}</Text>
        </Div>
      </Content>
    </Container>
  );
};

export default Contents;
