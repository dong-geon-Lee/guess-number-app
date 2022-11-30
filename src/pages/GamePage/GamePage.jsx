import React from "react";
// prettier-ignore
import {Container,Top,Button,Text,Box,Center,Title,SubText,Line,
Bottom,Left,Input,Right,H2,Content,Div,Icon,Label} from "./Styles";

const GamePage = () => {
  return (
    <Container>
      <Top>
        <Button>Again!</Button>
        <Text>(Between 1 and 20)</Text>
      </Top>

      <Center>
        <Title>Guess My Number!</Title>
        <Box>
          <SubText>?</SubText>
        </Box>
        <Line />
      </Center>

      <Bottom>
        <Left>
          <Input type="number" min="0"></Input>
          <Button>Check!</Button>
        </Left>

        <Right>
          <H2>Start guessing...</H2>
          <Content>
            <Div>
              <Icon>💯</Icon>
              <Label>Score:</Label>
              <H2>20</H2>
            </Div>
            <Div>
              <Icon>🥇</Icon>
              <Label>HighScore:</Label>
              <H2>0</H2>
            </Div>
          </Content>
        </Right>
      </Bottom>
    </Container>
  );
};

export default GamePage;
