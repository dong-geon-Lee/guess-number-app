import React, { useState } from "react";
import { calcRandomNumber } from "../helpers/helpers";
import Guess from "../components/Guess/Guess";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import * as S from "./styles";
import * as C from "../constants/constants";

const GamePage = () => {
  const [number, setNumber] = useState(0);
  const [randomNum, setRandomNum] = useState(calcRandomNumber());
  const [numCheck, setNumCheck] = useState(false);
  const [score, setScore] = useState(10);
  const [highScore, setHighScore] = useState(0);
  const [text, setText] = useState(C.START__TEXT);

  const handleGameReset = () => {
    setNumber(0);
    setRandomNum(calcRandomNumber());
    setNumCheck(false);
    setScore(10);
    setHighScore(0);
    setText(C.START__TEXT);
  };

  const handleCheckNumber = (num) => {
    if (num === randomNum) {
      setNumCheck(true);
      setHighScore(score);
      setText(C.CORRECT__MESSAGE);
    } else {
      if (num > randomNum) setText(C.HIGH__NUMBER);
      if (num < randomNum) setText(C.LOW__NUMBER);
      setScore((prevState) => prevState - 1);
    }
  };

  return (
    <S.Container check={numCheck}>
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
    </S.Container>
  );
};

export default GamePage;
