import React, { useState } from "react";
import { calcRandomNumber } from "../helpers/helpers";
import { Container } from "./styles";
import { CORRECT__MESSAGE, START__TEXT } from "../constants/constants";
import Guess from "../components/Guess/Guess";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const GamePage = () => {
  const [number, setNumber] = useState(0);
  const [randomNum, setRandomNum] = useState(calcRandomNumber());
  const [numCheck, setNumCheck] = useState(false);
  const [score, setScore] = useState(10);
  const [highScore, setHighScore] = useState(0);
  const [text, setText] = useState(START__TEXT);

  const handleGameReset = () => {
    setNumber(0);
    setRandomNum(calcRandomNumber());
    setNumCheck(false);
    setScore(10);
    setHighScore(0);
    setText(START__TEXT);
  };

  const handleCheckNumber = (num) => {
    if (num === randomNum) {
      setNumCheck(true);
      setHighScore(score);
      setText(CORRECT__MESSAGE);
    } else {
      if (num > randomNum) setText("📈 Too high!");
      if (num < randomNum) setText("📉 Too low!");
      setScore((prevState) => prevState - 1);
    }
  };

  return (
    <Container check={numCheck}>
      <Header handleGameReset={handleGameReset} />
      <Guess numCheck={numCheck} randomNum={randomNum} />
      <Main
        number={number}
        numCheck={numCheck}
        score={score}
        text={text}
        highScore={highScore}
        setNumber={setNumber}
        handleCheckNumber={handleCheckNumber}
      />
    </Container>
  );
};

export default GamePage;
