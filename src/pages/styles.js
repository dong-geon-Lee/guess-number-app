import styled from "styled-components";
import { device } from "../styles/GlobalStyle";

export const Container = styled.div`
  background-color: ${(props) => (props.check ? "#60b347" : "#222")};
  width: 100vw;
  height: 100vh;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
