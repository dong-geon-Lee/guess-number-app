import React from "react";
import { Container, Text, Content, Div, Icon, Label } from "./styles";

const Contents = ({ text, score, highScore }) => {
  return (
    <Container>
      <Text className="media__h2">{score > 0 ? text : "💥 Game over!"}</Text>
      <Content>
        <Div>
          <Icon>💯</Icon>
          <Label>Score:</Label>
          <Text>{score}</Text>
        </Div>
        <Div>
          <Icon>🥇</Icon>
          <Label>HighScore:</Label>
          <Text>{highScore}</Text>
        </Div>
      </Content>
    </Container>
  );
};

export default Contents;
