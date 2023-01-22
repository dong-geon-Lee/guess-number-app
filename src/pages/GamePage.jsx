import React, { useState } from "react";
import { calcRandomNumber } from "../helpers/helpers";
import { Container } from "./styles";
import Guess from "../components/Guess/Guess";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const GamePage = () => {
  const [number, setNumber] = useState(0);
  const [randomNum, setRandomNum] = useState(calcRandomNumber());
  const [numCheck, setNumCheck] = useState(false);
  const [score, setScore] = useState(10);
  const [highScore, setHighScore] = useState(0);
  const [text, setText] = useState("Start guessing...");

  const handleGameReset = () => {
    setNumber(0);
    setRandomNum(calcRandomNumber());
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
      if (num > randomNum) setText("📈 Too high!");
      if (num < randomNum) setText("📉 Too low!");
      setNumCheck(false);
      setScore(score - 1);
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
