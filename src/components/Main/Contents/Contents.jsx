import React from "react";
import { Container, H2, Content, Div, Icon, Label } from "./styles";

const Contents = ({ text, score, highScore }) => {
  return (
    <Container>
      <H2 className="media__h2">{score > 0 ? text : "💥 Game over!"}</H2>
      <Content>
        <Div>
          <Icon>💯</Icon>
          <Label>Score:</Label>
          <H2>{score}</H2>
        </Div>
        <Div>
          <Icon>🥇</Icon>
          <Label>HighScore:</Label>
          <H2>{highScore}</H2>
        </Div>
      </Content>
    </Container>
  );
};

export default Contents;
