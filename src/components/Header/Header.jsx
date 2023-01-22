import React from "react";
import { ANSWER__RANGE__TEXT, RETRY__BTN } from "../../constants/constants";
import { Container, Button, Text } from "./styles";

const Header = ({ handleGameReset }) => {
  return (
    <Container>
      <Button onClick={() => handleGameReset()}>{RETRY__BTN}</Button>
      <Text>{ANSWER__RANGE__TEXT}</Text>
    </Container>
  );
};

export default Header;
