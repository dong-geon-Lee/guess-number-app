import styled from "styled-components";
import { device } from "../../styles/GlobalStyle";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  margin: 1rem auto;

  @media ${device.mobile} {
    margin-top: 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1, 1fr);
    margin: 0rem auto;
  }
`;
