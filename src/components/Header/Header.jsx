import React from "react";
import { Container, Button, Text } from "./styles";

const Header = ({ handleGameReset }) => {
  return (
    <Container>
      <Button onClick={() => handleGameReset()}>Retry</Button>
      <Text>(Between 1 and 10)</Text>
    </Container>
  );
};

export default Header;
