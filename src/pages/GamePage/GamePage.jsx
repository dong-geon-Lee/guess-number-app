import React, { useState } from "react";
import { magicNumber } from "../../helpers/fuctions";
// prettier-ignore
import {Container,Top,Button,Text,Box,Center,Title,SubText,Line,Border,
Bottom,Left,Right,H2,Content,Div,Icon,Label,UpBtn,DownBtn,BtnBox, CheckBtn} from "./Styles";

const GamePage = () => {
  const [number, setNumber] = useState(0);
  const [randomNum, setRandomNum] = useState(magicNumber());
  const [numCheck, setNumCheck] = useState(false);
  const [score, setScore] = useState(10);
  const [highScore, setHighScore] = useState(0);
  const [text, setText] = useState("Start guessing...");

  const handlePlusNumber = (num) => {
    if (num >= 10) return;
    setNumber(num + 1);
  };

  const handleMinusNumber = (num) => {
    if (num <= 0) return;
    setNumber(num - 1);
  };

  const handleGameReset = () => {
    setNumber(0);
    setRandomNum(magicNumber());
    setNumCheck(false);
    setScore(10);
    setHighScore(0);
    setText("Start guessing...");
  };

  const handleCheckNumber = (num) => {
    if (num === randomNum) {
      setNumCheck(true);
      setHighScore(score);
      setText("🎉 Correct Number");
    } else {
      if (num > randomNum) {
        setText("📈 Too high!");
      }

      if (num < randomNum) {
        setText("📉 Too low!");
      }

      setNumCheck(false);
      setScore(score - 1);
    }

    console.log(num, randomNum);
  };

  const playing = score > 0;

  return (
    <Container check={numCheck}>
      <Top>
        <Button onClick={() => handleGameReset()}>Retry</Button>
        <Text>(Between 1 and 10)</Text>
      </Top>

      <Center>
        <Title>Guess My Number!</Title>
        <Box check={numCheck}>
          <SubText>{numCheck ? randomNum : "?"}</SubText>
        </Box>
        <Line />
      </Center>

      <Bottom>
        <Left>
          <Border>{number}</Border>
          <BtnBox>
            <DownBtn
              onClick={() => handleMinusNumber(number)}
              check={numCheck}
              play={playing}
              disabled={numCheck || !playing ? true : false}
            >
              -
            </DownBtn>
            <UpBtn
              onClick={() => handlePlusNumber(number)}
              check={numCheck}
              play={playing}
              disabled={numCheck || !playing ? true : false}
            >
              +
            </UpBtn>
            <CheckBtn
              onClick={() => handleCheckNumber(number)}
              check={numCheck}
              play={playing}
              disabled={numCheck || !playing ? true : false}
            >
              check
            </CheckBtn>
          </BtnBox>
        </Left>

        <Right>
          <H2>{text}</H2>

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
        </Right>
      </Bottom>
    </Container>
  );
};

export default GamePage;
